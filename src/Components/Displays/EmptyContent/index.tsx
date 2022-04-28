import { Container, Text } from './styles';

type Props = {
  text: string
}

export function EmptyContent({...props}: Props) {
  return (
    <Container>
        <Text>{props.text}</Text>
    </Container>
  );
}