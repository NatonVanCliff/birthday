import styled from "styled-components";
import {CountdownTimer} from "./components/countdown-timer";
import {Background} from "./components/background";
import TelegramIcon from "./assets/telegram.svg";
import {nextAge} from "./utils";

export const App = () => {
    return (
        <Container>
            <Background/>
            <Caption>{nextAge()}'s coming soon</Caption>
            <CountdownTimer/>
            <Footer>
                <a href="https://t.me/naton_van_cliff">
                    <TelegramIcon fill='#8385A9'/>
                </a>
            </Footer>
        </Container>
    );
};

const Container = styled.main`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient(to top, #795444, #784542, #723746, #652c4f, #4e2759, #3c275b, #26275b, #002759, #002652, #01254b, #042444, #09233d);
`;


const Caption = styled.h1`
    margin: 230px 0 152px 0;
    color: #fff;
    font-size: 30px;
    text-align: center;
    letter-spacing: 12px;
    text-transform: uppercase;

    @media (max-width: 768px) {
        margin: 90px 0;
    }

    @media (max-width: 430px) {
        margin: 74px 0;
        font-size: 15px;
        letter-spacing: 6px;
    }

    @media (max-width: 1024px) and (orientation: landscape)  {
        margin: 40px 0;
        font-size: 15px;
        letter-spacing: 6px;
    }
`;

const Footer = styled.footer`
    color: #8385A9;
    position: absolute;
    bottom: 6%;
    text-align: center;


    a svg path:hover {
        fill: #c25792;
    }
`;
