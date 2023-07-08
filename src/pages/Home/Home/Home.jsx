import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import ProductsCollection from "../ProductsCollection/ProductsCollection";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-700 dark:text-white">
      <Helmet>
        <title>WP | Home</title>
      </Helmet>
      <Banner></Banner>
      <TrendingProducts></TrendingProducts>
      <ProductsCollection></ProductsCollection>
      <Reviews></Reviews>
      <Partners></Partners>
    </div>
  );
};

export default Home;
