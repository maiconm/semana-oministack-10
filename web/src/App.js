import React from 'react';
import './global.css';
import './Sidebar.css'
import './Main.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Github username</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div class="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required />
          </div>
          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li class="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36269699?s=460&v=4" alt=""/>
              <div class="user-info">
                <strong>Maicon</strong>
                <span>Angular</span>
                <a href="https://github.com/maiconm">Perfil do github</a>
              </div>
            </header>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36269699?s=460&v=4" alt=""/>
              <div class="user-info">
                <strong>Maicon</strong>
                <span>Angular</span>
                <a href="https://github.com/maiconm">Perfil do github</a>
              </div>
            </header>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/36269699?s=460&v=4" alt=""/>
              <div class="user-info">
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
