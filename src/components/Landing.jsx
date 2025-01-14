export default function Landing() {
  return (
    <main className="flex flex-col justify-center items-center p-2 h-dvh">
      <p className="">BASED IN CANADA</p>
      <h1 className="text-6xl text-titleWhite">Joshua Duke</h1>
      <h2 className="my-4 text-accent">
        I&#39;m a Full Stack &#60;Web /&#62; Developer
      </h2>
      <ul className="flex flex-row gap-2 m-6">
        <li>
          <a href="">
            <img
              className="bg-white rounded-lg"
              width={40}
              height={40}
              src="/src/assets/images/linkedin.png"
              alt="linkedin icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            {" "}
            <img
              className="bg-white rounded-3xl"
              width={40}
              height={40}
              src="/src/assets/images/github.png"
              alt="github icon"
            />
          </a>
        </li>
      </ul>
      <div className="w-full text-center ">
        <a
          href="#projects"
          className="border-solid rounded-md border-r px-4 py-2 inline-block text-lg"
        >
          Check out my Projects
        </a>
      </div>
    </main>
  );
}
