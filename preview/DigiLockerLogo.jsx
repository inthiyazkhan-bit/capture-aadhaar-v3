function DigiLockerLogo({ height = 24 }) {
  // PNG is 77x19 — keep aspect
  const width = height * (77 / 19);
  return (
    <img src="assets/digilocker-logo.png" alt="DigiLocker"
         width={width} height={height}
         style={{ display: 'block' }}/>
  );
}

function InfoIcon({ size = 16, color = '#7D8187' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" fill="none"/>
      <circle cx="10" cy="6.2" r="1.1" fill={color}/>
      <rect x="9.1" y="8.8" width="1.8" height="6.4" rx="0.9" fill={color}/>
    </svg>
  );
}

function BackArrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M15 5 L8 12 L15 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

Object.assign(window, { DigiLockerLogo, InfoIcon, BackArrow });
