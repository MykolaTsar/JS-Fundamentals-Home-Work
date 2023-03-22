//1. 
class Circle {
  constructor(center, radius, circleObj) {
    this.center = center;
    this.radius = radius;
    this.circleObj= circleObj;
  }
  
  calcCircleLength() {
    return 2 * Math.Pi * this.radius;
  }


}