// import removeYesterdaysDevs from './remove_yesterdays_devs';
// import removeTwoShiftDevs from './remove_two_shift_devs';

import didntWorkTwoShifts from './remove_two_shift_devs';

import didntWorkYesterday from './did_not_work_yesterday';

export default (currentDayID, rota, devList) => {

  if (currentDayID === 1) {
    return devList;
  } else {

    const canWork = (devKey,rota,devList) => {
      return didntWorkTwoShifts(devKey,rota,devList) && didntWorkYesterday(currentDayID,devKey,rota,devList);
    }

    const eligibleDevs = devList.filter(dev => {
      return canWork(dev.devKey,rota,devList)
    })

    return eligibleDevs;

  }

}

















































// export default (currentDayID, rota, devList) => {
//
//   if (currentDayID === 1 || currentDayID === 10) {
//     return devList;
//   } else {
//     // remove yesterdays two developers
//     const notYesterdaysDevs = removeYesterdaysDevs(currentDayID, rota, devList);
//
//     // remove devs who have worked two shifts already
//     const eligibleDevs = removeTwoShiftDevs(notYesterdaysDevs,rota)
//
//     return eligibleDevs;
//
//   }
//
// }
