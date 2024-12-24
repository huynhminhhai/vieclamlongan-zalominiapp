import React from "react";
import OtherDetailPage from "components/others/otherDetail";
import { Box } from "zmp-ui";
import { OtherList } from "components/others";
import { Divider } from "components/divider";
import { Section } from "components/section";

const TrainingDetailPage: React.FunctionComponent = () => {

    return (
        <Box pb={10} className="bg-white">
            <OtherDetailPage title="Chi tiết đào tạo" />
            <Divider />
            <Section title="Tin đào tạo khác" padding="title-only" seemore={true} seemoreUrl="/training-list">
                <OtherList urlDetail="/training-detail" />
            </Section>
        </Box>
    )
}

export default TrainingDetailPage;