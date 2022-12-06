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

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { setBestRestaurants, setTopRestaurants } from './slice';
import { retrieveTopRestaurants, retrieveBestRestaurants } from './selector';
import { Restaurant } from '../../../types/user';

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
	setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
});

/** REDUX Selector */
const topRestaurantRetriever = createSelector(retrieveTopRestaurants, (topRestaurants) => ({
	topRestaurants,
}));

export function HomePage() {
	/** INITIALIZATIONS */
	const { setTopRestaurants } = actionDispatch(useDispatch());
 const { topRestaurants } = useSelector(topRestaurantRetriever);

 console.log("topRestaurants::", topRestaurants);

	useEffect(() => {
		// backend data request => data

		setTopRestaurants([]);
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
