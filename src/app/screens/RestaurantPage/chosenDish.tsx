import React, { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";
import { Container, Box, Stack } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Navigation, Thumbs, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Marginer from "../../components/marginer";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";
import "../../../css/restaurant.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const chosen_list = Array.from(Array(3).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele) => {
              const image_path = `/others/sandwich.jpg`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            className="dish2_swiper"
            // onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele) => {
              const image_path = `/others/sandwich.jpg`;

              return (
                <SwiperSlide>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      borderRadius: "16px",
                      marginTop: "5px",
                    }}
                    src={"/others/sandwich.jpg"}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className={"chosen_dish_info_container"}>
          <Box className={"chosen_dish_info_box"}>
            <strong className={"dish_txt"}>Sweet Sandvich</strong>
            
            <span className={"resto_name"}>Texas De Brazil</span>
            <Box className={"rating_box"}>
              
              <div className={"evaluation_box"}>
                <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={false}
                  />
                  <span>98 ta</span>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>1000 ta</span>
                </div>
              </div>
              <p className={"dish_desc_info"}>Juda mazzali sandvich</p>
              <Marginer
                direction="horizontal"
                height="1"
                width="100%"
                bg="#000000"
              />
              <div className={"dish_price_box"}>
                <span>Narx:</span>
                <span>$11</span>
              </div>
              <div className={"button_box"}>
                <Button variant="contained">Savat qo'shish</Button>
              </div>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
