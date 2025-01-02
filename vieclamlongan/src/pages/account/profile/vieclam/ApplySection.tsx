import React from "react";
import { Box, Button, useNavigate } from "zmp-ui";
import ApplicationItem from "./ApplyItem";

type ApplicationSectionProps = {

}

const ApplicationSection: React.FC<ApplicationSectionProps> = () => {

    const navigate = useNavigate()

    return (
        <Box p={4} mt={4} className="text-[#606468] border-t-[1px]">
            <h4 className="text-[20px] font-semibold mb-5">Hồ sơ đã nộp</h4>
            <Box mt={6}>
                <ApplicationItem />
                <ApplicationItem />
            </Box>
            <Box>
                <div className="flex items-center justify-center mt-6">
                    <Button
                        onClick={() => navigate('/application-dn-list')}
                        size="medium"
                    >Xem tất cả</Button>
                </div>
            </Box>
        </Box>
    )
}

export default ApplicationSection