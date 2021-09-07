import { Item, About, Link, NameProject } from "./Projects.styled.jsx";

const Projects = ({ label, link, tech }) => (
  <Item>
    <About>
      <Link href={link} target="_blank" rel="noreferrer">
        {label}
      </Link>
      <span>
        <b>[</b> <NameProject>{tech}</NameProject> <b>]</b>
      </span>
    </About>
  </Item>
);

export default Projects;
