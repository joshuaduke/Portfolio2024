const arrJobHistory = [
  {
    year: "2022 - PRESENT",
    title: "Frontend Software Development - reSolved Business Solutions",
    description:
      "Developed customized solutions on the SmartSimple platform tailored to meet client requirements, including the creation of custom forms, scripts, and web page views utilizing JavaScript, HTML, CSS, and JQuery. Supported as the internal Quality Assurance (QA) resource prior to Client User Acceptance Testing (UAT). Integrated with APIs to access and manipulate data from internal and external sources.",
    skills: ["Javascript", "CMS", "HTML", "CSS", "jQuery", "APIs"],
  },
  {
    year: "2020",
    title: "Web Developer Intern - TDSB",
    description:
      "Enforced accessibility rules over 500 TDSB web pages by applying AODA compliance in accordance with WCAG 2.0 standards. Converted TDSB’s old intranet websites to modern responsive websites using html5, css3, js and Bootstrap 4 following TDSB’s web guidelines. Updated 20+ web pages per day as requested through inbound support cases via email and phone",
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
