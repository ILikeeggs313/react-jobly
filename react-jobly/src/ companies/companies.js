import React, {useEffect, useState} from "react";
import JoblyApi from "../api";
import LoadingSpinner from "../hooks/LoadingSpinner";
import CompanyCard from "./companyCard";
import "./companies.css";
import SearchForm from "../hooks/SearchForm.js";

function CompanyList(){
    //return a list of companies
    //let's get the initial state
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount() {
        console.log("CompanyList useEffect getCompaniesOnMount");
        searchCompanies();
    }, []);
    //let's get the companies from the company api
    //should be an async
    async function searchCompanies(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies)
    };
    //let's implement  an error page if no companies are found
    if (!companies) return <LoadingSpinner />

    return(
        <div className="Companies">
            <SearchForm searchFor = {searchCompanies} />
            {companies?.length 
            ? (
                <div className="Companies__list">  
                    {companies?.map(company => (
                        <CompanyCard 
                        key={company.handle}
                        handle={company.handle}
                        name={company.name}
                        description={company.description}
                        logoUrl={company.logoUrl}
                        />
                    ))}
                </div>
            ) : (
                <p className = "Companies__error"> Error: no companies found</p>
            )
            
        }
        </div>
    )
}

export default CompanyList;
