import { render, screen,fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('Booking form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const newDate = jest.fn();
    const submitData = jest.fn();

//#1
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve yor seats!");
    expect(headingElement).toBeInTheDocument();
})

//#2
test('Renders the BookingForm label', async  () => {
    render(<BookingForm availableTimes={availableTimes} submitData={submitData} />);
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId('time-option');
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId('occasion-option');
    const submitButton = screen.getByRole('button');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'time');
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
})

//#3
test('should successfully submit form with default values', () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      dates: today,
      time: availableTimes[0],
      guest: 1,
      occasion: 'Birthday',
    });
  });


//#4
  test(
    `should display an error message and disable sumbit button when date
    field's value is empty`, () => {
    render(
      <BookingForm
       availableTimes={availableTimes}
      newDate={newDate}
      submitData={submitData}
       />
    );

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: '' } });
    expect(screen.getByText('Please choose a valid date')).toBeInTheDocument();
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
  });


//#5
   test(
    `should display an error message and disable sumbit button when number of
    guests field's value is empty`, () => {
    render(
      <BookingForm
      availableTimes={availableTimes}
      newDate={newDate}
      submitData={submitData}
       />
    );

     const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
   expect(screen.getByText('Please enter a number between 1 and 10')).toBeInTheDocument();
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();
  });

});