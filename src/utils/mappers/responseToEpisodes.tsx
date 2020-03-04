import { IEpisode } from "../../types/episode";

export const responseToEpisodes = (response: any[]) => {
    var episodes: IEpisode[] = [];
    response.forEach((episode) => {
      episodes.push({
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
        created: episode.created
      })
    });
    return episodes;
};