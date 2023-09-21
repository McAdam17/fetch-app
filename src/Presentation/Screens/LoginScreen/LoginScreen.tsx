import { Box, Button, Container, FormControl, FormLabel, Heading, Input, TagLabel } from "@chakra-ui/react";
import { useStore } from "Store";
import { observer } from "mobx-react-lite";
import { useState } from "react";

export const LoginScreen = observer(() => {
  const { authStore } = useStore()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    authStore.login(name, email)
  }

  return (
    <Box>
      <Heading>Welcome!</Heading>
      <form>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" onChange={e => setName(e.currentTarget.value)}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="you@email.com" onChange={e => setEmail(e.currentTarget.value)}/>
        </FormControl>
        <Button type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
      </form>
    </Box>
  );
})
