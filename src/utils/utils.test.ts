import {expect, describe, beforeEach, afterEach, vi, it, test} from 'vitest';
import {calculateTime, nextAge, nextBirthday} from './index';

const BEFORE_BIRTHDAY_TIME = '2025/06/06 12:00:10';
const AFTER_BIRTHDAY_TIME = '2025/11/23 9:00:45';
const THIS_BIRTHDAY_TIME = '2025/06/29 9:45:00';

describe('Test utils', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test.each([
        [BEFORE_BIRTHDAY_TIME, 33],
        [AFTER_BIRTHDAY_TIME, 34],
        [THIS_BIRTHDAY_TIME, 34]
    ])('for current date %s return next age %i', (currentDate, expected) => {
        vi.setSystemTime(new Date(currentDate));
        expect(nextAge()).toStrictEqual(expected);
    });

    test.each([
        [BEFORE_BIRTHDAY_TIME, '2025/06/29 9:45:00'],
        [AFTER_BIRTHDAY_TIME, '2026/06/29 9:45:00'],
        [THIS_BIRTHDAY_TIME, '2026/06/29 9:45:00']
    ])('for current date %s return next next birthday date %s', (currentDate, expected) => {
        vi.setSystemTime(new Date(currentDate));
        expect(nextBirthday()).toStrictEqual(new Date(expected).getTime());
    });

    test.each([
        [BEFORE_BIRTHDAY_TIME, {days: 22, hours: 21, minutes: 44, seconds: 50}],
        [AFTER_BIRTHDAY_TIME, {days: 218, hours: 0, minutes: 44, seconds: 15}],
        [THIS_BIRTHDAY_TIME, {days: 365, hours: 0, minutes: 0, seconds: 0}]
    ])('for current date %s return time data %o', (currentDate, countTime) => {
        vi.setSystemTime(new Date(currentDate));
        expect(calculateTime()).toStrictEqual(countTime);
    });
});