import styled from "styled-components";
import {useEffect, useState} from "react";

const birthdayDate = new Date(2025, 5, 29, 9, 45)

type CountDown = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

export const App = () => {
    const [countDown, setCountDown] = useState<CountDown>({days: '00', hours: '00', minutes: '00', seconds: '00'});

    useEffect(() => {
        const interval = setInterval(() => {
            // @ts-ignore
            const duration: number = birthdayDate - Date.now();
            const days = Math.floor((duration) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((duration) / (1000 * 60 * 60)) - days * 24;
            const minutes = Math.floor((duration) / (1000 * 60)) - (days * 24 + hours) * 60;
            const seconds = Math.floor((duration) / (1000)) - ((days * 24 + hours) * 60 + minutes) * 60;

            setCountDown({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Container>
            <CountDown>
                <ClockDigits>{countDown.days}</ClockDigits>
                <ClockPoints>:</ClockPoints>
                <ClockDigits>{countDown.hours}</ClockDigits>
                <ClockPoints>:</ClockPoints>
                <ClockDigits>{countDown.minutes}</ClockDigits>
                <ClockPoints>:</ClockPoints>
                <ClockDigits>{countDown.seconds}</ClockDigits>
            </CountDown>
        </Container>
    );
};


const Container = styled.div`
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(to top, #795444, #784542, #723746, #652c4f, #4e2759, #3c275b, #26275b, #002759, #002652, #01254b, #042444, #09233d);
`;

const CountDown = styled.div`
    width: fit-content;

    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 135px;
    @media (max-width: 768px) {
        font-size: 90px;
    }
    @media (max-width: 425px) {
        font-size: 40px;
    }
`;

const ClockDigits = styled.div`
    background-color: #fff;
    font-family: 'Open Sans', sans-serif;
    color: #202020;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    letter-spacing: 3px;
`;

const ClockPoints = styled.span`
    font-weight: bolder;
    color: #fff;
`;
