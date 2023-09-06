import { SimpleGrid, Button, Image, Container, Center, Card, Text, Space } from "@mantine/core";
import { IconHeartFilled } from '@tabler/icons-react';

function FusionResult() {
  return (
    <>
    <Container>
      <SimpleGrid cols={1}>

        <Card padding="md">
          <Text fz="xs" fw={400}>Result</Text>
          <Text fz="lg" fw={1000}>King Frost</Text>
          <Center>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/f/fa/King_Frost_%28Dx2_Art%29.png"
            alt="kingFrost"
            width="150"
            />
          </Center>
        </Card>
      </SimpleGrid>
      <Space h="lg" />
      <SimpleGrid cols={2}>
       <Card padding="md">
          <Text fz="sm" fw={700}>Jack Frost</Text>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/b/b7/P5X_Jack_Frost.png/"
            alt="jackFrost"
            width="50"
            />
        </Card>
        <Card padding="md">
          <Text fz="sm" fw={700}>Black Frost</Text>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/c/c4/Black_Frost_Dx2.png"
            alt="blackFrost"
            width="50"
            />
        </Card>
      <Button>Back</Button>
      <Button>
        <IconHeartFilled>
        </IconHeartFilled>
      </Button>
      </SimpleGrid>
    </Container>
    </>
  );
}
export default FusionResult;
