import React, { useRef } from "react";
import { Box, Button, Container } from "@mui/material";
import Card from "@mui/joy/Card";
import { Stack } from "@mui/system";
import { AspectRatio, Link } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../../css/home.css";
// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveBestRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiServices";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";

/** REDUX SELECTOR */
const bestRestaurantsRetriever = createSelector(
  retrieveBestRestaurants,
  (bestRestaurants) => ({
    bestRestaurants,
  })
);

export function BestRestaurants() {
  /** INITIALIZATIONS */
  const history = useHistory();
  const { bestRestaurants } = useSelector(bestRestaurantsRetriever);
  console.log("bestRestaurants:::", bestRestaurants);
  const refs: any = useRef([]);

  /** HANDLERS */
  const chosenRestaurantHandler = (id: string) =>
    history.push(`/restaurant/${id}`);
  const goRestaurantsHandler = () => history.push("/restaurant");

  const targetLikeBest = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "member",
        });
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHTML--;
      }

      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (error: any) {
      console.log("targetLikeTop, ERROR", error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <div className="best_restaurants_frame">
      <img
        src="icons/line_group.svg"
        style={{
          position: "absolute",
          left: "6%",
          transform: "rotate(90degree)",
        }}
        alt=""
      />
      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restaranlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            {bestRestaurants.map((ele: Restaurant) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider key={ele._id}>
                  <Card
                    onClick={() => chosenRestaurantHandler(ele._id)}
                    variant="outlined"
                    sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}>
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={image_path} alt="" />
                      </AspectRatio>
                      <IconButton
                        aria-label="like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.4)",
                        }}
                        onClick={(e) => e.stopPropagation()}>
                        <Favorite
                          onClick={(e) => targetLikeBest(e, ele._id)}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      {ele.mb_nick}
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700">
                        {ele.mb_address}
                      </Link>
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor="neutral.700">
                        {ele.mb_phone}
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
                        borderColor: "neutral.outlinedBorder",
                        bgcolor: "background.level1",
                      }}>
                      <Typography
                        level="body3"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex",
                        }}>
                        {ele.mb_views}
                        <VisibilityIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex",
                        }}>
                        <div
                          ref={(element) => (refs.current[ele._id] = element)}>
                          {ele.mb_likes}
                        </div>
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}>
            <Button
              style={{ background: "#1976d2", color: "#FFFFFF" }}
              onClick={goRestaurantsHandler}>
              Barchasini Ko'rish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
