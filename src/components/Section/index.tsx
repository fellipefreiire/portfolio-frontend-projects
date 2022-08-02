import { Button, Flex, Image, Text } from '@chakra-ui/react'
import logoRcabral from '../../assets/logo-rcabral.png'
import projectsBackground from '../../assets/projects-background.png'

export const Section = () => {
  const dataQtd = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Flex
      bg='#121212'
      p='60px 110px 60px 128px'
      gap='40px'
      direction='column'
      alignItems='center'
    >
      <Flex
        alignItems='center'
        gap='64px'
        bgImage={projectsBackground}
        bgRepeat='no-repeat'
        bgPos='right'
      >
        <Flex wrap='wrap' minW='645px'>
          {dataQtd.map((item) => (
            <Image key={item} src={logoRcabral} />
          ))}
        </Flex>
        <Flex direction='column' textAlign='right' alignItems='flex-end'>
          <Text as='h2' fontSize='4.5rem' color='#00fea1' fontWeight='bold'>
            Projects
          </Text>
          <Text as='p' fontSize='1rem' lineHeight={2.2} color='white' mb='32px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit
          </Text>
          <Button
            background='transparent'
            color='#BA99F6'
            border='2px solid #BA99F6'
            borderRadius='10px'
            cursor='pointer'
            padding='16px 32px'
          >
            Contact Me
          </Button>
        </Flex>
      </Flex>
      <Text as='span' color='#ffac00'>
        See more projects
      </Text>
    </Flex>
  )
}
