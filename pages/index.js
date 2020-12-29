import { Box, Heading, Text, Flex, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Home() {
  const { handleSubmit, register } = useForm();

  return (
    <Box h="100vh" bg="gray.100">
      <Flex w="full" align="center" flexDir="column" p="2rem">
        <Heading size="2xl">Simple Search</Heading>
        <Text color="gray.500" fontWeight="bold" mt="1rem">
          This is a simple example on how to use NextJs's <br /> API routes to
          create a simple search component <br /> using Sonic, an open-source
          tool.
        </Text>
      </Flex>

      <Flex w="full" justify="center">
        <Input
          placeholder="Search for..."
          w="50%"
          bg="white"
          ref={register}
          name="book"
        />
        <Button color="white" bg="blue.500" _hover={{ bg: "blue.400" }} mx={4}>
          Search
        </Button>
      </Flex>

      <Flex w="full" align="center" justify="center" flexDir="column"></Flex>

      <Link href="/create">
        <Button
          w="40px"
          h="40px"
          fontSize="22px"
          bg="blue.500"
          color="white"
          rounded="50%"
          _hover={{ bg: "blue.400" }}
          pos="fixed"
          bottom={0}
          right={0}
          m={8}
        >
          +
        </Button>
      </Link>
    </Box>
  );
}
