export default (devKey,devList) => {
  return devList.filter(dev => {
    return devKey === dev.devKey;
  })[0].devName
}
