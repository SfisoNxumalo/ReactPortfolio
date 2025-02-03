
import './App.css'
import Main from './Components/Main/Main';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return <MantineProvider>{ <Main />}</MantineProvider>;
}

export default App


