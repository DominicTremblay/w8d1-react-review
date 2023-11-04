import './App.scss';
import Splash from './Splash';
import TopNav from './TopNav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Splash />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
