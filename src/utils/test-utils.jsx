import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./appStore.js";

const customRender = (ui) =>
  render(
    <Provider store={appStore}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>,
  );

//as we are exporting evertying from here so we can import where we are using it .
export * from "@testing-library/react";
export { customRender as render };
