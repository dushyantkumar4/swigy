import { render, screen } from "@testing-library/react";
import Contacts from "../views/Contacts";
import { afterAll, afterEach, beforeAll, beforeEach, describe } from "vitest";

describe("Contact us page test cases", () => {
  // beforeAll(() => {
  //   console.log("before All test cases");
  // });
  // beforeEach(() => {
  //   console.log("before each test case");
  // });
  // afterEach(() => {
  //   console.log("after each test case");
  // });
  // afterAll(() => {
  //   console.log("after all test cases");
  // });

  it("should load contact us component", () => {
    render(<Contacts />);
    //   Querying
    const heading = screen.getByRole("heading");
    //   Assertion
    expect(heading).toBeInTheDocument();
  });
  it("should load button inside contact us component", () => {
    render(<Contacts />);
    //   Querying
    const button = screen.getByText("Submit");
    //   Assertion
    expect(button).toBeInTheDocument();
  });
  it("should load Inputname inside contact us component", () => {
    render(<Contacts />);
    //   Querying
    const inputName = screen.getByPlaceholderText("name");
    //   Assertion
    expect(inputName).toBeInTheDocument();
  });
  it("should return all input element in contect compo", () => {
    render(<Contacts />);
    //   Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes);
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
