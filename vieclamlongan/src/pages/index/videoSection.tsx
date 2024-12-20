import React, { FC } from "react";
import { Section } from "components/section";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Text } from "zmp-ui";
import { COMPANY, VIDEO_LIST } from "constants";

export const VideoSection: FC = () => {

    return (
        <Section title="Video" padding="title-only">
            <Swiper
                spaceBetween={20}
                slidesPerView={1.15}
                className="px-4"
            >
                {
                    VIDEO_LIST.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => console.log(123)}
                            >
                                <Box
                                    className="relative border-[1px] border-[#f5f5f5] rounded-lg overflow-hidden">
                                    <img className="w-[100%] h-[100%] object-contain" src={item.imgUrl} alt={item.title} />
                                </Box>
                                <Box>
                                    <Text className="mt-2" size="small" bold>{item.title}</Text>
                                </Box>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Section>
    )
}

