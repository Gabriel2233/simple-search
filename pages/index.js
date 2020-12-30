import { Box, Heading, Text, Flex, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { data } from "../data";
import { useForm } from "react-hook-form";

export default function Home() {
  const [books, setBooks] = useState(data);
  const [suggestions, setSuggestions] = useState([]);

  const { handleSubmit, register, errors } = useForm();

  const suggestWords = async (data) => {
    try {
      const res = await fetch(`/api/suggest?word=${data.q}`);

      const results = await res.json();

      setSuggestions(results);
    } catch (err) {
      console.log("Error");
    }
  };

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
          name="q"
          ref={register}
          onChange={handleSubmit(suggestWords)}
        />
        <Button color="white" bg="blue.500" _hover={{ bg: "blue.400" }} mx={4}>
          Search
        </Button>
      </Flex>

      <Flex w="full" align="center" justify="center" flexDir="column"></Flex>
    </Box>
  );
}
