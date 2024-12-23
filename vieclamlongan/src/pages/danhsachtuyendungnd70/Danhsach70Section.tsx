import { Section } from "components/section"
import React, { FC } from "react"
import { Button } from "zmp-ui"
import JobNd70List from "components/job/JobNd70List"

export const Danhsach70Section: FC = () => {

    return (
        <Section title="Danh sách việc làm ND 70" padding="title-only">
            <JobNd70List detail={true} />
            <div className="flex items-center justify-center gap-3 py-6">
                <Button onClick={() => console.log(123)} size="medium">Xem thêm</Button>
            </div>
        </Section>
    )
}