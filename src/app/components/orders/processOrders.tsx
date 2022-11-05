import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const processOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order) => {
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

              <Box
                className={"total_price_box black_solid"}
                style={{
                  background: "red",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box className={"boxTotal"}>
                  <p>maxsulot narxi</p>
                  <p style={{ marginLeft: "10px" }}>$21</p>

                  <p style={{ marginLeft: "20px" }}>yetkazish xizmati</p>
                  <p style={{ marginLeft: "10px" }}>$2</p>

                  <p style={{ marginLeft: "20px" }}>Jami narxi</p>
                  <p style={{ marginLeft: "10px" }}>$23</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
