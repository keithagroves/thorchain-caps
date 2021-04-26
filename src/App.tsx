import './App.css';
import Cap from './Cap';

import { Timeline } from 'react-twitter-widgets'
import ReactGA from 'react-ga';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    ReactGA.initialize('G-LR9FBJY3R0');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
          <h1>Thorchain Pool Cap</h1>
      </header>
      <Cap></Cap>
      <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'THORChain'
  }}
  options={{
    height: '600',
    width:"50%"
  }}

/>
<script>

</script>
    
    </div>
    
    
  );
}

export default App;
