import React from "react";
import { Favorite, Visibility } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,

} from "@mui/joy";
import { Box, Container, Pagination, PaginationItem, Stack } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function AllRestaurants() {
  return (
    <div className="all_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className={"fil_search_box"}>
            <a href="#">Zo'r</a>
            <a href="#">Mashhur</a>
            <a href="#">Trenddagi</a>
            <a href="#">Yangi</a>
          </Box>
          <Stack className={"all_res_box"}>
            <CssVarsProvider>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio={1}>
                    <img src={"/restaurant/carluccio.jpeg"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 30,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontsize: "md", mt: 2 }}>
                  Texas De Brazil Restaurant
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlineBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
          <Stack className={"bottom_box"}>
            <img className={"line_img"} src={"/restaurant/line_group.svg"}/>            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                 components={{
                  previous: ArrowBackIcon,
                  next: ArrowBackIcon,
                }}
                {...item}
              color={"secondary"}
              />
              )} 
            />
            <img className={"line_img_two"} src={"/retaurant/line_two.svg"} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
