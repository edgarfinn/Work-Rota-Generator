export default (dayID,rota,selection) => {

  const newRota = JSON.parse(JSON.stringify(rota))

  // set week index according to day index
  // (1 - 5 = week one) (6 - 10 = week two)
  const weekIndex = dayID < 6 ? 0 : 1;

  // set day index according to dayId
  const dayIndex = (dayID) => {
    switch(dayID) {
      case 1: return 0
      break;
      case 2: return 1
      break;
      case 3: return 2
      break;
      case 4: return 3
      break;
      case 5: return 4
      break;
      case 6: return 0
      break;
      case 7: return 1
      break;
      case 8: return 2
      break;
      case 9: return 3
      break;
      case 10: return 4
      break;
      default: undefined
    }
  }
  // identify day to be updated
  const dayToUpdate = newRota[weekIndex].schedule[dayIndex(dayID)];

  // identify period to be updated
  const morningUpdate = dayToUpdate.periods[0];
  const afternoonUpdate = dayToUpdate.periods[1];

  // set allocations for each peiord
  morningUpdate.allocation = selection.selectionAM;
  afternoonUpdate.allocation = selection.selectionPM;

  return newRota;
}
