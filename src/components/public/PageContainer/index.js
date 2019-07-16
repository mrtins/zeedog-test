import React from 'react';

import logoFooter from '../../../img/logo-horizontal-branco.webp';

export default props => (
  <section>
    {props.children}

    <footer>
      <img src={logoFooter} alt="Zee.Dog" />
    </footer>
  </section>
);