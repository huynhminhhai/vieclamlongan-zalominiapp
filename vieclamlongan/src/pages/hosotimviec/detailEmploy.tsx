import React from "react";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";
import { Section } from "components/section";
import { Icon } from "@iconify/react";
import JobItem from "components/job/JobItem";
import { Divider } from "components/divider";

const DetailEmploy: React.FunctionComponent = () => {

  return (
    <Page className="detail-job relative flex-1 flex flex-col bg-white pb-[96px]">
      <Header title="Chi tiết hồ sơ" />
      <Box className="flex-1 overflow-auto">
        <Section title="" padding="none">
          <Box p={4} pb={6}>
            <Box>
              <div className="flex items-start gap-3">
                <Box>
                  <img className="w-[100px] h-auto object-cover" src="http://vieclamlongan.vn/uploads/images/Avata/noimage.jpg" alt="Nguyễn Văn A" />
                </Box>
                <div className="flex-1">
                  <Text.Title size="large" className="mb-1">Nguyễn Văn A</Text.Title>
                  <Text size="small" bold className="text-[#005aff]">CÔNG TY TNHH PRO ALLIANCE COSMETIC</Text>
                  <div className="mt-2">
                    <div className="flex items-start gap-1 text-[#5d5d5d] mb-1">
                      <Icon className="mt-[1px]" icon='ic:baseline-email' />
                      <Text className="flex-1" size="xSmall">nguyenvana@gmail.com</Text>
                    </div>
                    <div className="flex items-start gap-1 text-[#5d5d5d] mb-1">
                      <Icon className="mt-[1px]" icon='mingcute:birthday-2-fill' />
                      <Text className="flex-1" size="xSmall">12/12/2000</Text>
                    </div>
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
                <Text.Title className="uppercase">Số điện thoại</Text.Title>
                <Text className="flex-1 py-4 pt-2" size="small">0848551444</Text>
              </Box>
              <Box mt={3}>
                <Text.Title className="uppercase">Chuyên ngành</Text.Title>
                <Text className="flex-1 py-4 pt-2" size="small">KẾ TOÁN</Text>
              </Box>
              <Box mt={3}>
                <Text.Title className="uppercase">Kinh nghiệm</Text.Title>
                <Text className="flex-1 py-4 pt-2" size="small">Trên 5 năm</Text>
              </Box>
              <Box mt={3}>
                <Text.Title className="uppercase">Địa chỉ</Text.Title>
                <Text className="flex-1 py-4 pt-2" size="small">Đường số 5, khu dân cư Kiến Phát, Phường 6, Tp Tân An</Text>
              </Box>
            </Box>
          </Box>
        </Section>
      </Box>
    </Page>
  );
};

export default DetailEmploy;