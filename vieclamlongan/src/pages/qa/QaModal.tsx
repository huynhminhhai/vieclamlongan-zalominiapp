import { SearchableSelect } from "components/form";
import InputAreaField from "components/form/InputAreaField";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import ConfirmModal from "components/ModalConfirm";
import React, { useEffect, useState } from "react";
import { useStore } from "store/store";
import { Box, Button, Input, Modal, Text, useSnackbar } from "zmp-ui";

const optionsCourse = [
    { value: "1", label: "Cắt gọt kim loại" },
    { value: "2", label: "Công nghệ ô tô" },
    { value: "3", label: "Hàn" },
    { value: "4", label: "Vận hành, sửa chữa thiết bị lạnh" },
    { value: "5", label: "Điện công nghiệp" },
    { value: "6", label: "Công nghệ thông tin" },
    { value: "7", label: "May thời trang" },
    { value: "8", label: "Cơ khí hàn" },
    { value: "9", label: "Công nghệ ô tô" },
];

const optionsStatus = [
    { value: "1", label: "Chưa biết tình trạng NLĐ" },
    { value: "2", label: "Thất nghiệp, có nhu cầu tìm việc" },
    { value: "3", label: "Thất nghiệp, KHÔNG có nhu cầu tìm việc" },
    { value: "4", label: "Đang làm, muốn tìm việc khác" },
    { value: "5", label: "Đang làm ổn định, KHÔNG ĐỔI" },
    { value: "6", label: "Đã giới thiệu" },
    { value: "7", label: "Chờ KQ phỏng vấn" },
    { value: "8", label: "Phỏng vấn đạt" },
    { value: "9", label: "Phỏng vấn đạt không đạt" },
]

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
        if (!formData.field.trim()) newErrors.field = "Họ tên không được để trống";
        if (!formData.fullName.trim()) newErrors.fullName = "Họ tên không được để trống";
        if (!formData.title.trim()) newErrors.title = "Họ tên không được để trống";
        if (!formData.content.trim()) newErrors.content = "Họ tên không được để trống";
        if (!/^[0-9]{10}$/.test(formData.phoneNumber))
            newErrors.phoneNumber = "Số điện thoại không hợp lệ";


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