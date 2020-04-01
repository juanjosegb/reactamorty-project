import React from 'react';
import {shallow} from "enzyme";
import CardItem from "@Components/Common/CardItem";
import "@testing-library/jest-dom/extend-expect";

test('Card correct title and description', () => {
    const titleInitial = "title-test";
    const descriptionInitial = "description-test";
    const imageInitial = "image-test";
    const topicInitial = "character";

    const component = shallow(<CardItem title={titleInitial} description={descriptionInitial} urlToImage={imageInitial} topic={topicInitial}/>);
    const titleComponent = component.find('#title-test').text();
    const descriptionComponent = component.find('#description-test').text();

    expect(titleComponent).toBe(titleInitial);
    expect(descriptionInitial).toBe(descriptionComponent);
});
