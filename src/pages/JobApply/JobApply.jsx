import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const {id} = useParams();
  
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(id, user)
  const handleSubmitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdIn = form.linkdin.value;
    const resume = form.resume.value;
    const github = form.github.value;
    // console.log({github,linkdIn,resume})

    const jobApplication = {
      job_id: id,
      applcant_email: user?.email,
      linkdIn,
      resume,
      github,
    };

    // application add to database
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/myApplications")
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">
            Apply Job For Good Luck !
          </h1>
          <form onSubmit={handleSubmitJobApplication} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linkdin URL : </span>
              </label>
              <input
                type="url"
                name="linkdin"
                placeholder="Enter Linkdin Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github URL : </span>
              </label>
              <input
                type="url"
                placeholder="Enter your github url"
                name="github"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL : </span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="Enter your resume url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
