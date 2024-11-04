import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0a0a0a;
  color: #00ff41;
  font-family: 'Courier New', monospace;
  min-height: 100vh;
  padding: 2rem;
`;

export const Terminal = styled.div`
  background-color: rgba(0, 20, 0, 0.8);
  border: 2px solid #00ff41;
  border-radius: 10px;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
  position: relative;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    color: #00ff41;
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
    margin: 0;
  }
  
  p {
    color: #00ff41;
    opacity: 0.8;
    margin: 0.5rem 0;
  }
`;

export const Section = styled.section`
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #00ff41;
  border-radius: 5px;
  
  h2 {
    color: #00ff41;
    border-bottom: 1px solid #00ff41;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    color: rgba(0, 255, 65, 0.8);
  }

  strong {
    color: #00ff41;
  }

  .links-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const TabContainer = styled.div`
display: flex;

gap:1rem;
margin-top: 20px;

@media (max-width: 768px) {
  flex-direction: column;
}
`;

export const Tab = styled.button<{ $active: boolean }>`
  background: ${(props) =>
    props.$active ? 'rgba(0, 255, 65, 0.2)' : 'transparent'};
  color: #00ff41;
  border: 1px solid #00ff41;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 65, 0.1);
  }
`;

export const SkillBar = styled.div<{ $level: number }>`
  width: 100%;
  height: 20px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid #00ff41;
  margin: 0.5rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.$level}%;
    background: #00ff41;
    transition: width 0.5s ease;
  }
`;

export const BlinkingCursor = styled.span`
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  color: #00ff41;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #00ff41;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 65, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
  }
`;

export const StatusBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 20, 0, 0.9);
  border-top: 1px solid #00ff41;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  
  span {
    color: #00ff41;
  }
`;
