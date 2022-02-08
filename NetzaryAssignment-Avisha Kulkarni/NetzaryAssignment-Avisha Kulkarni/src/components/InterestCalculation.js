const InterestCalculation = () => {
  const principal = Number(prompt("principal"));
  console.log(principal);

  const interest = principal <= 5000 ? 3 : 2;
  console.log(interest);

  let finalAmount = principal;
  console.log(finalAmount);

  const timeInDays = Number(prompt("days"));
  console.log(timeInDays);

  if (timeInDays < 360) {
    finalAmount =
      finalAmount + (finalAmount * interest * timeInDays) / (30 * 100);
    console.log(finalAmount);
  } else if (timeInDays % 360 === 0) {
    for (let i = 0; i < timeInDays / 360; i++) {
      finalAmount = finalAmount + (finalAmount * interest * 360) / (30 * 100);
      console.log(finalAmount);
    }
  } else {
    let t = Math.floor(timeInDays / 360);
    console.log(t);
    let newTime = timeInDays - t * 360;
    console.log(newTime);
    for (let i = 0; i < t; i++) {
      finalAmount = finalAmount + (finalAmount * interest * 360) / (30 * 100);
      console.log("from for loop:" + finalAmount);
    }
    finalAmount = finalAmount + (finalAmount * interest * newTime) / (30 * 100);
    console.log("outside for loop:" + finalAmount);
  }

  console.log(Number(finalAmount.toFixed(2)));

  return <></>;
};
export default InterestCalculation;
