import {
  Box,
  Button,
  Container,
  Stack,
  TableFooter,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/headers";
import { NavbarRestaurant } from "./components/headers/restaurant";
import { NavbarOthers } from "./components/headers/others";
import { Footer } from "./components/footer";
import AuthenticationModal from "./components/auth";

function App() {
  /** INITIALIZATIONS **/
 
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

    /** HANDLERS */
    const handleSignUpOpen = () => setSignUpOpen(true);
    const handleSignUpClose = () => setSignUpOpen(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome
        setPath={setPath}
        handleLoginOpen={handleLoginOpen}
        handleSignUpOpen={handleSignUpOpen}
        anchorEl={anchorEl}
        open={open}
       
      />
    ) : main_path.includes("/restaurant") ? (
      <NavbarRestaurant
        setPath={setPath}
        handleLoginOpen={handleLoginOpen}
        handleSignUpOpen={handleSignUpOpen}
        anchorEl={anchorEl}
        open={open}
       
      />
    ) : (
      <NavbarOthers
        setPath={setPath}
        handleLoginOpen={handleLoginOpen}
        handleSignUpOpen={handleSignUpOpen}
        anchorEl={anchorEl}
        open={open}
      
      />
    )}

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />

      <AuthenticationModal
       loginOpen={loginOpen}
       handleLoginOpen={handleLoginOpen}
       handleLoginClose={handleLoginClose}
       signUpOpen={signUpOpen}
       handleSignUpOpen={handleSignUpOpen}
       handleSignUpClose={handleSignUpClose}
       />

    </Router>
  );
}

export default App;

function Home() {
  return <h2>HomePage</h2>;
}
