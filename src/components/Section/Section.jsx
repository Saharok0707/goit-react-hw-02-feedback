import { Section, Title } from './Section.styled';
import PropTypes from 'prop-types';

SectionBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function SectionBox({ title, children }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}

