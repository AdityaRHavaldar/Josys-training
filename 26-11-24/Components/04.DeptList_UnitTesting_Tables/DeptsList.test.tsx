import { fireEvent, render, screen } from "@testing-library/react";
import DeptsList from "./DeptsList";


describe("DeptsList Component", () => {
    // 1. Testing Component
    test('should render component without crashing', () => {
        const { container } = render(<DeptsList />);
        expect(container.querySelectorAll("h3").length).toBe(1);
    });


    // 2. Testing Component
    test('should render zero data rows in the table', () => {
        const { container } = render(<DeptsList />);
        expect(container.querySelectorAll("tbody tr").length).toBe(0);
    });


    // 3. Button click and and load the table rows
    test('should render data rows after button click', () => {
        const { container } = render(<DeptsList />);
        fireEvent.click(container.querySelector<HTMLInputElement>("#b2")!);
        expect(container.querySelectorAll("tbody tr").length).toBe(4);
    });

});