// Only change code below this line
class Thermostat {
  constructor(f) {
    this._temperature = f;
  }

  get temperature() {
    let c = 5 / 9 * (this._temperature - 32);
   return c;
  }

  set temperature(c) {
    this._temperature = c * 9.0 / 5 + 32;
  }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius