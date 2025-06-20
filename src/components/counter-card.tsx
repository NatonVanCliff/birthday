import {memo} from "react";
import styled from "styled-components";

export type CounterCardProps = {
    value?: number;
    caption?: string;
}

export const CounterCard = memo(({value, caption}: CounterCardProps) => {
    const valueNode = value ? <p>{normalize(value)}</p> : null;

    return (
        <Container>
            <div className='counter'>
                <div className='counter_top'>
                    {valueNode}
                </div>
                <div className='counter_down'>
                    {valueNode}
                </div>
            </div>
            <p className='caption'>{caption}</p>
        </Container>
    );
});

const normalize = (value: number) => value.toString().padStart(2, '0');


const Container = styled.div`
    color: #ffffff;
    width: 150px;
    height: 180px;
    position: relative;

    .counter {
        height: calc(100% - 19px - 15px);
        position: relative;

        color: #c25792;
        text-align: center;
        font-size: 85px;
        line-height: 144px;
    }

    .counter_top, .counter_down {
        height: 49.5%;
        width: 100%;
        position: absolute;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }

    .counter_top {
        background-color: #45486a;
        top: 0;
        border-radius: 8px 8px 0 0;
    }

    .counter_down {
        background-color: #313358;
        bottom: 0;
        border-radius: 0 0 8px 8px;

        p {
            margin-top: -73px;
        }
    }

    .caption {
        color: #7f82b1;
        margin-top: 15px;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        text-transform: uppercase;
    }

    @media (max-width: 430px) {
        width: 65px;
        height: 90px;

        .counter {
            height: calc(100% - 10px - 15px);

            font-size: 35px;
            line-height: 65px;
        }

        .counter_down {
            p {
                margin-top: -32px;
            }
        }

        .caption {
            margin-top: 10px;
            font-size: 9px;
            line-height: 15px;
        }
    }

    @media (max-width: 320px) {
        width: 55px;
        height: 75px;

        .counter {
            font-size: 35px;
            line-height: 50px;
        }

        .counter_down {
            p {
                margin-top: -25px;
            }
        }
    }
`;