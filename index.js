let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return parseInt(year) - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
      let horizontalDist = this.beginningLocation.horizontal - eastWest.indexOf(this.endingLocation.horizontal)
      let verticalDist = this.beginningLocation.vertical - eastWest.indexOf(this.endingLocation.vertical)
      console.log(horizontalDist)
      // return Math.abs(horizontalDist) + Math.abs(verticalDist)
  }

}
