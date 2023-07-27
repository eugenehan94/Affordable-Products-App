import Link from "next/link";
const JoinTeamBanner = () => {
  return (
    <section className="bg-teal-400 my-14 lg:my-10">
      <div className="p-10">
        <div className="mb-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-violet-950 font-bold text-center">
            Want to join our team?
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="bg-white md:text-lg px-8 py-2.5 rounded-full text-violet-950 font-medium">
            <Link href="/corporation/job_openings">View Job Openings</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamBanner;
