import React from "react";
import OtherDetailPage from "components/others/otherDetail";
import { Box } from "zmp-ui";
import { OtherList } from "components/others";
import { Divider } from "components/divider";
import { Section } from "components/section";

const InsuranceDetailPage: React.FunctionComponent = () => {

    return (
        <Box pb={10} className="bg-white">
            <OtherDetailPage title="Chi tiết bảo hiểm" />
            <Divider />
            <Section title="Tin bảo hiểm khác" padding="title-only" seemore={true} seemoreUrl="/insurance-list">
                <OtherList urlDetail="/insurance-detail" />
            </Section>
        </Box>
    )
}

export default InsuranceDetailPage;