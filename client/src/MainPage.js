import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import LandingPage from "./LandingPage";
import SteamFinderPage from "./SteamFinderPage";

const MainPage = () => {
    const { isLoggedIn } = useContext(ApplicationContext);
    console.log("isLoggedIn: ", isLoggedIn);

    return (
        !isLoggedIn ? <LandingPage /> : <SteamFinderPage />
    )

};

export default MainPage;