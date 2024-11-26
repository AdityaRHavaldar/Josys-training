import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  // 1. renders render component without crashing
  test("renders render component without crashing", () => {
    const { container } = render(<Login />);
    let inputElements = container.querySelectorAll("input");
    expect(inputElements.length).toBe(3);
  });

  // 2. Testing input elements --- get data from textbox
  test("should user id textbox value is empty", () => {
    const { container } = render(<Login />);
    let textElement = container.querySelector<HTMLInputElement>("#t1");
    expect(textElement?.value).toBe("");
  });

  test("should set the correct value to textbox", () => {
    const { container } = render(<Login />);
    let textElement = container.querySelector<HTMLInputElement>("#t1");
    fireEvent.change(textElement!, { target: { value: "Narasimha" } });
    expect(textElement?.value).toBe("Narasimha");
  });

  test("message for correct credentials", () => {
    const { container } = render(<Login />);

    let uidElement = container.querySelector<HTMLInputElement>("#t1");
    let pwdElement = container.querySelector<HTMLInputElement>("#t2");
    let loginButton = container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "admin" } });
    fireEvent.change(pwdElement!, { target: { value: "admin123" } });
    fireEvent.click(loginButton!);

    expect(screen.getByText("Welcome to Admin")).toBeInTheDocument();
  });

  test("message for wrong credentials", () => {
    const { container } = render(<Login />);

    let uidElement = container.querySelector<HTMLInputElement>("#t1");
    let pwdElement = container.querySelector<HTMLInputElement>("#t2");
    let loginButton = container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "Aditya" } });
    fireEvent.change(pwdElement!, { target: { value: "admin123" } });
    fireEvent.click(loginButton!);

    expect(screen.getByText("Invalid User Id or Password")).toBeInTheDocument();
  });

  test("message when User Id is not given", () => {
    const { container } = render(<Login />);

    let uidElement = container.querySelector<HTMLInputElement>("#t1");
    let pwdElement = container.querySelector<HTMLInputElement>("#t2");
    let loginButton = container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "" } });
    fireEvent.change(pwdElement!, { target: { value: "admin123" } });
    fireEvent.click(loginButton!);

    expect(screen.getByText("User Id is required.")).toBeInTheDocument();
  });

  test("message when Password is not given", () => {
    const { container } = render(<Login />);

    let uidElement = container.querySelector<HTMLInputElement>("#t1");
    let pwdElement = container.querySelector<HTMLInputElement>("#t2");
    let loginButton = container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "admin" } });
    fireEvent.change(pwdElement!, { target: { value: "" } });
    fireEvent.click(loginButton!);

    expect(screen.getByText("Password is required.")).toBeInTheDocument();
  });

  test("message when both User Id and Password are not given", () => {
    const { container } = render(<Login />);

    let uidElement = container.querySelector<HTMLInputElement>("#t1");
    let pwdElement = container.querySelector<HTMLInputElement>("#t2");
    let loginButton = container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "" } });
    fireEvent.change(pwdElement!, { target: { value: "" } });
    fireEvent.click(loginButton!);

    expect(
      screen.getByText("User Id and Password are required.")
    ).toBeInTheDocument();
  });

  test("display Sign Up link", () => {
    render(<Login />);

    const signUpLink = screen.getByRole("link", { name: "Sign Up" });
    expect(signUpLink).toBeInTheDocument();
  });
});
