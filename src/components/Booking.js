import { useState } from "react";

const Booking = ()=>{
      

    return(
        <div className="container">
            <h1 id="Booking-section">Booking</h1>
            <form >
            <div>
                <label htmlFor="date">Enter Date</label><br/>
                <input type="date"
                
                id="date"/>
            </div>
            <div>
            <label for="res-time">Choose time</label><br/>
                <select  id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div>
                <label htmlFor="guest">Number of Guest</label><br/>
                <input type="number" id="appt" min="1" max="10"  />
            </div>
            <div>
                <label htmlFor="ocass">Occassion</label><br/>
                <select id="ocass">
                    <option>Birthday</option>
                    <option>Anniversy</option>
                </select>
            </div>
            <div>
               <input type="submit" value="Make Your Reservation"/>
            </div>
            </form>

        </div>
    )

}

export default Booking;