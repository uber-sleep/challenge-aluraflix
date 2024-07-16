import Header from '../components/Header';
import Banner from '../components/Banner';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <Header />
            <main>
                <Banner 
                    title="Front End" 
                    subtitle="SEO com React" 
                    description="Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma 'Pokedex'!" 
                    videoUrl="https://www.youtube.com/embed/c8mVlakBESE?si=_wCBnGHoc-BmpjMO" 
                    imageUrl="src/assets/player.png" 
                />
                <VideoSection />
            </main>
            
            <Footer />
        </>        
    );
}

export default Home;
