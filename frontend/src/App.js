import React, { useState, useEffect } from "react";

function App() {
  // Estado para guardar la info del proyecto
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    fetch("https://fullstack-app-example-production.up.railway.app/api/project")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjectData(data); // ✅ aquí va setProjectData
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <h1>Project Information</h1>

      {projectData ? (
        <div>
          <h2>{projectData.projectName}</h2>
          <p>
            <strong>Student:</strong> {projectData.studentName}
          </p>
          <p>
            <strong>Description:</strong> {projectData.projectDescription}
          </p>

          <a
            href={projectData.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default App;

