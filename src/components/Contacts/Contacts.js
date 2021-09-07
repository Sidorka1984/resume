import { Item, Img, Link } from "./Contacts.styled.jsx";

const Contacts = ({ label, link, text, icon }) => {
  return (
    <Item>
      <Img src={icon} alt={label} width="25" />
      <Link href={link} target="_blank" rel="noreferrer">
        {text}
      </Link>
    </Item>
  );
};

export default Contacts;
