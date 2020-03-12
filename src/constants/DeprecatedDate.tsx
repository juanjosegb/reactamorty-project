export const DeprecatedDate = () : Date => {
    const today = new Date();
    const todayAddingTwoHours = new Date(today);
    todayAddingTwoHours.setHours(todayAddingTwoHours.getHours() + 2);
    return todayAddingTwoHours;
};