import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const TrendingCard = ({ product }) => {
  const { product_image, product_name, price, rating } = product;
  return (
    <div className="m-4 shadow-lg p-4 cursor-pointer">
      <img
        className="w-5/12 md:w-6/12 lg:w-7/12 h-3/5  md:h-4/6 rounded-md mx-auto mb-3"
        src={product_image}
        alt=""
      />
      <div className="space-y-1">
        <h2 className="font-medium text-xl">{product_name}</h2>
        <p>
          <span className="font-medium">Price:</span> ${price}
        </p>
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
