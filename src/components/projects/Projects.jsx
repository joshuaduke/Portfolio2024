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
      <div
        id="projects"
        className="my-10 pt-10"
        style={{ marginTop: "1050px" }}
      >
        <h2 className="text-5xl mb-6">Projects</h2>
        <p>
          This is a showcase for my most current projects. Most of the projects
          are my side projects while others are collaborations between multiple
          developers/teams.
        </p>
      </div>

      <div className="">
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <div key={index} className="project">
                  <div className="project-content p-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-3xl mb-2 my-8">{item.title}</h4>
                      <ul className="text-lg flex flex-col gap-4">
                        <li className="">
                          <a
                            className="border-b-2 border-red-600"
                            href={item.github}
                          >
                            GitHub
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="border-b-2 border-red-600"
                            href={item.liveLink}
                          >
                            Live
                          </a>
                        </li>
                        <li>
                          {item.status == "wip" ? (
                            <span className="text-red-500">
                              *Work in Progress*
                            </span>
                          ) : (
                            ""
                          )}
                        </li>
                      </ul>
                    </div>

                    <p>{item.description}</p>
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
                    className="w-full max-w-xl h-auto rounded-lg border-4 border-solid border-accent"
                    alt=""
                  />
                </div>
              );
            } else {
              return (
                <div key={index} className="project">
                  <img
                    src={item.image}
                    className="w-full max-w-xl h-auto rounded-lg border-4 border-solid border-accent"
                    alt=""
                  />

                  <div className="project-content p-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-3xl mb-2 my-8">{item.title}</h4>
                      <ul className="text-lg flex flex-col gap-4">
                        <li className="">
                          <a
                            className="border-b-2 border-red-600"
                            href={item.github}
                          >
                            GitHub
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="border-b-2 border-red-600"
                            href={item.liveLink}
                          >
                            Live
                          </a>
                        </li>
                        <li>
                          {item.status == "wip" ? (
                            <span className="text-red-500">
                              *Work in Progress*
                            </span>
                          ) : (
                            ""
                          )}
                        </li>
                      </ul>
                    </div>

                    <p>{item.description}</p>
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
