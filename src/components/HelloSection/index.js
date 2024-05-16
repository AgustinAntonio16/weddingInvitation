import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Yazz from '@assets/images/Yaz.jpg';
import Agus from '@assets/images/Agus.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Sabado, 14 de Diciembre 2024';

  return (
	<Fragment>
	  <div id="fh5co-couple" css={styWrapper}>
		<div className="container">
		  <div className="row">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
			  <h2 className="main-font">Nuestra boda</h2>
			  <h3 className="sub-title hs">{finalSubtitle}</h3>
			  <p className="info">
			  Con alegría y amor, les invitamos a compartir este momento único. Unidos en felicidad, esperamos que nos acompañen en esta celebración especial.</p>
			</div>
		  </div>
		  <div className="couple-wrap">
			<div className="couple-half">
			  <div className="groom">
				<img src={Yazz} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-groom">
				<h3 className="main-font">Ericka Yazmin Hdz.</h3>
				<p className="parent-name parent-name__top">
				  Ericka Hdz. <br />& Gerardo Hdz.
				</p>
			  </div>
			</div>
			<p className="heart text-center">
			  <i className="icon-heart2"></i>
			</p>
			<div className="and-love">
			  <i>&</i>
			</div>
			<div className="couple-half">
			  <div className="bride">
				<img src={Agus} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-bride">
				<h3 className="main-font">Agustín Antonio</h3>
				<p className="parent-name">
				  Angelina De Jesús <br />& Miguel Agustín Antonio
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
