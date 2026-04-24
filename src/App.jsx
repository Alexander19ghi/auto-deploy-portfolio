import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>I'm Abhishek!</h1>
        <p className="subtitle">Computer Science Engineering Student</p>
      </header>

      <main className="content">
        <section className="card intro">
          <h2>About Me</h2>
          <p>
            Hi! I'm Abhishek. I'm a CSE student learning the principles of modern web development and DevOps.
            This portfolio is automatically deployed using <strong>GitHub Actions</strong>!
          </p>
        </section>

        <section className="card skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML/CSS</li>
            <li>JavaScript & React</li>
            <li>Git & GitHub</li>
            <li>CI/CD & DevOps</li>
          </ul>
        </section>

        <section className="card projects">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>🚀 Auto-Deploy Portfolio</h3>
            <p>
              A React application built with Vite that demonstrates continuous integration and continuous deployment via GitHub Actions.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Abhishek. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
