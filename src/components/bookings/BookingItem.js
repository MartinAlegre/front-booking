import Card from '../ui/Card';
import classes from './BookingItem.module.css';

function BookingItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.departure}</h3>
          <address>{props.arriving}</address>
          <p>Departure Date: {props.date}</p>
          <p>Passengers: {props.passengers}</p>
          <p>{props.flight_class}</p>
          <p>Reservation Name: {props.user}</p>
        </div>
      </Card>
    </li>
  );
}

export default BookingItem;