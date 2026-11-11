import tiers from "../../prices";

const findMaxPrice = async () => {
  return {
    ...tiers.main.mid.values,
    ...tiers.main.high.values,
  };
};

export default findMaxPrice;
