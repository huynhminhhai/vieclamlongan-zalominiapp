import React, { FC } from "react";
import { Section } from "components/section";
import 'swiper/css';

export const CvSection: FC = () => {

    return (
        <Section title="" padding="none">
            <div className="px-4 py-6">
                <h3 className="text-[24px] leading-[34px] font-bold capitalize mb-1">
                    Tạo ấn tượng với nhà tuyển dụng cùng 
                    <span className="text-[#005AFF]"> CV cá nhân</span>
                </h3>
                <p className="mb-4">
                    Tạo mẫu CV nhanh chóng và miễn phí, để nhà tuyển dụng phải
                    <b> "Wow!"</b> ngay khi nhìn thấy CV của bạn.
                </p>
                <button
                    onClick={() => console.log(123)}
                    className="text-[18px] font-medium text-white bg-[#ff7d55] px-6 py-3 rounded-lg"
                >
                    Tạo cv ngay
                </button>
            </div>
        </Section>
    )
}

