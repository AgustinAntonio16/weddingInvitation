import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import Peta from '@assets/images/peta.jpeg';

function LocationSection() {
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
                  title="Click untuk melihat peta di Google Maps"
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
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Baleendah,Bandung&key=AIzaSyBH19XqT0KNKa5lIW5p1Kz0dYOrX7qG_TE"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Arin & Miftah Wedding Party"
              ></iframe>
            </div>

            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Baleendah,Bandung&key=AIzaSyBH19XqT0KNKa5lIW5p1Kz0dYOrX7qG_TE"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Arin & Miftah Wedding Party"
              ></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
