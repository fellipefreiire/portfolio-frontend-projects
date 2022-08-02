import './styles/global/styles.css'
import { Sidebar } from 'home/Sidebar'
import { ChakraProvider } from '@chakra-ui/react'

export const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Sidebar />
      </div>
    </ChakraProvider>
  )
}
