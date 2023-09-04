import { useHistory } from 'react-router-dom'
import { SimpleGrid, Button, Image, Container, Center, Card, Text } from "@mantine/core";



function MantineDemo() {
  const history = useHistory()
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
      <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/result');
          }}
        >
          F U S E
        </button> 
      </Center>
    </Container>

    </>
  );
}
export default MantineDemo;
