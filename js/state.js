const state = {
  leader: {
    name: "",
    occupation: null,
    health: 4 // good = 4, adequate = 3, poor = 2, very poor = 1, dead = 0
  },
  occupation: [{
      banker: {
        wealth: 1600,
        weight: 1
      }
    },
    {
      carpender: {
        wealth: 800,
        weight: 2
      }
    },
    {
      farmer: {
        wealth: 400,
        weight: 3
      }
    }
  ],
  passengers: [{
      name: "",
      health: 4
    },
    {
      name: "",
      health: 4
    },
    {
      name: "",
      health: 4
    },
    {
      name: "",
      health: 4
    },
    {
      name: "",
      health: 4
    },
  ],
  money: 0,
  inventory: {
    oxen: {
      quantity: 0,
      price: 20
    },
    clothing: {
      quantity: 0,
      price: 10
    },
    food: {
      quantity: 0,
      price: 10
    },
    ammunition: {
      quantity: 0,
      price: 2
    },
    wheels: {
      quantity: 0,
      price: 10
    },
    axle: {
      quantity: 0,
      price: 10
    },
    tongue: {
      quantity: 0,
      price: 0
    }
  },
  wagon: {
    location: [{ //if want to track on map
        x: 0
      },
      {
        y: 0
      }
    ],
    pace: 2, // (steady 2, slow 1, stopped 0)
  },
  distance: 0, // total distance traveled
  landmark: 0, // distance to next landmark
  score: 0 // score depends upon initial occupation, distance traveled, number of passengers surviving?
};