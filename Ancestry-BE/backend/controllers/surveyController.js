import asyncHandler from "express-async-handler";
import Survey from "../models/surveyModel.js";

const getSurveys = asyncHandler(async (req, res) => {
  const survey = await Survey.find();
  var sum = 0;

  //average age
  const avg = survey.map((e) => {
    return (sum += parseInt(e.age, 10));
  });
  const averageAge = Math.floor(sum / survey.length);

  const averageExp = survey.map((e) => {
    return e.rating;
  });

  const test = averageExp.reduce((a, b) => a + b, 0) / survey.length;

  const rounded = Math.round(test * 10) / 10;

  const maxi = survey.map((e) => {
    return e.rating;
  });

  const maximum = Math.max(...maxi);
  const minimum = Math.min(...maxi);

  //average experience
  const averageExperience = {
    totalStars: survey.length * 5,
    maxStar: maximum,
    minStar: minimum,
    averageStars: rounded,
  };

  //average gender distribution

  const malegender = survey.filter((e) => {
    if (e.gender === "Male") {
      return e.gender;
    }
  });
  const femalegender = survey.filter((e) => {
    if (e.gender === "Female") {
      return e.gender;
    }
  });
  const othergender = survey.filter((e) => {
    if (e.gender === "Other") {
      return e.gender;
    }
  });

  let genderDistributionData = [];
  genderDistributionData.push(["Title", "gender"]);
  genderDistributionData.push(["male", malegender.length]);
  genderDistributionData.push(["female", femalegender.length]);
  genderDistributionData.push(["other", othergender.length]);

  // average country distribution

  const averageCountry = await Survey.aggregate([
    {
      $group: {
        _id: "$country",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  const CountryData = [];
  CountryData.push(["Title", "Countries"]);
  averageCountry.forEach((element) => {
    CountryData.push([element._id, parseInt(element.count)]);
  });

  res.json({
    count: survey.length,
    averageAge,
    averageExperience,
    genderDistributionData,
    CountryData,
  });
});

const CreateSurvey = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    age,
    gender,
    country,
    rating,
    suggestedImprovement,
    originPage,
  } = req.body;

  const survey = new Survey({
    name,
    email,
    age,
    gender,
    country,
    rating,
    suggestedImprovement,
    originPage,
  });

  const createdSurvey = await survey.save();

  res.status(201).json(createdSurvey);
});

export { CreateSurvey, getSurveys };
