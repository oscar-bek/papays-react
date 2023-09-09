import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Statistics } from './statistics';
import { TopRestaurants } from './topRestaurants';
import { BestRestaurants } from './bestRestaurants';
import { BestDishes } from './bestDishes';
import { Advertisements } from './advertisements';
import { Events } from './events';
import { Recommendations } from './recommendations';
import '../../../css/home.css';

//** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { setBestRestaurants, setEvents, setTopRestaurants } from "./slice";
import { retrieveTopRestaurants, retrieveBestRestaurants } from './selector';
import { Restaurant } from '../../../types/user';
import { Event } from "../../../types/event";
import EventApiService from "../../apiServices/eventApiService";
import RestaurantApiService from '../../apiServices/restaurantApiService';

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
	setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
	setBestRestaurants: (data: Restaurant[]) =>
	  dispatch(setBestRestaurants(data)),
	setEvents: (data: Event[]) => dispatch(setEvents(data)),
  });


export function HomePage() {
	/** INITIALIZATIONS */
	const { setTopRestaurants, setBestRestaurants, setEvents } = actionDispatch(
		useDispatch()
	);

	useEffect(() => {
		const restaurantService = new RestaurantApiService();
		const eventService = new EventApiService();
		restaurantService
			.getTopRestaurants()
			.then((data) => {
				setTopRestaurants(data);
			})
			.catch((err) => console.log(err));

		restaurantService
			.getRestaurants({ page: 1, limit: 4, order: 'mb_point' })
			.then((data) => {
				setBestRestaurants(data);
			})
			.catch((err) => console.log(err));
			eventService
			.getEvents()
			.then((data) => setEvents(data))
			.catch((err) => console.log(err));
		  // slice: data => store
		}, []);
	  

	return (
		<div className="homepage">
			<Statistics />
			<TopRestaurants />
			<BestRestaurants />
			<BestDishes />
			<Advertisements />
			<Events />
			<Recommendations />
		</div>
	);
}
