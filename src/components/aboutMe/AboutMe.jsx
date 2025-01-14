import Timeline from "./Timeline";

export default function AboutMe() {
  return (
    <div className="relative" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <article
        style={{ top: 20, left: 0, right: 0 }}
        className="py-8 bg-slate-900 text-white border border-accent p-6 w-11/12 absolute  z-20 my-0 mx-auto rounded-lg"
      >
        <h2 className="pb-2   mb-4 text-accent">ABOUT ME</h2>
        <p>
          Hello there, I currently am working as a developer at reSolved
          business solutions. I am also a Computer programming and Analysis
          Graduate from Seneca College. My preferred stack is MERN (mongoDB,
          Express, React, Node.js). <br /> <br />I work professionally as a
          Front End Developer but I like to dabble and do some Back End
          development work whwen I am working on a personal project. I enjoy
          learning and exploring new technologies.
        </p>
      </article>
      <Timeline />
    </div>
  );
}
