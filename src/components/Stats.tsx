import React from 'react';
import { Section, SkillBar } from './styles/StyledComponents';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Angular/React', level: 95 },
  { name: 'Node.js/NestJS', level: 90 },
  { name: 'Java/Spring Boot', level: 85 },
  { name: 'AWS/Cloud Services', level: 80 },
  { name: 'MongoDB/SQL', level: 85 },
  { name: 'CI/CD', level: 80 },
  { name: 'Adobe Experience Manager', level: 75 },
  { name: 'TypeScript/JavaScript', level: 90 }
];

export const Stats: React.FC = () => (
  <Section>
    <h2>S.P.E.C.I.A.L Stats</h2>
    {skills.map(skill => (
      <div key={skill.name}>
        <p>{skill.name}</p>
        <SkillBar $level={skill.level} />
      </div>
    ))}
  </Section>
);