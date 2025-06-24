import classNames from 'classnames';
import {CountdownTimer} from "./components/countdown-timer";
import TelegramIcon from "./assets/telegram.svg";
import {nextAge} from "./utils";
import style from "./app.css";

export const App = () => {
    const captionClass = classNames(style.caption)

    return (
        <main className={style.layout}>
            <div className={style.background}/>
            <h1 className={captionClass}>{nextAge()}'s coming soon</h1>
            <CountdownTimer/>
            <footer>
                <a href="https://t.me/naton_van_cliff">
                    <TelegramIcon fill='#8385A9'/>
                </a>
            </footer>
        </main>
    );
};
