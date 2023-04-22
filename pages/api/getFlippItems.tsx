// puppeteer?
//https://www.youtube.com/watch?v=FKkDUW4E2Qc&ab_channel=Joshtriedcoding
import { NextApiRequest, NextApiResponse } from "next/types";

const puppeteer = require("puppeteer");
import { Browser } from "puppeteer";

const getFlippItems = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = "https://flipp.com/search/chicken";
  // const url = "https://flipp.com/search/beef"
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // NOTE: https://www.urlbox.io/puppeteer-wait-for-page-load
  await page.goto(url, {
    // NOTE: allows to website to complete loading
    waitUntil: "networkidle2",
  });

  const test = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".ecom-item-wrapper"), (e) => ({
      tester: e.getAttribute("class"),
      tester2: e.querySelector(".ecom-item-container")?.getAttribute("data-context"),
      tester3: e.querySelector("flipp-price")?.getAttribute("value"),
      tester4: e.querySelector("img")?.getAttribute("data-src"),
      tester5: e.querySelector(".name-text")?.textContent,
      tester6: e.querySelector(".merchant-logo")?.getAttribute("data-src")
    }))
  );
  console.log("test: ", test);
  // const title = await page.evaluate(() => document.title)
  // console.log(title)

  // const text = await page.evaluate(() => document.body.innerText)
  // console.log(text)

  // NOTE: need this line to wait for fetching to complete
  // await page.waitForSelector(".item-container");

  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll("a"), (e) => e.href)
  // );
  // console.log(links);

  // const test = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll(".item-container"), (e) => ({
  //     itemID: e.getAttribute("item-id"),
  //     storeLogo: e.querySelector("img")?.getAttribute("data-src"),
  //     image: e.querySelector(".wrapper a div img")?.getAttribute("src"),
  //     merchant: e.querySelector("img")?.getAttribute("alt")
  //   }))
  // );
  // console.log("TEST: ", test);

  await browser.close();

  // const response = await fetch("https://www.npmjs.com/package/puppeteer");
  //   const res = await fetch("https://flipp.com/search/chicken");
  //   const res = await fetch("https://www.loblaws.ca/search?search-bar=chicken");
  // const html = await response.text();
};

export default getFlippItems;
