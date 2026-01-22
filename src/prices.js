const tiers = {
  main: {
    mid: {
      mcid: "55982",
      values: {
        400: {
          title: "Freedom 400 Max Savings",
          price: "99.95",
          description: [
              "400 Mbps Download",
              "50 Mbps Upload",
              "$499 network access fee"
          ],
          license: 499,
          broadband_facts: "eNBHkoPVA9ur"
        },
        401: {
          title: "Freedom 400 Flex",
          price: "129.95",
          description: [
              "400 Mbps Download",
              "50 Mbps Upload",
              "$0 network access fee"
          ],
          license: 0,
          broadband_facts: "oslFTGepd9xo"
        },
      },
    },

    high: {
      mcid: "55981",
      values: {
        1000: {
          title: "Freedom Gig Max Savings",
          price: "99.95",
          description: [
              "1 Gb Download",
              "200 Mbps Upload",
              "$599 network access fee"
          ],
          license: 599,
          broadband_facts: "vjOhFuszchCk"
        },
        1001: {
          title: "Freedom Gig Flex",
          price: "149.95",
          description: [
              "1 Gb Download",
              "200 Mbps Upload",
              "$0 network access fee"
          ],
          license: 0,
          broadband_facts: "T9gI2V1uCXgc"
        },
      },
    },
  },
};

export default tiers;
