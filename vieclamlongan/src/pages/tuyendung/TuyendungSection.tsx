import { Section } from "components/section"
import React, { FC } from "react"
import TuyendungList from "./TuyendungList"
import { Tabs } from "zmp-ui"

export const TuyendungSection: FC = () => {

    return (
        <Section title="Việc làm" padding="title-only">
            <Tabs id="contact-list">
                <Tabs.Tab key="hot" label="Tốt nhất">
                    <TuyendungList nd70={false} />
                </Tabs.Tab>
                <Tabs.Tab key="new" label="Mới nhất">
                    <TuyendungList nd70={false} />
                </Tabs.Tab>
                <Tabs.Tab key="nd70" label="ND70/2023">
                    <TuyendungList nd70={true} />
                </Tabs.Tab>
            </Tabs>
        </Section>
    )
}