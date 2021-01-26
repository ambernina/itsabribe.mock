import React from "react";
import { Route } from "react-router-dom";

import Home from "../pages/Home";
import SearchResultsPols from "../pages/SearchResultsPols";
import SearchResultsOrgs from "../pages/SearchResultsOrgs";
import Politician from "../pages/Politician";
import Organization from "../pages/Organization";
import LogoHeader from "./LogoHeader";
import Contact from "../pages/Contact";

const AllContent = () => {
  return (
    <>
      <LogoHeader />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/searchresults/Politicians" component={SearchResultsPols} />
      <Route exact path="/searchresults/Companies" component={SearchResultsOrgs} />
      <Route path="/politician/:cid" component={Politician} />
      <Route path="/organization/:org_name" component={Organization} />
    </>
  )
}

export default AllContent;