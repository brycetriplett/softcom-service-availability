import axios from "axios";

const initialFormData = {
  multicoverageid: "55805",
  account: "4187",
  key: "8e29acb356ce37b7066d08cc3a4fd2b3",
  country: "United States",
  state: "California",
  howdidyouhear: "website",
  preferredmethod: "any",
  besttimetocontact: "business hours",
  clientip: "",
  latitude: "",
  longitude: "",
  RxMargin: "",
};

const towerCoverageAPI = (apiUrl, formData) => {
  return axios.post(
    `https://api.towercoverage.com/towercoverage.asmx/${apiUrl}`,
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

const parseResponse = (data) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data, "text/xml");
  const result = xmlDoc.getElementsByTagName("string")[0].innerHTML;
  return result;
};

export { towerCoverageAPI, parseResponse, initialFormData };
