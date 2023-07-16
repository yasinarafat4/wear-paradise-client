import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CollectionCard from "../../../components/CollectionCard/CollectionCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
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
          <TabList className="flex justify-center items-center custom-tab-lis mb-4 md:border-2 border-slate-400 mx-[66px] md:mx-[263px] lg:mx-[390px] xl:mx-[553px] 2xl:mx-[1159px] rounded-full">
            <Tab className="border-2 border-slate-400 border-x-0 md:border-0  custom-tab dark:text-white tracking-[1px]">
              Popular
            </Tab>
            <Tab className="border-2 border-slate-400 border-x-0 md:border-0 custom-tab dark:text-white tracking-[1px]">
              Random
            </Tab>
          </TabList>
          <div className="bg-yellow-400 h-1 w-14 mx-auto mb-4"></div>
          <TabPanel>
            <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
              {filterProductsByQuality("popular").map((product) => (
                <CollectionCard key={product._id}></CollectionCard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
              {filterProductsByQuality("random").map((product) => (
                <CollectionCard key={product._id}></CollectionCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </p>
    </div>
  );
};

export default ProductsCollection;
