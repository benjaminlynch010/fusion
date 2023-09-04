import { SimpleGrid, Button, Image, Container, Center, Card, Text } from "@mantine/core";

function FusionResult() {
  return (
    <>
    <Container>
      <SimpleGrid cols={1}>

        <Card>
          <Text>Result</Text>
          <Image
            src="https://static.pokemonpets.com/images/monsters-images-300-300/2226-Shiny-Mantine.webp"
            alt="Mantine"
            />
        </Card>
      </SimpleGrid>
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
    </Container>
    </>
  );
}
export default FusionResult;
