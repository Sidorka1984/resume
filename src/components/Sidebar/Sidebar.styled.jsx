import styled from '@emotion/styled';

export const Sidebars = styled.aside`
    min-width: 300px;
    padding: 50px;
    background: #60dde6;
    &:hover {
        box-shadow: 1px 1px 2px grey;
    }
`;

export const Img = styled.img`
   border-radius: 50%;
`;
export const Section = styled.div`
    margin-top: 50px;
`;

export const Title = styled.h3`
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.09;
    color: #ffffff;
    text-shadow: 1px 1px 2px black;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 220px;
    height: 50px;
    padding: 10px;
    text-align: center;
    margin-left: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 250ms var(--timingFn);
    color: #fff;
    background-color: var(--accentColor);
    border: 2px solid var(--accentColor);
    border-radius: 25px;
    &:hover,
    &:focus{
        color: var(--accentColor);
        background-color: transparent;
    }
`;
export const ImgIcon = styled.img`
   margin-right: 5px;
`;




