import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import All from "../pages/All/All";
import Restaurants from "../pages/Restaurants/Restaurants";
import Hotels from "../pages/Hotels/Hotels";
import HomeServices from "../pages/HomeServices/HomeServices";
import Shopping from "../pages/Shopping/Shopping";
import CarLocation from "../pages/CarLocation/CarLocation";
import BeautySpa from "../pages/BeautySpa/BeautySpa";
import Park from "../pages/Park/Park";
import Museum from "../pages/Museum/Museum";
import CarWash from "../pages/CarWash/CarWash";
import Bars from "../pages/Bars/Bars";
import Gyms from "../pages/Gyms/Gyms";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <All />
            },
            {
                path: '/Restaurants',
                element: <Restaurants />
            },
            {
                path: '/Hotels',
                element: <Hotels />
            },
            {
                path: '/HomeServices',
                element: <HomeServices />
            },
            {
                path: '/Shopping',
                element: <Shopping />
            },
            {
                path: '/CarLocation',
                element: <CarLocation />
            },
            {
                path: '/BeautySpa',
                element: <BeautySpa />
            },
            {
                path: '/Park',
                element: <Park />
            },
            {
                path: '/Museum',
                element: <Museum />
            },
            {
                path: '/CarWash',
                element: <CarWash />
            },
            {
                path: '/Bars',
                element: <Bars />
            },
            {
                path: '/Gyms',
                element: <Gyms />
            }
        ]
    }
]);

export default Routes;