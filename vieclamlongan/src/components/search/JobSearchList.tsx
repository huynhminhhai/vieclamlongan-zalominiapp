import React, { FunctionComponent } from "react";
import JobSearchItem from "./JobSearchItem";
import Seemore from "./Seemore";

const JobSearchList: FunctionComponent = () => {

    return (
        <div className="px-4">
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <JobSearchItem />
            <Seemore />
        </div>
    )
};

export default JobSearchList