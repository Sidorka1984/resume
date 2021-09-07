import styled from '@emotion/styled';

export const Item = styled.li`
    list-style: none;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Title = styled.h4`
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    &:hover,
    &:focus {
        text-shadow: 1px 1px 2px black;
        }   
`;

export const NameCompany = styled.span`
    color: var(--accentColor);
    letter-spacing: 0.03em;
`;

export const Functionals = styled.li`
    font-size: 14px;
    line-height: 1.71;
    list-style: inside;
    color: var(--primaryTextColor);
`; 
export const Delimiter = styled.span`
    color: #000000;
`;

export const Data = styled.span`
    display: block;
    margin-bottom: 15px;
    font-size: 12px;
    line-height: 2;
    letter-spacing: 0.03em;
    color: var(--secondaryTextColor);
`;


