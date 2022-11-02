import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
export function Events() {

const events_list = [
    {
      title: "Boyin Foodga marahamat",
      desc: "Yangicha uslubda Yangicha Tam va Yangicha hissiyot",
      author: "Abdurahmon Mufid",
      date: "2022/09/01",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/restaurant/boyinfood.jpg",
    },
    {
      title: "Katta Chegirma endi Belissimoda",
      desc: "Faqat 25 ~ 31-iyul kunlari antiqa Pitsa yegani tashrif buyuring!",
      author: "BelissimodUz",
      date: "2022/07/25",
      location: "Toshkent, Chilonzor",
      img: "/restaurant/bellissimo.jpg",
    },
    {
      title: "Yangi hissiyotni his qilib ko'rmoqchimisiz?",
      desc: "Merhaba promokodi orqali 50% skidkani qo'lga kiriting",
      author: "Chicken House",
      date: "2022/09/10",
      location: "Toshkent, Qo'yliq",
      img: "/restaurant/merhaba.jpg",
    },
    {
      title: "Yangicha Yondashuv Endi O'zbekistonda",
      desc: "O'zbekistondagi eng yirik ulgurji bozor.\n",
      author: "Food City",
      date: "2022/08/01",
      location: "Toshkent, Yangi Qo'yliq bozori",
      img: "/restaurant/food_city.jpg",
    },
  ];

  return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className={"category_title"}>Hodisalar</span>
          </Box>
          <Box className={"prev_next_frame"}>
            <img
              src={"/icons/arrow_right2.svg"}
              className={"swiper-button-prev"}
            />
            <div className={" dot_frame_pagination swiper-pagination "}></div>
            <img
              src={"/icons/arrow_right2.svg"}
              className={"swiper-button-next"}
              style={{ transform: "rotate(-180deg)" }}
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className={"events_info_frame"}>
                  <div className={"events_img"}>
                    <img src={value.img} className={"events_img"} />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"event_title_speaker"}>
                          <strong>{value.title}</strong>
                          <div className={"event_organizator"}>
                            <img
                              src={"/icons/speaker.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            <p className={"spec_text_author"}>{value.author}</p>
                          </div>
                        </div>

                        <p
                          className={"text_desc"}
                          style={{ marginTop: "10px" }}
                        >
                          {" "}
                          {value.desc}{" "}
                        </p>

                        <div
                          className={"bott_info"}
                          style={{ marginTop: "10px" }}
                        >
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/calendar.svg"}
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/location.svg"}
                              style={{ marginRight: "10px" }}
                            />{" "}
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
