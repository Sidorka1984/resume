import styled from '@emotion/styled';

export const Item = styled.li`
   list-style: none;
   &:not(:last-child) {
       margin-bottom: 15px;
   }
`;

export const NameUniversity = styled.p`
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: var(--accentColor);
    &:hover,
    &:focus {
          text-shadow: 1px 1px 2px black;
          }
`;

export const Educations = styled.p`
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.71;
`;

export const Data = styled.span`
    font-size: 12px;
    line-height: 2;
    color: var(--secondaryTextColor);
`;
export const Delimiter = styled.span`
    color: #000000;
`;
export const List = styled.ul`
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.71;
    list-style: inside;
    color: var(--primaryTextColor);
`;