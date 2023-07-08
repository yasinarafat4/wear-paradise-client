import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-700 dark:text-white">
      <Helmet>
        <title>WP | Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
