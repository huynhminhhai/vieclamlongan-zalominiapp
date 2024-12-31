import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Icon } from "@iconify/react";
import { Section } from "components/section";
import { NewsList } from "components/news";
import { NEWS_LIST } from "constants";
import { useSearchParams } from "react-router-dom";

const NewsDetailPage: React.FunctionComponent = () => {

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  console.log(id)

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Chi tiết tin tức" />
      <Box className="flex-1 overflow-auto">
        <Inquiry />
        <Divider />
        <Box p={4} py={8}>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[30px] w-[5px] bg-red-500 block"></div>
            <h3 className="text-[18px] leading-[1] font-medium">Tin tức</h3>
          </div>
          <h2 className="text-[20px] leading-6 font-medium mb-2">
            Tư vấn việc làm cho hạ sĩ quan và binh sĩ chuẩn bị xuất ngũ
          </h2>
          <ul className="text-[#555555] mt-6">
            <li className="flex items-start gap-3 mb-4">
              <Icon fontSize={28} icon='icon-park-solid:people' />
              <div>
                <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Tác giả</Text>
                <Text size="xSmall">Phong Dao Tao va Gioi thieu viec lam</Text>
              </div>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <Icon fontSize={28} icon='lets-icons:date-fill' />
              <div>
                <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Ngày tạo</Text>
                <Text size="xSmall">26/12/2024</Text>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Icon fontSize={28} icon='mdi:eye' />
              <div>
                <Text size="xSmall" className="uppercase mb-1 text-[#949697]">Lượt xem</Text>
                <Text size="xSmall">12 lượt xem</Text>
              </div>
            </li>
          </ul>
          <Box className="news-detail" mt={6}>
            <p>
              Sáng ngày 20/12/2024 Trung tâm Dịch vụ việc làm Long An phối hợp với Ban Chỉ huy quân sự Tiểu đoàn bộ binh 1 tư vấn và giới thiệu việc làm cho hơn 200 hạ sĩ quan và binh sĩ chuẩn bị xuất ngũ.
            </p>
            <p>
              Sau thời gian rèn luyện trong môi trường quân đội, các đồng chí đã được trang bị những phẩm chất quý báu như tính kỷ luật, tinh thần trách nhiệm và khả năng làm việc hiệu quả. Đây chính là lợi thế lớn khi tham gia thị trường lao động. Các đồng chí được tư vấn, giới thiệu việc làm trong nước và các chính sách hỗ trợ khi đi làm việc ở nước ngoài, được thông tin về các khóa đào tạo ngắn hạn như cơ khí, vận hành xe nâng hàng, công nghệ thông tin ...
            </p>
            <p>
              Hãy liên hệ ngay Trung tâm Dịch vụ việc làm Long An hoặc địa phương để nhận thêm thông tin và hỗ trợ kịp thời
            </p>
            <p><em>Xuất ngũ để khởi đầu cho một tương lai mới</em></p>
            <p>
              <img src="http://quantri.vieclamlongan.vn/images/20241220112737_a.jpg" alt="" />
            </p>
            <p className="text-center"><em>Ảnh: Bà Hồ Ngọc Nữ- đạị diện Trung tâm DVVL Long An thông tin về việc làm trong và ngoài nước</em></p>
            <p><img src="http://quantri.vieclamlongan.vn/images/20241220112801_b.jpg" alt="" /></p>
            <p className="text-center"><em>Ảnh: Các quân nhân chụp ảnh lưu niệm cùng các đơn vị và doanh nghiệp</em></p>
          </Box>

        </Box>
        <Divider />
        <Section title="Tin tức khác" padding="title-only" seemore={true} seemoreUrl="/news">
          <NewsList news={NEWS_LIST} noDescNews={true} />
        </Section>
      </Box>
    </Page>
  );
};

export default NewsDetailPage;