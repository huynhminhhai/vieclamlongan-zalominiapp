import { NewsList } from "components/news"
import { Section } from "components/section"
import { NEWS_LIST } from "constants"
import React, { FC } from "react"

export const NewsSection: FC = () => {

    return (
        <Section title="Tin tức" padding="title-only">
            <NewsList news={NEWS_LIST} />
        </Section>
    )
}