import { NextApiRequest, NextApiResponse } from "next/types";

const puppeteer = require("puppeteer");
import { Browser } from "puppeteer";
const getFlippFlyers = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://flipp.com/flyers`;
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // NOTE: https://www.urlbox.io/puppeteer-wait-for-page-load
  await page.goto(url, {
    // NOTE: allows target website to complete loading
    waitUntil: "networkidle2",
  });

  const data = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll("span.premium-flyer-wrapper"),
      (e) => ({
        image: e.querySelector("img.flyer-thumbnail")?.getAttribute("data-src"),
        merchantLogo: e
          .querySelector(".flyer-info img")
          ?.getAttribute("data-src"),
        merchantName: e.querySelector(".flyer-name")?.textContent,
        dealEnds: e.querySelectorAll(".flyer-info-block p")[1]?.textContent,
      })
    )
  );

  res.status(200).json(data.slice(0,2));
  await browser.close();
};

export default getFlippFlyers;
