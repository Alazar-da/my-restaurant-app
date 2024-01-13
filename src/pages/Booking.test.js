import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Booking from './Booking';


describe('Booking page', () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;


    test('should have one or more available booking time options', async () => {
      render(
      <BrowserRouter>
      <Booking />
      </BrowserRouter>
      );

      const timeOptions = await screen.findAllByTestId('time-option');
      expect(timeOptions.length).toBeGreaterThanOrEqual(1);
      timeOptions.forEach(timeOption =>
        expect(timeOption.value).toMatch(timeFormat)
      );
    })

    test('should update available booking time options when changing booking date', async() => {
        render(
          <BrowserRouter>
            <Booking />
          </BrowserRouter>
        );

        const bookingDate = '2024-01-21';
        const dateInput = screen.getByLabelText(/Date/);
        const initialTimeOptions = await screen.findAllByTestId('time-option');
        fireEvent.change(dateInput, { target: { value: bookingDate } });
        fireEvent.blur(dateInput);
        const updatedTimeOptions = await screen.findAllByTestId('time-option');

        expect(dateInput).toHaveValue(bookingDate);
        initialTimeOptions.forEach(timeOption =>
          expect(timeOption.value).toMatch(timeFormat)
        );
        updatedTimeOptions.forEach(timeOption =>
          expect(timeOption.value).toMatch(timeFormat)
        );
        expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
      });

});