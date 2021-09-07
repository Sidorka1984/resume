import Projects from "../Projects/Projects";
import MyJob from "../MyJob/MyJob";
import Education from "../Education/Education";
import PropTypes from "prop-types";
import AdditionalEducation from "../AdditionalEducation/additionalEducation";
import {
  Containers,
  Section,
  TitleProfession,
  MyName,
  InfoAboutMe,
  TitleAboutMe,
  SubTitleAboutMe,
  Type,
  List,
} from "./AboutMe.styled.jsx";

const AboutMe = ({
  commandProjects,
  myProjects,
  myJob,
  education,
  additional,
}) => (
  <Containers>
    <Section>
      <TitleProfession>Front-end (React) Developer</TitleProfession>
      <MyName>Ulyanchuk Olga</MyName>
      <InfoAboutMe>
        I'm a Front-end Developer and looking for an interesting job. I have
        sound knowledge of HTML, CSS, JavaScript and React. Also, I have
        hands-on experience in following Agile/Scrum methodology when working in
        a team. I want to be in a good team to improve my skills and use them
        for interesting tasks. I am a fast learner, responsible, ready for hard
        tasks.
      </InfoAboutMe>
    </Section>
    <Section>
      <TitleAboutMe>Projects</TitleAboutMe>
      <SubTitleAboutMe>
        <Type>Teamwork</Type> projects
      </SubTitleAboutMe>
      <List>
        {commandProjects.map(({ id, label, link, tech }) => (
          <Projects key={id} label={label} link={link} tech={tech} />
        ))}
      </List>
      <SubTitleAboutMe>
        <Type>My personal</Type> projects
      </SubTitleAboutMe>
      <List>
        {myProjects.map(({ id, label, link, tech }) => (
          <Projects key={id} label={label} link={link} tech={tech} />
        ))}
      </List>
    </Section>
    <Section>
      <TitleAboutMe>Experience</TitleAboutMe>
      <ul>
        {myJob.map(
          ({ id, profession, company, time, country, functionals }) => (
            <MyJob
              key={id}
              profession={profession}
              company={company}
              time={time}
              country={country}
              functionals={functionals}
            />
          )
        )}
      </ul>
    </Section>
    <Section>
      <TitleAboutMe>Education</TitleAboutMe>
      <ul>
        {education.map(({ id, university, label, time, experience }) => (
          <Education
            key={id}
            university={university}
            label={label}
            time={time}
            experience={experience}
          />
        ))}
      </ul>
    </Section>
    <Section>
      <TitleAboutMe>Additional education</TitleAboutMe>
      <ul>
        {additional.map(({ id, university, label, time, experience }) => (
          <AdditionalEducation
            key={id}
            university={university}
            label={label}
            time={time}
            experience={experience}
          />
        ))}
      </ul>
    </Section>
  </Containers>
);

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
  additionalEducation: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
