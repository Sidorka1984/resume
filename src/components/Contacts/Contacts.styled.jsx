import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;  
    &:not(:last-child) {
        margin-bottom: 5px;
    }
`;
export const Img = styled.img`
    margin-right: 10px;
    box-shadow: 1px 1px 2px black;
    border-radius: 50%;
`;
export const Link = styled.a`
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    color: #5b5c5e;
    transition: color 250ms var(--timingFn);
    &:hover,
    &:focus{
        color: var(--accentColor);
    }
`;