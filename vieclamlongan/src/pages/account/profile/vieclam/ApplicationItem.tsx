import React from "react"
import { Icon } from "@iconify/react"
import { useNavigate } from "zmp-ui"

const ApplicationItem: React.FC<any> = () => {

    const navigate = useNavigate()

    return (
        <div 
            className="border-[1px] rounded-md p-4 flex items-center mt-4"
            onClick={() => navigate('/application-dn-detail')}
        >
            <div className="flex-1">
                <h4 className="text-[16px] font-semibold mb-1">Nguyễn Văn Anh</h4>
                <div className="flex items-center gap-6">Tên công việc: Lao động kỹ thuật</div>
                <div className="flex items-center gap-6">Vị trí công việc: Sinh viên/ Thực tập sinh</div>
                <div className="flex items-center gap-6 mt-1">Ngày nộp: 30/12/2024</div>
            </div>
            <div>
                <Icon icon='iconamoon:eye-light' fontSize={30} />
            </div>
        </div>
    )
}

export default ApplicationItem