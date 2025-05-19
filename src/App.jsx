import PostsPage from './components/PostsPage'
import CountContext from './contexts/CountContext'


function App() {


  return (
    <>
      <CountContext.Provider value={{ count: 1 }}>

        <PostsPage />
      </CountContext.Provider >
    </>
  )
}

export default App
