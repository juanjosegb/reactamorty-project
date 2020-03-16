import {IFilterEpisode} from "@Types/episode";
import {FilterEpisodeDefault} from "@Constants/episodes";

export const valuesToFilterEpisode = (values: any) => {
    var episode: IFilterEpisode = FilterEpisodeDefault;
    episode.name = values.name;
    episode.episode = values.episode;
    return episode;
};