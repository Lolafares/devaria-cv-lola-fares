import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NextLink from "next/link";

const Home: React.FC = () => {
  return (
    <section className="banner bg-soft-orange">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="banner-content">
              <h1 className="mb-30 text-uppercase" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">Lorane Fares</h1>
              <p className="lead mb-30" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600" data-aos-easing="ease-out-cubic">Trabalhando com Designer Gráfico, cada dia é um aprendizado!
Envolve dedicação, pesquisa, estudo de cultura, técnicas.
Cada trabalho precisa de uma atenção especial, o pensar, a compreensão sobre o produto ou o personagem criados, o público direcionado, as cores, as técnicas, as ferramentas utilizadas. Tudo determina o quanto o resultado será satisfatório para o cliente, nós designer e para o público!</p>
              <div className="socials-icons socials-grey" data-aos="fade-up" data-aos-duration="400" data-aos-delay="800" data-aos-easing="ease-out-cubic">
                <NextLink href={"https://www.instagram.com/lorane_fares/"} >
                  <a rel="noopener noreferrer" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </NextLink>
                <NextLink href={"https://github.com/Lolafares/MYFIRSTPROJECT"} passHref>
                  <a rel="noopener noreferrer" target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </NextLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

Home.displayName = "Home";
export default Home;