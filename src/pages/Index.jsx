import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
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
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
        <Box flex="3">
          <VStack spacing={8} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.excerpt}</Text>
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
    </Container>
  );
};

export default Index;