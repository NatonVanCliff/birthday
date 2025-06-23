export const BIRTHDAY_DATE = '1992/06/29 9:45';

export type CountTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const calculateTime = (): CountTime => {
    const currentYear = new Date().getFullYear();
    const birthday = new Date(BIRTHDAY_DATE).setFullYear(currentYear);
    const nextBirthday = new Date(BIRTHDAY_DATE).setFullYear(currentYear + 1);

    const duration: number = birthday > Date.now() ? birthday - Date.now() : nextBirthday - Date.now();
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / (1000));
    return {days, hours, minutes, seconds};
}

export const nextAge = (): number => {
    const currentYear = new Date().getFullYear();
    return (new Date(BIRTHDAY_DATE).setFullYear(currentYear) < Date.now() ? 1 : 0) + currentYear - new Date(BIRTHDAY_DATE).getFullYear();
}