import React from 'react';
import { Section, SocialLink } from './styles/StyledComponents';

export const SocialLinks: React.FC = () => (
  <Section>
    <h2>Communication Links</h2>
    <div className="links-container">
      <SocialLink href="https://github.com/jacinth91" target="_blank" rel="noopener noreferrer">
        [GITHUB REPOSITORY ACCESS]
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/jacinth-jacinth-94b31661/" target="_blank" rel="noopener noreferrer">
        [LINKEDIN NETWORK CONNECTION]
      </SocialLink>
    </div>
  </Section>
);