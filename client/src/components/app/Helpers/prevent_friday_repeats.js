export default (devListOrder,fridayDevs) => {
  const devWorkedFriday = (devKey) => {
    return fridayDevs.indexOf(devKey) !== -1;
  }

  const didntWorkFriday = devListOrder.filter((dev) => {
    return !devWorkedFriday(dev.devKey)
  })

  let workedFriday = devListOrder.filter((dev) => {
    return devWorkedFriday(dev.devKey)
  })

  didntWorkFriday.splice(3, 0, workedFriday[0]);
  didntWorkFriday.splice(6, 0, workedFriday[1]);

  return didntWorkFriday;
}
