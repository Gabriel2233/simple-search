import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function CreateBook() {
  const { register, errors, handleSubmit } = useForm();

  const createBook = async (data) => {
    try {
      const res = await fetch("/api/create-book", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const confirmation = await res.json();

      console.log(confirmation);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Flex h="100vh" bg="gray.100" align="center" justify="center">
      <Flex
        w="50%"
        align="center"
        justify="center"
        flexDir="column"
        rounded="30px"
        bg="white"
        p={8}
        borderWidth={2}
        borderColor="gray.200"
      >
        <Heading size="lg" p={4}>
          Add a new book
        </Heading>

        <FormControl
          isInvalid={
            errors && errors.title && errors.imageUrl && errors.description
          }
        >
          <Input
            placeholder="Book title"
            name="title"
            ref={register({
              required: "Title is required",
            })}
            my={2}
          />

          <Input
            placeholder="Cover Image"
            name="imageUrl"
            ref={register({
              required: "Image Url is required",
            })}
            my={2}
          />

          <Textarea
            placeholder="Description"
            name="description"
            ref={register({
              required: "Description is required",
            })}
            my={2}
            h="100px"
            resize="none"
          />

          <Button
            bg="blue.500"
            _hover={{ bg: "blue.400" }}
            color="white"
            my={6}
            onClick={handleSubmit(createBook)}
          >
            Create
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
}
