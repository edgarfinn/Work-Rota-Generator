import findRotaIndices from './find_rota_indices';

export default (currentDayID, rota, devList) => {

  // identify previous day indices
  const prevDayID = currentDayID - 1;
  const dayIndex = findRotaIndices(prevDayID).dayIndex;
  const weekIndex = findRotaIndices(prevDayID).weekIndex;

  // identify previous day
  const nullDay = rota[weekIndex].schedule[dayIndex(prevDayID)];

  // identify developers who worked yesterday
  const nullDevs = nullDay.periods.map(period => period.allocation);

  // remove devs who worked yesterday
  const eligibleDevs = devList.filter(dev => {
    return dev.devKey !== nullDevs[0].devKey && dev.devKey !== nullDevs[1].devKey;
  })

  return eligibleDevs;
}
