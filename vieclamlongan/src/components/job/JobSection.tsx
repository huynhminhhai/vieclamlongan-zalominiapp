import { Section } from "components/section"
import React, { FC } from "react"
import { Button, Tabs, useNavigate } from "zmp-ui"
import JobList from "./JobList"
import JobNd70List from "./JobNd70List"

export const JobSection: FC = () => {

    const navigate = useNavigate()

    return (
        <Section title="Việc làm" padding="title-only">
            <Tabs id="contact-list">
                <Tabs.Tab key="hot" label="Tốt nhất">
                    <JobList />
                    <div className="flex items-center justify-center gap-3 py-6">
                        <Button onClick={() => {
                            const queryParams = new URLSearchParams({ category: "True-1" });
                            navigate(`/danh-sach-tuyen-dung/?${queryParams.toString()}`)
                        }} size="medium">Xem tất cả</Button>
                    </div>
                </Tabs.Tab>
                <Tabs.Tab key="new" label="Mới nhất">
                    <JobList />
                    <div className="flex items-center justify-center gap-3 py-6">
                        <Button onClick={() => {
                            const queryParams = new URLSearchParams({ category: "False-1" });
                            navigate(`/danh-sach-tuyen-dung/?${queryParams.toString()}`)
                        }} size="medium">Xem tất cả</Button>
                    </div>
                </Tabs.Tab>
                <Tabs.Tab key="nd70" label="ND70/2023">
                    <JobNd70List />
                    <div className="flex items-center justify-center gap-3 py-6">
                        <Button onClick={() => console.log('detail DN')} size="medium">Đăng ký tuyển dụng</Button>
                        <Button onClick={() => navigate('/danh-sach-tuyen-dung-70')} size="medium">Xem tất cả</Button>
                    </div>
                </Tabs.Tab>
            </Tabs>
        </Section>
    )
}