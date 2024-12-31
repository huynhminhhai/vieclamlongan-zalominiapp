import { useNavigate } from "zmp-ui"
import React, { useState } from "react"
import { Icon } from "@iconify/react"
import ConfirmModal from "components/ModalConfirm";


const ViecLamItem: React.FC = () => {

    const navigate = useNavigate()
    const [isConfirmVisible, setConfirmVisible] = useState(false);

    const fetchApiDelete = () => {
        setConfirmVisible(true);
    }

    const handleConfirm = () => {
        console.log('call api')
        setConfirmVisible(false)
    }

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <div
            className="flex items-center border-[1px] rounded-md p-4 mt-4"
        >
            <div className="flex-1" onClick={() => navigate('/vieclam-edit?id=1')}>
                <h4 className="text-[18px] font-semibold mb-1">Lao động kỹ thuật</h4>
                <div className="flex items-center gap-6">Sinh viên / Thực tập sinh</div>
                <div className="flex items-center gap-6">Hạn nộp: 01/01/2025</div>
                <div className="flex items-center gap-6">Số lượng: 1</div>
            </div>
            <div className="flex flex-col gap-3 items-center mt-3">
                    <Icon icon='tabler:edit' fontSize={30} onClick={() => navigate('/vieclam-edit?id=1')} />
                    <Icon icon='material-symbols:delete-outline' fontSize={30} onClick={() => fetchApiDelete()} />
            </div>

            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn xóa việc làm này không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </div>
    )
}

export default ViecLamItem
