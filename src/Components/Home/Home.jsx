import React from "react";

const Home = ({ data }) => {
  // Add safety check - if data doesn't exist, return null or loading message
  if (!data) {
    return <div>Loading post...</div>;
  }

  const { body, title, id, userId } = data;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#333", marginTop: 0 }}>Post #{id}</h3>
      <p style={{ color: "#666", fontSize: "14px" }}>User ID: {userId}</p>
      <h4 style={{ color: "#0066cc" }}>{title}</h4>
      <p style={{ color: "#555", lineHeight: "1.6" }}>{body}</p>
    </div>
  );
};

export default Home;
