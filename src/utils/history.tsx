export const checkCanAddToHistory = (history: string[], action: any) => {
    console.log(history);
    console.log(action);
    return history.findIndex((x: any) => x.id === action.payload.id) === -1 && history.length < 10;
};