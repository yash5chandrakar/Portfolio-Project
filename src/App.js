import './App.css';
import AboutMe from './Components/About/AboutMe';
import Profile from './Components/Home/Profile';
import ProfilePic from './Components/Home/ProfilePic';
import Resume from './Components/Resume/Resume';
import ContactMe from './Components/Contact/ContactMe';
import Footer from './Components/Footer/Footer';
import PageBreak from './Components/Home/PageBreak';

function App() {

  return (

    <div className="App">
      <nav className='navigation'>
        <ul className='navlist'>
          <li className='heading'><a href='#myProfile'><h1>Yash Chandrakar</h1></a></li>
          <li><a href='#aboutMe'>AboutMe</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#contactMe'>ContactMe</a></li>
        </ul>
      </nav>
      <div className='profileOuterDiv' id='myProfile'>
        <Profile />
        <ProfilePic />
      </div>
      <PageBreak />
      <AboutMe />
      <PageBreak />
      <Resume />
      <PageBreak />
      <ContactMe />
      {/* <PageBreak /> */}
      <Footer />
    </div>
  );
}

export default App;
