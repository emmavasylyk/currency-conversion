import Container from '../../components/Container/Container';
import ConvertationForm from '../../components/ConvertationForm/ConvertationForm';

export default function USDPage() {
  return (
    <>
      <Container>
        <ConvertationForm name="&#36;" currencyName="USD" />
      </Container>
    </>
  );
}
