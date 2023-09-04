import React from 'react';

const MeetUpDetail = (props) => {

  return <h1>{`ID:${props?.id} Description: ${props?.description}`}</h1>
}

export default MeetUpDetail;