import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //const data = useLoaderData()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/anshusittu")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 m-6 p-6 bg-gray-700 text-white rounded-2xl shadow-lg">
      <img 
      src={data.avatar_url} 
      alt="GitHub Profile" 
      className="w-48 h-48 object-cover rounded-xl border-4 border-white shadow-md"
    /> 
    <div className="flex flex-col justify-center text-center md:text-left space-y-4">
      <h2 className=" text-xl bold"><sapn className="text-yellow-400">{data.name}</sapn></h2>
      <h3>Total Number of Repo: {data.public_repos}</h3>
      <p className="text-lg leading-relaxed max-w-xl">{data.bio}</p>
    </div>
  </div>
   
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/anshusittu");
  return response.json();
};
