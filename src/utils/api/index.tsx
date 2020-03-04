import {GetDataByPage} from "../../apiClients/RickAndMorty";


const calculatePageSize = (response: any) => {
    const numTotal = response.data.info.count;
    const pageSize = response.data.results.length;
    return Math.ceil(numTotal / pageSize);
};

export const getNumberOfPages = (response: any) => {
    return (!response.data.info) ? 0 : calculatePageSize(response)
};

export const concatPages = async (url: string, numberOfPages: number) => {
    let allTopics = [];
    for (let i = 1; i < numberOfPages + 1; ++i) {
        let page = await GetDataByPage(i, url);
        allTopics.push(...page.data.results)
    }
    return allTopics;
};
