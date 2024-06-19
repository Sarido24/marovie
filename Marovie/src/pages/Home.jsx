import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Home(){
    let [popular, setPopular] = useState(null);

  async function fetchPopular() {
    try {
      let response = await axios({
        method: "get",
        url: "../../data.json",
        headers: {
          accept: "application/json",
          // Authorization
        },
      });
      if (response.data) {
        setPopular(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {;
    fetchPopular()
  }, []);

    return (
        <>
        <h1 className="text-sm md:text-md lg:text-2xl font-poppins text-red text-center p-3 uppercase font-bold ">Popular</h1>
        <Card movies={popular}/>
        </>
    )
}