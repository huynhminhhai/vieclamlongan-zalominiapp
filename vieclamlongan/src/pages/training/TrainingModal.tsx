import { SearchableSelect } from "components/form";
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
    fullName: string;
    phoneNumber: string;
    course: string;
    status: string;
}

type TrainingModalProps = {
    popupVisible: boolean,
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const TrainingModal: React.FunctionComponent<TrainingModalProps> = ({popupVisible, setPopupVisible}) => {

    const toggleIsHidden = useStore((state) => state.toggleHideBottomNavigation)

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
        if (!formData.fullName.trim()) newErrors.fullName = "Họ tên không được để trống";
        if (!formData.course.trim()) newErrors.course = "Khóa học không được để trống";
        if (!formData.status.trim()) newErrors.status = "Trạng thái không được để trống";
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
            console.log("Dữ liệu hợp lệ:", formData);
            setPopupVisible(false);
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
                course: valueCourse,
                status: valueStatus,
            })
            setValueCourse("")
            setValueStatus("")
        } else {
            errors
        }
    };

    return (
        <Modal
            visible={popupVisible}
            title="Đăng ký khóa học"
            onClose={() => {
                setPopupVisible(false);
            }}
            verticalActions
        >
            <Box className="form form-training">
                <Box mb={5} className="relative">
                    <Text size="small" className="mb-1">Khóa học: <span className="text-red-600">(*)</span></Text>
                    <SearchableSelect
                        name="course"
                        options={optionsCourse}
                        selectedValue={valueCourse}
                        setSelectedValue={setValueCourse}
                        handleInputChange={handleInputChange}
                        errors={errors.course}
                    />
                </Box>
                <Box mb={5} className="relative">
                    <Text size="small" className="mb-1">Tình trạng: <span className="text-red-600">(*)</span></Text>
                    <SearchableSelect
                        name="status"
                        options={optionsStatus}
                        selectedValue={valueStatus}
                        setSelectedValue={setValueStatus}
                        handleInputChange={handleInputChange}
                        errors={errors.status}
                    />
                </Box>
                <Box mb={5} className="relative">
                    <Text size="small" className="mb-1">Họ tên: <span className="text-red-600">(*)</span></Text>
                    <Input type="text" value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)} />
                    {errors.fullName && (
                        <Text size="xSmall" className="text-red-600 absolute left-0 top-[100%]">
                            {errors.fullName}
                        </Text>
                    )}
                </Box>
                <Box mb={5} className="relative">
                    <Text size="small" className="mb-1">Số điện thoại: <span className="text-red-600">(*)</span></Text>
                    <Input type="number" value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)} />
                    {errors.phoneNumber && (
                        <Text size="xSmall" className="text-red-600 absolute left-0 top-[100%]">
                            {errors.phoneNumber}
                        </Text>
                    )}
                </Box>
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
    )
}

export default TrainingModal;