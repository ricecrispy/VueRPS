class RPSObject {
  constructor(value) {
    this.RPSSet = {
      1: "ROCK", 2: "PAPER", 3: "SCISSOR"
    };

    this.value = value;
    this.name = this.RPSSet[this.value];
    if (this.value === 1) {
      this.loseTo = 2;
    }
    else if (this.value === 2) {
      this.loseTo = 3;
    }
    else {
      this.loseTo = 1;
    }
  }

  WasDefeated(compVal) {
    if (this.loseTo === parseInt(compVal)) {
      return true;
    }
  }
}

new Vue({
  el: '#app',
  data: {
    num: "",
    option: "",
    user: "",
    comp: "",
    result: "",
  },
  methods: {
    getRandomNumber: function() {
      return (Math.ceil(Math.random() * 3));
    },
    displayValues: function(input) {
      var userVal = parseInt(input);
      var compVal = this.getRandomNumber();
      var compare = "";

      var userObj = new RPSObject(userVal);

      if (userVal === compVal) {
        compare = "YOU TIED";
      }
      else {
        if (userObj.WasDefeated(compVal))
        {
          compare = "YOU LOST";
        }
        else {
          compare = "YOU WON";
        }
      }

      this.user = userObj.name;
      this.comp = userObj.RPSSet[compVal];
      this.result = compare;
    }
  }
})
