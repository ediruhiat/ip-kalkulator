import GpaContextProvider from './contexts/gpa/GpaContext'
import Layout from './components/layout';

import './app.scss'

const App = () => {
  return (
    <div className="app">
      <GpaContextProvider>
        <Layout />
      </GpaContextProvider>
    </div>
  )
}
export default App;
