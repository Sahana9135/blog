import './App.css';
import Main from './Components/Content';
import ContactUs from './Components/Contactme';
import NewUser from './Components/Log';
import Gsign from './Components/Google';
import Fsign from './Components/Facebook';
import Esign from './Components/Email';
import NewAccount from './Components/Account';
import Blog from './Components/NewBlog';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/google" element={<Gsign />} />
        <Route path="/facebook" element={<Fsign />} />
        <Route path="/email" element={<Esign />} />
        <Route path="/newaccount" element={<NewAccount />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Main />
      <Head />
      <NewUser />
      <Head />
      <Gsign />
      <Head />
      <Fsign />
      <Head />
      <Esign />
      <Head />
      <NewAccount />
      <Head />
      <Blog /> */}
    </div>
  );
}

export default App;
