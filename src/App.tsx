import React, { useState } from 'react';
import { Stats } from './components/Stats';
import { Quests } from './components/Quests';
import { Inventory } from './components/Inventory';
import { SocialLinks } from './components/SocialLinks';
import {
  Container,
  Terminal,
  Header,
  TabContainer,
  Tab,
  BlinkingCursor,
  StatusBar
} from './components/styles/StyledComponents';

interface AppState {
  activeTab: string;
  systemStatus: string;
  lastUpdated: string;
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    activeTab: 'stats',
    systemStatus: 'OPERATIONAL',
    lastUpdated: new Date().toLocaleString()
  });

  const renderContent = () => {
    switch (state.activeTab) {
      case 'stats':
        return <Stats />;
      case 'quests':
        return <Quests />;
      case 'inventory':
        return <Inventory />;
      default:
        return null;
    }
  };

  const handleTabChange = (tab: string) => {
    setState(prev => ({
      ...prev,
      activeTab: tab,
      lastUpdated: new Date().toLocaleString()
    }));
  };

  return (
    <Container>
      <Terminal>
        <Header>
          <h1>VAULT-TEC PERSONNEL DATABASE</h1>
          <p>RESIDENT: JACINTH VARUGHESE</p>
          <p>TERMINAL V1.0<BlinkingCursor>_</BlinkingCursor></p>
        </Header>

        <TabContainer>
          <Tab 
            $active={state.activeTab === 'stats'} 
            onClick={() => handleTabChange('stats')}
          >
            S.P.E.C.I.A.L
          </Tab>
          <Tab 
            $active={state.activeTab === 'quests'} 
            onClick={() => handleTabChange('quests')}
          >
            QUESTS
          </Tab>
          <Tab 
            $active={state.activeTab === 'inventory'} 
            onClick={() => handleTabChange('inventory')}
          >
            INVENTORY
          </Tab>
        </TabContainer>

        {renderContent()}
        <SocialLinks />
        
        <StatusBar>
          <span>STATUS: {state.systemStatus}</span>
          <span>LAST UPDATED: {state.lastUpdated}</span>
        </StatusBar>
      </Terminal>
    </Container>
  );
};

export default App;