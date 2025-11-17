import React from 'react';
import { Section } from './styles/StyledComponents';

export const Inventory: React.FC = () => (
  <Section>
    <h2>Inventory (Technical Skills)</h2>
    <ul>
      <li>
        <strong>Backend Weaponry</strong>
        <p>Node.js, NestJS, Java, Spring Boot, Express.js</p>
      </li>
      <li>
        <strong>AI & ML Weaponry ( ongoing from scaler )</strong>
        <p>
        Python for ML, NumPy, Pandas, Matplotlib,  
        Linear Algebra & Gradient Descent,  
        Probability & Statistics,  
        Machine Learning Foundations,  
        LLMs (Claude, GPT), Prompt Engineering,  
        AWS Bedrock, Document Analysis & Summarization  
        <em>(In Progress)</em>
      </p>
      </li>
      <li>
        <strong>Frontend Arsenal</strong>
        <p>Angular 14/15, React, TypeScript, JavaScript, HTML5, CSS3, Bootstrap</p>
      </li>
      
      <li>
        <strong>Database Vault</strong>
        <p>MongoDB, MySQL, PostgreSQL, Oracle</p>
      </li>
      <li>
        <strong>Cloud Territory</strong>
        <p>AWS, Google Cloud Platform, Cloud Infrastructure</p>
      </li>
      <li>
        <strong>Tools & Artifacts</strong>
        <p>Git, Jenkins, Bamboo, Jira, Adobe Experience Manager, Jest</p>
      </li>
    </ul>
  </Section>
);
