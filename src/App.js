import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="name">
          <div className="name-title">Oxygen Studio Project</div>
          <div className="name-subtitle">项目导航站</div>
        </div>
        <div className="links">
          <div className="link">
            <a href="https://space.bilibili.com/390831920k">B 站</a>
          </div>
          <div className="link">
            <a href="https://www.hydcraft.cn">氢气工艺</a>
          </div>
          <div className="link">
            <a href="https://github.com/Oxygen-Studio">GitHub</a>
          </div>
        </div>
      </header>
      <footer className="App-footer">
        <a href="https://beian.miit.gov.cn/">
          闽ICP备2023007345号-2
        </a>
      </footer>
    </div>
  );
}

export default App;
