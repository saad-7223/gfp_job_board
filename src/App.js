function App() {
  return (
    <div class="h-[768px] w-[1440px] flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px]">
      <div class="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
        <div class="flex items-center gap-4 self-stretch">
          <div class="w-12 h-12">
            <img class="w-12 h-12 object-cover" src={require("./images/profile.png")} alt="profile"></img>
          </div>
          <div class="flex flex-col gap-px grow">
            <span class="font-semibold text-lg text-justify text-neutral-900">Sarah Dole</span>
            <span class="font-normal text-sm text-left text-neutral-600">@sarahdole</span>
          </div>
        </div>
        <span class="font-normal text-base text-left text-neutral-600">I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</span>
      </div>
    </div>
  );
}

export default App;
