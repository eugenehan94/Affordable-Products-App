const newsTilesData = [
  {
    title:
      "PageSuite Partner with Flipp to Serve Digital Circulars within e-Editions",
    date: "May 25, 2023",
    src: "https://corp.flipp.com/news/pagesuite-partner-with-flipp-to-serve-digital-circulars-within-e-editions/",
  },
  {
    title:
      "AdAdapted and Flipp Partner To Help Brands Land Products on US Shoppers’ Lists",
    date: "September 15, 2022",
    src: "https://corp.flipp.com/news/adadapted-and-flipp-partner-to-help-brands-land-products-on-us-shoppers-lists/",
  },
  {
    title:
      "Flipp Acquires reebee, Strengthening Position as Canada’s Largest Distributor of Digital Savings Content",
    date: "June 22, 2022",
    src: "https://corp.flipp.com/news/flipp-acquires-reebee-strengthening-position-as-canadas-largest-distributor-of-digital-savings-content/",
  },
];

const NewsTiles = () => {
  return (
    <section className="p-5 my-24 md:flex md:flex-wrap">
      {newsTilesData.map((news) => (
        <article className="shadow-xl mb-16 md:basis-1/2">
          <a href={news.src} target="_blank">
            <div className="mb-8 px-10">
              <h3 className="text-sky-900 font-medium leading-relaxed md:text-lg">
                {news.title}
              </h3>
            </div>
            <div className="border-t border-gray-200 px-10 py-4">
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-bold">
                {news.date}
              </span>
            </div>
          </a>
        </article>
      ))}
    </section>
  );
};

export default NewsTiles;
