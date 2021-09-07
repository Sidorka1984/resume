import {
  Item,
  Title,
  NameCompany,
  Delimiter,
  Functionals,
  Data,
} from "./MyJob.styled.jsx";

const MyJob = ({ profession, company, time, country, functionals }) => (
  <Item>
    <Title>
      {profession} <NameCompany>{company}</NameCompany>
    </Title>
    <Data>
      {time}
      <Delimiter> |</Delimiter> {country}
    </Data>
    <ul>
      {functionals.map(({ id, functional }) => (
        <Functionals key={id}>{functional}</Functionals>
      ))}
    </ul>
  </Item>
);

export default MyJob;
