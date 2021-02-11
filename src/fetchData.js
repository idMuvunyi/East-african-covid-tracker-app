import React, { useReducer, useState, useEffect } from "react";
import Drawing from "./chart";

const ACTIONS = {
  UPDATE_CHART: "update-chart",
};

let initialData = {
  labels: ["Total Cases", "Recovered", "Deaths"],
  datasets: [
    {
      label: "Covid-19 Status",
      data: [],
      backgroundColor: [
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

function reducer(chartData, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_CHART:
      return {
        ...initialData,
        datasets: [
          {
            label: "Covid-19 Status",
            data: [...action.payload.data],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      };
    default:
      return chartData;
  }
}

export default function FetchData() {
  const [chartData, dispatch] = useReducer(reducer, initialData);
  const [country, setCountry] = useState("Rwanda");
  const [records, setRecords] = useState({});

  useEffect(() => {
    let isActive = true;

    fetch(`https://covid19.mathdro.id/api/countries/${country}`)
      .then((response) => response.json())
      .then((infos) => {
        if (isActive) {
          setRecords(infos);
          console.log(infos);
          dispatch({
            type: ACTIONS.UPDATE_CHART,
            payload: {
              data: [
                infos.confirmed.value,
                infos.recovered.value,
                infos.deaths.value,
              ],
            },
          });
        }
      })
      .catch((error) => console.log(error.message));

    return () => {
      isActive = false;
    };
  }, [country]);

  //console.log(chartData);

  function handleSubmit(e) {
    setCountry(e.target.value);
  }

  return (
    <>
      <div className="ml-20 mt-3">
        <form action="">
          <select
            onChange={handleSubmit}
            name="countryInput"
            className="bg-blue-100 text-blue-600  border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-45 ">
            <option value="Rwanda">Rwanda</option>
            <option value="Uganda">Uganda</option>
            <option value="Kenya">Kenya</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Burundi">Burundi</option>
            <option value="South Sudan">South Sudan</option>
          </select>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-20 mt-3">
        <div className="bg-blue-200 rounded-md shadow-md transition duration-500 ease-in-out hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110">
          <div className="ml-4">
            <dd className="text-base text-gray-600 font-mono text-center">
              <b>Total Cases </b> <br />{" "}
              {records.confirmed === undefined ? (
                <p>0</p>
              ) : (
                <p>{records.confirmed.value}</p>
              )}
            </dd>
          </div>
        </div>
        <div className="bg-blue-200 rounded-md shadow-md transition duration-500 ease-in-out hover:bg-green-300 transform hover:-translate-y-1 hover:scale-110">
          <div className="ml-4">
            <dd className="text-base text-gray-600 font-mono text-center">
              <b>Recovered </b> <br />{" "}
              {records.confirmed === undefined ? (
                <p>0</p>
              ) : (
                <p>{records.recovered.value}</p>
              )}
            </dd>
          </div>
        </div>

        <div className="bg-blue-200 rounded-md shadow-md transition duration-500 ease-in-out hover:bg-red-300 transform hover:-translate-y-1 hover:scale-110">
          <div className="ml-4">
            <dd className="text-base text-gray-600 font-mono text-center">
              <b>Total Deaths </b> <br />{" "}
              {records.confirmed === undefined ? (
                <p>0</p>
              ) : (
                <p>{records.deaths.value}</p>
              )}
            </dd>
          </div>
        </div>
      </div>

      <Drawing chartData={chartData} />
    </>
  );
}
