import { useState } from "react";
const data = [
  {
    title: "Who can apply for a student internship?",
    content: "Students (postgrad included) enrolled in a university program.",
  },
  {
    title: "Which teams accept student interns?",
    content:
      "We have different openings every term, but we normally have positions available in: Operations, Continuous Improvement, Creative, Customer Experience, Finance, Engineering, Business Development, People and Talent and Marketing.",
  },
  {
    title: "How can I apply?",
    content:
      "You can apply through our website or on your school's career portal.",
  },
  {
    title: "When will I hear if my application was successful?",
    content:
      "The hiring teams usually need 2-3 weeks to review all applications. We will then contact students to organize interviews. We commit to following up on the interview within one week.",
  },
  {
    title: "When do you hire student interns throughout the year?",
    content:
      "We hire student interns in 3 terms: Winter (January-April), Summer (May-August), and Fall (September-December).",
  },
  {
    title: "What can I expect to work on?",
    content:
      "You can find the job descriptions for each intern role on our Job Openings page. During your interview, you can ask questions about the day-to-day specifics of the role.",
  },
  {
    title: "Will I be paid?",
    content:
      "You can find the job descriptions for each intern role on our Job Openings page. During your interview, you can ask questions about the day-to-day specifics of the role.",
  },
  {
    title: "What do you look for when hiring a student intern?",
    content:
      "We look for students who are enthusiastic about a new opportunity. We also want to ensure that all of our student interns embody our cultural principles and values, which can be found on the culture section of our website.",
  },
];
const FAQ = () => {
  const [openKey, setOpenKey] = useState<string | null>();

  const handleToggle = (key: string) => {
    console.log("HandleToggle key: ", key);
    setOpenKey(openKey !== key ? key : null);
  };
  return (
    <section className="p-5 bg-teal-100/30">
      <div>
        <div className="mb-5">
          <h2 className="uppercase text-lg md:text-xl lg:text-2xl text-violet-700 font-bold">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div>
          {data.map(({ title, content }, key) => (
            <div>
              <div
                key={key}
                onClick={() => handleToggle(data[key].title)}
                className={`p-5 border-b border-slate-500 hover:bg-teal-400 hover:cursor-pointer hover:text-white transition ease-in ${
                  openKey === data[key].title ? "bg-teal-400" : null
                }`}
              >
                <div className="flex justify-between">
                  <span
                    className={`font-bold flex md:text-lg ${
                      openKey === data[key].title ? "text-white" : null
                    }`}
                  >
                    {openKey === data[key].title ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#fff"
                        className="w-6 h-6 mr-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : null}{" "}
                    {title}
                  </span>
                  <span>
                    {openKey === data[key].title ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="#fff"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="#43c4f4"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
              <div
                className={`${
                  openKey === data[key].title ? "inline-block" : "hidden"
                }`}
              >
                <p className="p-10 md:text-lg">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
