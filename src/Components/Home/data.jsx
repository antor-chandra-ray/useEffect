import React, { useEffect, useState } from "react";
import Home from "./Home";

const Data = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const fetching = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await fetching.json();

        setAllData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchingData();
  }, []); // Empty dependency array - runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (allData.length === 0) return <div>No data found</div>;

  return (
    <div>
      <h1>All Posts</h1>
      {allData.map((item) => (
        <Home key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Data;
