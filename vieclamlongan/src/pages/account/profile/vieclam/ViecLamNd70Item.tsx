import { Box, Checkbox, useNavigate } from "zmp-ui"
import React, { useState } from "react"
import { Icon } from "@iconify/react"
import ConfirmModal from "components/ModalConfirm";

type ViecLamNd70ItemProps = {
    setDownLoadList: React.Dispatch<React.SetStateAction<string[]>>;
}

const ViecLamNd70Item: React.FC<ViecLamNd70ItemProps> = ({ setDownLoadList }) => {

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

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        // Nếu checkbox được chọn, thêm giá trị vào danh sách
        if (checked) {
            setDownLoadList((prevList) => [...prevList, value]);
        } else {
            // Nếu checkbox bị bỏ chọn, loại bỏ giá trị khỏi danh sách
            setDownLoadList((prevList) => prevList.filter(item => item !== value));
        }
    };

    return (
        <div
            className="border-[1px] rounded-md p-4 mt-4"
        >
            <div className="flex-1" onClick={() => navigate('/vieclam-nd70-edit?id=1')}>
                <h4 className="text-[18px] font-semibold mb-1">Lao động kỹ thuật</h4>
                <h4 className="text-[14px] font-semibold mb-1">Nhân viên kỹ thuật</h4>
                <div className="flex items-center gap-6">Thời hạn làm việc: 31/12/2024 - 01/01/2025</div>
                <div className="flex items-center gap-6">Số lượng: 1</div>
                <div className="flex items-center gap-6">Mã hồ sơ: TD82449202412300805</div>
                <div className="flex items-center gap-6">Tình trạng: chưa kích hoạt</div>
                <div className="flex items-center gap-6">Sở: chưa duyệt</div>
            </div>
            <div className="flex justify-between gap-3 items-center mt-3">
                <Checkbox size="medium" value='1' label="Chọn để tải mẫu" onChange={handleCheckboxChange} />
                <div className="flex items-center gap-3">
                    <Icon icon='tabler:edit' fontSize={30} onClick={() => navigate('/vieclam-nd70-edit?id=1')} />
                    <Icon icon='material-symbols:delete-outline' fontSize={30} onClick={() => fetchApiDelete()} />
                </div>
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

export default ViecLamNd70Item
