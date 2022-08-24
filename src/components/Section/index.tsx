import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import logoRcabral from '../../assets/logo-rcabral.png'
import projectsBackground from '../../assets/projects-background.png'

export const Section = () => {
  const dataQtd = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const pc = useBreakpointValue({ base: false, lg: true })
  const mobile = useBreakpointValue({ base: true, lg: false })

  return (
    <>
      {mobile && (
        <Flex gap='24px' flexDir='column' pb='60px'>
          <Box
            maxW={[540, 720, null, 960, 1140, 1280]}
            pr={8}
            pl={8}
            ml='auto'
            mr='auto'
          >
            <Text
              as='h2'
              fontSize={['2rem', null, '3rem', null, '4.5rem']}
              color='#00fea1'
              fontWeight='bold'
              textAlign={['left', null, null, 'right']}
              mb='24px'
            >
              Projects
            </Text>
            <Text
              as='p'
              fontSize='1rem'
              lineHeight={2.2}
              color='white'
              textAlign={['left', null, null, 'right']}
              mb='24px'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit
            </Text>
            <Button
              background='transparent'
              color='#BA99F6'
              border='2px solid #BA99F6'
              borderRadius='10px'
              cursor='pointer'
              padding='16px 32px'
              height='auto'
              lineHeight={1.5}
            >
              Contact Me
            </Button>
          </Box>

          <Flex
            alignItems='center'
            gap='64px'
            bgRepeat='no-repeat'
            bgPos='right'
          >
            <Flex wrap='wrap' w='100%' flex={1}>
              {dataQtd.map((item) => (
                <Flex key={item} flexBasis={['calc(100%/2)', 'calc(100%/3)']}>
                  <Image src={logoRcabral} w='100%' />
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex justifyContent='center' alignItems='center'>
            <Text as='span' color='#ffac00' textAlign='center'>
              See more projects
            </Text>
          </Flex>
        </Flex>
      )}

      {pc && (
        <Box
          maxW={[540, 720, null, 960, 1140, 1280]}
          pr={8}
          pl={8}
          pb='60px'
          ml='auto'
          mr='auto'
        >
          <Flex
            alignItems='center'
            gap='64px'
            bgRepeat='no-repeat'
            bgPos='right'
            bgImage={projectsBackground}
            mb='40px'
          >
            <Flex wrap='wrap' w='100%' flex={1}>
              {dataQtd.map((item) => (
                <Flex key={item} flexBasis={['calc(100%/2)', 'calc(100%/3)']}>
                  <Image src={logoRcabral} w='100%' />
                </Flex>
              ))}
            </Flex>

            <Flex flexDir='column' maxW='40%' alignItems='flex-end'>
              <Text
                as='h2'
                fontSize={['2rem', null, '3rem', null, '4.5rem']}
                color='#00fea1'
                fontWeight='bold'
                textAlign={['left', null, null, 'right']}
                mb='24px'
              >
                Projects
              </Text>
              <Text
                as='p'
                fontSize='1rem'
                lineHeight={2.2}
                color='white'
                textAlign={['left', null, null, 'right']}
                mb='24px'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit
              </Text>
              <Button
                background='transparent'
                color='#BA99F6'
                border='2px solid #BA99F6'
                borderRadius='10px'
                cursor='pointer'
                padding='16px 32px'
                height='auto'
                lineHeight={1.5}
                flexGrow={0}
              >
                Contact Me
              </Button>
            </Flex>
          </Flex>
          <Flex justifyContent='center' alignItems='center'>
            <Text as='span' color='#ffac00' textAlign='center'>
              See more projects
            </Text>
          </Flex>
        </Box>
      )}
    </>
  )
}
