import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const { _id, title, applicationDeadline, company } = job;

  return (
    <div className="m-4">
      <h1>Job Details For : {title} </h1>
      <p>apply for : {company}</p>
      <p>Deadline : {applicationDeadline}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
