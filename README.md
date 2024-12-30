# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Job Board : 

<ul>
    <li>The page should show 6 jobs on initial load with a button to load more postings.</li>
    <li>Clicking on the "Load more" button will load the next page of 6 postings.</li>
    <li>The button does not appear if there aren't any more postings to load.</li>
    <li>If there's a url field returned for the job details, make the job title a link that opens the job details page in a new window when clicked.</li>
    <li>
The timestamp can be formatted in any way you like.</li>
</ul></br>

# API:
Hacker News has a public API to fetch jobs by Y Combinator companies. There's no single API that fetches a list of jobs together with the data, so you will have to make separate requests to fetch the necessary data and combine them to be displayed.

## Job Stories
Fetches a list of job posting IDs.

URL: https://hacker-news.firebaseio.com/v0/jobstories.json<br>
HTTP Method: GET<br>
Content Type: json<br>
## `Sample response:`

[35908337, 35904973, 35900922, 35893439, 35890114, 35880345, ...]

## Job Details
Fetches job posting details given its ID.

URL: https://hacker-news.firebaseio.com/v0/item/{id}.json<br>
HTTP Method: GET<br>
Content Type: json<br>

## `Sample response` for : 
https://hacker-news.firebaseio.com/v0/item/35908337.json:

{
  "by": "jamilbk",<br>
  "id": 35908337,<br>
  "score": 1,<br>
  "time": 1683838872,<br>
  "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",<br>
  "type": "job",<br>
  "url": "https://www.ycombinator.com/companies/firezone/jobs"<br>
}

## PROJECT QUESTION FROM :<br>
Source : https://www.greatfrontend.com/