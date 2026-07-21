import { fireEvent, render, screen } from "../utils/test-utils.jsx"; // we are able to import here bcz exporting from utils.
import Header from "../components/Header.jsx";
import { describe, expect } from "vitest";

describe("Header component test cases", () => {
  it("should load header compo with login button", () => {
    render(<Header />);
    const loginButton = screen.getByRole("button", { name: "Login" }); //can also check for the specific button
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });
  it("should load cart in Header compo", () => {
    render(<Header />);
    // const cartItem = screen.getByLabelText(/shopping cart/i);
    const cartItem = screen.getByLabelText("shopping cart");
    // const cartItem = screen.getByText(/0/);
    expect(cartItem).toBeInTheDocument();
  });
  it("should change login button to logout", () => {
    render(<Header />);
    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logOutButton = screen.getByRole("button", {name:"Logout"});
    expect(logOutButton).toBeInTheDocument();
  });
});
