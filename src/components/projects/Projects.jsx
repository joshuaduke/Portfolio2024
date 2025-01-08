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
      <div className="my-10" style={{ marginTop: "1200px" }}>
        <h2 className="text-5xl">Projects</h2>
        <p>
          This is a showcase for my most current projects. Most of the projects
          are my side projects while others are collaborations between multiple
          developers/teams.
        </p>
      </div>

      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index}>
            <h4 className="text-3xl mb-2 my-8">{item.title}</h4>
            <ul className="flex flex-row gap-x-2">
              <li>
                <a href={item.github}>GitHub</a>
              </li>
              <li>
                <a href={item.liveLink}>Live</a>
              </li>
            </ul>
            <p>{item.description}</p>
            <p className="my-4">
              Tech Stack:{" "}
              {item.tags.map((skill, index) => (
                <ul key={index} className="inline-block">
                  <li className="border-solid border-s-teal-50 rounded-lg py-px px-2 text-xs mx-1">
                    {skill}
                  </li>
                </ul>
              ))}
            </p>
            <img
              src={item.image}
              className="max-w-full h-auto rounded-lg border-4 border-solid border-red-900"
              alt=""
            />
          </div>
        ))}
    </>
  );
}
