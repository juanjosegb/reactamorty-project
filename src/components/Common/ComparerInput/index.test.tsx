import React from 'react';
import {mount} from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import {Comparer} from "@Components/Common/ComparerInput/index";
import {ICharacter} from "@Types/character";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCharacters} from "@Store/actions/characters";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));
const mockUseSelector = useSelector as jest.Mock;
const mockUseDispatch = useDispatch as jest.Mock;


describe("Comparer Suite", () => {
    let mockDispatch = jest.fn();
    const setFirstCharacter: (character: ICharacter) => void = () => {};
    const setSecondCharacter: (character: ICharacter) => void = () => {};
    beforeEach(() => {
        mockDispatch = jest.fn();
        mockUseDispatch.mockImplementation(() => mockDispatch);
        mockUseSelector.mockImplementation(
            callback => callback({
                charactersState: {
                    currentCharacters: [],
                    page: 1,
                    isFetching: false,
                    isError: false,
                    totalPages: 25
                }
            })
        );
    });

    test('Comparer calls fetch', () => {
        mount(<Comparer setFirstCharacter={setFirstCharacter} setSecondCharacter={setSecondCharacter}/>);
        expect(mockDispatch).toHaveBeenCalledWith(fetchAllCharacters());
    });

    test('Comparer not calling fetch', () => {
        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
});