import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useProducts from "../../../hooks/useProducts";

const TrendingProducts = () => {
  const [products] = useProducts();
  const trending = products.filter((item) => item.category === "trending");
  return (
    <div>
      <SectionTitle heading={"Trending Items"}></SectionTitle>

      {trending.map((product) => (
        <>
          <p>{product._id}</p>
          <p key={product._id}>{product.product_name}</p>
          <img src={product.product_image} alt="" />
        </>
      ))}
    </div>
  );
};

export default TrendingProducts;
