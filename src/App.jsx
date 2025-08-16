
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Data from './data'

const App = () => {
  const headerElement = Data.map((header) => {
    return(
      <Header 
        {...header}
      />
    )
  })
  return (
    <div className="w-screen min-h-screen bg-gray-200">
      {headerElement}
      <hr />
      <Main />
      <Footer />
    </div>
  )
}
/* function App(){
  const[count, setCount] = React.useState(0)

    function Add(){
      setCount(prevCount => prevCount + 1)
    }
    
    function Minus(){
      setCount(prevCount => prevCount - 1)
    }
  
  return(
    <main className='mains'>
      <h1 className="title">how many times will bob say State in this section?</h1>
      <div className="btns">
        <button onClick={Minus} className="minus">-</button>
        <h2 className="count">{count}</h2>
        <button onClick={Add} className="plus">+</button>
      </div>
    </main>
  )
} */
export default App;