import axios from "axios";

export default async (article) => {
  const rightNow = new Date();
  const fromDate = rightNow.toISOString().slice(0, 10);

  const url = `
  https://newsapi.org/v2/everything?q=${article}&from=${fromDate}&sortBy=popularity&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;

  return await axios.get(url);
};
