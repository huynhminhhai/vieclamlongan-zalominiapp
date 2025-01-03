import React, { useState } from "react";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";
import { Section } from "components/section";
import { Icon } from "@iconify/react";
import JobItem from "components/job/JobItem";
import { Divider } from "components/divider";
import JobModal from "components/ModalJob";

const DetailJob70: React.FunctionComponent = () => {

  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <Page className="detail-job relative flex-1 flex flex-col bg-white pb-[0px]">
      <Header title="Chi tiết công việc Nd70" />
      <Box className="flex-1 overflow-auto">
        <Section title="" padding="none" className="pb-[97px]">
          <Box p={4} pb={6}>
            <Box>
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center justify-center w-[100%]">
                  <img className="w-[100px] h-auto object-cover" src="http://vieclamlongan.vn/Content/SVL/v2/_next/img/tuyendung.png" alt="Chuyên gia kỹ thuật" />
                </div>
                <div className="flex-1 w-[100%]">
                  <Text.Title size="large" className="mb-1 text-center">Chuyên gia kỹ thuật</Text.Title>
                  <Text size="small" bold className="text-[#005aff] text-center">Công Ty TNHH Limao Novatex Việt Nam</Text>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-start gap-1 text-[#5d5d5d] mb-1">
                  <Icon className="mt-[1px]" icon='weui:location-filled' />
                  <Text className="flex-1" size="xSmall">Nhà xưởng E1, lô H, KCN Tân Kim, KP Tân Phước, TT Cần Giuộc</Text>
                </div>
                <div className="flex items-start gap-1 text-[#5d5d5d] mb-1">
                  <Icon className="mt-[1px]" icon='carbon:view-filled' />
                  <Text className="flex-1" size="xSmall">24 lượt xem</Text>
                </div>
                <div className="flex items-start gap-1 text-[#5d5d5d] mb-2">
                  <Icon className="mt-[1px]" icon='mingcute:time-fill' />
                  <Text className="flex-1" size="xSmall">Hạn nộp đến ngày 25/04/2025</Text>
                </div>

                <div className="flex items-center justify-start gap-2 fixed bottom-0 left-0 z-[99] bg-white w-[100%] px-4 py-6 border-t-[1px]">
                  <button
                    className="flex-1 text-[16px] text-white font-semibold bg-[#ff7d55] leading-[1] py-4 px-6 rounded-md"
                    onClick={() => setPopupVisible(true)}
                  >Nộp đơn</button>
                  <button
                    className="w-[48px] h-[48px] rounded-md border-[1px] border-[#5d5d5d] flex items-center justify-center"
                    onClick={() => console.log('saved')}
                  >
                    <Icon fontSize={24} color="#5d5d5d" icon='mdi-light:heart' />
                  </button>
                </div>
              </div>
            </Box>
          </Box>
          <Divider />
          <Box>
            <Tabs id="job-detail-tab" className="text-[#555555] job-detail-tab">
              <Tabs.Tab key="infor" label="Thông tin">
                <Box p={4}>
                  <Box mt={3}>
                    <ul className="pb-4">
                      <li className="flex items-start gap-3 mb-4">
                        <Icon fontSize={28} icon='lets-icons:date-fill' />
                        <div>
                          <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Ngày Đăng Tuyển</Text>
                          <Text size="xSmall">06/12/2024</Text>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 mb-4">
                        <Icon fontSize={28} icon='bxs:layer' />
                        <div>
                          <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Vị trí công việc</Text>
                          <Text size="xSmall">Nhà quản lý</Text>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 mb-4">
                        <Icon fontSize={28} icon='bxs:layer' />
                        <div>
                          <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Chức danh</Text>
                          <Text size="xSmall">Giám đốc điều hành</Text>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 mb-4">
                        <Icon fontSize={28} icon='lets-icons:date-fill' />
                        <div>
                          <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Thời hạn làm việc</Text>
                          <Text size="xSmall">15/06/2025 - 15/06/2027</Text>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 mb-4">
                        <Icon fontSize={28} icon='ic:baseline-people' />
                        <div>
                          <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Số lượng</Text>
                          <Text size="xSmall">2 người</Text>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 mb-4">
                        <Icon fontSize={28} icon='mdi:money' />
                        <div>
                          <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Mức lương</Text>
                          <Text size="xSmall">20.000.000 VNĐ</Text>
                        </div>
                      </li>
                    </ul>
                  </Box>
                  <Box mt={3}>
                    <Text.Title className="uppercase">Các Phúc Lợi Dành Cho Bạn</Text.Title>
                    <ul className="py-4">
                      <li className="flex items-center gap-2 mb-2">
                        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] border-[#555555]">
                          <Icon icon='ic:baseline-attach-money' />
                        </div>
                        <Text className="flex-1" size="xSmall">Theo quy định của công ty</Text>
                      </li>
                      <li className="flex items-center gap-2 mb-2">
                        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] border-[#555555]">
                          <Icon icon='solar:health-bold' />
                        </div>
                        <Text className="flex-1" size="xSmall">Bảo hiểm theo quy định Nhà Nước</Text>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] border-[#555555]">
                          <Icon icon='simple-icons:chianetwork' />
                        </div>
                        <Text className="flex-1" size="xSmall">Môi trường làm việc chuyên nghiệp, cơ hội thăng tiến</Text>
                      </li>
                    </ul>
                  </Box>
                  <Box mt={3}>
                    <Text.Title className="uppercase">Mô Tả Công Việc</Text.Title>
                    <div className="text-[13px] leading-[20px]">
                      <ul className="py-4">
                        <li className="mb-1">
                          Nghiên cứu và phân tích thị trường nước ngoài để xác định khách hàng tiềm năng và nhu cầu của họ.
                        </li>
                        <li className="mb-1">
                          Thu thập thông tin về nhân khẩu học khách hàng, chẳng hạn như giá cả, đối thủ cạnh tranh hiện tại và nhu cầu của khách hàng.
                        </li>
                        <li className="mb-1">
                          Sử dụng các thông tin thu thập được để phát triển các chiến lược và kế hoạch tiếp cận những khách hàng tiềm năng này.
                        </li>
                        <li className="mb-1">
                          Nghiên cứu và hiểu nhu cầu của khách hàng để có thể giới thiệu đúng sản phẩm hoặc dịch vụ.
                        </li>
                        <li className="mb-1">
                          Sau khi hiểu nhu cầu của khách hàng, cần đưa ra khuyến nghị về các sản phẩm hoặc dịch vụ có thể đáp ứng những nhu cầu đó.
                        </li>
                        <li className="mb-1">
                          Giải thích các tính năng và lợi ích của sản phẩm hoặc dịch vụ, đồng thời trả lời mọi câu hỏi mà khách hàng có.
                        </li>
                        <li className="mb-1">
                          Nếu khách hàng quan tâm đến sản phẩm hoặc dịch vụ, Nhân viên Kinh doanh quốc tế sẽ cần thương lượng giá cả và các điều khoản khác của việc bán hàng.
                        </li>
                        <li className="mb-1">
                          Lưu trữ thông tin các giao dịch đã hoàn tất với khách hàng quốc tế.
                        </li>
                        <li className="mb-1">
                          Soạn thảo hợp đồng bán hàng, giám sát khách hàng trong quá trình ký kết và đảm bảo rằng các thỏa thuận được ký kết theo các điều khoản quy định.
                        </li>
                        <li className="mb-1">
                          Chịu trách nhiệm báo cáo giao dịch cho cấp trên và tích cực phối hợp với các bộ phận phụ trách sản xuất và vận chuyển để đảm bảo sản phẩm được giao đến tay khách hàng trong thời gian sớm nhất.
                        </li>
                        <li className="mb-1">
                          Theo dõi và theo dõi trạng thái đơn hàng trong suốt quá trình vận chuyển.
                        </li>
                      </ul>
                    </div>
                  </Box>
                  <Box mt={3}>
                    <Text.Title className="uppercase">Yêu Cầu Công Việc</Text.Title>
                    <div className="text-[13px] leading-[20px]">
                      <ul className="py-4">
                        <li className="mb-1">
                          Trung thực, Cẩn thận, chính xác.
                        </li>
                        <li className="mb-1">
                          Chịu được áp lực công việc.
                        </li>
                        <li>
                          Trách nhiệm và sẵn sàng nhận nhiệm vụ.
                        </li>
                      </ul>
                    </div>
                  </Box>
                  <Box mt={3}>
                    <Text.Title className="uppercase">Địa Điểm Làm Việc</Text.Title>
                    <ul className="py-4">
                      <li className="flex items-center gap-2 mb-2">
                        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] border-[#555555]">
                          <Icon icon='mingcute:location-fill' />
                        </div>
                        <Text className="flex-1" size="xSmall">
                          Lô B231-B232, Đường Số 8, KCN Thái Hòa, Ấp Tân Hòa, Xã Đức Lập Hạ, Huyện Đức Hoà, Tỉnh Long An</Text>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Tabs.Tab>
              <Tabs.Tab key="company" label="Công ty">
                <Box p={4}>
                  <Box mt={3}>
                    <Text.Title className="uppercase">Giới thiệu</Text.Title>
                    <ul className="py-4">
                      <li className="mb-1">
                        <Text className="flex-1" size="xSmall">
                          Sản xuất tấm mouse xốp PU FOAM các loại và nguyên liệu làm giày
                        </Text>
                      </li>
                    </ul>
                  </Box>
                  <Box mt={3}>
                    <Text.Title className="uppercase">Địa Điểm Làm Việc</Text.Title>
                    <ul className="py-4">
                      <li className="flex items-start gap-2 mb-2">
                        <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full border-[1px] border-[#555555]">
                          <Icon icon='mingcute:location-fill' />
                        </div>
                        <Text className="flex-1" size="xSmall">
                          Lô B231-B232, Đường Số 8, KCN Thái Hòa, Ấp Tân Hòa, Xã Đức Lập Hạ, Huyện Đức Hoà, Tỉnh Long An</Text>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Tabs.Tab>
              <Tabs.Tab key="other" label="Việc làm khác từ công ty">
                <Box p={4}>
                  <JobItem detail={true} />
                  <JobItem detail={true} />
                  <JobItem detail={true} />
                </Box>
              </Tabs.Tab>
            </Tabs>
          </Box>
        </Section>
      </Box>
      <JobModal popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
    </Page>
  );
};

export default DetailJob70;