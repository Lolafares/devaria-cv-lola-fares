import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

const AboutUs: React.FC = () => {
	return (
		<>
			<section className="section">
				<Container>
					<SectionHeader>
						<>Sobre mim</>
					</SectionHeader>
					<div className="clearfix" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<p>Trabalhando com Designer Gráfico, cada dia é um aprendizado!
Envolve dedicação, pesquisa, estudo de cultura, técnicas.
Cada trabalho precisa de uma atenção especial, o pensar, a compreensão sobre o produto ou o personagem criados, o público direcionado, as cores, as técnicas, as ferramentas utilizadas. Tudo determina o quanto o resultado será satisfatório para o cliente, nós designer e para o público!
						</p>
					</div>
					<div className="short-info" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<ul className="list-unstyled">
							<li>
								<span className="first">Nome:</span>
								<span className="second">Lorane Fares</span>
							</li>
							<li>
								<span className="first">Idade:</span>
								<span className="second">44</span>
							</li>
							<li>
								<span className="first">Nascimento:</span>
								<span className="second">19/08/1978</span>
							</li>
							<li>
								<span className="first">Cidade:</span>
								<span className="second">Londrina</span>
							</li>
							<li>
								<span className="first">Formação:</span>
								<span className="second">Designer Gráfico</span>
							</li>
							<li>
								<span className="first">E-mail:</span>
								<span className="second"><a href="mailto:XXX">ranafares100@gmail.com</a></span>
							</li>
							<li>
								<span className="first">Telefone:</span>
								<span className="second">+55(43)999515772</span>
							</li>
						</ul>
					</div>
				</Container>
			</section>
		</>
	)
}

AboutUs.displayName = "About US";
export default AboutUs;