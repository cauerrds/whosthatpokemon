import { DifficultyModal } from './components/difficultModal/difficultModal';
import { FinishedGameModal } from './components/finishedGameModal/finishedGameModal';
import { Footer } from './components/footer/footer';
import { Game } from './components/Game/Game';
import { Header } from './components/header/header';
import { LangaugeModal } from './components/languageModal/languageModal';


const App = () => {
  return (

    <div className='App'>
      <LangaugeModal/>
      <Header/>
      <DifficultyModal/>
      <Game/>
      <Footer/>
    </div>
 
  )
    
};

export default App;
