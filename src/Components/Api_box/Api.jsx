import React, { useEffect } from "react";

const Api = () => {
  //const [data,setData]= useState("")
  useEffect(() => {
    const getData = async () => {
      const allData = await fetch("https://dummyjson.com/image");
      const data = await allData.json();
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Api Here</h1>
    </div>
  );
};

export default Api;
