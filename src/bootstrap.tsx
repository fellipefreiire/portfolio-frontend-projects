import { createRoot } from 'react-dom/client'
import {
  createMemoryHistory,
  createBrowserHistory,
  BrowserHistory,
} from 'history'
import { Location } from 'react-router-dom'
import { App } from './App'

interface IMountProps {
  defaultHistory?: BrowserHistory | undefined
  location?: Location
  onNavigate?: (location: Location) => void
}

const mount = (
  el: HTMLElement,
  { defaultHistory, location, onNavigate }: IMountProps
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({ initialEntries: [location!.pathname] })

  if (onNavigate) history.listen(({ location }) => onNavigate(location))

  const root = createRoot(el!)
  root.render(<App location={location!} history={history} />)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_projects-dev-root')

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
