import React, { FC } from "react";
import { Section } from "components/section";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Text } from "zmp-ui";
import { COMPANY } from "constants";
import logoCompany from 'static/logo-company-white.jpg'

export const CompanyList: FC = () => {

    return (
        <Section title="Công ty hàng đầu" padding="title-only">
            <Swiper
                spaceBetween={20}
                slidesPerView={2.15}
                className="px-4"
            >
                {
                    COMPANY.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => console.log(123)}
                            >
                                <Box
                                    className="relative border-[1px] border-[#f5f5f5] rounded-lg overflow-hidden w-[150px] h-[150px]">
                                    <img className="w-[100%] h-[100%] object-contain" src={item.imgurl || logoCompany} alt={item.name} />
                                </Box>
                                <Box>
                                    <Text className="mt-2" size="small" bold>{item.name}</Text>
                                </Box>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Section>
    )
}

