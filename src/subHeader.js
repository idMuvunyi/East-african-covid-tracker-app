import React, { useState, useEffect } from "react";

export default function SubHeader() {
  const [records, setRecords] = useState({});

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/`)
      .then((response) => response.json())
      .then((data) => setRecords(data));
    return () => {};
  }, []);

  return (
    <div className="py-12 bg-white flex flex-col rounded-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-0">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-6 rounded-md bg-blue-500 text-white">
                  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-65"></span>
                </div>
              </div>
              <div className="ml-4">
                <dd className="text-base text-gray-500">
                  <b className="font-sans">World Cases </b> <br />{" "}
                  {records.confirmed === undefined ? (
                    <p>0</p>
                  ) : (
                    <p>{records.confirmed.value}</p>
                  )}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
