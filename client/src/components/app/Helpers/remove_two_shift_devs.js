export default (devID,rota,devList) => {
  // identify developers who have worked two shifts
  const weekOneRota = rota[0].schedule;
  const weekTwoRota = rota[1].schedule;

  const nestedWeekOneDevs = weekOneRota.map((day) => {
    return day.periods.map(period => {
      if (period.allocation !== null) {return period.allocation.devKey}
      else {return period.allocation}
    })
  })

  const nestedWeekTwoDevs = weekTwoRota.map((day) => {
    return day.periods.map(period => {
      if (period.allocation !== null) {return period.allocation.devKey}
      else {return period.allocation}
    })
  })

  // flatten two arrays
  const weekOneDevs = [].concat.apply([], nestedWeekOneDevs);
  const weekTwoDevs = [].concat.apply([], nestedWeekTwoDevs);
  // merge two flattened arrays
  const rotaDevsWithNull = weekOneDevs.concat(weekTwoDevs);

  // remove null values
  const rotaDevs = rotaDevsWithNull.filter(value => value !== null);


  // identify devs who have worked two shifts
  const twoShiftDevsList = rotaDevs.filter((dev, index, array) => {
    let shiftCount = 0;
    array.map((shiftDev) => {
      if (dev === shiftDev) {
        shiftCount += 1;
        return;
      }
    })
    return shiftCount >= 2;
  });

  // remove duplicates from twoShiftDevsList
  const twoShiftDevs = twoShiftDevsList.filter((dev, index) => {
    return twoShiftDevsList.indexOf(dev) === index;
  })
  // console.log(devID + " didntworkTwoShifts")
  // console.log(twoShiftDevs.indexOf(devID) === -1);
  // console.log("-------------------------");

  // if dev is in twoShiftDevs array return false
  const eligibleDevs = devList.filter((dev) => {
    return twoShiftDevs.indexOf(dev.devKey) === -1;
  });

  // return eligibleDevs;
  return twoShiftDevs.indexOf(devID) === -1;
}
