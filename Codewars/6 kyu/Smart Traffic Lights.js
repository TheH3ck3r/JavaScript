// Story
// Your friend Bob is working as a taxi driver. After working for a month he is frustrated in the city's traffic lights. He asks you to write a program for a new type of traffic light. It is made so it turns green for the road with the most congestion.

// Task
// Given 2 pairs of values each representing a road (the number of cars on it and its name), construct an object whose turngreen method returns the name of the road with the most traffic at the moment of the method call, and clears that road from cars.

// After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning, return an empty value instead.

// Example
// t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
// t.turngreen()  ==  "3rd st"
// t.turngreen()  ==  "27th ave"
// t.turngreen()  ==  null

// t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
// t.turngreen()  ==  null

class SmartTrafficLight {
  constructor(road1, road2) {
    this.road1 = {
      name: road1[1],
      cars: road1[0],
    };
    this.road2 = {
      name: road2[1],
      cars: road2[0],
    };
  }

  turngreen() {
    if (this.road1.cars > this.road2.cars) {
      const greenRoad = this.road1.name;
      this.road1.cars = 0;
      return greenRoad;
    } else if (this.road2.cars > this.road1.cars) {
      const greenRoad = this.road2.name;
      this.road2.cars = 0;
      return greenRoad;
    } else {
      this.road1.cars = 0;
      this.road2.cars = 0;
      return null;
    }
  }
}

// Smart solution:
// class SmartTrafficLight {
//   constructor(...arr) {
//     this.arr = arr.sort((a, b) => a[0] - b[0]);
//   }
//   turngreen() {
//     return this.arr.length > 1 && this.arr[0][0] == this.arr[1][0]
//       ? null
//       : (this.arr.pop() || [, null])[1];
//   }
// }
