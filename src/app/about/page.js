import React from 'react';

export default function About() {
  return (
    <div style={{ textAlign: 'center', color: 'magenta' }}>

      <h1 style={{ fontSize: '3em', color: 'magenta' }}>About Me</h1>
      <br></br>
      <h2 style={{ fontSize: '2em' }}>My Skills</h2>
      <br></br>
      <ul style={{ textAlign: 'left', display: 'inline-block', listStyleType: 'none', padding: 0 }}>
        <li>Javascript</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Troubleshooting</li>
        <li>Networking</li>
        <li>Security</li>
        <li>Hardware</li>
      </ul>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
