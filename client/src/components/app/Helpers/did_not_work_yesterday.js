import findRotaIndices from './find_rota_indices';

// RETURN FALSE IF DEV WORKED YESTERDAY
export default (currentDayID,devKey,rota,devList) => {

  // identify previous day indices
  const prevDayID = currentDayID - 1;
  const dayIndex = findRotaIndices(prevDayID).dayIndex;
  const weekIndex = findRotaIndices(prevDayID).weekIndex;

  // identify previous day
  const nullDay = rota[weekIndex].schedule[dayIndex(prevDayID)];

  // identify developers who worked yesterday
  const nullDevs = nullDay.periods.map(period => period.allocation);

  const isEligible = devKey !== nullDevs[0].devKey && devKey !== nullDevs[1].devKey;


  return isEligible;
}
