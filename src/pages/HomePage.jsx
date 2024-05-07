import RandomMovie from "../layouts/RandomMovie";
import Movies from "../layouts/Movies";
import Series from "../layouts/Series";
import Trending from "../layouts/Trending";
import NavigationBar from "../components/Navbar";
const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <RandomMovie></RandomMovie>
      <Trending></Trending>
      <Movies></Movies>
      <Series></Series>
    </>
  );
};

export default HomePage;
