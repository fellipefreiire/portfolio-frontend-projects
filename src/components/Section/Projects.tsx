import { Flex, Image } from '@chakra-ui/react'
import logoRcabral from '../../assets/logo-rcabral.png'
import projectsBackground from '../../assets/projects-background.png'

export const Projects = () => {
  const dataQtd = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Flex
      alignItems='center'
      gap='64px'
      bgImage={projectsBackground}
      bgRepeat='no-repeat'
      bgPos='right'
      mb='40px'
    >
      <Flex wrap='wrap' w='100%' flex={1}>
        {dataQtd.map((item) => (
          <Flex key={item} flexBasis={['calc(100%/2)', 'calc(100%/3)']}>
            <Image src={logoRcabral} w='100%' />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
