import styled from "styled-components";
import {useEffect, useState} from "react";
import {CounterCard} from "./counter-card";
import {calculateTime, CountTime} from "../utils";

export const CountdownTimer = () => {
    const [countTime, setCountTime] = useState<CountTime>(calculateTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountTime(calculateTime());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <CountDown>
            <CounterCard value={countTime.days} caption='Days'/>
            <CounterCard value={countTime.hours} caption='Hours'/>
            <CounterCard value={countTime.minutes} caption='Minutes'/>
            <CounterCard value={countTime.seconds} caption='Seconds'/>
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