export default (rotaWeeks) => {

  const weekOne = rotaWeeks[0];
  const weekTwo = rotaWeeks[1];

  const currentDay = {};

  const findIncompleteDay = (week) => {
    // return true if a day contains empty periods.
    const emptyPeriods = (day) => {
      return day.periods[0].allocation === null || day.periods[1].allocation === null
    }
    // return the first day in a week that contains an empty period.
    return week.schedule.find(emptyPeriods);
  }

  if (findIncompleteDay(weekOne) !== undefined) {
    currentDay.weekNumber = "One";
    currentDay.day = findIncompleteDay(weekOne).dayTitle
    console.log(currentDay);
    return currentDay;
  }
  else if (findIncompleteDay(weekOne) === undefined) {

    if (findIncompleteDay(weekTwo) !== undefined) {
      currentDay.weekNumber = "Two";
      currentDay.day = findIncompleteDay(weekTwo).dayTitle
      console.log(currentDay);
      return currentDay;
    }
    else {
      console.log("complete");
      return "complete";
    }
  }
}
