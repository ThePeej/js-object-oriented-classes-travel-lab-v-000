
class Driver {

  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year){
    let experience = year - this.startDate
    return experience
  }

}
