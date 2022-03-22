import BookingList from '../components/bookings/BookingList';
import { useState, useEffect } from 'react';

function AllBookingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBookings, setLoadedBookings] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'http://127.0.0.1:8000/Bookings/'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const bookings = [];

        for (const key in data) {
          const booking = {
            id: key,
            ...data[key]
          };

          bookings.push(booking);
        }

        setIsLoading(false);
        setLoadedBookings(bookings);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Bookings</h1>
      <BookingList bookings={loadedBookings} />
    </section>
  );
}

export default AllBookingsPage;