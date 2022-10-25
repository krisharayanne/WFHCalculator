// To set two dates to two variables
// month / day / year
var date1 = new Date("09/23/2022");
var date2 = new Date("11/04/2022");
  
// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

if((Difference_In_Days/7) % 2 == 0) {
    console.log("Work In Office");
}
else {
    console.log("Work From Home");
}
  
//To display the final no. of days (result)
// console.log("Total number of days between dates \n"
//                + date1 + "\n" 
//                + date2 + " is: \n" 
//                + Difference_In_Days);