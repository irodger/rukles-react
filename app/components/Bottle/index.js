import React from 'react';

import './Bottle.scss';

const Bottle = () => {
  return (
    <div className="bottle-wrapper" title="Это просто css иконка, никакой смысловой нагрузкии она не несет, не надо в нее тыкать">
      <div className="bottle">
        <div className="bottle__liquid" />
        <div className="bottle__bubbles bottle__bubbles_a" />
        <div className="bottle__bubbles bottle__bubbles_b" />
        <div className="bottle__bubbles bottle__bubbles_c" />
      </div>
    </div>
  );
};

export default Bottle;
