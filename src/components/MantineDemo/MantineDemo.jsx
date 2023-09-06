import { useHistory } from "react-router-dom";
import {
  SimpleGrid,
  Button,
  Image,
  Container,
  Center,
  Card,
  Text,
} from "@mantine/core";

function MantineDemo() {
  const history = useHistory();
  return (
    <Container>
      <SimpleGrid cols={2} verticalSpacing="lg">
        <Card withBorder>
          <Text fz="sm" fw={700}>
            Jack Frost
          </Text>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/b/b7/P5X_Jack_Frost.png"
            alt="jackFrost"
          />
        </Card>
        <Card withBorder>
          <Text fz="sm" fw={700}>
            Black Frost
          </Text>
          <Image
            src="https://static.wikia.nocookie.net/megamitensei/images/c/c4/Black_Frost_Dx2.png"
            alt="blackFrost"
          />
        </Card>
      </SimpleGrid>
      <Center>
        <Button
        fullWidth
          onClick={() => {
            history.push("/result");
          }}
        >
          Fuse
        </Button>
      </Center>
    </Container>
  );
}

export default MantineDemo;
