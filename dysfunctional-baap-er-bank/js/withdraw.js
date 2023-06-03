/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});


/* 
Debug Steps
1. Go to the live website. And try to reproduce the error.
2. Check the console of the live website to see any error/exception 
3. Read exception thoroughly. in  detail
4. If the error is new to you: Copy the text of the error and search online 
5. if a line number is showing, click on that line to see the code
6. Add breakpoint. re run the code (refresh the website). and see whether you are 
getting the expected values
    6.1: if you are not getting the expected values, check which values you are not
    getting. if needed a break point in the previous line
    6.2 If needed, step into (F11) to a function


*/

/* 
innerText --> value

*/ 