import TitleHeader from './components/Header';
import InputTextBin from './components/Input';
import ButtonConvert from './components/Button';
import './App.css';
import './styles/components-style.css';

function App() {

  return (
    <>
      <div>
        <TitleHeader/>
        <div className='content'>
          <InputTextBin />
          
          <ButtonConvert />
        </div>
      </div>
    </>
  )
}

export default App
