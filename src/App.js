import React from 'react'
//import './App.css'
import Navigation from './components/shared/Navigation'
import AdminNavigation from './components/shared/AdminNavigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
//import About from './components/pages/About'
//import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'
import ProjectEditor from './components/pages/ProjectEditor'
import ResumeEditor from './components/pages/ResumeEditor'
import ResumeCreate from './components/pages/ResumeCreate.js'
import ProjectCreate from './components/pages/ProjectCreate.js'
import ResumeUpdate from './components/pages/ResumeUpdate.js'
import ProjectUpdate from './components/pages/ProjectUpdate.js'

function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/submissions">
            <AdminNavigation />
            <Listing />
          </PrivateRoute>
          <PrivateRoute path="/project-editor">
            <AdminNavigation />
            <ProjectEditor />
          </PrivateRoute>
          <PrivateRoute path="/project-create">
            <AdminNavigation />
            <ProjectCreate />
          </PrivateRoute>
          <PrivateRoute path="/project-update">
            <AdminNavigation />
            <ProjectUpdate />
          </PrivateRoute>
          <PrivateRoute path="/resume-editor">
            <AdminNavigation />
            <ResumeEditor />
          </PrivateRoute>
          <PrivateRoute path="/resume-create">
            <AdminNavigation />
            <ResumeCreate />
          </PrivateRoute>
          <PrivateRoute path="/resume-update">
            <AdminNavigation />
            <ResumeUpdate />
          </PrivateRoute>
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
