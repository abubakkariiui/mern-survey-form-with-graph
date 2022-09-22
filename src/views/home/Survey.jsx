import React, { useState } from "react";

import SurveyThanks from "./SurveyThanks";
import SurveyQuestions from "./SurveyQuestions";

const Survey = () => {
  // use state hooks
  const [showSurveyForm, setShowSurveyForm] = useState(false);
  const [submittedSucess, setSubmittedSucess] = useState(false);

  return (
    <div className="w-full ">
      {/* button to display popup */}
      <button
        className="block bg-purple-800 text-white font-bold uppercase text-sm px-6 py-3 mt-5 rounded mx-auto w-1/2"
        type="button"
        onClick={() => setShowSurveyForm(true)}
      >
        Open Survry Form
      </button>

      {showSurveyForm ? (
        <>
          {/* form div */}
          <div className=" items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {submittedSucess === false ? (
              <SurveyQuestions
                submit={setSubmittedSucess}
                show={setShowSurveyForm}
              />
            ) : (
              <SurveyThanks />
            )}
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Survey;
