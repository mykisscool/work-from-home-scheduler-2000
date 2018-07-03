export default class Scheduler {

  constructor(developers, availableDays, maxDevsPerDay) {
    this.developers = developers;
    this.availableDays = availableDays;
    this.maxDevsPerDay = maxDevsPerDay;
    this.scheduledDevelopers = {};
    this.unscheduledDevelopers = [];
  }

  // Creates and returns a weekly schedule
  schedule() {
    let developersCopy = this.developers.slice();
    let shuffledDevelopers = this.shuffleArray(developersCopy);
    let shuffledAvailableDays = this.getAllAvailableDaysShuffled();

    // Create "empty" schedule
    for (let i = 0; i < this.availableDays.length; i++) {
      this.scheduledDevelopers[this.availableDays[i]] = [];
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

    for (let i = 0; i < this.maxDevsPerDay; i++) {
      availableDaysArray = availableDaysArray.concat(this.availableDays.slice());
    }

    return this.shuffleArray(availableDaysArray);
  }
}
