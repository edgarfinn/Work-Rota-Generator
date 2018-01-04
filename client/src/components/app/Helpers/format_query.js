export default (devList) => {

  const stringDevList = JSON.stringify(devList);
  const randomiseQS = "?" + stringDevList

  return randomiseQS;

}
