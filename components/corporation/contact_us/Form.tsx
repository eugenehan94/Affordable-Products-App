import { useState } from "react";
const inquiryReason = [
  {
    id: 0,
    steps: 2,
    option: "Select One",
    stepTwo: [
      { label: "First Name", type: "text", required: true },
      { label: "Last Name", type: "text", required: true },
      {
        label: "What is your role?",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Select One",
          "C-Level",
          "VP",
          "Director",
          "Manager",
          "Individual Contributor",
        ],
      },
      { label: "Email", type: "text", required: true },
      { label: "Phone", type: "text", required: true },
      { label: "Company Name ", type: "text", required: true },
      { label: "Company Website", type: "text", required: true },
      { label: "Number of Store Locations", type: "text", required: true },
      { label: "Reason for Inquiry", type: "text", required: true },
      {
        label: "Country",
        type: "dropdown",
        required: true,
        dropdownOptions: ["Select One", "United States", "Canada", "Other"],
      },
      {
        label: "Industry",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Automotive",
          "Drugstore/Pharmacy",
          "Electronics",
          "Fashion",
          "Furnature",
          "General Merchandise",
          "Grocery",
          "Home / Garden",
          "Office Supplies",
          "Pet Supplies",
          "Sporting",
          "Toys & Games",
          "Other",
        ],
      },
      {
        label: "Do you currently produce a retail circular",
        type: "dropdown",
        required: false,
        dropdownOptions: ["Select One", "Yes", "No"],
      },
      {
        label: "How do you currently produce a retailer circular?",
        type: "dropdown",
        required: false,
        dropdownOptions: [
          "Select One",
          "Print",
          "Digital",
          "Both Print & Digital",
          "Do not currently produce a retail circular",
        ],
      },
      {
        label: "What is your biggest business challenge at the moment?",
        type: "text",
        required: false,
      },
      {
        label: "Do you offer online shopping?",
        type: "dropdown",
        required: false,
        dropdownOptions: ["Select One", "Yes", "No"],
      },
      {
        label: "How did you hear about us?",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Select One",
          "Worked with Flipp before",
          "Use the Flipp app",
          "Search",
          "Other",
        ],
      },
    ],
  },
  {
    id: 1,
    option: "Retailer",
    stepTwo: [
      { label: "First Name", type: "text", required: true },
      { label: "Last Name", type: "text", required: true },
      {
        label: "What is your role?",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Select One",
          "C-Level",
          "VP",
          "Director",
          "Manager",
          "Individual Contributor",
        ],
      },
      { label: "Email", type: "text", required: true },
      { label: "Phone", type: "text", required: true },
      { label: "Company Name ", type: "text", required: true },
      { label: "Company Website", type: "text", required: true },
      { label: "Number of Store Locations", type: "text", required: true },
      { label: "Reason for Inquiry", type: "text", required: true },
      {
        label: "Country",
        type: "dropdown",
        required: true,
        dropdownOptions: ["Select One", "United States", "Canada", "Other"],
      },
      {
        label: "Industry",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Automotive",
          "Drugstore/Pharmacy",
          "Electronics",
          "Fashion",
          "Furnature",
          "General Merchandise",
          "Grocery",
          "Home / Garden",
          "Office Supplies",
          "Pet Supplies",
          "Sporting",
          "Toys & Games",
          "Other",
        ],
      },
      {
        label: "Do you currently produce a retail circular",
        type: "dropdown",
        required: false,
        dropdownOptions: ["Select One", "Yes", "No"],
      },
      {
        label: "How do you currently produce a retailer circular?",
        type: "dropdown",
        required: false,
        dropdownOptions: [
          "Select One",
          "Print",
          "Digital",
          "Both Print & Digital",
          "Do not currently produce a retail circular",
        ],
      },
      {
        label: "What is your biggest business challenge at the moment?",
        type: "text",
        required: false,
      },
      {
        label: "Do you offer online shopping?",
        type: "dropdown",
        required: false,
        dropdownOptions: ["Select One", "Yes", "No"],
      },
      {
        label: "How did you hear about us?",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Select One",
          "Worked with Flipp before",
          "Use the Flipp app",
          "Search",
          "Other",
        ],
      },
    ],
  },
  {
    id: 2,
    option: "CPG or Agency",
    stepTwo: [
      { label: "First Name", type: "text", required: true },
      { label: "Last Name", type: "text", required: true },
      {
        label: "What is your role?",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Select One",
          "C-Level",
          "VP",
          "Director",
          "Manager",
          "Individual Contributor",
        ],
      },
      { label: "Email", type: "text", required: true },
      { label: "Phone", type: "text", required: true },
      { label: "Company Name ", type: "text", required: true },
      { label: "Company Website", type: "text", required: true },
      { label: "Reason for Inquiry", type: "text", required: true },
      {
        label: "Country",
        type: "dropdown",
        required: true,
        dropdownOptions: ["Select One", "United States", "Canada", "Other"],
      },
      {
        label: "Industry",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Automotive",
          "Drugstore/Pharmacy",
          "Electronics",
          "Fashion",
          "Furnature",
          "General Merchandise",
          "Grocery",
          "Home / Garden",
          "Office Supplies",
          "Pet Supplies",
          "Sporting",
          "Toys & Games",
          "Other",
        ],
      },
      {
        label: "How did you hear about us?",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Select One",
          "Worked with Flipp before",
          "Use the Flipp app",
          "Search",
          "Other",
        ],
      },
    ],
  },
  {
    id: 3,
    option: "Publisher",
    stepTwo: [
      { label: "First Name", type: "text", required: true },
      { label: "Last Name", type: "text", required: true },
      {
        label: "What is your role?",
        type: "dropdown",
        required: true,
        dropdownOptions: [
          "Select One",
          "C-Level",
          "VP",
          "Director",
          "Manager",
          "Individual Contributor",
        ],
      },
      { label: "Email", type: "text", required: true },
      { label: "Phone", type: "text", required: true },
      { label: "Company Name ", type: "text", required: true },
      { label: "Company Website", type: "text", required: true },
      { label: "# Of Pageviews / Month", type: "text", required: true },
      {
        label: "Country",
        type: "dropdown",
        required: true,
        dropdownOptions: ["Select One", "United States", "Canada", "Other"],
      },
    ],
  },
  {
    id: 4,
    option: "Media Relations",
    stepTwo: [
      { label: "First Name", type: "text", required: true },
      { label: "Last Name", type: "text", required: true },
      { label: "Company", type: "text", required: false },
      { label: "Phone", type: "text", required: true },
      { label: "Email", type: "text", required: true },
    ],
  },
  {
    id: 5,
    option: "Careers",
    stepTwo: [
      { label: "First Name", type: "text", required: true },
      { label: "Last Name", type: "text", required: true },
      { label: "Company", type: "text", required: false },
      { label: "Phone", type: "text", required: true },
      { label: "Email", type: "text", required: true },
    ],
  },
  {
    id: 6,
    option: "Customer Feedback",
    stepTwo: [
      { label: "First Name", type: "text", required: true },
      { label: "Last Name", type: "text", required: true },
      { label: "Company", type: "text", required: false },
      { label: "Phone", type: "text", required: true },
      { label: "Email", type: "text", required: true },
    ],
  },
];

