import React from "react";
import OtherDetailPage from "components/others/otherDetail";
import { Box } from "zmp-ui";
import { OtherList } from "components/others";
import { Divider } from "components/divider";
import { Section } from "components/section";

const ForeignDetailPage: React.FunctionComponent = () => {

    return (
        <Box pb={10} className="bg-white">
            <OtherDetailPage title="Chi tiết việc làm nước ngoài" />
            <Divider />
            <Section title="Tin việc làm nước ngoài khác" padding="title-only" seemore={true} seemoreUrl="/foreign-list">
                <OtherList urlDetail="/foreign-detail" />
            </Section>
        </Box>
    )
}

export default ForeignDetailPage;