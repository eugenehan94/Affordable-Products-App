import { useState } from "react";

interface dataType {
  department: string;
  title: string;
  location: string;
}

const data = [
  {
    department: "Content",
    title: "Operations Intern",
    location: "Canada (Remote)",
  },
  {
    department: "Engineering",
    title: "Senior Director, Data Solutions & Engineering",
    location: "Canada (Remote)",
  },
  {
    department: "Engineering",
    title: "Senior Manager, Engineering",
    location: "Canada (Remote)",
  },
  {
    department: "External Partnerships",
    title: "Business Development Lead, Mid-Market",
    location: "Canada (Remote)",
  },
  {
    department: "External Partnerships",
    title: "External Partnerships: Join Our Talent Pool!",
    location: "Canada (Remote)",
  },
  {
    department: "External Partnerships",
    title: "Solutions Consultant",
    location: "Canada (Remote)",
  },
  {
    department: "Marketing",
    title: "Brand Communications Intern",
    location: "Ontario, Canada (Hybrid)",
  },
  {
    department: "Marketing",
    title: "Lifecycle Marketing Intern",
    location: "Canada (Remote)",
  },
  {
    department: "Product",
    title: "Business Development Lead, Brand Platform",
    location: "Canada (Remote)",
  },
  {
    department: "Product",
    title: "Senior Product Designer",
    location: "Canada (Remote)",
  },
  {
    department: "Product",
    title: "Senior Product Manager",
    location: "Canada (Remote)",
  },
  {
    department: "Strategic Support",
    title: "Accounts Receivable Specialist",
    location: "Canada (Remote)",
  },
  {
    department: "Strategic Support",
    title: "Agile Coach",
    location: "Canada (Remote)",
  },
  {
    department: "Strategic Support",
    title: "Senior Accountant",
    location: "Canada (Remote)",
  },
];

const JobBoard = () => {
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>("All Departments");
  const [filteredList, setFilteredList] = useState<dataType[]>(data);

  // Isolate department property from data (array of object)
  const departments = data.map((x) => x.department);
  // Departments for select dropdown - duplicates removed
  const uniqueDepartments = [...new Set(departments)];

  const [filteredListDepartment, setFilteredListDepartment] =
    useState<string[]>(uniqueDepartments);
  const toggleSelect = (e: any) => {
    if (e.target.value === "All Departments") {
      setFilteredList(data);
      setFilteredListDepartment(uniqueDepartments);
      return;
    }

    const filterList = data.filter((job) => job.department === e.target.value);
    setFilteredList(filterList);
    const filterDepartment = uniqueDepartments.filter(
      (department) => department === e.target.value
    );
    setFilteredListDepartment(filterDepartment);
  };

  return (
    <section className="p-5">
      <div>
        <div className="mb-5">
          <h2 className="text-3xl text-gray-700/95 font-bold leading-normal">
            Current Job Openings at Flipp
          </h2>
          <select
            value={selectedDepartment}
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
              toggleSelect(e);
            }}
            className="border border-black mt-5 text-lg"
          >
            <option value="All Departments">All Departments</option>
            {uniqueDepartments.map((department, key) => (
              <option key={key} value={`${department}`}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div>
          {/* Logic to display all is different from the filtered */}
          {selectedDepartment === "All Departments" ? (
            <>
              {uniqueDepartments.map((department, key) => {
                const categorizedJobs = data.filter(
                  (job) => job.department === department
                );
                return (
                  <div key={key}>
                    <div className="border-b border-gray-400 mb-4">
                      <h3 className="text-lg text-gray-800 font-medium">
                        {department}
                      </h3>
                    </div>
                    <div className="md:flex md:flex-wrap md:[&>*:nth-child(even)]:pl-2">
                      {categorizedJobs.map((job, id) => (
                        <div key={id} className="mb-5 md:basis-1/2">
                          <div className="">
                            <a className="text-blue-800 text-lg font-bold leading-tight hover:cursor-pointer">
                              {job.title}
                            </a>
                            <p className="text-gray-600 font-medium">
                              {job.location}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {filteredListDepartment.map((department: string, key: number) => {
                return (
                  <div key={key}>
                    <div className="mb-5">
                      <h3 className="text-xl text-gray-700/95 font-bold leading-normal">
                        {filteredList.length} Jobs
                      </h3>
                    </div>
                    <div className="border-b border-gray-400 mb-4">
                      <h3 className="text-lg text-gray-800 font-medium">
                        {department}
                      </h3>
                    </div>
                    <div className="md:flex md:flex-wrap md:[&>*:nth-child(even)]:pl-2">
                      {filteredList.map((job: dataType, id: number) => {
                        return (
                          <div key={id} className="mb-5 md:basis-1/2">
                            <div>
                              <a className="text-blue-800 text-lg font-bold leading-tight hover:cursor-pointer">
                                {job.title}
                              </a>
                              <p className="text-gray-600 font-medium">
                                {job.location}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobBoard;
