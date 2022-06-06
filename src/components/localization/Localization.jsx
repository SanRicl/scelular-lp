import './localization.css';
import Map from '../map/map';

const Localization = () => {
  return (
    <div className="localizationContainer" id="localization">
      <h1>Nossa Localização</h1>
      <div className="localizationContent">
        <div className="mapContainer">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Localization;
