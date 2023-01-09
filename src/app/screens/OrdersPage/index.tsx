import React, { useEffect, useState } from 'react';
import '../../../css/order.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Stack, Container } from '@mui/material';
import PausedOrders from '../../components/orders/pausedOrders';
import ProcessOrders from '../../components/orders/processOrders';
import FinisheddOrders from '../../components/orders/finishedOrders';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Typography from '@mui/joy/Typography';
import Marginer from '../../components/marginer';
import TextField from '@mui/material/TextField';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Textarea from '@mui/joy/Textarea';
import FinishedOrders from '../../components/orders/finishedOrders';
import { borderBottomColor } from '@mui/system';
// REDUX
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { setFinishedOrders, setPausedOrders, setProcessOrders } from './slice';
import { Order } from '../../../types/order';
import OrderApiService from '../../apiServices/orderApiService';
import { Member } from '../../../types/user';
import { verifiedMemberData } from '../../apiServices/verify';

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
	setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
	setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
	setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export function OrdersPage(props: any) {
	// INITIALIZATIONS
	const [value, setValue] = useState('1');
	const { setPausedOrders, setProcessOrders, setFinishedOrders } = actionDispatch(useDispatch());


	useEffect(() => {
		const orderService = new OrderApiService();
		orderService
			.getMyOrder('paused')
			.then((data) => setPausedOrders(data))
			.catch((err) => console.log(err));
		orderService
			.getMyOrder('process')
			.then((data) => setProcessOrders(data))
			.catch((err) => console.log(err));
		orderService
			.getMyOrder('finished')
			.then((data) => setFinishedOrders(data))
			.catch((err) => console.log(err));
	}, [props.orderRebuild]);

	//HANDLERS
	const handleChange = (event: any, newValue: string) => {
		setValue(newValue);
	};

	return (
		<div className="order_page">
			<Container style={{ display: 'flex', flexDirection: 'row' }} sx={{ mt: '50px', mb: '50px' }}>
				<Stack className="order_left">
					<TabContext value={value}>
						<Box className="order_nav_frame">
							<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<TabList
									onChange={handleChange}
									value={value}
									aria-label="basic tabs example"
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Tab label="Buyurtmalarim" value={'1'} />
									<Tab label="Jarayon" value={'2'} />
									<Tab label="Yakunlangan" value={'3'} />
								</TabList>
							</Box>
						</Box>
						<Stack className="order_main_content">
							<PausedOrders setOrderRebuild={props.setOrderRebuild} />
							<ProcessOrders setOrderRebuild={props.setOrderRebuild} />
							<FinishedOrders setOrderRebuild={props.setOrderRebuild} />
						</Stack>
					</TabContext>
				</Stack>

				<Stack className="order_right">
					<Box className="order_info_box">
						<Box display="flex" flexDirection="column" alignItems="center">
							<div className="order_user_img">
								<img src={verifiedMemberData?.mb_image} className="order_user_avatar" />
								<p className="order_user_name">{verifiedMemberData?.mb_nick}</p>
								<p className="user">{verifiedMemberData?.mb_type ?? 'Foydalanuvchi'}</p>
							</div>
							<div className="marginer">
								<Marginer direction="horizontal" height="1" width="323" bg="#A1A1A1" />
							</div>
							<p>
								<img src="/icons/location.svg" />
								{verifiedMemberData?.mb_address ?? 'Manzil kiritilmagan'}
							</p>
						</Box>
					</Box>
				
            <Box className={"order_info_box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"card_number"}
              placeholder={"Card number : 5243 4090 2002 7495"}
              className={"card_input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type={"text"}
                name={"card_period"}
                placeholder={"07 / 24"}
                className={"card_half_input"}
              />
              <input
                type={"text"}
                name={"card_cvv"}
                placeholder={"CVV : 010"}
                className={"card_half_input"}
              />
            </div>
            <input
              type={"text"}
              name={"card_creator"}
              placeholder={"Umarov Abdulloh"}
              className={"card_input"}
            />
            <div className={"cards_box"}>
              <img src={"/icons/western_card.svg"} />
              <img src={"/icons/master_card.svg"} />
              <img src={"/icons/paypal_card.svg"} />
              <img src={"/icons/visa_card.svg"} />
            </div>
          </Box>
				
				</Stack>
			</Container>
		</div>
	);
}
