import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>Bookings</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Bookings</Link>
                </li>
                <li>
                    <Link to='/new-bookings'>Add New Booking</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;