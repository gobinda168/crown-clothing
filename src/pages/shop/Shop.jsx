import React, { useState } from "react";
import { SHOP_DATA } from "./shop.data";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <PreviewCollection key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default Shop;
