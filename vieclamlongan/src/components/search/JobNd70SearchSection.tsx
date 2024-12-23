import { Section } from "components/section"
import React, { FC } from "react"
import TotalResult from "./TotalResult"
import JobNd70SearchList from "./JobNd70SearchList"

export const JobNd70SearchSection: FC = () => {

    return (
        <Section title="" padding="title-only">
            <TotalResult />
            <JobNd70SearchList/>
        </Section>
    )
}