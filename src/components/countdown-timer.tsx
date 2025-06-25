import {useEffect, useState} from "react";
import {CounterCard} from "./counter-card";
import {calculateTime, CountTime, nextAge} from "../utils";

export const CountdownTimer = () => {
    const [countTime, setCountTime] = useState<CountTime>(calculateTime());
    const [age, setAge] = useState<number>(nextAge());

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
            <h1 className='timer_caption'>{age}'s coming soon</h1>
            <div className='timer_layout'>
                <CounterCard value={countTime.days} caption='Days'/>
                <CounterCard value={countTime.hours} caption='Hours'/>
                <CounterCard value={countTime.minutes} caption='Minutes'/>
                <CounterCard value={countTime.seconds} caption='Seconds'/>
            </div>
        </>

    );
}