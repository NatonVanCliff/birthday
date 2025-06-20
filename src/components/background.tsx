import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    background-image: url(./images/sky.svg), url(./images/mountains.svg);
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
    background-size: auto 50vh, 100vw 25vh;
`;