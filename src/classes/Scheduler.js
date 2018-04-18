// @TODO Make this a class and make these constants dynamic/configurable
const DAYSOFTHEWEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']; // Fridays are for Sprint Retrospectives
const MAXDEVSPERDAY = 2; // Subject to change per department size

export default class Scheduler {

  constructor(developers) {
    this.developers = developers;
    this.scheduledDevelopers = {};
    this.unscheduledDevelopers = [];
  }

  // Creates and returns a weekly schedule
  schedule() {
    let shuffledDevelopers = this.shuffleArray(this.developers);
    let shuffledAvailableDays = this.getAllAvailableDaysShuffled();

    // Create "empty" schedule
    for (let i = 0; i < DAYSOFTHEWEEK.length; i++) {
      this.scheduledDevelopers[DAYSOFTHEWEEK[i]] = [];
    }

    // Assign a Developer to a slot from the available pool
    for (let i = 0; i < this.developers.length; i++) {

      // Developer scheduled to a day
      if (i < shuffledAvailableDays.length) {
        this.scheduledDevelopers[shuffledAvailableDays[i]].push({
          'id': shuffledDevelopers[i].id,
          'name': shuffledDevelopers[i].name
        });
      }
      // Ran out of available days; these Developers don't get to work from home
      else {
        this.unscheduledDevelopers.push({
          'id': shuffledDevelopers[i].id,
          'name': shuffledDevelopers[i].name
        });
      }
    }

    return {
      scheduledDevelopers: this.scheduledDevelopers,
      unscheduledDevelopers: this.unscheduledDevelopers
    };
  }

  // Shuffles a simple, associative array
  shuffleArray(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  // Creates a pool of available days
  getAllAvailableDaysShuffled() {
    let availableDaysArray = [];

    for (let i = 0; i < MAXDEVSPERDAY; i++) {
      availableDaysArray = availableDaysArray.concat(DAYSOFTHEWEEK.slice());
    }

    return this.shuffleArray(availableDaysArray);
  }
}
