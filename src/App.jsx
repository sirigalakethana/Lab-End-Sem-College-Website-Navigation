import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to KL UNIVERSITY</h2>
      <p>Our college provides quality education and excellent facilities for students.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Our College</h2>
      <p>KL Deemed to be University was established to provide quality technical education.</p>
      <p>Our university provides experienced faculty, laboratories and library facilities.</p>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h2>Our Courses</h2>
      <ul>
        <li>Computer Science Engineering</li>
        <li>Electronics and Communication</li>
        <li>Electrical Engineering</li>
        <li>Mechanical Engineering</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: kluniversity@gmail.com</p>
      <p>Phone: 9876543210</p>
      <p>Address: Vijayawada, Andhra Pradesh</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <header>
        <h1>KL University</h1>
        <p>Education for a Better Future</p>
      </header>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/courses">Courses</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ display: "flex" }}>

        

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>

      <footer>
        <p>© KL University. All Rights Reserved.</p>
      </footer>

    </BrowserRouter>
  );
}

export default App;