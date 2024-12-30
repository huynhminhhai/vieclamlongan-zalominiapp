import { Icon } from "@iconify/react";
import { SearchableSelect } from "components/form";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import ConfirmModal from "components/ModalConfirm";
import React, { useState } from "react";
import { pickFile } from "service/zalo";
import { Avatar, Box, Button, Header, Page, useSnackbar } from "zmp-ui";

const initialFormValues = {
    companyName: "Mixi Corp",
    taxCode: "0313898409",
    companyCode: "0313898409",
    contactPerson: "Nguyễn Văn Anh",
    position: "Nhân sự",
    contactPersonPhone: "0909372333",
    address: "Đức Hòa",
    business: "Nông nghiệp",
    amountEmploy: "10",
    yearOperation: "2022",
    website: "",
    businessType: "5",
    economic: "A1",
    email: "hmh551555@gmail.com"
}

const optionsEconomic = [
    { value: "A1", label: "Nông nghiệp và hoạt động dịch vụ có liên quan" },
    { value: "A11", label: "Trồng cây hàng năm" },
    { value: "A111", label: "Trồng lúa" },
    { value: "A112", label: "Trồng ngô và cây lương thực có hạt khác" },
    { value: "A113", label: "Trồng cây lấy củ có chất bột" },
    { value: "A114", label: "Trồng cây mía" },
    { value: "A115", label: "Trồng cây thuốc lá, thuốc lào" },
    { value: "A116", label: "Trồng cây lấy sợi" },
    { value: "A117", label: "Trồng cây có hạt chứa dầu" },
    { value: "A118", label: "Trồng rau, đậu các loại và trồng hoa, cây cảnh" },
    { value: "A119", label: "Trồng cây hàng năm khác" },
    { value: "A12", label: "Trồng cây lâu năm" },
    { value: "A121", label: "Trồng cây ăn quả" },
    { value: "A122", label: "Trồng cây lấy quả chứa dầu" },
    { value: "A123", label: "Trồng cây điều" },
    { value: "A124", label: "Trồng cây hồ tiêu" },
    { value: "A125", label: "Trồng cây cao su" },
    { value: "A126", label: "Trồng cây cà phê" },
    { value: "A127", label: "Trồng cây chè" },
    { value: "A128", label: "Trồng cây gia vị, cây dược liệu" },
    { value: "A129", label: "Trồng cây lâu năm khác" },
    { value: "A130", label: "Nhân và chăm sóc cây giống nông nghiệp" },
    { value: "A14", label: "Chăn nuôi" },
    { value: "A141", label: "Chăn nuôi trâu, bò" },
    { value: "A142", label: "Chăn nuôi ngựa, lừa, la" },
    { value: "A144", label: "Chăn nuôi dê, cừu" },
    { value: "A145", label: "Chăn nuôi lợn" },
    { value: "A146", label: "Chăn nuôi gia cầm" },
    { value: "A149", label: "Chăn nuôi khác" },
    { value: "A150", label: "Trồng trọt, chăn nuôi hỗn hợp" },
    { value: "A16", label: "Hoạt động dịch vụ nông nghiệp" },
    { value: "A161", label: "Hoạt động dịch vụ trồng trọt" },
    { value: "A162", label: "Hoạt động dịch vụ chăn nuôi" },
    { value: "A163", label: "Hoạt động dịch vụ sau thu hoạch" },
    { value: "A164", label: "Xử lý hạt giống để nhân giống" },
    { value: "A170", label: "Săn bắt, đánh bẫy và hoạt động dịch vụ có liên quan" },
    { value: "A2", label: "Lâm nghiệp và hoạt động dịch vụ có liên quan" },
    { value: "A210", label: "Trồng rừng và chăm sóc rừng" },
    { value: "A22", label: "Khai thác gỗ và lâm sản khác" },
    { value: "A221", label: "Khai thác gỗ" },
    { value: "A222", label: "Khai thác lâm sản khác trừ gỗ" },
    { value: "A230", label: "Thu nhặt sản phẩm từ rừng không phải gỗ và lâm sản khác" },
    { value: "A240", label: "Hoạt động dịch vụ lâm nghiệp" },
    { value: "A3", label: "Khai thác, nuôi trồng thuỷ sản" },
    { value: "A31", label: "Khai thác thuỷ sản" },
    { value: "A311", label: "Khai thác thuỷ sản biển" },
    { value: "A312", label: "Khai thác thuỷ sản nội địa" },
    { value: "A32", label: "Nuôi trồng thuỷ sản" },
    { value: "A321", label: "Nuôi trồng thuỷ sản biển" },
    { value: "A322", label: "Nuôi trồng thuỷ sản nội địa" },
    { value: "A323", label: "Sản xuất giống thuỷ sản" },
    { value: "AA", label: "NÔNG NGHIỆP, LÂM NGHIỆP VÀ THUỶ SẢN" },
    { value: "B5", label: "Khai thác than cứng và than non" },
    { value: "B510", label: "Khai thác và thu gom than cứng" },
    { value: "B520", label: "Khai thác và thu gom than non" },
    { value: "B6", label: "Khai thác dầu thô và khí đốt tự nhiên" },
    { value: "B610", label: "Khai thác dầu thô" },
    { value: "B620", label: "Khai thác khí đốt tự nhiên" },
    { value: "B7", label: "Khai thác quặng kim loại" },
    { value: "B710", label: "Khai thác quặng sắt" },
    { value: "B72", label: "Khai thác quặng không chứa sắt (trừ quặng kim loại quý hiếm)" },
    { value: "B721", label: "Khai thác quặng uranium và quặng thorium" },
    { value: "B722", label: "Khai thác quặng kim loại khác không chứa sắt" },
    { value: "B730", label: "Khai thác quặng kim loại quí hiếm" },
    { value: "B8", label: "Khai khoáng khác" },
    { value: "B810", label: "Khai thác đá, cát, sỏi, đất sét" },
    { value: "B89", label: "Khai khoáng chưa được phân vào đâu" },
    { value: "B891", label: "Khai thác khoáng hoá chất và khoáng phân bón" },
    { value: "B892", label: "Khai thác và thu gom than bùn" },
    { value: "B893", label: "Khai thác muối" },
    { value: "B899", label: "Khai khoáng khác chưa được phân vào đâu" },
    { value: "B9", label: "Hoạt động dịch vụ hỗ trợ khai thác mỏ và quặng" },
    { value: "B910", label: "Hoạt động dịch vụ hỗ trợ khai thác dầu thô và khí tự nhiên" },
    { value: "B990", label: "Hoạt động dịch vụ hỗ trợ khai thác mỏ và quặng khác" },
    { value: "BB", label: "KHAI KHOÁNG" },
    { value: "C10", label: "Sản xuất chế biến thực phẩm" },
    { value: "C1010", label: "Chế biến, bảo quản thịt và các sản phẩm từ thịt" },
    { value: "C1020", label: "Chế biến, bảo quản thuỷ sản và các sản phẩm từ thuỷ sản" },
    { value: "C1030", label: "Chế biến và bảo quản rau quả" },
    { value: "C1040", label: "Sản xuất dầu, mỡ động, thực vật" },
    { value: "C1050", label: "Chế biến sữa và các sản phẩm từ sữa" },
    { value: "C106", label: "Xay xát và sản xuất bột" },
    { value: "C1061", label: "Xay xát và sản xuất bột thô" },
    { value: "C1062", label: "Sản xuất tinh bột và các sản phẩm từ tinh bột" },
    { value: "C107", label: "Sản xuất thực phẩm khác" },
    { value: "C1071", label: "Sản xuất các loại bánh từ bột" },
    { value: "C1072", label: "Sản xuất đường" },
    { value: "C1073", label: "Sản xuất ca cao, sôcôla và mứt kẹo" },
    { value: "C1074", label: "Sản xuất mì ống, mỳ sợi và sản phẩm tương tự" },
    { value: "C1075", label: "Sản xuất món ăn, thức ăn chế biến sẵn" },
    { value: "C1079", label: "Sản xuất thực phẩm khác chưa được phân vào đâu" },
    { value: "C1080", label: "Sản xuất thức ăn gia súc, gia cầm và thuỷ sản" },
    { value: "C11", label: "Sản xuất đồ uống" },
    { value: "C110", label: "Sản xuất nước khoáng, nước giải khát" },
    { value: "C12", label: "Sản xuất thuốc lá" },
    { value: "C13", label: "Sản xuất sợi dệt" },
    { value: "C14", label: "Sản xuất vải dệt" },
    { value: "C15", label: "Sản xuất sản phẩm từ da và các sản phẩm có liên quan" },
    { value: "C16", label: "Sản xuất gỗ và các sản phẩm từ gỗ, tre, nứa" },
    { value: "C17", label: "Sản xuất giấy và các sản phẩm từ giấy" },
    { value: "C18", label: "In, sao chép bản ghi âm thanh, hình ảnh" },
    { value: "C19", label: "Sản xuất các sản phẩm từ khoáng phi kim loại" },
    { value: "C20", label: "Sản xuất sản phẩm hoá chất và sản phẩm hoá chất" },
    { value: "C21", label: "Sản xuất sản phẩm thuốc, hoá dược và dược liệu" },
    { value: "C22", label: "Sản xuất cao su và plastic" },
    { value: "C23", label: "Sản xuất sản phẩm khác từ khoáng phi kim loại" },
    { value: "C24", label: "Sản xuất kim loại" },
    { value: "C25", label: "Sản xuất sản phẩm từ kim loại đúc sẵn" },
    { value: "C26", label: "Sản xuất sản phẩm điện tử và máy vi tính" },
    { value: "C27", label: "Sản xuất máy móc, thiết bị nông, lâm nghiệp" },
];

const ProfileDNDetailPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();

    const [formData, setFormData] = useState(initialFormValues);
    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [valueEconomic, setValueEconomic] = useState<string | "">(initialFormValues.economic || "");
    const [isConfirmVisible, setConfirmVisible] = useState(false);

    const handleFilePick = async () => {
        pickFile({
            type: 'photo',
            maxSelectItem: 1,
            serverUploadUrl: 'http://vieclamlongan.vn/'
        })
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!formData.companyName.trim()) newErrors.companyName = "Tên doanh nghiệp không được để trống";

        if (!formData.taxCode.trim()) newErrors.taxCode = "Mã số thuế không được để trống";

        if (!formData.companyCode.trim()) newErrors.companyCode = "Mã số /Số Giấy phép không được để trống";

        if (!formData.contactPerson.trim()) newErrors.contactPerson = "Người liên hệ không được để trống";

        if (!formData.position.trim()) newErrors.position = "Chức vụ không được để trống";

        if (!/^[0-9]{10}$/.test(formData.contactPersonPhone))
            newErrors.contactPersonPhone = "Số điện thoại không hợp lệ";

        if (!formData.address.trim()) newErrors.address = "Địa chỉ không được để trống";

        if (!formData.business.trim()) newErrors.business = "Lĩnh vực kinh doanh/hoạt động không được để trống";

        if (!formData.amountEmploy.trim()) newErrors.amountEmploy = "Tổng số lao động không được để trống";

        if (!formData.businessType.trim()) newErrors.businessType = "Loại hình doanh nghiệp không được để trống";

        if (!formData.yearOperation.trim()) newErrors.yearOperation = "Năm hoạt động không được để trống";

        if (!formData.website.trim()) newErrors.website = "Website không được để trống";

        if (!formData.economic.trim()) newErrors.economic = "Ngành kinh tế không được để trống";

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
    }

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Thông tin doanh nghiệp" />
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
                        label="Tên doanh nghiệp"
                        type="text"
                        value={formData.companyName}
                        required
                        error={errors.companyName}
                        onChange={(value) => handleInputChange("companyName", value)}
                    />

                    <InputField
                        label="Mã số thuế"
                        type="number"
                        value={formData.taxCode}
                        required
                        error={errors.taxCode}
                        onChange={(value) => handleInputChange("taxCode", value)}
                    />

                    <InputField
                        label="Mã số doanh nghiệp/Số Giấy phép thành lập"
                        type="number"
                        value={formData.companyCode}
                        required
                        error={errors.companyCode}
                        onChange={(value) => handleInputChange("companyCode", value)}
                    />

                    <InputField
                        label="Người liên hệ"
                        type="text"
                        value={formData.contactPerson}
                        required
                        error={errors.contactPerson}
                        onChange={(value) => handleInputChange("contactPerson", value)}
                    />

                    <InputField
                        label="Chức vụ"
                        type="text"
                        value={formData.position}
                        required
                        error={errors.position}
                        onChange={(value) => handleInputChange("position", value)}
                    />

                    <InputField
                        label="Số điện thoại người liên hệ"
                        type="number"
                        value={formData.contactPersonPhone}
                        required
                        error={errors.contactPersonPhone}
                        onChange={(value) => handleInputChange("contactPersonPhone", value)}
                    />

                    <InputField
                        label="Địa chỉ"
                        type="text"
                        value={formData.address}
                        required
                        error={errors.address}
                        onChange={(value) => handleInputChange("address", value)}
                    />

                    <InputField
                        label="Lĩnh vực kinh doanh/hoạt động"
                        type="text"
                        value={formData.business}
                        required
                        error={errors.business}
                        onChange={(value) => handleInputChange("business", value)}
                    />

                    <SelectNormal
                        label="Loại hình doanh nghiệp"
                        value={formData.businessType}
                        required
                        placeholder="Chọn một giá trị"
                        error={errors.businessType}
                        onChange={(value) => handleInputChange("businessType", value)}
                        options={[
                            { value: "0", title: "Công ty Trách nhiệm hữu hạn" },
                            { value: "1", title: "Doanh nghiệp nhà nước" },
                            { value: "2", title: "DN có vốn đầu tư nước ngoài" },
                            { value: "3", title: "Công ty cổ phần" },
                            { value: "4", title: "DN tư nhân" },
                            { value: "5", title: "Cơ sở SXKD, Hộ kinh doanh" },
                            { value: "6", title: "Hợp tác xã" },
                            { value: "7", title: "Trung tâm" },
                        ]}
                    />

                    <SearchableSelect
                        label="Ngành kinh tế"
                        required
                        options={optionsEconomic}
                        selectedValue={valueEconomic}
                        setSelectedValue={setValueEconomic}
                        onChange={(value) => handleInputChange("economic", value)}
                        errors={errors.economic}
                    />

                    <InputField
                        label="Tổng số lao động"
                        type="number"
                        value={formData.amountEmploy}
                        required
                        error={errors.amountEmploy}
                        onChange={(value) => handleInputChange("amountEmploy", value)}
                    />

                    <InputField
                        label="Năm hoạt động"
                        type="number"
                        value={formData.yearOperation}
                        required
                        error={errors.yearOperation}
                        onChange={(value) => handleInputChange("yearOperation", value)}
                    />

                    <InputField
                        label="Website"
                        type="text"
                        value={formData.website}
                        required
                        error={errors.website}
                        onChange={(value) => handleInputChange("website", value)}
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

export default ProfileDNDetailPage;