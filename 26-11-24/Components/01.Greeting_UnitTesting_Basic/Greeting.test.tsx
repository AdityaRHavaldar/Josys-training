import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

 
describe("Greeting Component", () => 
{
    test("renders the correct greeting message", () => 
    {
        render(<Greeting  name="Narasimha" />);
        expect(screen.getByText('Hello, Narasimha!')).toBeInTheDocument();
    });
});