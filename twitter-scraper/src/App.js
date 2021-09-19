//import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import OpinionBox from './components/opinionBox'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <div>
        <OpinionBox />
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
