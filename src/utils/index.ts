export const BIRTHDAY_DATE = '1992/06/29 9:45';

export type CountTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const nextBirthday = (): number => {
    const currentYear = new Date().getFullYear();
    const birthday = new Date(BIRTHDAY_DATE).setFullYear(currentYear);
    return birthday > Date.now() ? birthday : new Date(BIRTHDAY_DATE).setFullYear(currentYear + 1)
}

export const calculateTime = (): CountTime => {
    const duration: number = nextBirthday() - Date.now();
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / (1000));
    return {days, hours, minutes, seconds};
}

export const nextAge = (): number => {
    return new Date(nextBirthday()).getFullYear() - new Date(BIRTHDAY_DATE).getFullYear();
}