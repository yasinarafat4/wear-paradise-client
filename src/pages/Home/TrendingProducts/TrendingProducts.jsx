import { useState } from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TrendingCard from "../../../components/TrendingCard/TrendingCard";
import useProducts from "../../../hooks/useProducts";

const TrendingProducts = () => {
  // push Marquee when Mouse Over
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  const [products] = useProducts();
  const trending = products.filter((item) => item.category === "trending");
  return (
    <>
      <SectionTitle heading={"Trending Items"}></SectionTitle>
      <Marquee
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        speed={60}
        gradient={false}
        pauseOnHover={!isPaused}
      >
        <div className="bg-slate-50 dark:bg-slate-700 grid grid-cols-5 mx-4">
          {trending.map((product) => (
            <TrendingCard key={product._id} product={product}></TrendingCard>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default TrendingProducts;
