import React from 'react';

export default function EventShows() {
  return (
    <div className="eventShowsWrap">
      <img
        src="./image/backgroundTop.png"
        alt="배경윗부분"
        style={{ display: 'block' }}
        width="100%"
      />
      <div className="eventShows" />
      <img
        src="./image/backgroundBottom.png"
        alt="배경아랫부분"
        style={{ display: 'block' }}
        width="100%"
      />
    </div>
  );
}
