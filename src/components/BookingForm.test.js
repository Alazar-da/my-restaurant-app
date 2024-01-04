import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve yor seats!");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm label', () => {
    render(<BookingForm />);
    const dateLabel = screen.getByLabelText("Date");
    expect(dateLabel).toBeInTheDocument();

    const timeLabel = screen.getByLabelText("Time");
    expect(timeLabel).toBeInTheDocument();

    const guestLabel = screen.getByLabelText("Number of guests");
    expect(guestLabel).toBeInTheDocument();

    const OccationLabel = screen.getByLabelText("Occation");
    expect(OccationLabel).toBeInTheDocument();

    const commentLabel = screen.getByLabelText("comments...");
    expect(commentLabel).toBeInTheDocument();
})