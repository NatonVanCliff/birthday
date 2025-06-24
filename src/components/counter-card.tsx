import {memo} from "react";
import styled from "./counter-card.css"

export type CounterCardProps = {
    value: number;
    caption?: string;
}

export const CounterCard = memo(({value, caption}: CounterCardProps) => {
    const valueNode = <p>{normalize(value)}</p>;

    return (
        <div className={styled.layout}>
            <div className={styled.counter}>
                <div className={styled.counterTop}>
                    {valueNode}
                </div>
                <div className={styled.counterDown}>
                    {valueNode}
                </div>
            </div>
            <p className={styled.caption}>{caption}</p>
        </div>
    );
});

const normalize = (value: number) => value.toString().padStart(2, '0');
