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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad incidunt
          reprehenderit repellendus dignissimos quo nisi quis voluptate ipsam
          impedit. Doloremque corrupti excepturi repellendus? A, quibusdam.
          Ipsam illum reprehenderit, vitae explicabo expedita quo id laudantium
          deleniti nulla eligendi natus temporibus minus doloremque quasi porro
          delectus soluta, possimus quis excepturi aut. Aperiam aspernatur
          possimus ipsum corporis qui, tempora blanditiis. Animi voluptatibus
          incidunt culpa molestiae voluptatem, ex repudiandae? Ducimus,
          obcaecati libero autem quod culpa doloribus harum illum ipsum nemo
          unde debitis veniam ut.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </Container>
  );
}
