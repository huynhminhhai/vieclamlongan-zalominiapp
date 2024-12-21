import React, { FunctionComponent } from "react";
import JobSearchItem from "./JobSearchItem";
import Seemore from "./Seemore";

const JobSearchList: FunctionComponent<{nd70: boolean}> = props => {

    const {nd70} = props

    return (
        <div className="px-4">
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <JobSearchItem nd70={nd70} />
            <Seemore />
        </div>
    )
};

export default JobSearchList