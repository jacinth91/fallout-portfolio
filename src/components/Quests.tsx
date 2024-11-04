import React from 'react';
import { Section } from './styles/StyledComponents';

export const Quests: React.FC = () => (
  <Section>
    <h2>Completed Quests (Experience)</h2>
    <ul>
      <li>
        <strong>Senior Consultant at Capgemini [2021-Present]</strong>
        <p>Led development of enterprise applications using Angular, React, Node.js, and Spring Boot. Implemented CI/CD with Bamboo and deployed on AWS.</p>
      </li>
      <li>
        <strong>Platform Developer at Pepper HQ [2021]</strong>
        <p>Developed and maintained hospitality platform using Node.js and React, focusing on scalable architecture and user experience.</p>
      </li>
      <li>
        <strong>Full Stack Developer at Team Computers [2020-2021]</strong>
        <p>Built and deployed applications using Node.js, Angular, and MongoDB, hosted on Google Cloud Platform.</p>
      </li>
      <li>
        <strong>Full Stack Developer at Troosol [2018-2020]</strong>
        <p>Created mobile and desktop applications using Angular, React, and Node.js with SQL databases.</p>
      </li>
    </ul>
  </Section>
);