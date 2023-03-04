// b918a4a88b91461cbb5923734af9c509
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
const News = () => {
  const API_KEY = "b918a4a88b91461cbb5923734af9c509";
  const query = "Elections";
  const api_url = `https://newsapi.org/v2/everything?q=${query}&from=2023-01-19&sortBy=popularity&apiKey=${API_KEY}`;
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await axios.get(api_url);
    console.log(response.data);
    setNews(response.data.articles.slice(0, 10));
  };

  return (
    <div className="bg-[#040404]">
      <Navbar />
      <h1 className="px-8 text-4xl font-bold">News</h1>
      <div className="px-8 py-8 flex flex-row flex-wrap items-center justify-center">
        {news?.map((n) => (
          <a href={n.url} target="_blank">
            <div className="shadow shadow-gray-900  rounded-lg w-[600px] mt-8 mr-8">
              <img className="w-[600px] rounded-lg" src={n.urlToImage} />
              <h1 className="text-white text-2xl font-bold p-4">{n.title}</h1>
              <h2 className="text-white p-4">{n.content}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
