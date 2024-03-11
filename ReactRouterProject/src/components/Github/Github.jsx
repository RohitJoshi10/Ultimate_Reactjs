import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/RohitJoshi10")
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Gihub followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/RohitJoshi10");
  return response.json();
};

// Github followers ayenge ek API call krke
// Mai API call tab krna chahata hu jab mera ye component load ho.
// And uske liye hum use krenge useEffect Hook ka
// Ab value khud se toh aygei ni so usko lene k liye hum use krnege useLoaderData hook ka
