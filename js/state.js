const HEALTH = {
  good: {
    value: 4,
    name: 'Good',
  },
  adequate: {
    value: 3,
    name: 'Adequate',
  },
  poor: {
    value: 2,
    name: 'Poor',
  },
  verypoor: {
    value: 1,
    name: 'Very poor',
  },
  dead: {
    value: 0,
    name: 'Asleep forever', // (dead is not nice)
  },
};
const OCCUPATION = {
  banker: {
    wealth: 1600,
    weight: 1,
  },
  carpenter: {
    wealth: 800,
    weight: 2,
  },
  farmer: {
    wealth: 400,
    weight: 3,
  },
};
const STORE = {
  yoke: 20,
  clothing: 10,
  food: 10,
  ammunition: 2,
  wheels: 10,
  axle: 10,
  tongue: 10,
};
const PACE = {
  steady: {
    value: 2,
    name: 'Steady',
  },
  slow: {
    value: 1,
    name: 'Slow',
  },
  stopped: {
    value: 0,
    name: 'Stopped',
  },
};
const RATIONS = {
   filling: {
     value: 3,  // amount of food consumed per person per day
     name: 'Filling', 
   },
   meager: {
    value: 2,
    name: 'Meager',
  },
  barebones: {
    value: 1,
    name: 'Bare Bones',
  },
};
const LANDMARKS = {
  kansasriver: {
    distance: 102,
    name: 'Kansas River Crossing',
  },
  blueriver: {
    distance: 240,
    name: 'Blue River Crossing',
  },
  ftkearney: {
    distance: 304,
    name: 'Fort Kearney',
  },
  chimneyrock: {
    distance: 554,
    name: 'Chimney Rock',
  },
  ftlaramie: {
    distance: 640,
    name: 'Fort Laramie',
  },
  indepencerock: {
    distance: 830,
    name: 'Independence Rock',
  },
  indepencerock: {
    distance: 830,
    name: 'Independence Rock',
  },
  southpass: {
    distance: 932,
    name: 'South Pass',
  },
  greenriver: {
    distance: 1057,
    name: 'Green River Crossing',
  },
  sodasprings: {
    distance: 1201,
    name: 'Soda Springs',
  },
  forthall: {
    distance: 1258,
    name: 'Fort Hall',
  },
};
const EVENTS = {
  cholera: {
    proability: 0.0,
    name: 'Cholera',
  },
  dyenstery: {
    proability: 0.0,
    name: 'Dysentery',
  },
  Measles: {
    proability: 0.0,
    name: 'Measles',
  },
  exhaustion: {
    proability: 0.0,
    name: 'Exhaustion',
  },
  snakebite: {
    proability: 0.0,
    name: 'Snake Bite',
  },
  nowater: {
    proability: 0.0,
    name: 'No Water',
  },
  badwater: {
    proability: 0.0,
    name: 'Bad Water',
  },
  theft: {
    proability: 0.0,
    name: 'Thief Steals Clothing',
  },
  lost: {
    proability: 0.0,
    name: 'You Have the Lost Trail',
  },
  brokenwheel: {
    proability: 0.0,
    name: 'Wheel Broke',
  },
  nograss: {
    proability: 0.0,
    name: 'No Grass for Oxen',
  },
  oxsick: {
    proability: 0.0,
    name: 'Ox is Sick',
  },
  oxwander: {
    proability: 0.0,
    name: 'Ox Has Wandered Off',
  },
  wildfruit: {
    proability: 0.0,
    name: 'You Found Wild Fruit',
  },
};
const state = {
  leader: {
    name: '',
    health: HEALTH.good,
  },
  passengers: [
    {
      name: '',
      health: HEALTH.good,
    },
    {
      name: '',
      health: HEALTH.good,
    },
    {
      name: '',
      health: HEALTH.good,
    },
    {
      name: '',
      health: HEALTH.good,
    },
    {
      name: '',
      health: HEALTH.good,
    },
  ],
  money: 0,
  inventory: {
    oxen: {
      name: 'Oxen',
      count: 0,
    },
    clothing: {
      name: 'Clothing',
      count: 0,
    },
    food: {
      name: 'Food',
      count: 0,
    },
    ammunition: {
      name: 'Ammunition',
      count: 0,
    },
    wheels: {
      name: 'Wheels',
      count: 0,
    },
    axel: {
      name: 'Axel',
      count: 0,
    },
    tongue: {
      name: 'Tongue',
      count: 0,
    },
  },
  wagon: {
    location: [
      {
        //if want to track on map
        x: 0,
      },
      {
        y: 0,
      },
    ],
    pace: PACE.steady,
  },
  distance: 0, // total distance traveled
  landmark: 0, // distance to next landmark
  score: 0, // score based on education, distance traveled, number of surviving passengers
};

// ---------- Game State Manager ----------

class GameStateManager {
  constructor() {
    // maybe the inventory should be an array, but I'm not sure
    this.itemKeys = Object.keys(state.inventory);
  }

  // -- GET ---

  // probably unnecessary, but it seems like it should be used
  getState() {
    return state;
  }

  getWagonPace() {
    return state.wagon.pace;
  }

  getLeader() {
    return state.leader;
  }

  getPassenger(passenger) {
    return state.passengers[passenger];
  }

  getMoneyCount() {
    return state.money;
  }

  getWagon() {
    return state.wagon;
  }

  getTotalDistance() {
    return state.distance;
  }

  getNextLandmarkDistance() {
    return state.landmark;
  }

  getInventoryItem(item) {
    return state.inventory[item];
  }

  getInventoryItemByIndex(itemIndex) {
    let key = this.itemKeys[itemIndex];
    return state.inventory[key];
  }

  getMoneyStirng() {
    return '$' + this.getMoneyCount() + '.00';
  }

  getInventoryListString() {
    let inventory = [];
    for (let i = 0; i < this.itemKeys.length; i++) {
      let item = this.getInventoryItemByIndex(i);
      inventory[i] = item.name + ' ' + item.count;
    }
    return inventory;
  }

  // --- SET / CHANGE ---

  // expects a single String
  setLeaderName(name) {
    state.leader.name = name;
  }

  // expects a String array
  setPassengerNames(names) {
    for (var i = 0; i < state.passengers.length; i++) {
      state.passengers[i].name = names[i];
    }
  }

  // expects ammount
  changeMoneyCount(amt) {
    state.money += amt;
  }

  // expects item name as Stirng and ammount
  changeInventoryItemCount(item, amt) {
    item = item.toLowerCase();
    state.inventory[item].count += amt;
  }

  // expects item name as index and ammount
  changeInventoryItemCountByIndex(itemIndex, amt) {
    this.getInventoryItemByIndex(itemIndex).count += amt;
  }

  setWagonMapPosition(x, y) {
    state.wagon.x = x;
    state.wagon.y = y;
  }

  // expects any PACE object
  changeWagonPace(pace) {
    state.wagon.pace = pace;
  }

  setTotalDistance(distance) {
    state.distance = distance;
  }

  setNextLandmarkDistance(distance) {
    state.landmark = distance;
  }

  // expects any HEALTH object
  setLeaderHealth(health) {
    state.leader.health = health;
  }

  // expects passenger index and any HEALTH object
  setPassengerHealth(passenger, health) {
    state.passengers[passenger].health = health;
  }
}
