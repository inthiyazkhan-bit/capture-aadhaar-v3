const { useState: _useS, useEffect: _useE } = React;

function MiniPhone({ children, align = 'center' }) {
  return (
    <div style={{
      width: 210, height: 240, borderRadius: '30px 30px 4px 4px',
      border: '3px solid #1A1A1A', borderBottom: 'none',
      background: '#fff', position: 'relative', overflow: 'hidden',
      boxShadow: '0 14px 30px -18px rgba(0,0,0,0.35)',
      padding: '28px 16px 14px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: align,
    }}>
      <div style={{
        position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
        width: 60, height: 7, borderRadius: 4, background: '#1A1A1A',
      }}/>
      {children}
    </div>
  );
}

function MiniPhoneHeader() {
  return (
    <div style={{
      width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      paddingBottom: 10, marginBottom: 10,
      borderBottom: '1px solid #ECEDED',
    }}>
      <DigiLockerLogo height={15}/>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 5.99962C6.94563 5.99962 9.8495 4.75049 12 2.71387C14.1505 4.75049 17.0544 5.99962 20.25 5.99962C20.3008 5.99962 20.3515 5.9993 20.4021 5.99867C20.7901 7.17878 21 8.43971 21 9.74966C21 15.3412 17.1757 20.0395 12 21.3716C6.82432 20.0395 3 15.3412 3 9.74966C3 8.43971 3.2099 7.17878 3.59789 5.99867C3.64852 5.9993 3.69922 5.99962 3.75 5.99962Z" fill="#00B887" stroke="#00B887" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12.4286L10.4 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    </div>
  );
}

/* ───────────── Step 1: Enter Aadhaar number ───────────── */
function Step1AadhaarNumber() {
  const [tick, setTick] = _useS(0);

  _useE(() => {
    if (tick >= 12) return;
    const id = setTimeout(() => setTick(t => t + 1), 150);
    return () => clearTimeout(id);
  }, [tick]);

  const digits = '123456789012'.slice(0, tick);
  const groups = [digits.slice(0, 4), digits.slice(4, 8), digits.slice(8, 12)];

  return (
    <MiniPhone>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <DigiLockerLogo height={22}/>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A', textAlign: 'center' }}>
          Enter Aadhaar number
        </div>
        <div style={{
          width: 190,
          border: '1.5px solid #D8D8D8', borderRadius: 8, padding: '9px 10px',
          display: 'flex', justifyContent: 'center', gap: 10,
          fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', background: '#fff',
          boxSizing: 'border-box',
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ minWidth: 38, textAlign: 'center', color: groups[i] ? '#1A1A1A' : '#C8C8C8' }}>
              {groups[i] || 'XXXX'}
            </span>
          ))}
        </div>
      </div>
    </MiniPhone>
  );
}

/* ───────────── Step 2: Enter OTP ───────────── */
function Step2OTP() {
  const [tick, setTick] = _useS(0);

  _useE(() => {
    if (tick >= 6) return;
    const id = setTimeout(() => setTick(t => t + 1), 230);
    return () => clearTimeout(id);
  }, [tick]);

  return (
    <MiniPhone>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <DigiLockerLogo height={22}/>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A', textAlign: 'center', whiteSpace: 'nowrap' }}>
          Enter OTP
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              width: 22, height: 28, borderRadius: 5,
              border: `1.5px solid ${tick > i ? '#1A56DB' : '#D8D8D8'}`,
              background: tick > i ? '#EEF4FF' : '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 700, color: '#1A56DB',
              transition: 'all 180ms ease',
            }}>{tick > i ? '•' : ''}</div>
          ))}
        </div>
      </div>
    </MiniPhone>
  );
}

/* ───────────── Step 3: DigiLocker 6-digit PIN ───────────── */
function Step3Pin() {
  const [fill, setFill] = _useS(0);
  _useE(() => {
    if (fill >= 6) return;
    const id = setTimeout(() => setFill(f => f + 1), 260);
    return () => clearTimeout(id);
  }, [fill]);

  return (
    <MiniPhone>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <DigiLockerLogo height={22}/>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A', textAlign: 'center', whiteSpace: 'nowrap' }}>
          Enter 6-digit Security PIN
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              width: 18, height: 18, borderRadius: '50%',
              background: fill > i ? '#1A56DB' : '#E8E8E8',
              transition: 'all 200ms ease',
            }}/>
          ))}
        </div>
        <div style={{ fontSize: 9, color: '#8A8A8A', fontWeight: 500, whiteSpace: 'nowrap' }}>
          Your DigiLocker PIN
        </div>
      </div>
    </MiniPhone>
  );
}

/* ───────────── Step 4: Select Aadhaar & Allow ───────────── */
function Step4SelectAndAllow() {
  return (
    <MiniPhone align="flex-start">
      <MiniPhoneHeader/>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, fontWeight: 600, color: '#1A1A1A',
        }}>
          <span>Issued Documents (2)</span>
          <span style={{ color: '#1766D6' }}>Select all</span>
        </div>

        <div style={{
          padding: '7px 10px',
          border: '1.5px solid #1766D6', borderRadius: 7,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 11, fontWeight: 700, color: '#1A1A1A',
        }}>
          <span>Aadhaar Card</span>
          <div style={{
            width: 14, height: 14, borderRadius: 3, background: '#16A34A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="9" height="9" viewBox="0 0 12 12">
              <path d="M2 6 L5 9 L10 3" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div style={{
          padding: '7px 10px',
          border: '1px solid #E0E0E0', borderRadius: 7,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 10, fontWeight: 500, color: '#8A8A8A',
        }}>
          <span>PAN Verification</span>
          <div style={{ width: 12, height: 12, borderRadius: 3, border: '1.5px solid #C8C8C8' }}/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 5, marginTop: 3 }}>
          <div style={{
            padding: '7px 0', borderRadius: 7,
            border: '1.5px solid #D8D8D8', background: '#fff',
            fontSize: 11, fontWeight: 600, color: '#1A1A1A',
            textAlign: 'center',
          }}>Deny</div>
          <div style={{
            padding: '6px 0', borderRadius: 7,
            background: '#1766D6',
            border: '2px solid #E53E3E',
            boxSizing: 'border-box',
            fontSize: 11, fontWeight: 700, color: '#fff',
            textAlign: 'center',
          }}>Allow</div>
        </div>
      </div>
    </MiniPhone>
  );
}

Object.assign(window, { MiniPhone, MiniPhoneHeader, Step1AadhaarNumber, Step2OTP, Step3Pin, Step4SelectAndAllow });
