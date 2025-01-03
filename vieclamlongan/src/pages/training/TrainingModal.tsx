import { SearchableSelect } from "components/form";
import InputField from "components/form/InputField";
import ConfirmModal from "components/ModalConfirm";
import React, { useEffect, useState } from "react";
import { useStore } from "store/store";
import { Box, Button, Modal, useSnackbar } from "zmp-ui";

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
    fullName: string;
    phoneNumber: string;
    course: string;
    status: string;
}

type TrainingModalProps = {
    popupVisible: boolean,
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const TrainingModal: React.FunctionComponent<TrainingModalProps> = ({ popupVisible, setPopupVisible }) => {

    const toggleIsHidden = useStore((state) => state.toggleHideBottomNavigation)
    const [isConfirmVisible, setConfirmVisible] = useState(false);

    useEffect(() => {
        toggleIsHidden(popupVisible)
    }, [popupVisible])

    const [valueCourse, setValueCourse] = useState<string | "">("");
    const [valueStatus, setValueStatus] = useState<string | "">("");

    const { openSnackbar } = useSnackbar();

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phoneNumber: "",
        course: valueCourse,
        status: valueStatus,
    });

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
    
        // Mảng các trường cần kiểm tra
        const requiredFields = [
            { key: 'fullName', message: 'Họ tên không được để trống' },
            { key: 'course', message: 'Khóa học không được để trống' },
            { key: 'status', message: 'Tình trạng không được để trống' },
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
            text: "Đăng ký thành công",
            type: 'success',
            action: {
                text: "Đóng",
                close: true,
            },
            duration: 5000,
        });
        setFormData({
            fullName: "",
            phoneNumber: "",
            course: "",
            status: "",
        })
        setValueCourse("")
        setValueStatus("")
    };

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <>
            <Modal
                visible={popupVisible}
                title="Đăng ký khóa học"
                onClose={() => {
                    setPopupVisible(false);
                }}
                verticalActions
            >
                <Box className="form form-training">
                    <SearchableSelect
                        label="Khóa học"
                        required
                        options={optionsCourse}
                        selectedValue={valueCourse}
                        setSelectedValue={setValueCourse}
                        onChange={(value) => handleInputChange("course", value)}
                        errors={errors.course}
                    />
                    <SearchableSelect
                        label="Tình trạng"
                        required
                        options={optionsStatus}
                        selectedValue={valueStatus}
                        setSelectedValue={setValueStatus}
                        onChange={(value) => handleInputChange("status", value)}
                        errors={errors.status}
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

export default TrainingModal;