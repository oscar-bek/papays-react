import { Box, Button, Container, Stack, TableFooter, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../css/App.css';
import '../css/navbar.css';
import '../css/footer.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { RestaurantPage } from './screens/RestaurantPage';
import { CommunityPage } from './screens/CommunityPage';
import { OrdersPage } from './screens/OrdersPage';
import { MemberPage } from './screens/MemberPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { NavbarHome } from './components/headers';
import { NavbarRestaurant } from './components/headers/restaurant';
import { NavbarOthers } from './components/headers/others';
import { Footer } from './components/footer';
import AuthenticationModal from './components/auth';
import { Member } from '../types/user';
import { serverApi } from '../lib/config';
import MemberApiService from './apiServices/memberApiServices';
import { sweetFailureProvider, sweetTopSmallSuccessAlert } from '../lib/sweetAlert';
import { Definer } from '../lib/Definer';
import "../app/apiServices/verify";

function App() {
	/** INITIALIZATIONS **/
	const [verifiedMemberData, setVerifiedMemberData] = useState<Member | null>(null);
	const [path, setPath] = useState();
	const main_path = window.location.pathname;
	const [signUpOpen, setSignUpOpen] = useState(false);
	const [loginOpen, setLoginOpen] = useState(false);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

  useEffect(() => {
    console.log("=== useEffect App ===");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serverApi}/${member_data.mb_image}`
        : "/auth/default_user.svg";
      setVerifiedMemberData(member_data);
    }
  }, [signUpOpen, loginOpen]);

	/** HANDLERS */
	const handleSignUpOpen = () => setSignUpOpen(true);
	const handleSignUpClose = () => setSignUpOpen(false);
	const handleLoginOpen = () => setLoginOpen(true);
	const handleLoginClose = () => setLoginOpen(false);
	const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(null);
	};

	const handlerLogoutRequest = async () => {
		try {
			const memberApiService = new MemberApiService();
			await memberApiService.logOutRequest();
			await sweetTopSmallSuccessAlert('success', 700, true);
		} catch (error: any) {
			console.log(error);
			sweetFailureProvider(Definer.general_err1);
		}
	};

	return (
		<Router>
			{main_path == '/' ? (
				<NavbarHome
					setPath={setPath}
					handleLoginOpen={handleLoginOpen}
					handleSignUpOpen={handleSignUpOpen}
					verifiedMemberData={verifiedMemberData}
					anchorEl={anchorEl}
					open={open}
					handleLogOutClick={handleLogOutClick}
					handleCloseLogOut={handleCloseLogOut}
					handlerLogoutRequest={handlerLogoutRequest}
				
				/>
			) : main_path.includes('/restaurant') ? (
				<NavbarRestaurant
        setPath={setPath}
        handleLoginOpen={handleLoginOpen}
        handleSignUpOpen={handleSignUpOpen}
        anchorEl={anchorEl}
        open={open}
        handleLogOutClick={handleLogOutClick}
        handleCloseLogOut={handleCloseLogOut}
        handlerLogoutRequest={handlerLogoutRequest}
        verifiedMemberData={verifiedMemberData}
				/>
			) : (
				<NavbarOthers
        setPath={setPath}
        handleLoginOpen={handleLoginOpen}
        handleSignUpOpen={handleSignUpOpen}
        anchorEl={anchorEl}
        open={open}
        handleLogOutClick={handleLogOutClick}
        handleCloseLogOut={handleCloseLogOut}
        handlerLogoutRequest={handlerLogoutRequest}
        verifiedMemberData={verifiedMemberData}
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


