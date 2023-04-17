// Basic Web Scrapper
//https://www.youtube.com/watch?v=bGShHOOoC-U&ab_channel=Joshtriedcoding
// @TODO: JSDOM works regardless of error - figure out fix
import { JSDOM } from "jsdom";

// Another web scrapper using cheerio
//https://dev.to/mtliendo/create-a-public-api-by-web-scraping-in-nextjs-2f5n
import { NextApiRequest, NextApiResponse } from "next/types";

const getFlippItems = async (req: NextApiRequest, res: NextApiResponse) => {

  // Receive the input from the req body
  const body = JSON.parse(req.body); 
  const {input} = body
  console.log("input: ", input)

  const response = await fetch("https://www.npmjs.com/package/puppeteer");
  //   const res = await fetch("https://flipp.com/search/chicken");
  //   const res = await fetch("https://www.loblaws.ca/search?search-bar=chicken");
  const html = await response.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;
  console.log("document: ", document);
  const downloads = document.querySelector("._9ba9a726")?.textContent;
  console.log("downloads: ", downloads);

  // Send downloads back to client
  res.status(200).json({ downloads });
};

export default getFlippItems;
