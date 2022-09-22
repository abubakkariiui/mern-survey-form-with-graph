import React, { useEffect, useState } from "react";
import WorldMapComp from "../../components/charts/WorldMap";
import GenderChart from "../../components/charts/GenderChart";

const Reports = ({ data }) => {
  const [total, setTotal] = useState(0);
  const [averageAge, setAverageAge] = useState(0);
  const [averageExp, setAverageExp] = useState(0);
  const [genderDistribution, setGenderDistribution] = useState();
  const [countryDistribution, setCountryDistribution] = useState({});

  const getData = () => {
    setTotal(data?.count);
    setAverageAge(data?.averageAge);
    setAverageExp(data?.averageExperience);
    setGenderDistribution(data?.genderDistributionData);
    setCountryDistribution(data?.CountryData);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className="flex flex-wrap ">
      <div className="w-full md:w-4/12  ">
        <div className="shadow-lg m-2 md:m-8 bg-gray-100 rounded-xl p-4">
          <h1 className="text-2xl">Total</h1>
          <span className="flex items-end text-2xl">
            <p className="text-8xl pr-6">{total} </p>Feedbacks Submitted
          </span>
        </div>
      </div>
      <div className="w-full md:w-4/12  ">
        <div className="shadow-lg m-2 md:m-8 bg-gray-100 rounded-xl p-4">
          <h1 className="text-2xl">
            Average experience rating of the responders.
          </h1>
          <p className="text-8xl pr-6">{averageExp?.averageStars} / 5 </p>
        </div>
      </div>
      <div className="w-full md:w-4/12  ">
        <div className="shadow-lg m-2 md:m-8 bg-gray-100 rounded-xl p-4">
          <h1 className="text-2xl">Average Age</h1>

          <p className="text-8xl pr-6">{averageAge} </p>
        </div>
      </div>
      <div className="w-full md:w-1/2  ">
        <div className="shadow-lg m-2 md:m-8 bg-gray-100 rounded-xl p-4">
          <GenderChart data={genderDistribution} title="Gender" />
        </div>
      </div>
      <div className="w-full md:w-1/2  ">
        <div className="shadow-lg m-2 md:m-8 bg-gray-100 rounded-xl p-4">
          <WorldMapComp data={countryDistribution} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
