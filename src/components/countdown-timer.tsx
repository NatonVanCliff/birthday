import {useEffect, useState} from "react";
import {CounterCard} from "./counter-card";
import {calculateTime, CountTime, nextAge} from "../utils";
import style from "./countdown-timer.css";
import classNames from "classnames";

export const CountdownTimer = () => {
    const [countTime, setCountTime] = useState<CountTime>(calculateTime());
    const [age, setAge] = useState<number>(nextAge());

    const captionClass = classNames(style.caption);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountTime(calculateTime());
            setAge(nextAge());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (<>
            <h1 className={captionClass}>{age}'s coming soon</h1>
            <div className={style.layout}>
                <CounterCard value={countTime.days} caption='Days'/>
                <CounterCard value={countTime.hours} caption='Hours'/>
                <CounterCard value={countTime.minutes} caption='Minutes'/>
                <CounterCard value={countTime.seconds} caption='Seconds'/>
            </div>
        </>

    );
}