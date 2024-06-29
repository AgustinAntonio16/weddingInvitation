import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK_PARROQUIA, GOOGLE_MAPS_LINK_ACIENDA } from '@/constants';
import { styWrapper } from './styles';
import Peta from '@assets/images/peta.jpeg';
import MyMap from '@components/MyMap';

function LocationSection() {

  const scriptUrl_P = GOOGLE_MAPS_LINK_PARROQUIA;
  const mapCenter_P = { lat: 19.68767547607422, lng: -99.05340576171875 };
  const mapZoom_P = 14;
  const mapId_P = 'DEMO_MAP_ID';
  const markerPosition_P = { lat: 19.68767547607422, lng: -99.05340576171875 };
  const markerTitle_P = 'Parroquia de Santa María';

  const scriptUrl_R = GOOGLE_MAPS_LINK_ACIENDA;
  const mapCenter_R = { lat: 19.701290130615234, lng: -99.05195617675781 };
  const mapZoom_R = 14;
  const mapId_R = 'DEMO_MAP_ID';
  const markerPosition_R = { lat: 19.701290130615234, lng: -99.05195617675781 };
  const markerTitle_R = 'Hacienda Azalaga';

  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Ceremonia religiosa</h2>
              <p className="sub-title">
                <a
                  href= "https://www.google.com.mx/maps/place/Parroquia+de+Santa+Mar%C3%ADa+de+los+Remedios+de+Tonanitla/@19.6880598,-99.0542596,18z/data=!4m16!1m9!3m8!1s0x85d1f2e307af7319:0x5b34c020405435f!2sParroquia+de+Santa+Mar%C3%ADa+de+los+Remedios+de+Tonanitla!8m2!3d19.6876965!4d-99.0533842!9m1!1b1!16s%2Fg%2F11b6f3mqnb!3m5!1s0x85d1f2e307af7319:0x5b34c020405435f!8m2!3d19.6876965!4d-99.0533842!16s%2Fg%2F11b6f3mqnb?entry=ttu"
                  title="Haz clic para ver el mapa en Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Parroquia de Santa María de los Remedios de Tonanitla</strong>
                </a>{' '}
                <br />
                20 de Noviemmbre S/N, Centro, 55789 Santa María Tonanitla, Méx.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <MyMap
        scriptUrl={scriptUrl_P}
        center={mapCenter_P}
        zoom={mapZoom_P}
        mapId={mapId_P}
        markerPosition={markerPosition_P}
        markerTitle={markerTitle_P}
      />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Recepciòn</h2>
              <p className="sub-title">
                <a
                  href= "https://www.google.com.mx/maps/place/Hacienda+Azalaga/@19.7012949,-99.0545434,17z/data=!4m6!3m5!1s0x85d1f3383287228b:0xe81b7bb5d5b06c5a!8m2!3d19.7012899!4d-99.0519685!16s%2Fg%2F11pv2lll0h?entry=ttu"
                  title="Haz clic para ver el mapa en Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Hacienda Azalaga</strong>
                </a>{' '}
                <br />
                Abundio Gómez S/N, La Urbana o La Chinampa, 55789 Santa María Tonanitla, Méx.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <MyMap
        scriptUrl={scriptUrl_R}
        center={mapCenter_R}
        zoom={mapZoom_R}
        mapId={mapId_R}
        markerPosition={markerPosition_R}
        markerTitle={markerTitle_R}
      />
            </div>
          </div>
        </div>


      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
