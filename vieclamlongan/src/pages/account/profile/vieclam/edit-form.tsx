import { SearchableSelect } from "components/form";
import FormDatePicker from "components/form/DatePicker";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import TextEditor from "components/form/textEditor";
import ConfirmModal from "components/ModalConfirm";
import Editor from "quill/core/editor";
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Box, Button, Header, Page, useNavigate, useSnackbar } from "zmp-ui"

const initialFormValues = {
    jobTitle: "",
    numberPerson: "",
    jobPosition: "",
    industry: "",
    gender: "",
    salary: "",
    ageFrom: "",
    ageTo: "",
    deadline: "",
    workingTime: "",
    location: "",
    province: "",
    district: "",
    jobDesc: "",
    experience: "",
    qualification: "",
    benefits: ""
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

const optionsProvince = [
    { value: "1", label: "Hà Nội" },
    { value: "2", label: "TP Hồ Chí Minh" },
    { value: "3", label: "Đà Nẵng" },
    { value: "4", label: "Hải Phòng" },
    { value: "5", label: "Cần Thơ" },
    { value: "6", label: "An Giang" },
    { value: "7", label: "Bà Rịa - Vũng Tàu" },
    { value: "8", label: "Bắc Giang" },
    { value: "9", label: "Bắc Kạn" },
    { value: "10", label: "Bạc Liêu" },
    { value: "11", label: "Bắc Ninh" },
    { value: "12", label: "Bến Tre" },
    { value: "13", label: "Bình Định" },
    { value: "14", label: "Bình Dương" },
    { value: "15", label: "Bình Phước" },
    { value: "16", label: "Bình Thuận" },
    { value: "17", label: "Cà Mau" },
    { value: "18", label: "Cao Bằng" },
    { value: "19", label: "Đắk Lắk" },
    { value: "20", label: "Đắk Nông" },
    { value: "21", label: "Điện Biên" },
    { value: "22", label: "Đồng Nai" },
    { value: "23", label: "Đồng Tháp" },
    { value: "24", label: "Gia Lai" },
    { value: "25", label: "Hà Giang" },
    { value: "26", label: "Hà Nam" },
    { value: "27", label: "Hà Tĩnh" },
    { value: "28", label: "Hải Dương" },
    { value: "29", label: "Hậu Giang" },
    { value: "30", label: "Hòa Bình" },
    { value: "31", label: "Hưng Yên" },
    { value: "32", label: "Khánh Hòa" },
    { value: "33", label: "Kiên Giang" },
    { value: "34", label: "Kon Tum" },
    { value: "35", label: "Lai Châu" },
    { value: "36", label: "Lâm Đồng" },
    { value: "37", label: "Lạng Sơn" },
    { value: "38", label: "Lào Cai" },
    { value: "39", label: "Long An" },
    { value: "40", label: "Nam Định" },
    { value: "41", label: "Nghệ An" },
    { value: "42", label: "Ninh Bình" },
    { value: "43", label: "Ninh Thuận" },
    { value: "44", label: "Phú Thọ" },
    { value: "45", label: "Phú Yên" },
    { value: "46", label: "Quảng Bình" },
    { value: "47", label: "Quảng Nam" },
    { value: "48", label: "Quảng Ngãi" },
    { value: "49", label: "Quảng Ninh" },
    { value: "50", label: "Quảng Trị" },
    { value: "51", label: "Sóc Trăng" },
    { value: "52", label: "Sơn La" },
    { value: "53", label: "Tây Ninh" },
    { value: "54", label: "Thái Bình" },
    { value: "55", label: "Thái Nguyên" },
    { value: "56", label: "Thanh Hóa" },
    { value: "57", label: "Thừa Thiên Huế" },
    { value: "58", label: "Tiền Giang" },
    { value: "59", label: "Trà Vinh" },
    { value: "60", label: "Tuyên Quang" },
    { value: "61", label: "Vĩnh Long" },
    { value: "62", label: "Vĩnh Phúc" },
    { value: "63", label: "Yên Bái" }
]

const optionsDistrict = [
    { value: "1", label: "Ba Đình" },
    { value: "2", label: "Hoàn Kiếm" },
    { value: "3", label: "Tây Hồ" },
    { value: "4", label: "Long Biên" },
    { value: "5", label: "Cầu Giấy" },
    { value: "6", label: "Đống Đa" },
    { value: "7", label: "Hai Bà Trưng" },
    { value: "8", label: "Hoàng Mai" },
    { value: "9", label: "Thanh Xuân" },
    { value: "10", label: "Sóc Sơn" },
    { value: "11", label: "Đông Anh" },
    { value: "12", label: "Gia Lâm" },
    { value: "13", label: "Nam Từ Liêm" },
    { value: "14", label: "Thanh Trì" },
    { value: "15", label: "Bắc Từ Liêm" },
    { value: "16", label: "Hà Đông" },
    { value: "17", label: "Sơn Tây" },
    { value: "18", label: "Ba Vì" },
    { value: "19", label: "Phúc Thọ" },
    { value: "20", label: "Đan Phượng" },
    { value: "21", label: "Hoài Đức" },
    { value: "22", label: "Quốc Oai" },
    { value: "23", label: "Thạch Thất" },
    { value: "24", label: "Chương Mỹ" },
    { value: "25", label: "Thanh Oai" },
    { value: "26", label: "Thường Tín" },
    { value: "27", label: "Phú Xuyên" },
    { value: "28", label: "Ứng Hòa" },
    { value: "29", label: "Mỹ Đức" }
]

const EditViecLamPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [isConfirmVisible, setConfirmVisible] = useState(false);
    const [valueIndustry, setValueIndustry] = useState<string | "">(initialFormValues.industry || "");
    const [valueProvince, setValueProvince] = useState<string | "">(initialFormValues.province || "");
    const [valueDistrict, setValueDistrict] = useState<string | "">(initialFormValues.district || "");
    const [formData, setFormData] = useState({ ...initialFormValues, industry: valueIndustry });

    useEffect(() => {
        if (id) {
            setFormData({
                jobTitle: "Software Engineer",
                numberPerson: "2",
                jobPosition: "1",
                industry: "1",
                gender: "1",
                salary: "5",
                ageFrom: "22",
                ageTo: "35",
                deadline: "12/12/2024",
                workingTime: "1",
                location: "Ho Chi Minh City",
                province: "1",
                district: "1",
                jobDesc: "<p>We are looking for a talented Software Engineer to join our team. You will be responsible for designing, developing, and maintaining software applications.</p>",
                experience: "<p>2+ years of experience in software development</p>",
                qualification: "<p>Bachelor's degree in Computer Science or related field</p>",
                benefits: "<p>Health insurance, Paid leave, Annual bonus, Training opportunities</p>"
            })
        }
    }, [id])

    useEffect(() => {
        setValueIndustry(formData.industry || "");
        setValueProvince(formData.province || "");
        setValueDistrict(formData.district || "");
    }, [formData]);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.jobPosition.trim()) newErrors.jobPosition = "Vị trí công việc không được để trống";
        if (!formData.jobTitle.trim()) newErrors.jobTitle = "Chức danh công việc không được để trống";
        if (!formData.numberPerson.trim()) newErrors.numberPerson = "Số lượng (người) không được để trống";
        if (!formData.salary.trim()) newErrors.salary = "Mức lương không được để trống";
        if (!formData.location.trim()) newErrors.location = "Địa điểm làm việc không được để trống";
        if (!formData.jobDesc.trim()) newErrors.jobDesc = "Mô tả không được để trống";
        if (!formData.qualification.trim()) newErrors.qualification = "Mục này không được để trống";
        if (!formData.experience.trim()) newErrors.experience = "Mục này không được để trống";
        if (!formData.gender.trim()) newErrors.gender = "Mục này không được để trống";
        if (!formData.ageFrom.trim()) newErrors.ageFrom = "Mục này không được để trống";
        if (!formData.ageTo.trim()) newErrors.ageTo = "Mục này không được để trống";
        if (!formData.deadline.trim()) newErrors.deadline = "Mục này không được để trống";
        if (!formData.province.trim()) newErrors.province = "Tỉnh không được để trống";
        if (!formData.district.trim()) newErrors.district = "Huyện không được để trống";
        if (!formData.industry.trim()) newErrors.industry = "Mục này không được để trống";
        if (!formData.workingTime.trim()) newErrors.workingTime = "Mục này không được để trống";


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
            <Header title="Cập nhật thông tin việc làm" />
            <Box>
                <Box p={4} py={6} className="form form-account bg-white w-[100%]">

                    <InputField
                        label="Chức danh công việc"
                        type="text"
                        value={formData.jobTitle}
                        required
                        error={errors.jobTitle}
                        onChange={(value) => handleInputChange("jobTitle", value)}
                    />

                    <InputField
                        label="Số lượng (người)"
                        type="number"
                        value={formData.numberPerson}
                        required
                        error={errors.numberPerson}
                        onChange={(value) => handleInputChange("numberPerson", value)}
                    />

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
                        label="Giới tính"
                        value={formData.gender}
                        required
                        error={errors.gender}
                        onChange={(value) => handleInputChange("gender", value)}
                        options={[
                            { value: "1", title: "Nam" },
                            { value: "2", title: "Nữ" },
                            { value: "0", title: "Nam/Nữ" },
                        ]}
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

                    <InputField
                        label="Tuổi từ"
                        type="number"
                        value={formData.ageFrom}
                        required
                        error={errors.ageFrom}
                        onChange={(value) => handleInputChange("ageFrom", value)}
                    />

                    <InputField
                        label="Tuổi đến"
                        type="number"
                        value={formData.ageTo}
                        required
                        error={errors.ageTo}
                        onChange={(value) => handleInputChange("ageTo", value)}
                    />

                    <FormDatePicker
                        label="Hạn nộp"
                        value={formData.deadline}
                        required
                        error={errors.deadline}
                        dateFormat="dd/mm/yyyy"
                        onChange={(value) => handleInputChange("deadline", value)}
                    />

                    <SelectNormal
                        label="Thời gian làm việc"
                        value={formData.workingTime}
                        required
                        error={errors.workingTime}
                        onChange={(value) => handleInputChange("workingTime", value)}
                        options={[
                            { value: "1", title: "Hành chính" },
                            { value: "2", title: "Hành chính + tăng ca" },
                            { value: "3", title: "Hành chánh hoặc theo ca" },
                            { value: "4", title: "Theo ca" },
                            { value: "5", title: "Bán thời gian" },
                            { value: "6", title: "Theo ca (8)" },
                            { value: "7", title: "Theo ca (12)" },
                        ]}
                    />

                    <InputField
                        label="Nơi làm việc"
                        type="text"
                        value={formData.location}
                        required
                        error={errors.location}
                        onChange={(value) => handleInputChange("location", value)}
                    />

                    <SearchableSelect
                        label="Tỉnh"
                        placeholder="--Chọn tỉnh--"
                        required
                        options={optionsProvince}
                        selectedValue={valueProvince}
                        setSelectedValue={setValueProvince}
                        onChange={(value) => handleInputChange("province", value)}
                        errors={errors.province}
                    />

                    <SearchableSelect
                        label="Huyện"
                        placeholder="--Chọn huyện--"
                        required
                        options={optionsDistrict}
                        selectedValue={valueDistrict}
                        setSelectedValue={setValueDistrict}
                        onChange={(value) => handleInputChange("district", value)}
                        errors={errors.district}
                    />

                    <TextEditor
                        label={"Mô tả vị trí công việc, chức danh công việc"}
                        required
                        value={formData.jobDesc}
                        onChange={(value) => handleInputChange("jobDesc", value)}
                        error={errors.jobDesc}
                    />

                    <TextEditor
                        label={"Yêu cầu về kinh nghiệm"}
                        required
                        value={formData.experience}
                        onChange={(value) => handleInputChange("experience", value)}
                        error={errors.experience}
                    />

                    <TextEditor
                        label={"Yêu cầu công việc"}
                        required
                        value={formData.qualification}
                        onChange={(value) => handleInputChange("qualification", value)}
                        error={errors.qualification}
                    />

                    <TextEditor
                        label={"Phúc lợi (nếu có)"}
                        value={formData.benefits}
                        onChange={(value) => handleInputChange("benefits", value)}
                        error={errors.benefits}
                    />

                    {/* <InputAreaField
                        label="Mô tả vị trí công việc, chức danh công việc"
                        value={formData.jobDesc}
                        required
                        error={errors.jobDesc}
                        onChange={(value) => handleInputChange("jobDesc", value)}
                    /> */}

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

export default EditViecLamPage