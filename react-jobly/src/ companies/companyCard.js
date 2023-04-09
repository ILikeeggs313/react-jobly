import React from 'react';
import {Link} from "react-router-dom";

function CompanyCard({name, description, logoUrl, handle}) {
  console.debug("CompanyCard", logoUrl);
  return (
    <Link className="CompanyCard" >

    <div className= "CompanyCard__body" to={`/companies/${handle}`}>
    <h6 className="CompanyCard__title">
            {name}
            {logoUrl && <img src={logoUrl}
                             alt={name}
                             className="float-right ml-5" />}
          </h6>
          <p><small>{description}</small></p>
    </div>

    </Link>
  )
}

export default CompanyCard;