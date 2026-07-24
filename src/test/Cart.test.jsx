import { fireEvent, render, screen, act } from "../utils/test-utils.jsx";
import RestaurantMenu from "../components/restaurantInDetails/RestaurantMenu.jsx";
import axios from "axios";
import { beforeAll, it, vi } from "vitest";
import { expect, describe } from "vitest";
import MOCK_DATA from "../mocks/resMenuMockData.json";
import Header from "../components/Header.jsx";
import Cart from "../components/Cart.jsx";

vi.mock("axios");

axios.get.mockResolvedValue({
  data: MOCK_DATA,
});

describe("Integration test cases for Cart", () => {
  it("should load Restaurant Menu component", async () => {
    render(<RestaurantMenu />);

    const accordianHeader = await screen.findByText("Recommended");
    expect(accordianHeader).toBeInTheDocument();
    fireEvent.click(accordianHeader);

    const resMenuTitle = screen.getByText("Original Whopper Veg(XL size Bun)");
    expect(resMenuTitle).toBeInTheDocument();
  });

  it("should load cart item before adding ", async () => {
    render(
      <>
        <Header />
        <RestaurantMenu />
      </>,
    );
    const accordianHeader = await screen.findByText("Recommended");
    fireEvent.click(accordianHeader);

    const resMenuTitle = screen.getByText("Original Whopper Veg(XL size Bun)");

    const cart = screen.getByLabelText(/shopping cart/i);
    expect(cart).toHaveTextContent("0");
  });

  it("should lead cart after adding 1 item", async () => {
    render(
      <>
        <Header />
        <RestaurantMenu />
      </>,
    );
    const accordianHeader = await screen.findByText("Recommended");
    fireEvent.click(accordianHeader);

    const resMenuTitle = screen.getByText("Original Whopper Veg(XL size Bun)");
    const addBtn = screen.getAllByTestId("addItem");
    fireEvent.click(addBtn[0]);
    const cartNo = screen.getByTestId("cartCount");
    expect(cartNo).toHaveTextContent("1");
  });

  it("should update the card after adding 2 item", async () => {
    render(
      <>
        <Header />
        <RestaurantMenu />
      </>,
    );
    const accordianHeader = await screen.findByText("Recommended");
    fireEvent.click(accordianHeader);

    const resMenuTitle = screen.getByText("Original Whopper Veg(XL size Bun)");
    const addBtn = screen.getAllByTestId("addItem");

    fireEvent.click(addBtn[1]);
    expect(screen.getByTestId("cartCount")).toHaveTextContent("2");
  });
  it("should also update the card compo after add item", async () => {
    await act(async () =>
      render(
        <>
          <Header />
          <Cart />
        </>,
      ),
    );

    const itemsNo = screen.getAllByTestId("addedItems");
    expect(itemsNo.length).toBe(2);

    const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearBtn);

    const itemAfterClear = screen.getByText(
      "No items available first go to restaurant & select the item from Categories",
    );
    expect(screen.getByTestId("cartCount")).toHaveTextContent("0");
    expect(itemAfterClear).toBeInTheDocument();
  });
});
