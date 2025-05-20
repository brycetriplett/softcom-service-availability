import { towerCoverageAPI, parseResponse } from "../../api";
import tiers from "../../prices";

const findMaxPriceOld = async (data) => {
  let formData = { ...data };
  let resultList = {};

  const process = async (formData) => {
    let request = await towerCoverageAPI("EUSPrequalAPI", formData);
    let result = parseResponse(request.data);
    return result;
  };

  formData.multicoverageid = tiers.main.mid.mcid;
  let result = await process(formData);

  if (result === "yes") {
    resultList = { ...tiers.main.mid.values };
    formData.multicoverageid = tiers.main.high.mcid;

    let result = await process(formData);
    if (result === "yes") {
      resultList = {
        ...resultList,
        ...tiers.main.high.values,
      };
    }
  }

  return resultList;
};


const findMaxPrice = async (data) => {
  return { 
    ...tiers.main.mid.values,
    ...tiers.main.high.values
  }
}

export default findMaxPrice;
