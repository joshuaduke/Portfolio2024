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
      style={{ top: 140, left: 0, right: 0 }}
      className="bg-slate-900 border border-accent p-6 pt-96 md:pt-40 absolute top-20 z-10 text-left rounded-lg"
    >
      {arrJobHistory.map((job, index) => (
        <div key={index} className="mb-6">
          <span className="text-xs opacity-55">{job.year}</span>
          <div>
            <h4 className="mb-2">{job.title}</h4>
            <p className="mb-2">{job.description}</p>
            <ul className="flex flex-row flex-wrap gap-1 my-2">
              {job.skills.map((skill, index) => (
                <li
                  className="border border-s-teal-50 rounded-xl py-px px-4 text-xs "
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
          className="text-white inline-block border border-accent px-6 py-4 place-items-center rounded-lg"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
}
