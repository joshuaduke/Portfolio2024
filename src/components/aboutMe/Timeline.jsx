const arrJobHistory = [
  {
    year: "2022 - PRESENT",
    title: "Developer - reSolved Business Solutions",
    description:
      "Build and maintain internal products that enhance operational efficiency, working closely with cross-functional teams, including developers, designers, and project managers. Advocating for scalable solutions by introducing new features and ensuring alignment with evolving business goals.",
    skills: ["Javascript", "CMS", "HTML", "CSS", "jQuery", "APIs"],
  },
  {
    year: "2020",
    title: "Web Developer - TDSB",
    description:
      "Build and maintain internal products that enhance operational efficiency, working closely with cross-functional teams, including developers, designers, and project managers. Advocating for scalable solutions by introducing new features and ensuring alignment with evolving business goals.",
    skills: ["Javascript", "CMS", "HTML", "CSS"],
  },
];

export default function Timeline() {
  return (
    <section
      style={{ top: 360, left: 0, right: 0, paddingTop: "350px" }}
      className="bg-slate-900 text-white border-solid border-gray-50 p-6  absolute top-20 z-10 text-left rounded-lg"
    >
      {arrJobHistory.map((job, index) => (
        <div key={index} className="mb-6">
          <span className="text-xs">{job.year}</span>
          <div>
            <h4 className="mb-2">{job.title}</h4>
            <p className="text-sm">{job.description}</p>
            <ul className="flex flex-row flex-wrap gap-1 my-2">
              {job.skills.map((skill, index) => (
                <li
                  className="border-solid border-s-teal-50 rounded-lg py-px px-2 text-xs "
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="text-center">
        <a
          href=""
          className="inline-block border-solid border-white px-4 py-2 place-items-center rounded-lg"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
}
