import React from "react";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";
import { Section } from "components/section";
import { Icon } from "@iconify/react";
import { Divider } from "components/divider";


type ItemInforProps = {
  label: string,
  value?: string
}

const ItemInfor: React.FC<ItemInforProps> = ({ label, value }) => {
  return (
    <Text size="small" className="mb-2"><span className="font-medium">- {label}:</span> {value || 'không có'}</Text>
  )
}

const DetailEmploy: React.FunctionComponent = () => {

  return (
    <Page className="detail-job relative flex-1 flex flex-col bg-white pb-[96px]">
      <Header title="Chi tiết hồ sơ" />
      <Box className="flex-1 overflow-auto">
        <Section title="" padding="none">
          <Box p={4} pb={6}>
            <Box>
              <div className="flex flex-col items-start gap-3">
                <div className="flex justify-center w-[100%]">
                  <img className="w-[100px] h-auto object-cover" src="http://vieclamlongan.vn/uploads/images/Avata/noimage.jpg" alt="Nguyễn Văn A" />
                </div>
                <div className="flex-1 w-[100%]">
                  <Text.Title size="large" className="mb-3 text-center">Nguyễn Văn A</Text.Title>
                  <div className="mt-2">
                    <Text size="small" className="text-[#555555]"><span className="font-medium mb-2">Công việc:</span> Hành chính nhân sự. Chỉnh lý tài liệu</Text>
                    <Text size="small" className="text-[#555555]"><span className="font-medium mb-2">Mức lương mong muốn:</span> Thỏa thuận</Text>
                  </div>
                </div>
              </div>

            </Box>
          </Box>
          <Divider />
          <Box>
            <Box p={4} className="text-[#555555]">
              <Box mt={3}>
                <ul className="pb-4">
                  <li className="flex items-start gap-3 mb-4">
                    <Icon fontSize={28} icon='lets-icons:date-fill' />
                    <div>
                      <Text size="small" className="uppercase mb-1 text-[#949697]">Ngày tạo</Text>
                      <Text size="small">06/12/2024</Text>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 mb-4">
                    <Icon fontSize={28} icon='ion:male-female' />
                    <div>
                      <Text size="small" className="uppercase mb-1 text-[#949697]">Giới tính</Text>
                      <Text size="small">Nữ</Text>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 mb-4">
                    <Icon fontSize={28} icon='ix:work-case-filled' />
                    <div>
                      <Text size="small" className="uppercase mb-1 text-[#949697]">Chuyên Ngành</Text>
                      <Text size="small">KẾ TOÁN</Text>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 mb-4">
                    <Icon fontSize={28} icon='ix:work-case-filled' />
                    <div>
                      <Text size="small" className="uppercase mb-1 text-[#949697]">Kinh nghiệm</Text>
                      <Text size="small">Trên 5 năm</Text>
                    </div>
                  </li>
                </ul>
              </Box>
              <Box mt={3}>
                <Text.Title className="uppercase mb-3">Thông tin hồ sơ</Text.Title>
                <ItemInfor label="Trình độ văn hóa" value="12/12" />
                <ItemInfor label="Trình độ ngoại ngữ" value="" />
                <ItemInfor label="Trình độ Tin học" value="Chứng chỉ ứng dụng CNTT Cơ bản" />
                <ItemInfor label="Trình độ Văn bằng" value="Cử nhân" />
              </Box>
              <Box mt={3}>
                <Text.Title className="uppercase mb-3">Giới thiệu chung</Text.Title>
                <ItemInfor label="Kinh nghiệm" value="Thực tập sinh Hành chính quản trị tại Tổng Công ty Điện lực miền Nam" />
                <ItemInfor label="Kỹ năng" value="Kỹ năng nắm bắt tâm lý" />
                <ItemInfor label="Ưu điểm" value="Thích ứng nhanh" />
                <ItemInfor label="Khuyết điểm" value="Ngoại ngữ không tốt lắm" />
              </Box>
            </Box>
          </Box>
        </Section>
      </Box>
    </Page>
  );
};

export default DetailEmploy;