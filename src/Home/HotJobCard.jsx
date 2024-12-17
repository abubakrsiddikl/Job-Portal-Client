import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    description,
    location,
    requirements,
    salaryRange,
    _id
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-full shadow-xl">
        <div className="flex gap-2">
          <figure>
            <img className="w-14" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill, idx) => (
              <p key={idx} className="border rounded-md text-center px-2 hover:text-blue-300 btn">
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end items-center mt-4">
            <p>
              Salary : $ {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
