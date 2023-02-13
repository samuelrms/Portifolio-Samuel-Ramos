import { Header, ProjectDetails } from '../../components';
import { Container } from '../../styles/ProjectsStyles';

export default function Projetos() {
  return (
    <Container>
      <Header />
      <main className="container">
        <ProjectDetails
          title="Projeto 01"
          type="Website"
          slug="projeto"
          imgURL="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <ProjectDetails
          title="Projeto 02"
          type="Website"
          slug="test"
          imgURL="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <ProjectDetails
          title="Projeto 03"
          type="Website"
          slug="test"
          imgURL="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <ProjectDetails
          title="Projeto 04"
          type="Website"
          slug="test"
          imgURL="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
      </main>
    </Container>
  );
}
