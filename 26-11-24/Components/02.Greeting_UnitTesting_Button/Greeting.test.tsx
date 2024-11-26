import { fireEvent, render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

 
describe("Greeting Component", () => 
{
    test("renders the correct greeting message", () => 
    {
        render(<Greeting   />);
        expect(screen.getByText('Welcome to')).toBeInTheDocument();
    });

    test("renders the correct message with user name on button click", () => 
        {
            render(<Greeting   />);
            const element = screen.getByTestId('button1');
            fireEvent.click(element);
            expect(screen.getByText('Welcome to Narasimha')).toBeInTheDocument();
        });
});