import Youtube from "react-youtube";
const LookInside = () => {
  const opts = {
    width: "100%",
  };
  return (
    <section className="mt-10">
      <div className="p-5 lg:flex">
        <div className="lg:basis-1/2 lg:pr-5">
          <p className="mb-5 font-medium leading-7 md:text-lg">
            Want to gain real world experience in your desired field? Then
            you’ve come to the right place! Join the team that’s helping
            shoppers provide for their families by making life more affordable
            and inspiring retailers across North America to make the shift from
            print-to-digital.
          </p>
          <p className="mb-5 font-medium leading-7 md:text-lg">
            From engineering to marketing, Flipp offers various co-op and PEY
            opportunities to students in the field of retail and technology. Our
            internship program at Flipp will offer you endless coaching and
            learning opportunities, the ability to work on highly impactful
            projects and tasks, and make a difference in the lives of both our
            retail partners and our Flipp users.
          </p>
          <p className="mb-5 font-medium leading-7 md:text-lg">
            At Flipp, a good idea is a good idea — no matter where it comes
            from. We encourage and empower our co-op and PEY students to jump
            right in and share their unique ideas and experiences. We value the
            fresh perspective that students bring to the team and we strive to
            make your experience at Flipp as memorable and rewarding as
            possible.
          </p>
        </div>
        <div className="lg:basis-1/2">
          <Youtube videoId="HTxJF5ISuQU" opts={opts} />
        </div>
      </div>
    </section>
  );
};

export default LookInside;
