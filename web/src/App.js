import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './Sidebar.css'
import './Main.css';
import './App.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      console.warn,
      {timeout: 30000}
    );
  }, []);

  async function handleAddDev(event) {
    event.preventDefault();
    console.log({github_username, techs})
    const response = await api.post('/devs', {
      github_username,
      techs,
      lat: latitude,
      lon: longitude
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Github username</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36269699?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Maicon</strong>
                <span>Angular</span>
                <a href="https://github.com/maiconm">Perfil do github</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36269699?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Maicon</strong>
                <span>Angular</span>
                <a href="https://github.com/maiconm">Perfil do github</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36269699?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Maicon</strong>
                <span>Angular</span>
                <a href="https://github.com/maiconm">Perfil do github</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
