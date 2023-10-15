import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Hello! Welcome </Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder={'PAssword'}
            type={'password'}
            required
            focusBorderColor="purple.500"
          />
          <Button type="submit" colorScheme={'purple'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already have an account?{'    '}
            <Button variant={'link'}>
              <Link to={'/login'}>Log in </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
