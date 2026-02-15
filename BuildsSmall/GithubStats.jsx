import { GitHubCalendar } from "react-github-calendar";
import "../src/App.css";

function GithubStats() {
  return (
    <div className="bg-[#0d1117]/20 p-2 rounded-xl relative z-20">
      <h2 className="text-white text-xl mb-4">
        GitHub Activity
      </h2>
    
        <div className="react-github-calendar">
        <GitHubCalendar
          username="Suman0777"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          colorScheme="dark"
        />
      </div>
    </div>
  );
}

export default GithubStats;
