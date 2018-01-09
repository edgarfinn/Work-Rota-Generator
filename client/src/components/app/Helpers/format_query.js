export default (devList) => {

  const stringDevList = JSON.stringify(devList);
  const randomisedQS = "?" + stringDevList

  return randomisedQS;

}
