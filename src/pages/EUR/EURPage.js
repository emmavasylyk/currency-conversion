import Container from '../../components/Container/Container';
import ConvertationForm from '../../components/ConvertationForm/ConvertationForm';

export default function EURPage() {
  return (
    <>
      <Container>
        <ConvertationForm name="&#8364;" currencyName="EUR" />
      </Container>
    </>
  );
}
