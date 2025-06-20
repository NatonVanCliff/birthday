import styled from "styled-components";
import {Background} from "./background";
import {useEffect, useState} from "react";
import {CounterCard} from "./counter-card";

const birthdayDate = new Date(2025, 5, 29, 9, 45)

type CountDown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const CountdownTimer = () => {
    const [countDown, setCountDown] = useState<CountDown>();

    useEffect(() => {
        const interval = setInterval(() => {
            // @ts-ignore
            const duration: number = birthdayDate - Date.now();
            const days = Math.floor(duration / (1000 * 60 * 60 * 24));
            const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((duration % (1000 * 60)) / (1000));

            setCountDown({days, hours, minutes, seconds});
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <CountDown>
            <CounterCard value={countDown?.days} caption='Days'/>
            <CounterCard value={countDown?.hours} caption='Hours'/>
            <CounterCard value={countDown?.minutes} caption='Minutes'/>
            <CounterCard value={countDown?.seconds} caption='Seconds'/>
        </CountDown>
    );
}

const CountDown = styled.div`
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;