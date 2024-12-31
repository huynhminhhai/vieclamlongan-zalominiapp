import { Section } from "components/section"
import React, { FC } from "react"
import { useSearchParams } from "react-router-dom"
import { Button } from "zmp-ui"
import JobList from "components/job/JobList"

const categoryList = {
    "True-1": {
        title: 'Danh sách việc làm tốt nhất'
    },
    "False-1": {
        title: 'Danh sách việc làm mới nhất'
    }
}

export const DanhsachSection: FC = () => {

    const [searchParams] = useSearchParams();

    const category = searchParams.get("category") || "True-1";

    return (
        <Section title={categoryList[category].title || ""} padding="title-only">
            <JobList detail={true} />
            <div className="flex items-center justify-center gap-3 py-6">
                <Button onClick={() => console.log(123)} size="medium">Xem thêm</Button>
            </div>
        </Section>
    )
}