import PropTypes from "prop-types";

import { Wrappers } from "./Wrapper.styled.jsx";

const Wrapper = ({ children }) => <Wrappers>{children}</Wrappers>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
