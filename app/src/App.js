import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import AdminPresent from './pages/admin/AdminPresent';
import AdminSettings from './pages/admin/AdminSettings';
import ClientView from './pages/client/ClientView';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Routes>
            <Route path="/" element={<AdminPresent/>} exact/>
             <Route path="/adminpresent" element={<AdminPresent/>}/>             
             <Route path="/adminsettings" element={<AdminSettings/>}/>
             <Route path="/clientview" element={<ClientView/>}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;