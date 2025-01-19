import { useState, useEffect } from "react";

export default function Projects() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("projectList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
    console.log("Data", data);
  }, []);

  return (
    <>
      <div id="projects" className="my-10 pt-10 text-center">
        <h2 className="text-5xl mb-6">Projects</h2>
        <p className="text-lg lg:my-0 lg:mx-auto lg:w-9/12">
          This is a showcase for my most current projects. Most of the projects
          are my completed side projects. While some of them are actively in
          development.
        </p>
      </div>

      <div className="my-0 mx-auto md:w-full lg:w-full 2xl:w-9/12">
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <div key={index} className="project">
                  <div className="project-content flex flex-col justify-between md:p-8 lg:p-2 ">
                    <div>
                      <h4 className="text-3xl mb-2 my-8 lg:my-0">
                        {item.title}
                      </h4>
                      <ul className="text-lg flex flex-col gap-4">
                        <li className="">
                          <a
                            target="_blank"
                            className="border-b-2 border-accent"
                            href={item.github}
                          >
                            GitHub
                          </a>
                        </li>

                        {item.status == "wip" ? (
                          <>
                            {/* <li className="">
                              <a
                                target="_blank"
                                className="border-b-2 border-accent"
                                href={item.liveLink}
                              >
                                Live
                              </a>
                            </li> */}
                            <li>
                              <span className="text-orange-400">
                                *Work in Progress*
                              </span>
                            </li>
                          </>
                        ) : (
                          <li className="">
                            <a
                              target="_blank"
                              className="border-b-2 border-accent"
                              href={item.liveLink}
                            >
                              Live
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>

                    <p className="py-4">{item.description}</p>

                    <div className="my-4">
                      <span>Tech Stack: </span>
                      {item.tags.map((skill, index) => (
                        <ul key={index} className="inline-block">
                          <li className="border border-s-teal-50 rounded-xl py-px px-2 text-xs mx-1">
                            {skill}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>

                  <img
                    src={item.image}
                    className="w-full max-w-5xl h-auto mx-2 rounded-lg border-4 border-solid border-accent md:max-w-sm md:h-fit lg:max-w-xl 2xl:max-w-5xl"
                    alt=""
                  />
                </div>
              );
            } else {
              return (
                <div key={index} className="project">
                  <img
                    src={item.image}
                    className="w-full max-w-5xl h-auto mx-2 rounded-lg border-4 border-solid border-accent md:max-w-sm md:h-fit lg:max-w-xl 2xl:max-w-5xl"
                    alt=""
                  />

                  <div className="project-content flex flex-col justify-between md:p-8 lg:p-2">
                    <div>
                      <h4 className="text-3xl mb-2 my-8 lg:my-0">
                        {item.title}
                      </h4>
                      <ul className="text-lg flex flex-col gap-4">
                        <li className="">
                          <a
                            className="border-b-2 border-accent"
                            href={item.github}
                          >
                            GitHub
                          </a>
                        </li>
                        {item.status == "wip" ? (
                          <>
                            {/* <li className="">
                              <a
                                target="_blank"
                                className="border-b-2 border-accent"
                                href={item.liveLink}
                              >
                                Live
                              </a>
                            </li> */}
                            <li>
                              <span className="text-orange-400">
                                *Work in Progress*
                              </span>
                            </li>
                          </>
                        ) : (
                          <li className="">
                            <a
                              target="_blank"
                              className="border-b-2 border-accent"
                              href={item.liveLink}
                            >
                              Live
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>

                    <p className="py-4">{item.description}</p>

                    <div className="my-4">
                      <span>Tech Stack: </span>
                      {item.tags.map((skill, index) => (
                        <ul key={index} className="inline-block">
                          <li className="border border-s-teal-50 rounded-xl py-px px-2 text-xs mx-1">
                            {skill}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
}
