// puppeteer?
//https://www.youtube.com/watch?v=FKkDUW4E2Qc&ab_channel=Joshtriedcoding
import { NextApiRequest, NextApiResponse } from "next/types";

const puppeteer = require("puppeteer");
import { Browser } from "puppeteer";

const getFlippItems = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = "https://flipp.com/search/chicken";
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // NOTE: https://www.urlbox.io/puppeteer-wait-for-page-load
  await page.goto(url, {
    // NOTE: allows to website to complete loading
    waitUntil: "networkidle2",
  });

  const test = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".ecom-item-wrapper"), (e) => ({
      // tester: e.getAttribute("class"),
      // tester2: e
      //   .querySelector(".ecom-item-container")
      //   ?.getAttribute("data-context"),
      price: e.querySelector("flipp-price")?.getAttribute("value"),
      image: e.querySelector("img")?.getAttribute("data-src"),
      name: e.querySelector(".name-text")?.textContent,
      storeLogo: e.querySelector(".merchant-logo")?.getAttribute("data-src"),
      discount: e.querySelector(".discount")
    }))
  );

  res.status(200).json(test);
  await browser.close();
};

export default getFlippItems;
