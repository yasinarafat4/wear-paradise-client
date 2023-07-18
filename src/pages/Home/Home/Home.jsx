import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import Partners from "../Partners/Partners";
import ProductsCollection from "../ProductsCollection/ProductsCollection";
import Reviews from "../Reviews/Reviews";
import TrendingProducts from "../TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-700 dark:text-white">
      <Helmet>
        <title>WP | Home</title>
      </Helmet>
      <Banner></Banner>
      <TrendingProducts></TrendingProducts>
      <ProductsCollection></ProductsCollection>
      <FeaturedItems></FeaturedItems>
      <Reviews></Reviews>
      <Partners></Partners>
    </div>
  );
};

export default Home;
