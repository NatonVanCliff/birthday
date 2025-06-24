import {CountdownTimer} from "./components/countdown-timer";
import TelegramIcon from "./assets/telegram.svg";
import style from "./app.css";

export const App = () => {
    return (
        <main className={style.layout}>
            <div className={style.background}/>
            <CountdownTimer />
            <footer>
                <a href="https://t.me/naton_van_cliff">
                    <TelegramIcon fill='#8385A9'/>
                </a>
            </footer>
        </main>
    );
};
