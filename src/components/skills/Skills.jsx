const arrJobHistory = [
  {
    title: "JavaScript",
    description: "Versatile scripting language.",
    img: "/src/assets/images/javascript.svg",
  },
  {
    title: "React",
    description: "JavaScript UI library.",
    img: "/src/assets/images/reactjs.svg",
  },
  {
    title: "Taildind CSS",
    description: "Utility-first CSS framework.",
    img: "/src/assets/images/tailwind.svg",
  },
  {
    title: "Node.js",
    description: "Server-side JavaScript runtime.",
    img: "/src/assets/images/nodejs.svg",
  },
  {
    title: "Express",
    description: "Minimalist Node.js framework.",
    img: "/src/assets/images/express.svg",
  },
  {
    title: "MongoDB",
    description: "NoSQL document database.",
    img: "/src/assets/images/mongodb.svg",
  },
  {
    title: "PostgresSQL",
    description: "Advanced relational database.",
    img: "/src/assets/images/postgresql.svg",
  },
  {
    title: "Jest",
    description: "JavaScript testing tool.",
    img: "/src/assets/images/jest.svg",
  },
  {
    title: "Git",
    description: "Version control system.",
    img: "/src/assets/images/git.svg",
  },
];

export default function Skills() {
  return (
    <div className="">
      <h2 className="text-5xl mt-24">Skills & Tools</h2>

      <p className="text-left my-4">
        I leverage these technologies to create intuitive, visually captivating,
        and highly functional applications that deliver seamless user
        experiences. My approach focuses on crafting solutions that strike the
        perfect balance between aesthetics and performance.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {arrJobHistory.map((skill, index) => (
          <li
            key={index}
            className="font-poppins flex items-center flex-1 gap-5 p-2.5 rounded-xl border border-accent bg-blue-900 hover:bg-blue-800 hover:border-blue-500 transition-colors duration-200"
          >
            <div
              className="p-3 rounded-xl w-fit"
              style={{ backgroundColor: "#F7DF1E33" }}
            >
              <img
                width={"40"}
                height={"40"}
                style={{ color: "transparent" }}
                className="size-8 "
                src={skill.img}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-lg text-slate-100 font-medium cursor-default">
                {skill.title}
              </h4>
              <p className="text-slate-100/80 text-sm cursor-default">
                {skill.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
