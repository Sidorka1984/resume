import Wrapper from "./components/Wrapper";
import Sidebar from "./components/Sidebar";
import AboutMe from "./components/AboutMe";
import contacts from "./data/contacts.json";
import techSkills from "./data/techSkills.json";
import softSkills from "./data/softSkills.json";
import additional from "./data/additional.json";
import language from "./data/language.json";
import commandProjects from "./data/commandProjects.json";
import myProjects from "./data/myProjects.json";
import myJob from "./data/myJob.json";
import education from "./data/education.json";

export default function App() {
  return (
    <Wrapper>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        language={language}
      />
      <AboutMe
        commandProjects={commandProjects}
        myProjects={myProjects}
        myJob={myJob}
        education={education}
        additional={additional}
      />
    </Wrapper>
  );
}
