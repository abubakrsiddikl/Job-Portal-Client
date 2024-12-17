import React, { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { CgKey } from "react-icons/cg";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
//   console.log(jobs)
  return (
    <div>
      <h1>My Posted Job : {jobs.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.jobTitle}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.description}
                  </span>
                </td>
                <td>{job.applicationDeadline}</td>
                <td>{job?.applicationCount}</td>
                <th>
                  <Link to={`/viewApplication/${job._id}`} className="btn btn-ghost btn-xs">View Applications</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
