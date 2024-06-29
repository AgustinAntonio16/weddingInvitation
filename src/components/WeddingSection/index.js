import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">Nosotros amamos porque él nos amó primero.</span>
              <h2 className="main-font main-font__wedding">¡Celebremos juntos! Ceremonia religiosa y Celebración</h2>
              <span className="sub-title sub-title__wedding">Con alegría, se llevará a cabo en:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="Ceremonia religiosa"
                time="16:00 CST"
                date="Sábado 14 de diciembre de 2024"
                description="20 de Noviemmbre S/N, Centro, 55789 Santa María Tonanitla, Méx."
            />
            <WeddingInfoBox
              title="Celebración"
              time="17:00 CST"
              date="sábado 14 de diciembre de 2024"
              description="Abundio Gómez S/N, La Urbana o La Chinampa, 55789 Santa María Tonanitla, Méx."
            />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
