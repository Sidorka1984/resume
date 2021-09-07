import Contacts from "../Contacts/Contacts";
import TechSkills from "../TechSkills/TechSkills";
import SoftSkills from "../SoftSkills/SoftSkills";
import Languages from "../Language/Language";
import PropTypes from "prop-types";
import {
  Sidebars,
  Img,
  Section,
  Title,
  Link,
  ImgIcon,
} from "./Sidebar.styled.jsx";
import myPhoto from "../../assets/img/photo_2021-09-06_20-50-16.jpg";
import MyResume from "../../assets/img/MyResume.pdf";

const Sidebar = ({ contacts, techSkills, softSkills, language }) => (
  <Sidebars>
    <Img src={myPhoto} alt="Olga Ulyanchuk" />
    <Section>
      <Title>Contacts</Title>
      <ul>
        {contacts.map(({ id, label, link, text, icon }) => (
          <Contacts
            key={id}
            label={label}
            link={link}
            text={text}
            icon={icon}
          />
        ))}
      </ul>
    </Section>
    <Section>
      <Title>Tech Skills</Title>
      <ul>
        {techSkills.map(({ id, label }) => (
          <TechSkills key={id} label={label} />
        ))}
      </ul>
    </Section>
    <Section>
      <Title>Soft Skills</Title>
      <ul>
        {softSkills.map(({ id, label }) => (
          <SoftSkills key={id} label={label} />
        ))}
      </ul>
    </Section>
    <Section>
      <Title>Language</Title>
      <ul>
        {language.map(({ id, label }) => (
          <Languages key={id} label={label} />
        ))}
      </ul>
    </Section>

    <Section>
      <Link href={MyResume} target="_blank" rel="noreferrer">
        <ImgIcon
          src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Downloads-icon.png"
          alt="Download"
          width="25"
        />
        Download resume pdf
      </Link>
    </Section>
  </Sidebars>
);

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
  language: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
