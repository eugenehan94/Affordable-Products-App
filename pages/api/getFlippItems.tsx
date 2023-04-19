// puppeteer?
//https://www.youtube.com/watch?v=FKkDUW4E2Qc&ab_channel=Joshtriedcoding
import { NextApiRequest, NextApiResponse } from "next/types";

const puppeteer = require("puppeteer");
import { Browser } from "puppeteer";

const getFlippItems = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = "https://books.toscrape.com/";

  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  const bookData = await page.evaluate((url) => {
    const convertPrice = (price: string) => {
      return parseFloat(price.replace("£", ""));
    };

    const convertRating = (rating: string) => {
      switch (rating) {
        case "One":
          return 1;
        case "Two":
          return 2;
        case "Three":
          return 3;
        case "Four":
          return 4;
        case "Five":
          return 5;
        default:
          return 0;
      }
    };

    const bookPods = Array.from(document.querySelectorAll(".product_pod"));
    const data = bookPods.map((book: any) => ({
      title: book.querySelector("h3 a").getAttribute("title"),
      price: convertPrice(book.querySelector(".price_color").innerText),
      imgSrc: url + book.querySelector("img").getAttribute("src"),
      rating: convertRating(book.querySelector(".star-rating").classList[1]),
    }));
    return data;
  }, url);

  console.log("bookData: ", bookData);

  await browser.close();
  // Receive the input from the req body
  // const body = JSON.parse(req.body);
  // const {input} = body
  // console.log("input: ", input)

  // const response = await fetch("https://www.npmjs.com/package/puppeteer");
  //   const res = await fetch("https://flipp.com/search/chicken");
  //   const res = await fetch("https://www.loblaws.ca/search?search-bar=chicken");
  // const html = await response.text();

  // const dom = new JSDOM(html);
  // const document = dom.window.document;
  // console.log("document: ", document);
  // const downloads = document.querySelector("._9ba9a726")?.textContent;
  // console.log("downloads: ", downloads);

  // Send downloads back to client
  // res.status(200).json({ downloads });
};

export default getFlippItems;
