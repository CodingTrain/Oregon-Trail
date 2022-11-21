const state = {
  leader: {
    name: "",
    health: 4 // good = 4, adequate = 3, poor = 2, very poor = 1, dead = 0
  },
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
    oxen: 0,
    clothing: 0,
    food: 0,
    ammunition: 0,
    wheels: 0,
    axel: 0,
    tongue: 0
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
  landmark: 0 // distance to next landmark
};
