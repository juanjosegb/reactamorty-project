import {IFilterCharacter} from "@Types/character";
import {FilterCharacterDefault} from "@Constants/characters";

export const valuesToFilterCharacter = (values: any) => {
    var characters: IFilterCharacter = FilterCharacterDefault;
    characters.page = values.page;
    characters.gender = values.gender;
    characters.name = values.name;
    characters.species = values.species;
    characters.status = values.status;
    characters.type = values.type;
    return characters;
};