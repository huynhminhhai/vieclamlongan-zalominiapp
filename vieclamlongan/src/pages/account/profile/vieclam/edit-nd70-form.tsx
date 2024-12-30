import FormDatePicker from "components/form/DatePicker";
import InputAreaField from "components/form/InputAreaField";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import ConfirmModal from "components/ModalConfirm";
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Box, Button, Header, Page, useNavigate, useSnackbar } from "zmp-ui"

const initialFormValues = {
    jobPosition: "",
    jobTitle: "",
    numberPerson: "",
    fromDate: "",
    toDate: "",
    salary: "",
    location: "",
    jobDesc: "",
    qualification: "",
    experience: "",
    other: ""
}

const EditViecLamNd70Page: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [isConfirmVisible, setConfirmVisible] = useState(false);
    const [formData, setFormData] = useState({ ...initialFormValues });

    useEffect(() => {
        if (id) {
            setFormData({
                jobPosition: "4",
                jobTitle: "Chuyên viên kỹ thuật",
                numberPerson: "1",
                fromDate: "31/12/2024",
                toDate: "31/12/2025",
                salary: "12000",
                location: "Đức Hòa, Long An",
                jobDesc: "Không có",
                qualification: "Không có",
                experience: "Không có",
                other: ""
            })
        }
    }, [id])

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.jobPosition.trim()) newErrors.jobPosition = "Vị trí công việc không được để trống";
        if (!formData.jobTitle.trim()) newErrors.jobTitle = "Chức danh công việc không được để trống";
        if (!formData.numberPerson.trim()) newErrors.numberPerson = "Số lượng (người) không được để trống";
        if (!formData.fromDate.trim()) newErrors.fromDate = "Thời gian không được để trống";
        if (!formData.toDate.trim()) newErrors.toDate = "Thời gian không được để trống";
        if (!formData.salary.trim()) newErrors.salary = "Mức lương không được để trống";
        if (!formData.location.trim()) newErrors.location = "Địa điểm làm việc không được để trống";
        if (!formData.jobDesc.trim()) newErrors.jobDesc = "Mô tả không được để trống";
        if (!formData.qualification.trim()) newErrors.qualification = "Mục này không được để trống";
        if (!formData.experience.trim()) newErrors.experience = "Mục này không được để trống";

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
        setConfirmVisible(false)
        openSnackbar({
            icon: true,
            text: "Lưu thông tin thành công",
            type: 'success',
            action: {
                text: "Đóng",
                close: true,
            },
            duration: 5000,
        });

        navigate('/vieclam')
    }

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Cập nhật thông tin việc làm ND70" />
            <Box>
                <Box p={4} py={6} className="form form-account bg-white w-[100%]">
                    <SelectNormal
                        label="Vị trí công việc"
                        value={formData.jobPosition}
                        required
                        error={errors.jobPosition}
                        onChange={(value) => handleInputChange("jobPosition", value)}
                        options={[
                            { value: "1", title: "Nhà quản lý" },
                            { value: "2", title: "Giám đốc điều hành" },
                            { value: "3", title: "Chuyên gia" },
                            { value: "4", title: "Lao động kỹ thuật" }
                        ]}
                    />

                    <InputField
                        label="Chức danh công việc"
                        type="text"
                        value={formData.jobTitle}
                        required
                        error={errors.jobTitle}
                        onChange={(value) => handleInputChange("jobTitle", value)}
                    />

                    <InputField
                        label="Số người"
                        type="number"
                        value={formData.numberPerson}
                        required
                        error={errors.numberPerson}
                        onChange={(value) => handleInputChange("numberPerson", value)}
                    />

                    <FormDatePicker
                        label="Thời hạn làm việc từ ngày"
                        value={formData.fromDate}
                        required
                        error={errors.fromDate}
                        dateFormat="dd/mm/yyyy"
                        onChange={(value) => handleInputChange("fromDate", value)}
                    />

                    <FormDatePicker
                        label="Thời hạn làm việc đến ngày"
                        value={formData.toDate}
                        required
                        error={errors.toDate}
                        dateFormat="dd/mm/yyyy"
                        onChange={(value) => handleInputChange("toDate", value)}
                    />

                    <InputAreaField
                        label="Địa điểm làm việc (liệt kê cụ thể các địa điểm (nếu có) và ghi rõ từng địa điểm theo thứ tự: số nhà, đường phố, xóm, làng; xã/phường/thị trấn; quận/huyện/thị xã/thành phố thuộc tỉnh; tỉnh/thành phố trực thuộc trung ương)"
                        value={formData.location}
                        required
                        error={errors.location}
                        onChange={(value) => handleInputChange("location", value)}
                    />

                    <InputAreaField
                        label="Mô tả vị trí công việc, chức danh công việc"
                        value={formData.jobDesc}
                        required
                        error={errors.jobDesc}
                        onChange={(value) => handleInputChange("jobDesc", value)}
                    />

                    <InputAreaField
                        label="Yêu cầu về trình độ"
                        value={formData.qualification}
                        required
                        error={errors.qualification}
                        onChange={(value) => handleInputChange(".qualification", value)}
                    />

                    <InputAreaField
                        label="Yêu cầu về kinh nghiệm"
                        value={formData.experience}
                        required
                        error={errors.experience}
                        onChange={(value) => handleInputChange(".experience", value)}
                    />

                    <InputAreaField
                        label="Yêu cầu khác "
                        value={formData.other}
                        error={errors.other}
                        onChange={(value) => handleInputChange(".other", value)}
                    />


                    <Box py={4}>
                        <Button
                            size="medium"
                            onClick={() => {
                                handleSubmit()
                            }}
                            fullWidth
                        >
                            Lưu thông tin
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn lưu thông tin không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </Page>
    )
}

export default EditViecLamNd70Page