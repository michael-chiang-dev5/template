import React from 'react';
import im from './assets/client.png';

function NodeClient({ id, data }) {
  return (
    <>
      <div>
        <img src={im} style={{ width: '40px' }} />
      </div>
      <div>client</div>
    </>
  );
}

export default NodeClient;
