
class Driver {

  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year){
    let experience = year - this.startDate.getFullYear()
    return experience
  }

}


class Route {

  constructor(beginningLocation, endingLocation) {

  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  }


  estimatedTime(){
    // Returns number of minutes estimated for trip
    // 3 blocks per minute in off-peak hours
    // 2 blocks per minute in peak hours
  }
}
