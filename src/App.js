
import './App.css';

function App() {

  
  const TexteRouge = () => {
    
    
    let Screen = document.querySelector(`.screen`)
   

    if (Screen.classList.contains(`texteRouge`)){

      Screen.classList.remove(`texteRouge`)

    }else{

      Screen.classList.add(`texteRouge`)

    }

  }

  const Plus =()=>{

    let screen = document.querySelector(`.screen`)
    screen.innerHTML ++
    console.log(screen);

  }
  const Moins =()=>{

    let screen = document.querySelector(`.screen`)
    screen.innerHTML --
    console.log(screen);

  }




  return (
    <div className="App">

      <div className="screen">
        0
      </div>
      <button className="augmenter" onClick={Plus}>
        +1
      </button>
      <button className="diminuer" onClick={Moins}>
        -1
      </button>
      <button className="style" onClick={TexteRouge}>
        rouge
      </button>

     
    </div>
  );
}

export default App;
