const DAYSOFTHEWEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']; // Fridays are for Sprint Retrospectives
const MAXDEVSPERDAY = 2; // Subject to change per department size

export default (developers) => {
  let scheduledDevelopers = {};
  let unscheduledDevelopers = [];

  let shuffledDevelopers = shuffleArray(developers);
  let shuffledAvailableDays = getAllAvailableDaysShuffled();

  // Create "empty" schedule
  for (let i = 0; i < DAYSOFTHEWEEK.length; i++) {
    scheduledDevelopers[DAYSOFTHEWEEK[i]] = [];
  }

  // Assign a Developer to a slot from the available pool
  for (let i = 0; i < developers.length; i++) {

    // Developer scheduled to a day
    if (i < shuffledAvailableDays.length) {
      scheduledDevelopers[shuffledAvailableDays[i]].push({
        'id': shuffledDevelopers[i].id,
        'name': shuffledDevelopers[i].name
      });
    }
    // Ran out of available days; these Developers don't get to work from home
    else {
      unscheduledDevelopers.push({
        'id': shuffledDevelopers[i].id,
        'name': shuffledDevelopers[i].name
      });
    }
  }

  return {
    scheduledDevelopers: scheduledDevelopers,
    unscheduledDevelopers: unscheduledDevelopers
  };
}

// Shuffles a simple, associative array
let shuffleArray = (array) => {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

// Creates a pool of available days
let getAllAvailableDaysShuffled = () => {
  let availableDaysArray = [];

  for (let i = 0; i < MAXDEVSPERDAY; i++) {
    availableDaysArray = availableDaysArray.concat(DAYSOFTHEWEEK.slice());
  }

  return shuffleArray(availableDaysArray);
}
