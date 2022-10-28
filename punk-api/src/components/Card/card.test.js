import { render, screen } from "@testing-library/react";
import Card from "./Card";

it("should test if the beer name appears on the card ", () => {

    //ARRANGE 

    render(<Card />)

    //ACT

    const cardName = screen.getByTestId("cardName")

    //ASSERT
    expect(cardName).toBeInTheDocument();

});