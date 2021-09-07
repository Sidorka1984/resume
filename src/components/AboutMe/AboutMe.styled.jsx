import styled from '@emotion/styled';

export const Containers = styled.div`
    padding: 90px;
    &:hover {
        box-shadow: 1px 1px 2px grey;
        }
`;
export const Section = styled.div`
    &:not(:last-child) {
        margin-bottom: 40px;
        }
`;

export const TitleProfession = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--accentColor);
    text-shadow: 1px 1px 2px black;
`;

export const MyName = styled.h1`
    font-weight: 700;
    font-size: 45px;
    line-height: 1.8;
    letter-spacing: 0.03em;
    text-shadow: 1px 1px 2px black;
`;
export const InfoAboutMe = styled.p`
    font-size: 16px;
    line-height: 1.71;
`;
export const TitleAboutMe = styled.h3`
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.09;
    letter-spacing: 0.04em;
    text-shadow: 1px 1px 2px black;
`;
export const SubTitleAboutMe = styled.h4`
    margin-bottom: 10px
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
`;

export const Type = styled.span`
    color: var(--accentColor);
    letter-spacing: 0.03em;
    margin-bottom: 15px;
    &:hover,
    &:focus {
        text-shadow: 1px 1px 2px black;
    }
`;
export const List = styled.ol`
    margin-top: 15px;
    margin-bottom: 15px;
`;
