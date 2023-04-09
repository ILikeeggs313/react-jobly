import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../home/Home";
import CompanyList from "../ companies/companies";
import JobList from "../jobs/jobList";
import CompanyDetail from "../ companies/company";
import LoginForm from "../users/LoginForm";
import ProfileForm from "../profiles/profile";
import SignupForm from "../users/SignupForm";
import PrivateRoute from "./PrivateRoute";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routers({ login, signup }) {
  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
      <div className="pt-5">
        <Routes>

          <Route exact path="/" element = {<Homepage />} />
           

          <Route exact path="/login" 
          element = {<LoginForm login={login}/>} />

          <Route exact path="/signup" 
            element = {<SignupForm signup={signup} />}
          />

          <PrivateRoute exact path="/companies">
            <CompanyList />
          </PrivateRoute>

          <PrivateRoute exact path="/jobs">
            <JobList />
          </PrivateRoute>

          <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <ProfileForm />
          </PrivateRoute>

          <Navigate to="/" />
        </Routes>
      </div>
  );
}

export default Routers;
