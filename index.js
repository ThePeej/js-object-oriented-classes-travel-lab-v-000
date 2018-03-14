
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

// let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontal = parseInt(endingLocation.vertical) - parseInt(beginningLocation.vertical);
    let vertical = 0
    return horizontal + vertical
  }


  estimatedTime(){
    // Returns number of minutes estimated for trip
    // 3 blocks per minute in off-peak hours
    // 2 blocks per minute in peak hours
  }
}
