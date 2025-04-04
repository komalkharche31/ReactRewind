import Counter from './Counter'
import LikeButton from './LikeButton' 
function App() {
  let styles = {
    marginLeft: "500px"
  }
  return (
    <>
      <div style={styles}>
        <Counter />
        <LikeButton />
      </div>
      
    </>
  )
}

export default App
