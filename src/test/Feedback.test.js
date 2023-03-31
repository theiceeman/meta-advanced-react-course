import { fireEvent, render, screen } from "@testing-library/react";
import Feedback from '../lessons/Feedback';
// import Form from '../lessons/Form';


describe("Feedback Form", () => {
    test("submission is disabled if score is lower than 5 and there is no feedback", () => {
        const handleSubmit = jest.fn()
        render(<Feedback onSubmit={handleSubmit} />)
        // render(<Form onSubmit={handleSubmit} />)

        const rangeInput = screen.getByLabelText(/Score:/)
        fireEvent.change(rangeInput, { target: { value: "4" } })

        const submitButton = screen.getByRole("button")
        fireEvent.click(submitButton)

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    })
})