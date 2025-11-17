import React from 'react';
import { Section } from './styles/StyledComponents';

export const Quests: React.FC = () => (
  <Section>
    <h2>Completed Quests (Experience)</h2>
    <ul>
       <li>
        <strong>Senior Engineer Tech at Citi Bank [3/2025–8/2025]</strong>
        <p>
          Led the development of a reusable UI component library, published as a
          private NPM package and hosted in the Nexus repository, enabling
          multiple teams to integrate it seamlessly into their applications.
          Built sevrices in Node.js to support the UI library workflows .
          Additionally worked on a GenAI-powered application for document
          analysis and summarization using LLMs, improving automation and
          reducing manual review effort.
        </p>
      </li>
      <li>
        <strong>Senior Consultant at Capgemini [2021–2025]</strong>
        <p>
          Built and maintained enterprise applications using Angular, React,
          Node.js, and Spring Boot. Worked on LLM-based solutions using Claude
          on AWS Bedrock for document processing and automation. Managed
          end-to-end deployment pipelines using jenkins , IBM API connect and
          delivered scalable cloud-native applications on AWS.
        </p>
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
