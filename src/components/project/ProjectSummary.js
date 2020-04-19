import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="project-list section">
      <div className="project-summary card z-depth-0">
        <div className="class-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>posted by abcedef</p>
          <p className="grey-text">sunday 2nd march, 02.20AM</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
