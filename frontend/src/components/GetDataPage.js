import React from "react";
import { useEffect } from "react";

const GetDataPage = () => {
  // useeffect to get data from api with asybc and await

  useEffect(() => {
    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    };
    getData();
    }, []);

  return <div></div>;
};

export default GetDataPage;
