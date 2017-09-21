# System Clock


![alt text](https://github.com/marioiovanna/Clock-Jquery/blob/master/clock.PNG)


### Clock made with Jquery and CSS. Check files to see codes.


Codes:

**new Date()**
This creates a new Date object with the value of the current date and time on the browser PC.

**setDate() and getDate()**
The setDate() method sets the day of the month (from 1 to 31), according to local time, while the getDate() method returns the day of the month (from 1 to 31) for the specified date, according to local time.

**getSeconds(), getMinutes() and getHours()**
These methods allow to extract the seconds, minutes and hours of the current time on the browser PC.

**( seconds < 10 ? "0" : "" ) + seconds)**
Add a leading zero to the seconds value, the same applies for the minutes and hours. The ? and : symbols used above comprise the ternary operator. This is a special operator that returns the value before the colon if the condition before the query (?) is true, or the value after the colon if the condition is false.

**setInterval function**
setInterval is a standard JavaScript function, not part of jQuery. You call it with a function to execute and a period in milliseconds.