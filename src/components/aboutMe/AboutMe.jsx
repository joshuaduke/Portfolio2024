import Timeline from "./Timeline";

export default function AboutMe() {
  return (
    <div className="relative hdvh">
      <main className="flex flex-col justify-center items-center mt-48 p-2">
        <p className="">BASED IN CANADA</p>
        <h1 className="text-6xl">Joshua Duke</h1>
        <p className="my-4">Full Stack Web Developer</p>
        <div className="w-full text-center">
          <a
            href=""
            className="border-solid rounded-md border-r p-2 inline-block"
          >
            See my Work
          </a>
        </div>
      </main>

      <article
        style={{ top: 250, left: 0, right: 0 }}
        className="bg-slate-900 text-white border-solid border-gray-50 p-6 w-11/12 absolute  z-20 my-0 mx-auto rounded-lg"
      >
        <h2 className="pb-2">ABOUT ME</h2>
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
