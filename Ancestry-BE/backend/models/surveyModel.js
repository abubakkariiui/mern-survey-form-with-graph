import mongoose from "mongoose";

const surveySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  country: {
    type: String,
  },
  rating: {
    type: Number,
  },
  suggestedImprovement: {
    type: String,
  },
  originPage: {
    type: String,
  },
});

const Survey = mongoose.model("Survey", surveySchema);

export default Survey;
