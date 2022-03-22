import { useNavigate} from 'react-router-dom'

import NewBookingForm from "../components/bookings/NewBookingForm";


function NewBookingsPage() {
    const navigate = useNavigate();

    function addBookingHandler(bookingData) {
        fetch('http://127.0.0.1:8000/Bookings.json',
        {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('../', { replace: true });
        });
        
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewBookingForm onAddBooking={addBookingHandler} />
    </section>;
}

export default NewBookingsPage