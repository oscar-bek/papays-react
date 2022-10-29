import { Avatar, Box, Container, Stack } from "@mui/material";
import React from "react";

export function Recommendation() {
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className={"category_title"}>Tavsiya qilingan maqollar</Box>
          <Stack className={"article_main"} flexDirection={"row"}>
            <Stack className={"article_container"}>
              <Box className={"article_category"}>Ko'p ko'rilgan</Box>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJzJaUUI7xQju8ceF2qOQD6SZe9sgXc7TNQ&usqp=CAU)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"authot_username"}>Behzod</span>
                    </div>
                    <span className={"article_title"}>
                      Eng ajoyib va mazali taomlar
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJzJaUUI7xQju8ceF2qOQD6SZe9sgXc7TNQ&usqp=CAU)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"authot_username"}>Behzod</span>
                    </div>
                    <span className={"article_title"}>
                      Eng ajoyib va mazali taomlar
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
              <Box className={"article_category"} sx={{ marginTop: "10px" }}>
                Ko'p yoqtirilgan
              </Box>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJzJaUUI7xQju8ceF2qOQD6SZe9sgXc7TNQ&usqp=CAU)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"authot_username"}>Behzod</span>
                    </div>
                    <span className={"article_title"}>
                      Jizzax somsasining mazzsi o'zgacha
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJzJaUUI7xQju8ceF2qOQD6SZe9sgXc7TNQ&usqp=CAU)`,
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"authot_username"}>Behzod</span>
                    </div>
                    <span className={"article_title"}>
                      Jizzax somsasining mazzsi o'zgacha
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <Stack className={"article_container"}>
              <Box className={"article_category"}>Mashhurlar</Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
