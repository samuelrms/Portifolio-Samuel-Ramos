import { Header, Thumb } from '../../../components';
import { Container } from '../../../styles/ProjectDynamicStyles';

export default function Projeto() {
  return (
    <Container>
      <Header />
      <Thumb
        title="Projeto 01"
        type="Website"
        imgURL="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quasi accusantium totam blanditiis harum adipisci rerum atque neque
          sed, repellat aspernatur perspiciatis illo cum voluptas sequi rem
          praesentium maiores error!
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </Container>
  );
}
