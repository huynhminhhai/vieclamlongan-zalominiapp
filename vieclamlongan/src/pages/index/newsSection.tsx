import { NewsList } from "components/news"
import { Section } from "components/section"
import { NEWS_LIST } from "constants"
import React, { FC } from "react"

export const NewsSection: FC = () => {

    return (
        <Section title="Tin tức" padding="title-only" seemore={true} seemoreUrl="/danh-sach-tin-tuc/1">
            <NewsList news={NEWS_LIST} />
        </Section>
    )
}