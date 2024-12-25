import { ChooseFile } from "components/form";
import React, { useEffect, useState } from "react";
import { useStore } from "store/store";
import { Box, Button, Modal, Text, useSnackbar } from "zmp-ui";
import ConfirmModal from "./ModalConfirm";

type JobModalProps = {
    popupVisible: boolean,
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const JobModal: React.FunctionComponent<JobModalProps> = ({ popupVisible, setPopupVisible }) => {

    const toggleIsHidden = useStore((state) => state.toggleHideBottomNavigation)
    const [isConfirmVisible, setConfirmVisible] = useState(false);
    const { openSnackbar } = useSnackbar();

    useEffect(() => {
        toggleIsHidden(popupVisible)
    }, [popupVisible])

    const handleConfirm = () => {
        console.log("Confirmed!");
        setConfirmVisible(false);
        setPopupVisible(false)
        openSnackbar({
            icon: true,
            text: "Nộp đơn thành công",
            type: 'success',
            action: {
              text: "Đóng",
              close: true,
            },
            duration: 5000,
        });
    };

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    const handleSubmit = () => {
        setConfirmVisible(true);
    }

    return (
        <>
            <Modal
                visible={popupVisible}
                title="Nộp đơn"
                onClose={() => {
                    setPopupVisible(false);
                }}
                verticalActions
            >
                <Box className="form form-job">
                    <Box>
                        <ul>
                            <li>
                                <Text bold>Họ tên: </Text>
                                <Text>Huỳnh Minh Hải</Text>
                            </li>
                            <li>
                                <Text bold>Số điện thoại: </Text>
                                <Text>0848551555</Text>
                            </li>
                            <li>
                                <Text bold>Email: </Text>
                                <Text>huynhminhhai.1555@gmail.com</Text>
                            </li>
                            <li>
                                <Text bold>Công việc: </Text>
                                <Text>Nhân viên kế toán thuế</Text>
                            </li>
                            <li>
                                <Text bold>Công ty: </Text>
                                <Text>Chi Nhánh Nhà Máy - Công Ty Cổ Phần Phân Bón Ánh Dương</Text>
                            </li>
                        </ul>
                    </Box>

                    <Box>
                        <ChooseFile />
                    </Box>

                    <Box py={4}>
                        <Button
                            size="medium"
                            onClick={() => {
                                handleSubmit()
                            }}
                            fullWidth
                        >
                            Nộp đơn
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn nộp đơn không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </>
    )
}

export default JobModal;