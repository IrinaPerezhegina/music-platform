import React from 'react';

type TrackProgressProps = {
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const TrackProgress = ({ left, right, onChange }: TrackProgressProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        min={left}
        max={right}
        onChange={onChange}
        value={left}
      />
      <div>
        {left}/{right}
      </div>
    </div>
  );
};

export default TrackProgress;
