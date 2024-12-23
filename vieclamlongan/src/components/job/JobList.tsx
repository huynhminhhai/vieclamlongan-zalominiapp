import React, { FunctionComponent } from "react";
import JobItem from "./JobItem";

const JobList: FunctionComponent<{ detail?: boolean }> = props => {

    const { detail = false } = props

    return (
        <div className="px-4">
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
            <JobItem detail={detail} />
        </div>
    )
};

export default JobList