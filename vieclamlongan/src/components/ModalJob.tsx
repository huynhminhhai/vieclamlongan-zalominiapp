import { ChooseFile, SearchableSelect } from "components/form";
import React, { useEffect, useState } from "react";
import { useStore } from "store/store";
import { Box, Button, Input, Modal, Text, useSnackbar } from "zmp-ui";

type JobModalProps = {
    popupVisible: boolean,
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const JobModal: React.FunctionComponent<JobModalProps> = ({popupVisible, setPopupVisible}) => {

    const toggleIsHidden = useStore((state) => state.toggleHideBottomNavigation)

    useEffect(() => {
        toggleIsHidden(popupVisible)
    }, [popupVisible])
    
    
    return (
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
                            setPopupVisible(false)
                            console.log('handle submit')
                        }}
                        fullWidth
                    >
                        Nộp đơn
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default JobModal;