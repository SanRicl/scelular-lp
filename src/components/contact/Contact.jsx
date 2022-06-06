import './contact.css';
import { LocationOn, LocalPhone } from '@material-ui/icons';
const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <h1>Entre em Contato</h1>
      <div className="contactContent">
        <div className="contactContentItem">
          <LocationOn />
        </div>
        <div className="contactContentInfo">
          <p>
            Caminho Diadema, 2 - Novo Horizonte, Camacari-BA, 42801-390, Bahia,
            Brasil.
          </p>
        </div>
        <div className="contactContentItem">
          <LocalPhone />
        </div>
        <div className="contactContentInfo">
          <p>+55 71 98137-2935</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
