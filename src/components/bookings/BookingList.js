import BookingItem from './BookingItem';
import classes from './BookingList.module.css';

function BookingList(props) {
    return (
        <ul className={classes.list}>
            {props.bookings.map((booking) =>(
                <BookingItem
                key={booking.id}
                departure={booking.departure}
                arriving={booking.arriving}
                date={booking.date}
                passengers={booking.passengers}
                one_way={booking.one_way}
                flight_class={booking.flight_class}
                user={booking.user}
                />
            ))}
        </ul>
    )
}

export default BookingList;