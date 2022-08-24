import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

interface IContainerProps {
  children: ReactNode
}

export const Container = ({ children }: IContainerProps) => {
  return (
    <Flex
      maxW={[540, 720, null, 960, 1140, 1280]}
      pr={8}
      pl={8}
      ml='auto'
      mr='auto'
    >
      {children}
    </Flex>
  )
}
