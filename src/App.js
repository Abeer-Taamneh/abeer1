import React,{useState,useEffect} from 'react'
import { ToastContainer} from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Navigation from './components/navigation';
import { CategoriesTreeView } from './components/categories'
import Brands from './components/brands';
import HomePage from './components/homePage'
import Login from './components/login';
import Logout from './components/logout';
import Register from './components/register';


const App = () => {
  const [user, setsuser] = useState({name:'abeer',isAdmin:true})
  const [language,setLanguage]= useState('AR');
  
  // useEffect(() => {
  //   setsuser({name:'abeer'})
  // }, [])
  return (
    <div>
     <div>
     <ToastContainer />
     <Navigation user={user} language={language} setLanguage ={setLanguage}/>  
     <Routes>    
       <Route path='/categories' element={<CategoriesTreeView user={user}/>}/>
        <Route path='/brands' element={<Brands user={user} language={language}/>}/>
        <Route path='/' element = {<HomePage/>} />
           <Route path='/login' element = {<Login/>} />
           <Route path='/logout' element = {<Logout/>} />
           <Route path='/register' element = {<Register/>} />
     </Routes>
    
   </div>

    </div>
  )
}

export default App
