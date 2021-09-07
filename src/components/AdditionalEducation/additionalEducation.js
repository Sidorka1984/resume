import {
  Item,
  NameUniversity,
  Educations,
  Delimiter,
  List,
  Data,
} from "../Education/Education.styled";

const AdditionalEducation = ({ university, label, time, experience }) => (
  <Item>
    <NameUniversity>{university}</NameUniversity>
    <Educations>{label}</Educations>
    <Data>
      {time}
      <Delimiter> |</Delimiter> Ukraine
    </Data>
    {experience && (
      <List>
        {experience.map(({ id, label }) => (
          <li key={id}>{label}</li>
        ))}
      </List>
    )}
  </Item>
);

export default AdditionalEducation;
