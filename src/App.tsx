
import './App.css'
import Main from './Components/Home/Main/Main';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navigation/Navbar';
import { Dashboard } from './Components/Dashboard/DashboardComponent/Dashboard';

const queryClient = new QueryClient()

function App() {
  return (
  
    <MantineProvider>{
      <QueryClientProvider client={queryClient}>
      {/* <MantineProvider>{ <Main />}</MantineProvider> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="Dashboard" element={<Dashboard />} />
           {/*<Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>}
    </MantineProvider>
    
  

  )
}

export default App


