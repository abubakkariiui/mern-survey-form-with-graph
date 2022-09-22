import React, { useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import ReactStars from "react-rating-stars-component";
import RadioInput from "../../components/RadioInput";
import SelectInput from "../../components/SelectInput";
import CloseButton from "../../components/CloseButton";
import SubmitButton from "../../components/SubmitButton";

const SurveyQuestions = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState(0);
  const [improvements, setImprovements] = useState("");
  const [originPage, setOriginPage] = useState("");

  // countries list
  const countriesList = [
    "Afghanistan",
    "Aland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D'Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and Mcdonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, the Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthelemy",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.s.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const clearForm = () => {
    setName("");
    setEmail("");
    setGender("");
    setAge("");
    setCountry("");
    setRating(0);
    setImprovements("");
    setOriginPage("");
  };

  const submitForm = (event) => {
    event.preventDefault();
    const dataObj = {};
    dataObj.name = name;
    dataObj.email = email;
    dataObj.gender = gender;
    dataObj.age = age;
    dataObj.country = country;
    dataObj.rating = rating;
    dataObj.improvements = improvements;
    dataObj.originPage = originPage;
    clearForm();
    props.submit(true);

    fetch("http://localhost:3001/api/survey/create", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const closeForm = () => {
    props.show(false);
    clearForm();
  };

  return (
    <form method="reset" onSubmit={submitForm} className="w-full">
      <div className=" relative w-auto my-6 mx-auto max-w-3xl w-full">
        <div className="bg-gray-100 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          {/* form input elements */}
          <div className="relative p-6 flex-auto">
            <Input
              required={true}
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <Input
              required={true}
              type="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <div className="flex">
              <div className="w-full pr-8">
                <Input
                  required={true}
                  type="number"
                  placeholder="Age"
                  onChange={(event) => setAge(event.target.value)}
                  value={age}
                />
              </div>
              <div className="flex w-full pl-6">
                <RadioInput
                  required={true}
                  label="Gender"
                  options={["Male", "Female", "Other"]}
                  onChange={(event) => setGender(event.target.value)}
                  name="gender"
                  value={gender}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-full pr-8">
                <SelectInput
                  label="country"
                  options={countriesList}
                  required={true}
                  onChange={(event) => setCountry(event.target.value)}
                  value={country}
                />
              </div>
              <div className="flex w-full pl-6">
                <div className="flex flex-wrap py-4">
                  <label className="text-gray-700 text-sm font-bold mb-2 pb-1 w-full">
                    Experience rating
                  </label>
                  <ReactStars
                    count={5}
                    onChange={(rating) => setRating(rating)}
                    size={35}
                    activeColor="#ffd700"
                    value={rating}
                  />
                </div>
              </div>
            </div>
            <TextArea
              required={true}
              placeholder={"Suggested improvements"}
              onChange={(event) => setImprovements(event.target.value)}
              value={improvements}
            />
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <CloseButton text={"Close"} onClick={closeForm} />
            <SubmitButton text={"Submit"} type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SurveyQuestions;
