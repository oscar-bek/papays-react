import { Logout } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Container,
  Stack,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { sweetTopSuccessAlert } from "../../../lib/sweetAlert";
import Basket from "./basket";

export function NavbarHome(props: any) {

  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}>
          <Box>
            <img src="/icons/papay.svg" />
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
            className="navbar_links">
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="underline">
                Bosh Sahifa
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/restaurant" activeClassName="underline">
                Restaurant
              </NavLink>
            </Box>
            {props.verifiedMemberData ? (
             <Box className="hover-line" onClick={props.setPath}>
             <NavLink to="/orders" activeClassName="underline">
               Buyurtma
             </NavLink>
           </Box>
            ) : null}
          
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="underline">
                Jamiyat
              </NavLink>
            </Box>
            {props.verifiedMemberData ? (
              <Box className="hover-line" onClick={props.setPath}>
                <NavLink to="/member-page" activeClassName="underline">
                  Sahifam
                </NavLink>
              </Box>
            ) : null}

            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Yordam
              </NavLink>
            </Box>
           <Basket/>
            {!props.verifiedMemberData ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ color: "#FFFFFF", background: "#1976d2" }}
                  onClick={props.handleLoginOpen}>
                  KIRISH
                </Button>
              </Box>
            ) : (
              <img
                style={{ width: "48px", height: "48px", borderRadius: "24px" }}
                src={props.verifiedMemberData.mb_image}
                onClick={props.handleLogOutClick}
              />
            )}

            <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    widows: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
              <MenuItem onClick={props.handlerLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>

        <Stack className="head_information">
          <Stack
            justifyContent={"column"}
            style={{ marginTop: "86px", marginLeft: "24px" }}>
            <Box>
              <img src="/icons/wellcome.svg" />
            </Box>
            <Box className="define_restaurant">
              {" "}
              The Authentic Restaurant and Cafe
            </Box>
            <Box className="timeline_service">24 soat ximatingizdamiz</Box>
            <Box sx={{ mt: "90px" }}>
              {!props.verifiedMemberData ? (
                <Button
                  variant="contained"
                  style={{
                    width: "210px",
                    height: "60px",
                    background: "#1976d2",
                    color: "#FFFFFF",
                  }}
                  onClick={props.handleSignUpOpen}>
                  RO'YHATDAN O'TISH
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Stack>
            <Box className="big_img"></Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
function setAnchorEl(arg0: null) {
  throw new Error("Function not implemented.");
}

