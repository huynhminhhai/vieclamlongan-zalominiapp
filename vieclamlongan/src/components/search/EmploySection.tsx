import { Section } from "components/section"
import React, { FC } from "react"
import TotalResult from "./TotalResult"
import { EmployList } from "."

export const EmploySection: FC = () => {

    return (
        <Section title="" padding="title-only">
            <TotalResult />
            <EmployList />
        </Section>
    )
}