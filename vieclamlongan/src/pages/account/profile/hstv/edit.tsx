import { SearchableSelect } from "components/form";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import ConfirmModal from "components/ModalConfirm";
import React, { useState } from "react"
import { Box, Button, Header, Page, useNavigate, useSnackbar } from "zmp-ui"

const initialFormValues = {
    jobPosition: "1",
    jobTitle: "Thiết kế",
    industry: "1",
    salary: "5",
    culture: "12",
    informationTechnology: "22",
    language: "14",
    degree: "6",
    experience: "không có",
    skill: "không có",
    advantage: "",
    defect: ""
}

const optionsIndustry = [
    { value: "1", label: "THIẾT KẾ 2D" },
    { value: "2", label: "110KV SUBSTATION OPERATOR" },
    { value: "3", label: "2D DESIGN" },
    { value: "4", label: "2D, 3D DESIGN" },
    { value: "5", label: "5S, KAIZEN" },
    { value: "6", label: "WAREHOUSE ADMIN STAFF" },
    { value: "7", label: "LABOR SAFETY - LABOR HYGIENE" },
    { value: "8", label: "BUSINESS ENGLISH" },
    { value: "9", label: "POSTMAN _ RECEIVING STAFF AT CUSTOMER'S HOUSE" },
    { value: "10", label: "SALES CONSULTANT" },
    { value: "11", label: "HEAD" },
    { value: "12", label: "AIR TICKET SALES STAFF" },
    { value: "13", label: "PRESENTER" },
    { value: "14", label: "COMMUNE CULTURAL POST OFFICE" },
    { value: "15", label: "KITCHEN - CANTAIN CONTRACTOR" },
    { value: "16", label: "PROCESSING DEPARTMENT" },
    { value: "17", label: "GUARANTEE" },
    { value: "18", label: "SALES STAFF" },
]

const EditHstvPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [isConfirmVisible, setConfirmVisible] = useState(false);
    const [valueIndustry, setValueIndustry] = useState<string | "">(initialFormValues.industry || "");
    const [formData, setFormData] = useState({...initialFormValues, industry: valueIndustry});

    const navigate = useNavigate()

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.jobPosition.trim()) newErrors.jobPosition = "Vị trí công việc không được để trống";
        if (!formData.jobTitle.trim()) newErrors.jobTitle = "Tên công việc không được để trống";
        if (!formData.industry.trim()) newErrors.industry = "Ngành nghề không được để trống";
        if (!formData.salary.trim()) newErrors.salary = "Mức lương không được để trống";
        if (!formData.culture.trim()) newErrors.culture = "Văn hóa không được để trống";
        if (!formData.degree.trim()) newErrors.degree = "Văn bằng không được để trống";
        if (!formData.experience.trim()) newErrors.experience = "Kinh nghiệm làm việc không được để trống";

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
        
        navigate('/hstv')
    }

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Cập nhật thông tin hồ sơ" />
            <Box>
                <Box p={4} py={6} className="form form-account bg-white w-[100%]">
                    <SelectNormal
                        label="Vị trí công việc"
                        value={formData.jobPosition}
                        required
                        error={errors.jobPosition}
                        onChange={(value) => handleInputChange("jobPosition", value)}
                        options={[
                            { value: "1", title: "Sinh viên / Thực tập sinh" },
                            { value: "2", title: "Nhân viên / Chuyên viên" },
                            { value: "3", title: "Trưởng nhóm / Giám sát" },
                            { value: "4", title: "Quản lý" },
                            { value: "5", title: "Giám đốc" },
                            { value: "8", title: "Công Nhân" }
                        ]}
                    />

                    <InputField
                        label="Tên công việc"
                        type="text"
                        value={formData.jobTitle}
                        required
                        error={errors.jobTitle}
                        onChange={(value) => handleInputChange("jobTitle", value)}
                    />

                    <SearchableSelect
                        label="Ngành nghề"
                        required
                        options={optionsIndustry}
                        selectedValue={valueIndustry}
                        setSelectedValue={setValueIndustry}
                        onChange={(value) => handleInputChange("industry", value)}
                        errors={errors.industry}
                    />

                    <SelectNormal
                        label="Mức lương"
                        value={formData.salary}
                        required
                        error={errors.salary}
                        onChange={(value) => handleInputChange("salary", value)}
                        options={[
                            { value: "0", title: "Thỏa thuận" },
                            { value: "5", title: "Từ 5-7 triệu" },
                            { value: "7", title: "Từ 7-10 triệu" },
                            { value: "10", title: "Từ 10-15 triệu" },
                            { value: "15", title: "Từ 15-20 triệu" },
                            { value: "20", title: "Trên 20 triệu" }
                        ]}
                    />

                    <SelectNormal
                        label="Văn hóa"
                        value={formData.culture}
                        required
                        error={errors.culture}
                        onChange={(value) => handleInputChange("culture", value)}
                        options={[
                            { value: "1", title: "1/12" },
                            { value: "2", title: "2/12" },
                            { value: "3", title: "3/12" },
                            { value: "4", title: "4/12" },
                            { value: "5", title: "5/12" },
                            { value: "6", title: "6/12" },
                            { value: "7", title: "7/12" },
                            { value: "8", title: "8/12" },
                            { value: "9", title: "9/12" },
                            { value: "10", title: "10/12" },
                            { value: "11", title: "11/12" },
                            { value: "12", title: "12/12" }
                        ]}
                    />

                    <SelectNormal
                        label="Tin học"
                        value={formData.informationTechnology}
                        error={errors.informationTechnology}
                        onChange={(value) => handleInputChange("informationTechnology", value)}
                        options={[
                            { value: "15", title: "Tin học A" },
                            { value: "16", title: "Tin học B" },
                            { value: "17", title: "Tin học văn phòng" },
                            { value: "18", title: "Chứng chỉ kỷ năng CNTT" },
                            { value: "19", title: "Chứng chỉ ứng dụng CNTT Cơ bản" },
                            { value: "20", title: "Chứng chỉ ứng dụng CNTT nâng cao" },
                            { value: "21", title: "KTV Tin học" },
                            { value: "22", title: "Tin học căn bản" },
                            { value: "26", title: "Cử nhân" }
                        ]}
                    />

                    <SelectNormal
                        label="Ngoại ngữ"
                        value={formData.language}
                        error={errors.language}
                        onChange={(value) => handleInputChange("language", value)}
                        options={[
                            { value: "1", title: "Tiếng Anh B" },
                            { value: "2", title: "Tiếng Nhật N3" },
                            { value: "3", title: "Tiếng Anh B2" },
                            { value: "4", title: "Tiếng Anh B" },
                            { value: "5", title: "Tiếng Anh A2" },
                            { value: "6", title: "Tiếng Anh C1" },
                            { value: "7", title: "Tiếng Nhật N4" },
                            { value: "8", title: "Tiếng Trung" },
                            { value: "9", title: "Tiếng Anh A" },
                            { value: "10", title: "Tiếng Anh C" },
                            { value: "11", title: "Tiếng Anh C" },
                            { value: "12", title: "Tiếng Anh A" },
                            { value: "13", title: "Tiếng Nhật" },
                            { value: "14", title: "TOEIC" }
                        ]}
                    />

                    <SelectNormal
                        label="Văn bằng"
                        required
                        value={formData.degree}
                        error={errors.degree}
                        onChange={(value) => handleInputChange("degree", value)}
                        options={[
                            { value: "0", title: "CNKT không bằng" },
                            { value: "1", title: "Giấy chứng nhận" },
                            { value: "2", title: "Sơ cấp" },
                            { value: "3", title: "Trung cấp" },
                            { value: "4", title: "Cao đẳng" },
                            { value: "5", title: "Kỹ sư" },
                            { value: "6", title: "Cử nhân" },
                            { value: "7", title: "Thạc sỹ" },
                            { value: "8", title: "Tiến sỹ" }
                        ]}
                    />

                    <InputField
                        label="Kinh nghiệm làm việc"
                        type="text"
                        value={formData.experience}
                        required
                        error={errors.experience}
                        onChange={(value) => handleInputChange("experience", value)}
                    />

                    <InputField
                        label="Kỹ năng"
                        type="text"
                        value={formData.skill}
                        error={errors.skill}
                        onChange={(value) => handleInputChange("skill", value)}
                    />

                    <InputField
                        label="Ưu điểm"
                        type="text"
                        value={formData.advantage}
                        error={errors.advantage}
                        onChange={(value) => handleInputChange(".advantage", value)}
                    />

                    <InputField
                        label="Khuyết điểm"
                        type="text"
                        value={formData.defect}
                        error={errors.defect}
                        onChange={(value) => handleInputChange(".defect", value)}
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

export default EditHstvPage