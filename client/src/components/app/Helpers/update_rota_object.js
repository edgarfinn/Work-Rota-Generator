import findRotaIndices from './find_rota_indices';

export default (dayID,rota,selection) => {

  const newRota = JSON.parse(JSON.stringify(rota))

  const dayIndex = findRotaIndices(dayID).dayIndex;
  const weekIndex = findRotaIndices(dayID).weekIndex;

  // identify day to be updated
  const dayToUpdate = newRota[weekIndex].schedule[dayIndex(dayID)];

  // identify period to be updated
  const morningUpdate = dayToUpdate.periods[0];
  const afternoonUpdate = dayToUpdate.periods[1];

  // set allocations for each peiord
  morningUpdate.allocation = selection.morning;
  afternoonUpdate.allocation = selection.afternoon;

  return newRota;
}
