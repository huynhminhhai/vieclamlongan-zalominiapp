import { Section } from "components/section"
import React, { FC } from "react"
import { Tabs } from "zmp-ui"
import TotalResult from "./TotalResult"
import JobSearchList from "./JobSearchList"

export const JobSearchSection: FC<{nd70?: boolean}> = props => {

    const {nd70 = false} = props

    return (
        <Section title="" padding="title-only">
            <TotalResult />
            <JobSearchList nd70={nd70} />
        </Section>
    )
}