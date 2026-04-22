const CAROUSEL_STEPS = [
  { title: 'Enter your Aadhaar number',                         Visual: () => <Step1AadhaarNumber/> },
  { title: 'Verify with OTP sent to your mobile',               Visual: () => <Step2OTP/> },
  { title: 'Enter your DigiLocker Security PIN',                Visual: () => <Step3Pin/> },
  { title: 'Select Aadhaar in the documents, & click Allow',    Visual: () => <Step4SelectAndAllow/> },
];

function StepsCarousel({ intervalMs = 4500 }) {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % CAROUSEL_STEPS.length), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <div style={{
      marginTop: 10, width: '100%',
      background: '#fff', border: 'none',
      borderRadius: 14, padding: '8px 12px 6px',
      boxShadow: 'none',
      overflow: 'hidden', boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          padding: '3px 10px', borderRadius: 999,
          background: '#EEF4FF', color: '#1A56DB',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.02em', whiteSpace: 'nowrap',
        }}>
          STEP {idx + 1} OF {CAROUSEL_STEPS.length}
        </div>
      </div>

      <div style={{ marginTop: 6, height: 240, position: 'relative' }}>
        {CAROUSEL_STEPS.map((s, i) => {
          const active = i === idx;
          return (
            <div key={i} style={{
              position: 'absolute', inset: 0,
              display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
              transform: `translateY(${active ? 0 : 10}px) scale(${active ? 1 : 0.96})`,
              opacity: active ? 1 : 0,
              transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 650ms cubic-bezier(0.34,1.25,0.64,1)',
              pointerEvents: active ? 'auto' : 'none',
            }}>
              <s.Visual/>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 10, height: 30, position: 'relative' }}>
        {CAROUSEL_STEPS.map((s, i) => {
          const active = i === idx;
          return (
            <div key={i} style={{
              position: 'absolute', inset: 0,
              textAlign: 'center', padding: '0 8px',
              fontSize: 15, fontWeight: 600, color: '#1A1A1A',
              letterSpacing: '-0.01em', lineHeight: 1.35,
              opacity: active ? 1 : 0,
              transform: `translateY(${active ? 0 : 6}px)`,
              transition: 'opacity 450ms ease, transform 550ms cubic-bezier(0.34,1.25,0.64,1)',
            }}>{s.title}</div>
          );
        })}
      </div>

    </div>
  );
}

Object.assign(window, { StepsCarousel });
