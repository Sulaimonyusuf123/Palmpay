
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer'
import Main from './components/Main';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import Company from './components/pages/Company';
import Press from './components/pages/Press';
import Business from './components/pages/Business';







 function App() {
  return (
   
    <div>
    
    <BrowserRouter>
   <Header/>
      <Routes>
     
      <Route path='/' element={<Body/>}></Route>
      <Route path='personal' element={< Company/>}></Route>
      <Route path='press' element={< Press/>}></Route>
      <Route path='business' element={< Business/>}></Route>
      </Routes>
    </BrowserRouter>
    
    <Footer />
    </div>

   
  );
 
}

export default App