import {memo} from "react";

export type CounterCardProps = {
    value: number;
    caption?: string;
}

export const CounterCard = memo(({value, caption}: CounterCardProps) => {
    const valueNode = <p>{normalize(value)}</p>;

    return (
        <div className='timer_card_layout'>
            <div className='timer_card_counter'>
                <div className='timer_card_counter_top'>
                    {valueNode}
                </div>
                <div className='timer_card_counter_down'>
                    {valueNode}
                </div>
            </div>
            <p className='timer_card_caption'>{caption}</p>
        </div>
    );
});

const normalize = (value: number) => value.toString().padStart(2, '0');
