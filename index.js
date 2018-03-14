
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

  


  estimatedTime(){
    // Returns number of minutes estimated for trip
    // 3 blocks per minute in off-peak hours
    // 2 blocks per minute in peak hours
  }
}
