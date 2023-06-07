import {Button} from 'src/Button'
import StoreComp from './StoreComp'
import incStore from './store/incStore'
// export {Button, StoreComp, incStore}
const App = () => {
  return (
    <>
      <h1>Micro Host #1</h1>
      <StoreComp />
      <Button customLabel="HOST" />
    </>
  )
}
export default App
