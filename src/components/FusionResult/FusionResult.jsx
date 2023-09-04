import { SimpleGrid, Button, Image, Container, Center, Card, Text } from "@mantine/core";

function FusionResult() {
  return (
    <>
    <Container>
      <SimpleGrid cols={1}>

        <Card withBorder padding="lg">
          <Text>Result</Text>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/f/fa/King_Frost_%28Dx2_Art%29.png"
            alt="kingFrost"
            width="150"
            />
        </Card>
      </SimpleGrid>
      <SimpleGrid cols={2}>

       <Card withBorder padding="lg">
          <Text fz="sm" fw={700}>Jack Frost</Text>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/b/b7/P5X_Jack_Frost.png/"
            alt="jackFrost"
            width="100"
            />
        </Card>
        <Card withBorder padding="lg">
          <Text fz="sm" fw={700}>Black Frost</Text>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/c/c4/Black_Frost_Dx2.png"
            alt="blackFrost"
            width="100"
            />
        </Card>
      <Button>Back</Button>
      <Button></Button>
      </SimpleGrid>
    </Container>
    </>
  );
}
export default FusionResult;
