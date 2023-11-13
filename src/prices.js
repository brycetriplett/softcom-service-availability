const tiers = {
  main: {
    low: {
      mcid: "55805",
      values: {
        50: {
          title: "Freedom 50",
          price: "100",
          description: ["50 Mbps Download", "10 Mbps Upload"],
        },
      },
    },

    mid: {
      mcid: "55982",
      values: {
        100: {
          title: "Freedom 100",
          price: "125",
          description: ["100 Mbps Download", "20 Mbps Upload"],
        },
      },
    },

    high: {
      mcid: "55981",
      values: {
        200: {
          title: "Freedom 200",
          price: "150",
          description: ["200 Mbps Download", "25 Mbps Upload"],
        },
        400: {
          title: "Freedom 400",
          price: "200",
          description: ["400 Mbps Download", "30 Mbps Upload"],
        },
      },
    },
  },
};

export default tiers;
