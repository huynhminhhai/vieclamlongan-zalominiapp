import { Icon } from "@iconify/react";
import { SearchableSelect } from "components/form";
import FormDatePicker from "components/form/DatePicker";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import ConfirmModal from "components/ModalConfirm";
import React, { useState } from "react";
import { pickFile } from "service/zalo";
import { Avatar, Box, Button, Header, Page, useSnackbar } from "zmp-ui";

const initialFormValues = {
    phoneNumber: "0848551555",
    fullName: "Huỳnh Minh Hải",
    email: "huynhminhhai.1555@gmail.com",
    cardNumber: "080200009096",
    cardNumberPlace: "Long An",
    gender: "1",
    address: "Bến Lức, Long An",
    cardNumberDate: "08/02/2023",
    birthDate: "12/12/2000",
    specialization: "",
    experience: "",
    province: "",
    district: "",
    ward: "",
    status: "",
    certificate: ""

}

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

const optionWard = [
    { value: "1", label: "Phường Cống Vị" },
    { value: "2", label: "Phường Điện Biên" },
    { value: "3", label: "Phường Đội Cấn" },
    { value: "4", label: "Phường Giảng Võ" },
    { value: "5", label: "Phường Kim Mã" },
    { value: "6", label: "Phường Liễu Giai" },
    { value: "7", label: "Phường Ngọc Hà" },
    { value: "8", label: "Phường Ngọc Khánh" },
    { value: "9", label: "Phường Nguyễn Trung Trực" },
    { value: "10", label: "Phường Phúc Xá" },
    { value: "11", label: "Phường Quán Thánh" },
    { value: "12", label: "Phường Thành Công" },
    { value: "13", label: "Phường Trúc Bạch" },
    { value: "14", label: "Phường Vĩnh Phúc" }
]

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

const optionsCertificate = [
    { value: "0", label: "CNKT không bằng" },
    { value: "1", label: "Giấy chứng nhận" },
    { value: "2", label: "Sơ cấp" },
    { value: "3", label: "Trung cấp" },
    { value: "4", label: "Cao đẳng" },
    { value: "5", label: "Kỹ sư" },
    { value: "6", label: "Cử nhân" },
    { value: "7", label: "Thạc sỹ" },
    { value: "8", label: "Tiến sỹ" }
]

const ProfileDetailPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();

    const [formData, setFormData] = useState(initialFormValues);
    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [isConfirmVisible, setConfirmVisible] = useState(false);
    const [valueProvince, setValueProvince] = useState<string | "">(initialFormValues.province || "");
    const [valueDistrict, setValueDistrict] = useState<string | "">(initialFormValues.district || "");
    const [valueWard, setValueWard] = useState<string | "">(initialFormValues.ward || "");
    const [valueStatus, setValueStatus] = useState<string | "">(initialFormValues.status || "");
    const [valueCertificate, setValueCertificate] = useState<string | "">(initialFormValues.certificate || "");

    const handleFilePick = async () => {
        pickFile({
            type: 'photo',
            maxSelectItem: 1,
            serverUploadUrl: 'http://vieclamlongan.vn/'
        })
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
    
        // Các trường yêu cầu
        const requiredFields = [
            { key: 'fullName', message: 'Họ tên không được để trống' },
            { key: 'cardNumber', message: 'CMND/CCCD không được để trống' },
            { key: 'cardNumberPlace', message: 'Nơi cấp không được để trống' },
            { key: 'gender', message: 'Chưa chọn giới tính' },
            { key: 'address', message: 'Địa chỉ không được để trống' },
            { key: 'cardNumberDate', message: 'Ngày cấp không được để trống' },
            { key: 'birthDate', message: 'Ngày sinh không được để trống' },
            { key: 'specialization', message: 'Chuyên ngành không được để trống' },
            { key: 'experience', message: 'Kinh nghiệm làm việc không được để trống' },
            { key: 'province', message: 'Tỉnh không được để trống' },
            { key: 'district', message: 'Huyện không được để trống' },
            { key: 'ward', message: 'Xã không được để trống' },
            { key: 'status', message: 'Tình trạng lao động không được để trống' },
            { key: 'certificate', message: 'Văn bằng không được để trống' }
        ];
    
        // Kiểm tra các trường yêu cầu
        requiredFields.forEach(({ key, message }) => {
            if (!formData[key as keyof typeof formData]?.trim()) {
                newErrors[key] = message;
            }
        });
    
        // Kiểm tra biểu thức chính quy cho số điện thoại và email
        if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Số điện thoại không hợp lệ";
        }
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }
    
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
            text: "Cập nhật thông tin thành công",
            type: 'success',
            action: {
                text: "Đóng",
                close: true,
            },
            duration: 5000,
        });
        // setFormData(initialFormValues)
        // setValueCertificate("")
        // setValueStatus("")
        // setValueProvince("")
        // setValueDistrict("")
        // setValueWard("")
    }

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Thông tin người dùng" />
            <Box>
                <Box p={4} py={6} className="form form-profile bg-white w-[100%]">
                    <Box
                        mb={6}
                    >
                        <div className="flex justify-center items-center relative">
                            <Box
                                onClick={() => handleFilePick()}
                            >
                                <Avatar size={140} src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
                                <div
                                    className="absolute bottom-0 left-[60%] border-[1px] bg-white p-3 rounded-full"
                                >
                                    <Icon fontSize={24} icon='mdi:camera-outline' />
                                </div>
                            </Box>
                        </div>
                    </Box>

                    <InputField
                        label="Tên người lao động"
                        type="text"
                        value={formData.fullName}
                        required
                        error={errors.fullName}
                        onChange={(value) => handleInputChange("fullName", value)}
                    />

                    <FormDatePicker
                        label="Ngày sinh"
                        value={formData.birthDate}
                        required
                        error={errors.birthDate}
                        dateFormat="dd/mm/yyyy"
                        onChange={(value) => handleInputChange("birthDate", value)}
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

                    <InputField
                        label="CMND/CCCD"
                        type="number"
                        value={formData.cardNumber}
                        required
                        error={errors.cardNumber}
                        onChange={(value) => handleInputChange("cardNumber", value)}
                    />

                    <InputField
                        label="Nơi cấp"
                        type="text"
                        value={formData.cardNumberPlace}
                        required
                        error={errors.cardNumberPlace}
                        onChange={(value) => handleInputChange("cardNumberPlace", value)}
                    />

                    <FormDatePicker
                        label="Ngày cấp"
                        value={formData.cardNumberDate}
                        required
                        error={errors.cardNumberDate}
                        dateFormat="dd/mm/yyyy"
                        onChange={(value) => handleInputChange("cardNumberDate", value)}
                    />

                    <InputField
                        label="Email"
                        type="text"
                        value={formData.email}
                        required
                        error={errors.email}
                        onChange={(value) => handleInputChange("email", value)}
                    />

                    <InputField
                        label="Số điện thoại"
                        type="number"
                        value={formData.phoneNumber}
                        required
                        error={errors.phoneNumber}
                        onChange={(value) => handleInputChange("phoneNumber", value)}
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

                    <SearchableSelect
                        label="Xã"
                        placeholder="--Chọn xã--"
                        required
                        options={optionWard}
                        selectedValue={valueWard}
                        setSelectedValue={setValueWard}
                        onChange={(value) => handleInputChange("ward", value)}
                        errors={errors.ward}
                    />

                    <InputField
                        label="Chuyên ngành"
                        type="text"
                        value={formData.specialization}
                        required
                        error={errors.specialization}
                        onChange={(value) => handleInputChange("specialization", value)}
                    />

                    <InputField
                        label="Kinh nghiệm làm việc"
                        type="text"
                        value={formData.experience}
                        required
                        error={errors.experience}
                        onChange={(value) => handleInputChange("experience", value)}
                    />

                    <SearchableSelect
                        label="Tình trạng lao động"
                        placeholder="--Chọn tình trạng--"
                        required
                        options={optionsStatus}
                        selectedValue={valueStatus}
                        setSelectedValue={setValueStatus}
                        onChange={(value) => handleInputChange("status", value)}
                        errors={errors.status}
                    />

                    <SearchableSelect
                        label="Văn bằng"
                        placeholder="--Chọn văn bằng--"
                        required
                        options={optionsCertificate}
                        selectedValue={valueCertificate}
                        setSelectedValue={setValueCertificate}
                        onChange={(value) => handleInputChange("certificate", value)}
                        errors={errors.certificate}
                    />

                    <Box py={4}>
                        <Button
                            size="medium"
                            onClick={() => {
                                handleSubmit()
                            }}
                            fullWidth
                        >
                            Cập nhật thông tin
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn cập nhật thông tin không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </Page>
    );
};

export default ProfileDetailPage;