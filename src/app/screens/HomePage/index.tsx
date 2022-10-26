import React from "react";
import { Container } from "@mui/system";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Recommendation } from "./recommendation";
import { Events } from "./events";
import '../../../css/home.css';

export function HomePage() {
return (
  <div className="homepage">
    <Statistics/>
    <TopRestaurants/>
    <BestRestaurants/>
    <BestDishes/>
    <Advertisements/>
    <Events/>
    <Recommendation/>
  </div>
  )
}