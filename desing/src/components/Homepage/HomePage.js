import HeroBanner from "../HeroBanner/HeroBanner";
import Layout from "../Layout/Layout";
import React, { useState, useEffect } from "react";
import cosmData from "../../CosmWasmClient";

const HomePage = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await cosmData();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data>>", data);
  return (
    <Layout>
      <HeroBanner />
    </Layout>
  );
};

export default HomePage;
