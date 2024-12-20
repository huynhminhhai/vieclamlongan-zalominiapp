import { BANNERURL } from "constants";
import React, { FC } from "react";
import { Box, Swiper, useNavigate } from "zmp-ui";

export const Banner: FC = () => {

  const navigate = useNavigate();

  return (
    <Box className="bg-white banner-custom">
      <Swiper autoplay duration={6000} loop >
        {
          BANNERURL.map((item, index) => (
            <Swiper.Slide key={index}>
              <Box
                onClick={() => navigate('/detail')}
              >
                <img src={item.url} alt={item.alt} />
              </Box>
            </Swiper.Slide>
          ))
        }
      </Swiper>
    </Box>
  );
};