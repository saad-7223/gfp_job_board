import { useState, useEffect } from "react";
import "./styles/style.css"

export default function App() {
  const [data, setData] = useState(null);
  const [jobDetails, setJobDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  function formatDateTime(timestamp) {
    const date = new Date(timestamp * 1000);

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return {
      date: formattedDate,
      time: formattedTime,
    };
  }

  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);

        // Only fetch first page of job details initially
        const endIndex = Math.min(jobsPerPage, result.length);
        const firstPageIds = result.slice(0, endIndex);

        const jobDetailsPromises = firstPageIds.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (res) => res.json(),
          ),
        );

        const jobDetailsResults = await Promise.all(jobDetailsPromises);
        const jobDetailsMap = {};
        jobDetailsResults.forEach((job) => {
          jobDetailsMap[job.id] = job;
        });
        setJobDetails(jobDetailsMap);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobIds();
  }, []);

  const loadMoreJobs = async () => {
    const startIndex = currentPage * jobsPerPage;
    const endIndex = Math.min(startIndex + jobsPerPage, data.length);
    const nextPageIds = data.slice(startIndex, endIndex);

    try {
      const jobDetailsPromises = nextPageIds.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json(),
        ),
      );

      const jobDetailsResults = await Promise.all(jobDetailsPromises);
      const newJobDetailsMap = { ...jobDetails };
      jobDetailsResults.forEach((job) => {
        newJobDetailsMap[job.id] = job;
      });

      setJobDetails(newJobDetailsMap);
      setCurrentPage((prev) => prev + 1);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div class="loading">Loading...</div>;
  if (error) return <div class="error">Error: {error} :(</div>;
  if (!data) return "No data";

  const currentJobs = data.slice(0, currentPage * jobsPerPage);
  const hasMore = currentPage * jobsPerPage < data.length;

  return (
    <div class="box">
      <h2 class="main-heading">Hacker News Jobs Board</h2>
      <div class="container">
        {currentJobs.map((jobId) => {
          const job = jobDetails[jobId];
          if (!job) return null;

          const datetime = formatDateTime(job.time);

          return (
            <div class="job-card" key={jobId}>
              <h4 class="job-title">{job.title}</h4>
              <div class="card-detail">
                <p>By {job.by}</p>
                <span>•</span>
                <p>{datetime.date},</p>
                <p>{datetime.time}</p>
              </div>
            </div>
          );
        })}
        <div>
          {hasMore &&  <button class="load-btn" onClick={loadMoreJobs}>Load more jobs</button>}
        </div>
      </div>  
    </div>
  );
}
