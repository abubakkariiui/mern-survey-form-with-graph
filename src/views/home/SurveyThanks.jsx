import React from "react";
import CloseButton from "../../components/CloseButton";
import SubmitButton from "../../components/SubmitButton";

const SurveyThanks = () => {
  return (
    <div className=" relative w-auto my-6 mx-auto max-w-3xl w-full">
      <div className="bg-gray-100 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
        <div className="relative p-8 flex-auto">
          <p className="text-xl font-bold p-5 mb-5 text-center">
            Thanks For Your Feedback
          </p>
          <div>
            <CloseButton
              text={"close current window"}
              onClick={() => {
                window.open("about:blank", "_self");
                window.close();
              }}
            />
            <SubmitButton
              text={"Back to Home Page"}
              type="button"
              href="http://www.ancestry.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyThanks;
