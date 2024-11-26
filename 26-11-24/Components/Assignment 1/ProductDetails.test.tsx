import { screen, render, fireEvent } from "@testing-library/react";
import ProductDetails from "./ProductDetails";

describe("Testing the Product details fields", () => {
  test("renders render component without crashing", () => {
    const { container } = render(<ProductDetails />);

    let inputElements = container.querySelectorAll("input");
    let buttonElements = container.querySelectorAll("button");

    expect(inputElements.length).toBe(3);
    expect(buttonElements.length).toBe(1);
  });
  test("Test all the fields", () => {
    render(<ProductDetails />);

    const textBox1 = screen.getByTestId("T1");
    const textBox2 = screen.getByTestId("T2");
    const textBox3 = screen.getByTestId("T3");
    const totalParagraph = screen.getByTestId("P1");
    const totalButton = screen.queryByText("Get Total Amount");

    expect(textBox1).toBeInTheDocument();
    expect(textBox2).toBeInTheDocument();
    expect(textBox3).toBeInTheDocument();
    expect(totalButton).toBeInTheDocument();
    expect(totalParagraph).toBeInTheDocument();
  });

  test("should textbox value is initial value", () => {
    const { container } = render(<ProductDetails />);

    const textBox1 = container.querySelector<HTMLInputElement>("#T1");
    const textBox2 = container.querySelector<HTMLInputElement>("#T2");
    const textBox3 = container.querySelector<HTMLInputElement>("#T3");

    expect(textBox1?.value).toBe("");
    expect(textBox2?.value).toBe("0");
    expect(textBox3?.value).toBe("0");
  });

  test("should set the correct value to textbox", () => {
    const { container } = render(<ProductDetails />);
    let textBox1 = container.querySelector<HTMLInputElement>("#T1");
    let textBox2 = container.querySelector<HTMLInputElement>("#T2");
    let textBox3 = container.querySelector<HTMLInputElement>("#T3");

    fireEvent.change(textBox1!, { target: { value: "Aditya" } });
    fireEvent.change(textBox2!, { target: { value: 3 } });
    fireEvent.change(textBox3!, { target: { value: 2 } });

    expect(textBox1?.value).toBe("Aditya");
    expect(textBox2?.value).toBe("3");
    expect(textBox3?.value).toBe("2");
  });

  test("should display valid result message for correct credentials", () => {
    const { container } = render(<ProductDetails />);

    let textBox1 = container.querySelector<HTMLInputElement>("#T1"); // Product name
    let textBox2 = container.querySelector<HTMLInputElement>("#T2"); // Price
    let textBox3 = container.querySelector<HTMLInputElement>("#T3"); // Quantity
    let button1 = container.querySelector<HTMLInputElement>("#B1"); // Button

    fireEvent.change(textBox1!, { target: { value: "Aditya" } });
    fireEvent.change(textBox2!, { target: { value: 3 } });
    fireEvent.change(textBox3!, { target: { value: 2 } });

    fireEvent.click(button1!);

    expect(screen.getByText("Total Amount: $6")).toBeInTheDocument();
  });
});