const Form = () => {
  const [step, setStep] = useState<number>(0);
  const [stepTwoData, setStepTwoData] = useState<any>();
  const [selectedInquiryReason, setSelectedInquiryReason] =
    useState("Select One");
  const previousStep = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChangeFirstStep = (value: string) => {
    setSelectedInquiryReason(value);
  };

  const handleNext = () => {
    let specificItem = inquiryReason.filter(
      (reason) => reason.option === selectedInquiryReason
    );
    // Convert the array to an object to extract an inner array
    let specificItemObj = Object.assign({}, ...specificItem);
    let stepTwo = specificItemObj.stepTwo;

    setStepTwoData(stepTwo);
  };

  return (
    <section className="mt-20">
      <div className="p-5">
        <div>
          <h3 className="text-gray-500 font-medium">
            Fields marked with an{" "}
            <span className="text-red-700 font-bold">*</span> are required
          </h3>
        </div>
        {step === 0 ? (
          <div className="my-3">
            <select
              className="w-full p-2.5 rounded-lg border border-gray-400 font-medium hover:cursor-pointer"
              value={selectedInquiryReason}
              onChange={(e) => handleChangeFirstStep(e.target.value)}
            >
              {inquiryReason.map((choice, id) => (
                <option key={id} className="font-medium">
                  {choice.option}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        {step === 1 ? (
          <form className="mb-5">
            {stepTwoData.map((data: any) => {
              return (
                <div className="mb-4">
                  {/* For inputs */}
                  {data.type === "text" ? (
                    <>
                      <div className="mb-2">
                        <label
                          htmlFor={data.label}
                          className="text-blue-900 text-2xl font-bold"
                        >
                          {data.label}
                        </label>
                        {data.required === true ? (
                          <span className="text-red-500 font-bold text-2xl ml-1">
                            *
                          </span>
                        ) : null}
                      </div>
                      <div>
                        <input
                          required={data.required}
                          type={data.type}
                          className="w-full p-2.5 rounded-lg border border-gray-400"
                        ></input>
                      </div>
                    </>
                  ) : null}
                  {/* For dropdowns */}
                  {data.type === "dropdown" ? (
                    <>
                      <div className="mb-2">
                        <label
                          htmlFor={data.label}
                          className="text-blue-900 text-2xl font-bold"
                        >
                          {data.label}
                        </label>
                        {data.required === true ? (
                          <span className="text-red-500 font-bold text-2xl ml-1">
                            *
                          </span>
                        ) : null}
                      </div>
                      <div>
                        <select className="w-full p-2.5 rounded-lg border border-gray-400 hover:cursor-pointer">
                          {data.dropdownOptions.map(
                            (option: any, key: number) => (
                              <option key={key} className="font-medium">
                                {option}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })}
            <button
              type="submit"
              className="flex items-center justify-center py-4 px-8 bg-sky-600 font-bold text-base text-white rounded-lg tracking-widest"
            >
              Submit
            </button>
          </form>
        ) : null}
        <div className="flex justify-between">
          {step > 0 ? (
            <button
              className="flex items-center justify-center py-4 px-8 bg-sky-600 font-bold text-base text-white rounded-full tracking-widest"
              onClick={() => previousStep()}
            >
              Previous
            </button>
          ) : (
            <button
              className="flex items-center justify-center py-4 px-8 bg-sky-600 font-bold text-base text-white rounded-full tracking-widest"
              onClick={() => {
                nextStep();
                handleNext();
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
