import { Section } from "components/section"
import React, { FC } from "react"
import TotalResult from "./TotalResult"
import JobSearchList from "./JobSearchList"

export const JobSearchSection: FC = () => {

    return (
        <Section title="" padding="title-only">
            <TotalResult />
            <JobSearchList />
        </Section>
    )
}