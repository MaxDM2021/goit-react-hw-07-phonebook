import PropTypes from 'prop-types';
import { StyleTitle } from "./Section.styled";
import { Box } from "./Box"


function Section({ title, children }) {
  return (
    <Box alignItems="center" position="relative" justifyContent="flex-start" as="section">
      {title && <StyleTitle>{title}</StyleTitle>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
