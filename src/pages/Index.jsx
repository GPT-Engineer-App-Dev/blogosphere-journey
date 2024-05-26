import { useState } from "react";
import { Box, Container, Flex, Heading, Link, Stack, Text, VStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Textarea, useDisclosure, Image } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const posts = [
  {
    title: "First Blog Post",
    excerpt: "This is the summary of the first blog post.",
    link: "#"
  },
  {
    title: "Second Blog Post",
    excerpt: "This is the summary of the second blog post.",
    link: "#"
  },
  {
    title: "Third Blog Post",
    excerpt: "This is the summary of the third blog post.",
    link: "#"
  }
];

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPost, setNewPost] = useState({ title: "", content: "", image: "" });
  const [postList, setPostList] = useState(posts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = () => {
    setPostList([...postList, newPost]);
    setNewPost({ title: "", content: "", image: "" });
    onClose();
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Button colorScheme="teal" onClick={onOpen}>New Post</Button>
        </Stack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
        <Box flex="3">
          <VStack spacing={8} align="stretch">
            {postList.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                {post.image && <Image src={post.image} alt={post.title} mt={4} />}
                <Link color="teal.500" href={post.link}>Read More</Link>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Follow Me</Heading>
          <Stack direction="row" spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram size="24px" />
            </Link>
          </Stack>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={newPost.title} onChange={handleChange} />
            </FormControl>
            <FormControl id="content" isRequired mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea name="content" value={newPost.content} onChange={handleChange} />
            </FormControl>
            <FormControl id="image" mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input name="image" value={newPost.image} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Submit</Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;