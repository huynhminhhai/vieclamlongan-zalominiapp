import InputAreaField from "components/form/InputAreaField";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import ConfirmModal from "components/ModalConfirm";
import React, { useEffect, useState } from "react";
import { useStore } from "store/store";
import { Box, Button, Modal, useSnackbar } from "zmp-ui";

type FormData = {
    field: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    title: string;
    content: string;
}

type QaModalProps = {
    popupVisible: boolean,
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const QaModal: React.FunctionComponent<QaModalProps> = ({ popupVisible, setPopupVisible }) => {

    const toggleIsHidden = useStore((state) => state.toggleHideBottomNavigation)
    const [isConfirmVisible, setConfirmVisible] = useState(false);

    useEffect(() => {
        toggleIsHidden(popupVisible)
    }, [popupVisible])

    const { openSnackbar } = useSnackbar();

    const [formData, setFormData] = useState<FormData>({
        field: "",
        fullName: "",
        phoneNumber: "",
        email: "",
        title: "",
        content: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
    
        // Mảng các trường cần kiểm tra
        const requiredFields = [
            { key: 'field', message: 'Lĩnh vực không được để trống' },
            { key: 'fullName', message: 'Họ tên không được để trống' },
            { key: 'title', message: 'Tiêu đề không được để trống' },
            { key: 'content', message: 'Nội dung không được để trống' },
            { key: 'phoneNumber', message: 'Số điện thoại không hợp lệ', regex: /^[0-9]{10}$/ }
        ];
    
        // Kiểm tra các trường yêu cầu
        requiredFields.forEach(({ key, message, regex }) => {
            const value = formData[key as keyof typeof formData]?.trim();
            if (!value) {
                newErrors[key] = message;
            } else if (regex && !regex.test(value)) {
                newErrors[key] = message;
            }
        });
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    

    const handleInputChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        if (validate()) {
            setConfirmVisible(true);
        } else {
            errors
        }
    };

    const handleConfirm = () => {
        console.log("Dữ liệu hợp lệ:", formData);
        setPopupVisible(false);
        setConfirmVisible(false)
        openSnackbar({
            icon: true,
            text: "Đặt câu hỏi thành công",
            type: 'success',
            action: {
                text: "Đóng",
                close: true,
            },
            duration: 5000,
        });
        setFormData({
            field: "",
            fullName: "",
            phoneNumber: "",
            email: "",
            title: "",
            content: ""
        })
    };

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <>
            <Modal
                visible={popupVisible}
                title="Đặt câu hỏi"
                onClose={() => {
                    setPopupVisible(false);
                }}
                verticalActions
            >
                <Box className="form form-training">

                    <SelectNormal
                        label="Lĩnh vực"
                        value={formData.field}
                        required
                        error={errors.field}
                        onChange={(value) => handleInputChange("field", value)}
                        options={[
                            { value: "1", title: "Việc làm" },
                            { value: "2", title: "Đào tạo nghề" },
                            { value: "3", title: "Bảo hiểm thất nghiệp" },
                            { value: "4", title: "Việc làm ngoài nước" },
                            { value: "5", title: "Sàn việc làm" },
                        ]}
                    />
                    
                    <InputField
                        label="Họ tên"
                        type="text"
                        value={formData.fullName}
                        required
                        error={errors.fullName}
                        onChange={(value) => handleInputChange("fullName", value)}
                    />
                    
                    <InputField
                        label="Số điện thoại"
                        type="number"
                        value={formData.phoneNumber}
                        required
                        error={errors.phoneNumber}
                        onChange={(value) => handleInputChange("phoneNumber", value)}
                    />

                    <InputField
                        label="Email"
                        type="text"
                        value={formData.email}
                        error={errors.email}
                        onChange={(value) => handleInputChange("email", value)}
                    />

                    <InputField
                        label="Tiêu đề"
                        type="text"
                        required
                        value={formData.title}
                        error={errors.title}
                        onChange={(value) => handleInputChange("title", value)}
                    />

                    <InputAreaField
                        required
                        label="Nội dung"
                        type="text"
                        value={formData.content}
                        error={errors.content}
                        onChange={(value) => handleInputChange("content", value)}
                    />

                    <Box py={4}>
                        <Button
                            size="medium"
                            onClick={() => {
                                handleSubmit()
                            }}
                            fullWidth
                        >
                            Xác nhận
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn đăng ký khóa học không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </>

    )
}

export default QaModal;