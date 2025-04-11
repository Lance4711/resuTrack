// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import Login_signup from './Login_signup';
// import ImageAnalyzer from './ImageAnalyzer';
// import About from './about';
// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login_signup />} />
//         <Route path="/resutrack" element={<ImageAnalyzer />} />
//         <Route path="/jobs" element={<ImageAnalyzer />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import LoginSignup from './LoginSignup';
import ImageAnalyzer from './ImageAnalyzer';
import About from './about';

// import About from './About'; // Make sure the file is named About.js

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/resutrack" element={<ImageAnalyzer />} /> {/* Check if "resutrack" is correct */}
        <Route path="/jobs" element={<ImageAnalyzer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
      );
};

export default App;
