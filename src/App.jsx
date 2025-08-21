
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
export default App;