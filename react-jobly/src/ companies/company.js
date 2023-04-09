import React, {useParams, useState, useEffect} from "react";
import LoadingSpinner from "../hooks/LoadingSpinner";
import JoblyApi from "../api";
import JobCardList from "../jobs/jobCardList";

function CompanyDetail(){
    //render a page with details of the company
    //let's make a handle
    const {handle} = useParams();
    console.log("Company details", "handle=", handle);
    const [company, setCompany] = useState(null);
    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
          setCompany(await JoblyApi.getCompany(handle));
        }
    
        getCompany();
      }, [handle]);

    //if no companies found, return an error page
    if (!company) return <LoadingSpinner />
    return(
        <div className="CompanyDetails">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetail;