import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import logo1 from "../../../assets/images/partners/logo-1.png";
import logo2 from "../../../assets/images/partners/logo-2.png";
import logo3 from "../../../assets/images/partners/logo-3.png";
import logo4 from "../../../assets/images/partners/logo-4.png";
import logo5 from "../../../assets/images/partners/logo-5.png";
import logo6 from "../../../assets/images/partners/logo-6.png";

const partners = [
  {
    name: "wooCommerce",
    logo: logo1,
  },
  {
    name: "Shopify",
    logo: logo2,
  },
  {
    name: "Slack",
    logo: logo3,
  },
  {
    name: "ShopNow",
    logo: logo4,
  },
  {
    name: "Card Shopping",
    logo: logo5,
  },
  {
    name: "Shoe Peace",
    logo: logo6,
  },
];

const Partners = () => {
  return (
    <div>
      <SectionTitle heading={"Our Partners"}></SectionTitle>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-4"
      >
        {partners.map((partner, index) => (
          <div
            className="flex flex-col justify-center items-center bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer py-4 transform transition duration-500 hover:scale-105 hover:bg-[#90cdf4]"
            key={index}
          >
            <img className="w-20" src={partner.logo} alt={partner.name} />
            <p className="text-lg font-medium">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
