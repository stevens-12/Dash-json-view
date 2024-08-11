/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types';
import { TiAttachment } from "react-icons/ti";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-6 bg-white rounded-xl space-y-5 cursor-pointer">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
        <p className="text-sm text-gray-500">{project.type}</p>
      </div>
      <p>
        <span className="text-xs p-2 rounded bg-gray-100">{project.date}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="w-[40%] bg-indigo-500 rounded-full h-2"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative">
          {project.images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt=""
              className={`w-8 h-8 rounded-full border-4 border-white ${index > 0 ? `absolute top-0 left-${index * 4}` : ''}`}
            />
          ))}
        </div>
        <p className="flex space-x-1 items-center text-gray-400">
          <TiAttachment /> <span>{project.files} files</span>
        </p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    files: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
};

export default ProjectCard;
