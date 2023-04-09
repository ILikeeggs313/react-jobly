import React from "react";
import JobCard from "./jobCard";

function JobCardList({jobs}){
    //rendering a jobCardList
    console.debug("JobCardList", "jobs=", jobs);
    return (
        <div className="JobCardList">
          {jobs?.map(job => (
              <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  salary={job.salary}
                  equity={job.equity}
                  companyName={job.companyName}
              />
          ))}
        </div>
    );
}

export default JobCardList;