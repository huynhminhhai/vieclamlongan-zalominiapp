import React, { FC } from "react";
import { Section } from "components/section";
import 'swiper/css';
import { useNavigate } from "zmp-ui";
import ButtonCV from "components/buttonCv";

export const CvSection: FC = () => {

    const navigate = useNavigate()

    return (
        <Section title="" padding="none">
            <div className="px-4 py-6">
                <h3 className="text-[22px] leading-[30px] font-bold capitalize mb-1">
                    Tạo ấn tượng với nhà tuyển dụng cùng 
                    <span className="text-[#005AFF]"> CV cá nhân</span>
                </h3>
                <p className="mb-4">
                    Tạo mẫu CV nhanh chóng và miễn phí, để nhà tuyển dụng phải
                    <b> "Wow!"</b> ngay khi nhìn thấy CV của bạn.
                </p>
                {/* <button
                    onClick={() => navigate('/cv')}
                    className="text-[16px] font-medium text-white bg-[#ff7d55] px-5 py-3 rounded-lg"
                >
                    Tạo cv ngay
                </button> */}
                <ButtonCV onClick={() => navigate('/cv')} label="Tạo cv ngay" />
            </div>
        </Section>
    )
}

