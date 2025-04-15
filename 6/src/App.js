import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
