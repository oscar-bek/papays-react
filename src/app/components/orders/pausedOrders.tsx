import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/sandwich.jpg`;
                  return (
                    <Box className="ordersName_price">
                      <img src={image_path} className={"orderDishImagee"} />
                      <p className={"titleDish"}>Sandwich</p>
                      <Box className={"priceBox"}>
                        <p>$7</p>
                        <img src={"/icons/Close.svg"} />
                        <p>3</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>$21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box black_solid"}>
                <Box
                  className={"boxTotal"}
                  style={{
                    marginLeft: "5px",
                    height: "30px",
                    alignItems: "center",
                  }}
                >
                  <p>maxsulot narxi</p>
                  <p>$21</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "10px", width: "12px" }}
                  />
                  <p style={{ marginLeft: "10px" }}>yetkazish xizmati</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "10px", width: "12px" }}
                  />
                  <p style={{ marginLeft: "10px" }}>Jami narxi</p>
                  <p>$23</p>

                  {/* <p className={"data_compl"}>
                    {/* {moment().format("YY-MM-DD HH:mm")} */}
                  {/* </p>  */}
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "12px",
                      marginLeft: "50px",
                      width: "160px",
                      background: "#c40909",
                      color: "#FFFFFF",
                      borderRadius: "20px",
                      boxShadow:
                        " 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    bekor qilish
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      fontSize: "12px",
                      width: "120px",
                      background: "#0288D1",
                      border: "1px solid #0288D1",
                      boxShadow:
                        "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "20px",
                    }}
                  >
                    to'lash
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
