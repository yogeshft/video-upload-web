import {
  Box,
  HStack,
  Heading,
  Stack,
  VStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subsbribe to the postfolio
          </Heading>
          <HStack borderBottom={'2px solid'} py={'2'}>
            <Input
              placeholder="Enter your email"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            video hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href={'https://www.github.com/yogeshft'}>
              Github
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href={'https://www.instagram.com/yogeshft'}>
              InstaGram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href={'https://www.github.com/yogeshft'}>
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
