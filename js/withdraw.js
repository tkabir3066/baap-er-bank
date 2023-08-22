//step-1: add event handler with the withdraw button

document.getElementById("btn-withdraw").addEventListener("click", () => {
  //step-2: get the withdraw amount from the withdraw input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //step-4: get previous withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-4: calculate total withdraw amount

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  //set the withdraw total

  withdrawTotalElement.innerText = currentWithdrawTotal;

  //step-5: get the previous balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance

  const currentTotalBalance = previousBalanceTotal - currentWithdrawTotal;

  // set the balance total
  balanceTotalElement.innerText = currentTotalBalance;
  //step-7: clear the withdraw input field

  withdrawField.value = "";
});
