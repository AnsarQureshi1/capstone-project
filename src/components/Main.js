import Booking from "./Booking";
const Main = ()=>{
    return(
        <div>
            <main>
 
                <div className="card1">
                    <img src={require("./images/1.png")} />
                    <h3>Sushi</h3>
                    <p>price <b>$12.22</b></p>
                </div>
                <div className="card2">
                    <img src={require("./images/2.png")} />
                    <h3>Salad</h3>
                    <p>price <b>$13.22</b></p>
                </div>
                <div className="card3">
                    <img src={require("./images/3.png")} />
                    <h3>Fish</h3>
                    <p>price <b>$18.22</b></p>
                </div>
                <div className="card4">
                    <img src={require("./images/5.png")} />
                    <h3>Macroni</h3>
                    <p>price <b>$18.22</b></p>
                </div>
            </main>
        </div>
    )
}

export default Main;