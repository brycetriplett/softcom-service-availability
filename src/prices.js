const tiers = {
  main: { 
    low: {
      mcid: '55805',
      values: {
        '25': {
          title: 'Freedom 25',
          price: '64.95',
          description: [
            '25mbps Download',
            '5mbps Upload',
          ],
        },
        '50': {
          title: 'Freedom 50',
          price: '95.95',
          description: [
            '50mbps Download',
            '10mbps Upload',
          ],
        },
      }
    },

    mid: {
      mcid: '55982',
      values: {
        '100': {
          title: 'Freedom 100',
          price: '109.95',
          description: [
            '100mbps Download',
            '20mbps Upload',
          ],
        }
      }
    },

    high: {
      mcid: '55981',
      values: {
        '200': {
          title: 'Freedom 200',
          price: '124.95',
          description: [
            '200mbps Download',
            '25mbps Upload',
          ],
        },
        '400': {
          title: 'Freedom 400',
          price: '139.95',
          description: [
            '400mbps Download',
            '30mbps Upload',
          ],
        },
      }
    }
  },
  

  alternative: {
    '100': {
      title: 'Verizon 100',
      price: '109.95',
      description: [
        '100mbps Download',
        '30mbps Upload',
        '$395 installation fee'
      ],
    },
    
    '200': {
      title: 'Verizon 200',
      price: '124.95',
      description: [
        '200mbps Download',
        '30mbps Upload',
        '$395 installation fee'
      ],
    },
  }
};

export default tiers;



