import {CountdownTimer} from "./components/countdown-timer";
import TelegramIcon from "./assets/telegram.svg";

export const App = () => {
    return (
        <main>
            <div className='app-background'/>
            <CountdownTimer />
            <footer>
                <a href="https://t.me/naton_van_cliff">
                    <TelegramIcon fill='#8385A9'/>
                </a>
            </footer>
        </main>
    );
};
