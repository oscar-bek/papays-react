import React, { useEffect, useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import PausedOrders from "../../components/orders/pausedOrders";
import Marginer from "../../components/marginer";

export function OrdersPage() {
  /* INITIALIZATIONS **/
  const [value, setValue] = useState("1");

  //**/  HANDLERS  **//
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={"order_page"}>
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className={"order_nav_frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  value={value}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />
                  <Tab label="Jarayon" value={"2"} />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>

            <Stack className={"order_main_content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order_right"}>
          <Box className={"order_info_box"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <img className="order_user_avatar" />
              <div className="order_user_img">
                <img
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    width: "30px",
                    height: "30px",
                    bottom: 15,
                    left: 30,
                    transform: "translateY(50%)",
                    color: "rgba(0,0,0,.4)",
                  }}
                  src={"/auth/default_user.svg"}
                  className={"order_user_avatar"}
                />
              </div>

              <div className="order_user_name">
                <p>Falonchiyev Pistonchi</p>
                <p className={"order_user_prof"}>Foydalanuvchi</p>
              </div>
              <Box className={"rifht_one_bottom"} >
                <div className="marginer">
                  <Marginer
                    direction="horizontal"
                    height="1"
                    width="350"
                    bg="#A1A1A1"
                  />
                </div>
                <p style={{ marginLeft: "10px" }}>
                  <img src="/icons/location.svg" />
                  SEOUL
                </p>
              </Box>
            </Box>
          </Box>

          <Box className={""}></Box>

          <Box className={"order_info_box"} style={{ marginTop: "10px" }}>
            <input
              type="text"
              name="card_number"
              placeholder="Card number : 5243 4090 2002 7495"
              className="card_input"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type="text"
                name="card_period"
                placeholder="07 / 24"
                className="card_half_input"
              />
              <input
                type="text"
                name="card_cvv"
                placeholder="CVV : 010"
                className="card_half_input"
              />
            </div>
            <input
              type="text"
              name="card_holder"
              placeholder="Falonchiyev Pistonchi"
              className="card_input"
            />
            <div className={"cards_box"}>
              <img src="/icons/wunion.svg" />
              <img src="/icons/mastercard.svg" />
              <img src="/icons/visa.svg" />
              <img src="/icons/paypal.svg" />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
