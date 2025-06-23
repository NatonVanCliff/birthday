export const BIRTHDAY_DATE = new Date(2025, 5, 29, 9, 45);

export type CountTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const calculateTime = (): CountTime => {
    // @ts-ignore
    const duration: number = Math.max(BIRTHDAY_DATE - Date.now(), 0);
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / (1000));
    return {days, hours, minutes, seconds};
}