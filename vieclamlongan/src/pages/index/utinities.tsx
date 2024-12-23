import { Section } from "components/section"
import { Utinities } from "components/utinities"
import { APP_UTINITIES } from "constants"
import React, { FC } from "react"

export const UtinitiesSection: FC = () => {

    return (
        <Section title="Danh sách" padding="title-only">
            <Utinities utinities={APP_UTINITIES} />
        </Section>
    )
}