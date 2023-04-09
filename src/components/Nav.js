
import Booking from "./Booking"

export default function Nav(){
    
    return(
        <div>
            <nav className="Nav">
                <li className="NavItem"><a href="/">Home</a></li>
                <li className="NavItem"><a href="/#Booking-section">Booking</a></li>
                <li className="NavItem"><a href="/">Contact</a></li>
            </nav>
        </div>
    )
}