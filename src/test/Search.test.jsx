import Body from "../views/Body.jsx";
import { expect, describe } from "vitest";
import { findByRole, fireEvent, render, screen } from "../utils/test-utils.jsx";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResCardList.json";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

axios.get.mockResolvedValue({
  data: MOCK_DATA,
});

describe("Integration test cases for the Body compo", () => {
  it("should search res cards according to name", async () => {
    render(<Body />);

    const cardsBeforeSearch = await screen.findAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = await screen.findByRole("button", { name: /Search/i });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Burger" } });
    fireEvent.click(searchBtn);
    // screen should load 1 res cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
  });

  it("should filter top rated restaurant",async()=>{
    render(<Body/>);

    const filterBtn = await screen.findByRole("button",{name:/Top Rated Restaurants/i});
    fireEvent.click(filterBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(18);

  })
});
