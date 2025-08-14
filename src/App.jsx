
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
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
    <div>
      {headerElement}
      <hr />
      <MainContent />
      <Footer />
    </div>
  )
}
export default App;