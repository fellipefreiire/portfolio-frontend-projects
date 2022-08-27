import { Route, Routes, Router, Location } from 'react-router-dom'
import { MemoryHistory, BrowserHistory } from 'history'
import { Section } from './components/Section'
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Projects } from './pages/Projects'
import { theme } from './styles/theme/default'

interface IAppProps {
  history: BrowserHistory | MemoryHistory
  location: Location
}

export const App = ({ location, history }: IAppProps) => {
  const [isolationLocation, setIsolationLocation] = useState(history.location)

  if (!location)
    history.listen(({ location }) => setIsolationLocation(location))

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Router location={location || isolationLocation} navigator={history}>
        <Routes>
          <Route path='/projects' element={<Projects />} />
          <Route path='/' element={<Section />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}
