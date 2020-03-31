import React from 'react';
import {shallow} from "enzyme";
import CardItem from "@Components/Common/CardItem";
import "@testing-library/jest-dom/extend-expect";

test('render a card', () => {
    const component = shallow(<CardItem title={"test"} description={"test"} id={0} urlToImage={"test"}
                                        topic={"character"}/>);
    component
        .find('CardTitle');
    expect(component).toBe("test")
});
