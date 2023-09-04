import { SimpleGrid, Button, Image, Container, Center, Card, Text } from "@mantine/core";


function MantineDemo() {
  return (
    <>
    <Container>
      <SimpleGrid cols={2}>
        <Card>
          <Text>Mantine 1</Text>
          <Image
            src="https://static.pokemonpets.com/images/monsters-images-300-300/2226-Shiny-Mantine.webp"
            alt="Mantine"
          />
        </Card>

        <Card>
          <Text>Mantine 2</Text>
          <Image
            src="https://static.pokemonpets.com/images/monsters-images-300-300/2226-Shiny-Mantine.webp"
            alt="Mantine"
          />
        </Card>
      </SimpleGrid>
      <Center>
        <Button >F U S E</Button>  
      </Center>
    </Container>

    </>
  );
}
export default MantineDemo;
