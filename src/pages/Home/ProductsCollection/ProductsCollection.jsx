import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ProductsCollection.css";

const ProductsCollection = () => {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filterProductsByQuality = (quality) => {
    return products.filter((product) => product.quality === quality);
  };

  return (
    <div>
      <SectionTitle heading={"Products Collection"}></SectionTitle>
      <p className="font-medium m-4">
        <Tabs selectedIndex={tab} onSelect={(index) => setTab(index)}>
          <TabList className="flex justify-center items-center custom-tab-lis mb-4">
            <Tab className="custom-tab dark:text-white">Popular</Tab>
            <Tab className="custom-tab dark:text-white">Random</Tab>
          </TabList>
          <div className="bg-yellow-400 h-1 w-14 mx-auto mb-4"></div>
          <TabPanel>
            <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
              {filterProductsByQuality("popular").map((product) => (
                <p key={product._id}>{product.product_name}</p>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
              {filterProductsByQuality("random").map((product) => (
                <p key={product._id}>{product.product_name}</p>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </p>
    </div>
  );
};

export default ProductsCollection;
