import React, { useEffect } from "react";

function Countdown({ stock_quantity ,date_on_sale_to}) {
   useEffect(() => {
      const second = 1000,
         minute = second * 60,
         hour = minute * 60,
         day = hour * 24;
      if (!document.getElementById("days")) return;
      const countDown = new Date(date_on_sale_to).getTime(),
         myTime = setInterval(function () {
            const now = new Date().getTime(),
               distance = countDown - now;
            (document.getElementById("days").innerText = Math.floor(distance / day)),
               (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
               (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
               (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));
         }, second);
      return () => {
         clearInterval(myTime);
      };
   }, [date_on_sale_to]);
   return (
      <div className="mt-2 mt-md-3 border-product">
         <h6 className="product-title hurry-title d-block">
            Hurry Up! Left <span>{stock_quantity}</span> in stock
         </h6>
         <div className="font-light timer-5">
            <h5>Order in the next to get</h5>
            <ul className="timer1">
               <li className="counter">
                  <h5 id="days">&#9251;</h5> Days :
               </li>
               <li className="counter">
                  <h5 id="hours">&#9251;</h5> Hour :
               </li>
               <li className="counter">
                  <h5 id="minutes">&#9251;</h5> Min :
               </li>
               <li className="counter">
                  <h5 id="seconds">&#9251;</h5> Sec
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Countdown;
