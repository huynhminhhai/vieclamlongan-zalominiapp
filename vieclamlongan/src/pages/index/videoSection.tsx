import React, { FC } from "react";
import { Section } from "components/section";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, useNavigate } from "zmp-ui";
import { VIDEO_LIST } from "constants";

export const VideoSection: FC = () => {

    const navigate = useNavigate()

    return (
        <Section title="Video" padding="title-only" seemore={true} seemoreUrl="/video-list">
            <Swiper
                spaceBetween={16}
                slidesPerView={2.15}
                className="px-4"
            >
                {
                    VIDEO_LIST.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => navigate('/video-detail')}
                            >
                                <div
                                    className="relative border-[1px] border-[#f5f5f5] rounded-lg overflow-hidden h-[80px] flex items-center justify-center">
                                    <img className="w-auto h-[45px] object-contain m-auto" src={item.imgUrl} alt={item.title} />
                                </div>
                                <Box>
                                    <h4 className="mt-2 text-[14px] leading-[18px] font-medium line-clamp-2">{item.title}</h4>
                                </Box>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Section>
    )
}

