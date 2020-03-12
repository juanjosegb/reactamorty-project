import { DeprecatedDate } from "@Constants/DeprecatedDate";

export const checkDateIsDeprecated = (currentDate: Date) => {
    console.log(new Date())
    console.log(DeprecatedDate(currentDate))
    return new Date() > DeprecatedDate(currentDate)
};