import React, { FunctionComponent } from "react";
import JobNd70Item from "./JobNd70Item";

const JobNd70List: FunctionComponent<{ detail?: boolean }> = props => {

    const { detail = false } = props

    return (
        <div className="px-4">
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
            <JobNd70Item detail={detail} />
        </div>
    )
};

export default JobNd70List