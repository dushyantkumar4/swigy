import {render,screen} from "../utils/test-utils.jsx";
import { describe,expect } from "vitest";
import RestaurantCard,{WithOff} from "../components/RestaurantCard.jsx";
import MOCK_DATA from "../mocks/resCardMock.json";
const PromotedRestaurant = WithOff(RestaurantCard);

describe("Restaurant Component test cases",()=>{
    it("should render restaurant component with data",()=>{
        render(<RestaurantCard resData={MOCK_DATA}/>);
        const resName = screen.getByText("Theobroma");
        expect(resName).toBeInTheDocument();
    });
    it("should render Restaurant component with pramoted level", ()=>{
        // need to test higher order compo: withPromotedLevel();
        render(<PromotedRestaurant resData={MOCK_DATA}/>);
        const offAmout = screen.getByText("50% OFF");
        expect(offAmout).toBeInTheDocument();
    });
});