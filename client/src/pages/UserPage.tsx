import Navbar from "components/Navbar";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UserPage = () => {
  const data = useLoaderData();

  console.log(data);
  
  return <div>
    
    <Navbar visible={true}/>
    ello World</div>;
};

export default UserPage;
