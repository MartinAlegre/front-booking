import Card from '../ui/Card';
import classes from './NewBookingForm.module.css';
import {useState , useRef} from "react"

function NewBookingForm(props) {
    const [choice, setChoice] = useState("Yes");

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    const [flight_class, setFlightClass] = useState("Economy")

    const handleClass = (event) => {
        setFlightClass(event.target.value)
    }

    const departureInputRef = useRef();
    const destinationInputRef = useRef();
    const dateInputRef = useRef();
    const passengersInputRef = useRef();
    const oneWayInputRef = useRef();
    const classInputRef = useRef();
    const userInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredDeparture = departureInputRef.current.value;
        const enteredDestination = destinationInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredPassengers = passengersInputRef.current.value;
        const enteredOneWay = oneWayInputRef.current.value;
        const enteredClass = classInputRef.current.value;
        const enteredUser = userInputRef.current.value;

        const bookingData = {
            departure: enteredDeparture,
            arriving : enteredDestination,
            date : enteredDate,
            passengers : enteredPassengers,
            one_way : enteredOneWay,
            flight_class : enteredClass,
            user : enteredUser
        }
        
        props.onAddBooking(bookingData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='departure'>Departure</label>
          <input type='text' required id='departure' ref={departureInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Arriving'>Destination</label>
          <input type='text' required id='arriving' ref={destinationInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Date</label>
          <input type='date' required id='date' ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='passengers'>Amount of passengers</label>
          <input type='number' required id='passengers' ref={passengersInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='one_way'>One way?</label>
          <select value={choice} onChange={handleChange} ref={oneWayInputRef} >
            <option value="True">Yes</option>
            <option value="False">No</option>
      </select>
        </div>
        <div className={classes.control}>
            <label htmlFor='class'>Class</label>
            <select value={flight_class} onChange={handleClass} ref={classInputRef} >
            <option value="1">First class</option>
            <option value="2">Economy</option>
            </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='User'>Reservation Name</label>
          <input type='text' required id='user' ref={userInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Booking</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBookingForm;