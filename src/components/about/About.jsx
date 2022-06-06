import './about.css';
import img1 from '../../assets/sobre1.jpg';
import img2 from '../../assets/sobre2.png';
import img3 from '../../assets/sobre3.jpg';

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <h1>Sobre</h1>
      <div className="aboutGridContainer">
        <div className="aboutItem">
          <div className="aboutItemTexts">
            <h2>Incrível Conserto e Reparo de Celular em Camaçari</h2>
            <p>
              Se você precisa consertar uma tela quebrada ou simplesmente dar um
              jeito no celular que não liga, você encontrou o lugar certo.
              Sergio Celular Assistência Técnica vai consertar o seu telefone
              pelo melhor preço e com a rapidez que você precisa. Você pode
              entrar em contato conosco online se preferir, ou ligue para (71)
              98137-2935. Venha conferir porquê somos a melhor oficina de
              reparos de celular e de serviços de assistência de Camaçari.
            </p>
          </div>
        </div>
        <div className="aboutItem">
          <img className="aboutItemImg" src={img1} alt="" />
        </div>

        <div className="aboutItem">
          <img className="aboutItemImg" src={img2} alt="" />
        </div>
        <div className="aboutItem">
          <div className="aboutItemTexts">
            <h2>Nossos Serviços</h2>
            <p>
              Queremos que nossos clientes saiam de nossa loja com o telefone
              funcionando perfeitamente, e sem gastar uma fortuna para isto. Se
              você tem um problema com seu celular, não pense duas vezes em vir
              direto aqui.
            </p>
          </div>
        </div>

        <div className="aboutItem">
          <div className="aboutItemTexts">
            <h2>Somos Rápidos e Eficientes</h2>
            <p>
              Nossa equipe técnica é a melhor da cidade. Estamos de olho nas
              novidades do mercado, e por isso, os consertos são mais rápidos e
              eficientes. Também sabemos onde encontrar as peças mais em conta,
              sem perder a qualidade que tanto valorizamos. Sem complicação,
              apenas resultados eficientes para você.
            </p>
          </div>
        </div>
        <div className="aboutItem">
          <img className="aboutItemImg" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
