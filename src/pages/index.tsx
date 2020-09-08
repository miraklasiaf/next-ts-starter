import { Flex, Box, Heading, Link, Text } from "@chakra-ui/core"
import ThemeToggle from "@/src/components/theme-toggle"

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" h="screen" py={8}>
      <Heading fontWeight="semibold">
        Welcome to <Link href="https://nextjs.org">Next TS Starter</Link>
      </Heading>

      <Text fontSize="2xl" mt={3}>
        Get started by editing{" "}
        <Box as="code" bg="indigo.300" borderRadius="md" fontSize="md" p={2}>
          pages/index.js
        </Box>
      </Text>

      <Box mt={6}>
        <ThemeToggle />
      </Box>
    </Flex>
  )
}
