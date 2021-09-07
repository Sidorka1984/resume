import styled from '@emotion/styled';

export const Item = styled.li`
    margin-left: 17px;
    font-weight: 700;
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  `;

export const Link = styled.a`
    margin-right: 5px;
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.71;
    color: var(--primaryTextColor);
    transition: color 250ms var(--timingFn);
    &:after {
        content:"..............................................................................................................................";
    }
    &:hover,
    &:focus {
        margin-left: 5px;
        color: var(--accentColor);
    }
`;
export const NameProject = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.71;
    color: var(--primaryTextColor);
`;
