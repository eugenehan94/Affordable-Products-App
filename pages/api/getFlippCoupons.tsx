import { NextApiRequest, NextApiResponse } from "next/types";

const puppeteer = require("puppeteer");
import { Browser } from "puppeteer";
const getFlippCoupons = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://flipp.com/coupons`;
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // NOTE: https://www.urlbox.io/puppeteer-wait-for-page-load
  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  const data = await page.evaluate(() =>
    Array.from(document.querySelectorAll("flipp-coupon-clipping"), (e) => ({
      image: e.querySelector("div.image > img")?.getAttribute("data-src"),
      savingsText: e.querySelector("div.info > p.sale-story")?.textContent,
      promoTextOne: e.querySelectorAll("div.info > p.promotion-text")[0]?.textContent,
      promoTextTwo: e.querySelectorAll("div.info > p.promotion-text")[1]?.textContent,
      retailer: e.querySelector("span.retailer")?.textContent
    }))
  );
  res.status(200).json(data)
  await browser.close();
};

export default getFlippCoupons;
