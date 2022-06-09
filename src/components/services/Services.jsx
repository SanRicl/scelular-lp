import './service.css';
import img1 from '../../assets/image4.png';
import img2 from '../../assets/image3.png';
import img3 from '../../assets/image2.png';
import img4 from '../../assets/image1.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { WhatsApp } from '@material-ui/icons';

const Services = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_doeoijl',
        'template_0iaajfb',
        form.current,
        'b9nKLkaC-Y8vmhThD',
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            alert('Mensagem Enviada. Agradecemos o contato!');
          }
        },
        (error) => {
          if (error.Text) {
            alert(
              'Mensagem nao enviada, tente novamente mais tarde ou entre em contato atraves do numero de celular',
            );
          }
        },
      );
  };
  return (
    <div className="servicesContainer" id="services">
      <h1>Nossos Serviços</h1>
      <div className="serviceGrid">
        <div className="servicesGriContainer">
          <div className="servicesItem">
            <div className="servicesImg">
              <img className="itemImg" src={img1} alt="" />
            </div>
            <p>Trocas de Tela</p>
          </div>
          <div className="servicesItem">
            <div className="servicesImg">
              <img className="itemImg" src={img2} alt="" />
            </div>
            <p>Restauração de Sistema</p>
          </div>
          <div className="servicesItem">
            <div className="servicesImg">
              <img className="itemImg" src={img3} alt="" />
            </div>
            <p>Desoxidação</p>
          </div>
          <div className="servicesItem">
            <div className="servicesImg">
              <img className="itemImg" src={img4} alt="" />
            </div>
            <p>Reparo em Placas</p>
          </div>
        </div>
        <div className="orcamentoForm">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Solicite um Orçamento</h2>
            <label>Nome</label>
            <input type="text" name="user_name" placeholder="Seu Nome" />
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Seu Email" />
            <label>Numero</label>
            <input type="text" name="user_number" placeholder="Seu Numero" />
            <label>Menssagem</label>
            <textarea
              name="message"
              rows="7"
              cols="50"
              placeholder="Descreva a sua solicitacao"
            />
            <input type="submit" value="Enviar" />
            <div className="orcamentoContact">
              <p>Ou envie uma mensagem para nosso Whatsapp:</p>

              <a
                className="orcamentoContactBtn"
                href="https://api.whatsapp.com/send?phone=5571981372935"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsApp className="orcamentoContactIcon" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
