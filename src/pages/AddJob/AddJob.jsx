import React from "react";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData)
    const { min, max, currency, ...newJob } = initialData;
     newJob.salaryRange = {min,max,currency};
     console.log(newJob)
  };
  return (
    <div>
      <h1 className="text-3xl">Post a new Job</h1>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter Job title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter Job Location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select className="select select-ghost select-bordered w-full max-w-xs">
            <option disabled selected>
              Pick a Job Type
            </option>
            <option>Full-Time</option>
            <option>Intern</option>
            <option>Part-Time</option>
          </select>
        </div>
        {/* Job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select className="select select-ghost select-bordered w-full max-w-xs">
            <option disabled selected>
              Pick a Job Field
            </option>
            <option>Engeneearig</option>
            <option>Finance</option>
            <option>Software</option>
          </select>
        </div>
        {/* Job Salary and currency*/}
        <p className="mt-3">Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* min salary */}
          <div className="form-control">
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          {/* max salary */}
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          {/* Currency */}
          <div className="form-control">
            <select
              name="currency"
              className="select select-ghost select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Pick a Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INA</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>
        {/* company name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Each requirements put in a new line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* Job responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write each responsibilities put in a new line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* hr name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="HR_Name"
            placeholder="HR Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* hr email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            name="HR_Email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* hr company logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="comapny logo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Post</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
