import Link from 'next/link';
import Container from '../styles/PageNotFound';

export default function PageNotFound() {
    return (
        <Container>
            <h1>404 - Nada foi encontrado :(</h1>
            <Link href="/"><a>Retornar a página inicial</a></Link>
        </Container>
    )
}