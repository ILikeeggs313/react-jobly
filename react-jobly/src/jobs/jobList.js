import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import SearchForm from "../hooks/SearchForm";
import JobCardList from "./jobCardList";
import LoadingSpinner from "../hooks/LoadingSpinner";

function JobList(title){
    //similar to companies, we render a list of jobs
    //let's get the state, useEffect and setJobs
    const [jobs, setJobs] = useState(null);
    useEffect(function getAllJobsOnMount() {
        console.debug("JobList useEffect getAllJobsOnMount");
        searchJobs();
    }, []);
    async function searchJobs(){
        const jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }
    //similarly, if no jobs exist, show an error page
    if(!jobs) return <LoadingSpinner />

    return(
        <div className="JobList">
            <SearchForm searchFor = {searchJobs} />
            {/* //loop over the jobs */}
            {jobs?.length 
            ? <JobCardList /> 
            : (<p> Error: no jobs found </p>)
            }
        </div>
    )
}

export default JobList;