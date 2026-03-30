'use client';
import { useState } from 'react';
import { C, FONTS, CREDIT_PACKS } from '../../lib/ui.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const EMPLOYER_PERKS = [
  'Allocate wellness credits company-wide with a single employer code',
  'Anonymous aggregate HR dashboard — wellbeing trends, not personal data',
  'Reduces absenteeism, presenteeism, and early retirement risk',
  'Pre-retirement support programmes included',
  'Strengthens D&I and wellness benefit offering',
];

const HOW_STEPS = [
  { n: '1', title: 'Choose a credit pack', desc: 'Pick the amount that feels right — any budget makes a real difference.' },
  { n: '2', title: 'Add a personal message', desc: "We'll send her a beautiful gift email with your words and a redemption code." },
  { n: '3', title: 'She redeems her way', desc: 'She applies credits to any programme, experience, or coaching session she chooses.' },
];

function inp(ph, val, set, type='text') {
  return <input type={type} required placeholder={ph} value={val} onChange={e=>set(e.target.value)}
    style={{padding:'13px 16px',border:`1.5px solid ${C.faint}`,borderRadius:12,fontFamily:FONTS.sans,fontSize:'0.92rem',color:C.slate,outline:'none',background:'#FAFAFA',width:'100%'}} />;
}

function EmployerModal({ onClose }) {
  const [f, setF] = useState({ first:'', last:'', company:'', email:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const up = k => v => setF(x=>({...x,[k]:v}));
  async function submit(e) {
    e.preventDefault(); setLoading(true);
    await new Promise(r=>setTimeout(r,900));
    setSent(true); setLoading(false);
  }
  return (
    <div style={{position:'fixed',inset:0,zIndex:500,background:'rgba(42,42,53,0.72)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:'white',borderRadius:28,padding:'48px 44px',maxWidth:480,width:'100%',boxShadow:'0 32px 80px rgba(0,0,0,0.25)',position:'relative',maxHeight:'90vh',overflowY:'auto'}}>
        <button onClick={onClose} style={{position:'absolute',top:18,right:20,background:'none',border:'none',cursor:'pointer',fontSize:'1.4rem',color:C.muted}}>✕</button>
        {!sent ? (<>
          <div style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:C.slate,marginBottom:8}}>Partner With Us</div>
          <p style={{fontFamily:FONTS.sans,fontSize:'0.9rem',color:C.muted,lineHeight:1.7,marginBottom:28}}>Tell us about yourself and we'll be in touch within 24 hours to discuss how Her Ruby can support your team.</p>
          <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:14}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              {inp('First name',f.first,up('first'))}
              {inp('Last name',f.last,up('last'))}
            </div>
            {inp('Company name',f.company,up('company'))}
            {inp('Work email',f.email,up('email'),'email')}
            <button type="submit" disabled={loading} style={{background:C.ruby,color:'white',border:'none',borderRadius:12,padding:15,marginTop:4,fontFamily:FONTS.sans,fontSize:'0.95rem',fontWeight:600,cursor:'pointer',opacity:loading?0.7:1}}>
              {loading?'Sending…':'Send Enquiry →'}
            </button>
          </form>
        </>) : (
          <div style={{textAlign:'center',padding:'20px 0'}}>
            <div style={{fontSize:'3rem',marginBottom:16}}>✦</div>
            <div style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:C.slate,marginBottom:12}}>We'll be in touch!</div>
            <p style={{fontFamily:FONTS.sans,fontSize:'0.92rem',color:C.muted,lineHeight:1.7,marginBottom:28}}>Thank you, {f.first}. Our team will reach out to <strong>{f.email}</strong> within 24 hours.</p>
            <button onClick={onClose} style={{background:C.ruby,color:'white',border:'none',borderRadius:12,padding:'13px 28px',fontFamily:FONTS.sans,fontWeight:600,cursor:'pointer'}}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

function GiftModal({ onClose }) {
  const [step, setStep] = useState('choose');
  const [sel, setSel] = useState('p2');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [cn, setCn] = useState(''); const [exp, setExp] = useState(''); const [cvc, setCvc] = useState(''); const [cname, setCname] = useState('');
  const [loading, setLoading] = useState(false);
  const pack = CREDIT_PACKS.find(p=>p.id===sel) || CREDIT_PACKS[1];
  async function pay(e) {
    e.preventDefault(); setLoading(true);
    await new Promise(r=>setTimeout(r,1200));
    setStep('done'); setLoading(false);
  }
  return (
    <div style={{position:'fixed',inset:0,zIndex:500,background:'rgba(42,42,53,0.72)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:'white',borderRadius:28,padding:'44px 40px',maxWidth:480,width:'100%',boxShadow:'0 32px 80px rgba(0,0,0,0.25)',position:'relative',maxHeight:'90vh',overflowY:'auto'}}>
        <button onClick={onClose} style={{position:'absolute',top:18,right:20,background:'none',border:'none',cursor:'pointer',fontSize:'1.4rem',color:C.muted}}>✕</button>
        {step==='choose' && (<>
          <div style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:C.slate,marginBottom:8}}>Send a Gift</div>
          <p style={{fontFamily:FONTS.sans,fontSize:'0.88rem',color:C.muted,lineHeight:1.7,marginBottom:24}}>Choose how much wellness to send her.</p>
          <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:28}}>
            {CREDIT_PACKS.map(p=>(
              <div key={p.id} onClick={()=>setSel(p.id)} style={{border:`2px solid ${sel===p.id?C.ruby:C.faint}`,borderRadius:16,padding:'16px 20px',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',background:sel===p.id?'#FFF8F8':'white',transition:'all 0.18s'}}>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <span style={{fontSize:'1.4rem'}}>{p.emoji}</span>
                  <div>
                    <div style={{fontFamily:FONTS.sans,fontWeight:600,color:C.slate,fontSize:'0.95rem'}}>{p.label} — {p.credits} credits</div>
                    <div style={{fontFamily:FONTS.sans,fontSize:'0.8rem',color:C.muted}}>{p.desc}</div>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  {p.popular&&<div style={{background:C.ruby,color:'white',borderRadius:8,padding:'2px 8px',fontSize:'0.6rem',fontWeight:700,fontFamily:FONTS.sans}}>POPULAR</div>}
                  <div style={{fontFamily:FONTS.serif,fontSize:'1.3rem',fontWeight:700,color:C.ruby}}>${p.price}</div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={()=>setStep('details')} style={{width:'100%',background:C.ruby,color:'white',border:'none',borderRadius:12,padding:15,fontFamily:FONTS.sans,fontWeight:600,fontSize:'0.95rem',cursor:'pointer'}}>Continue →</button>
        </>)}
        {step==='details' && (<>
          <div style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:C.slate,marginBottom:8}}>Gift Details</div>
          <div style={{background:C.blush,borderRadius:12,padding:'12px 16px',marginBottom:24,fontFamily:FONTS.sans,fontSize:'0.88rem',color:C.ruby}}>Sending: {pack.label} — {pack.credits} credits (${pack.price})</div>
          <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:24}}>
            {inp("Recipient's email",email,setEmail,'email')}
            <textarea placeholder="Personal message (optional)" value={msg} onChange={e=>setMsg(e.target.value)} style={{padding:'13px 16px',border:`1.5px solid ${C.faint}`,borderRadius:12,fontFamily:FONTS.sans,fontSize:'0.92rem',color:C.slate,outline:'none',background:'#FAFAFA',minHeight:80,resize:'vertical'}}/>
          </div>
          <div style={{display:'flex',gap:10}}>
            <button onClick={()=>setStep('choose')} style={{flex:1,background:C.blush,color:C.ruby,border:'none',borderRadius:12,padding:14,fontFamily:FONTS.sans,fontWeight:600,cursor:'pointer'}}>← Back</button>
            <button onClick={()=>{if(email)setStep('payment');}} style={{flex:2,background:C.ruby,color:'white',border:'none',borderRadius:12,padding:14,fontFamily:FONTS.sans,fontWeight:600,cursor:'pointer'}}>Continue to Payment →</button>
          </div>
        </>)}
        {step==='payment' && (
          <form onSubmit={pay} style={{display:'flex',flexDirection:'column',gap:12}}>
            <div style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:C.slate,marginBottom:4}}>Payment</div>
            <div style={{background:C.blush,borderRadius:12,padding:'12px 16px',fontFamily:FONTS.sans,fontSize:'0.88rem',color:C.ruby,marginBottom:8}}>{pack.label} gift — ${pack.price} · To: {email}</div>
            {inp('Name on card',cname,setCname)}
            {inp('Card number',cn,setCn)}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              {inp('MM / YY',exp,setExp)}
              {inp('CVC',cvc,setCvc)}
            </div>
            <p style={{fontFamily:FONTS.sans,fontSize:'0.76rem',color:C.muted}}>🔒 Payments processed securely via Stripe. Her Ruby never stores card details.</p>
            <div style={{display:'flex',gap:10}}>
              <button type="button" onClick={()=>setStep('details')} style={{flex:1,background:C.blush,color:C.ruby,border:'none',borderRadius:12,padding:14,fontFamily:FONTS.sans,fontWeight:600,cursor:'pointer'}}>← Back</button>
              <button type="submit" disabled={loading} style={{flex:2,background:C.ruby,color:'white',border:'none',borderRadius:12,padding:14,fontFamily:FONTS.sans,fontWeight:600,cursor:'pointer',opacity:loading?0.7:1}}>{loading?'Processing…':`Pay $${pack.price} →`}</button>
            </div>
          </form>
        )}
        {step==='done' && (
          <div style={{textAlign:'center',padding:'20px 0'}}>
            <div style={{fontSize:'3rem',marginBottom:16}}>🎁</div>
            <div style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:C.slate,marginBottom:12}}>Gift sent!</div>
            <p style={{fontFamily:FONTS.sans,fontSize:'0.92rem',color:C.muted,lineHeight:1.7,marginBottom:12}}><strong>{email}</strong> will receive a gift email with their {pack.credits} wellness credits and a personalised redemption code.</p>
            <p style={{fontFamily:FONTS.sans,fontSize:'0.85rem',color:C.muted,lineHeight:1.65,marginBottom:28}}>She can redeem them in the Her Ruby app — on her own terms, at her own pace.</p>
            <button onClick={onClose} style={{background:C.ruby,color:'white',border:'none',borderRadius:12,padding:'13px 28px',fontFamily:FONTS.sans,fontWeight:600,cursor:'pointer'}}>Done ✦</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GiftOfHealth() {
  const [empModal, setEmpModal] = useState(false);
  const [giftModal, setGiftModal] = useState(false);
  return (
    <section id="gift" style={{background:C.parchment,padding:'120px 0'}}>
      {empModal && <EmployerModal onClose={()=>setEmpModal(false)} />}
      {giftModal && <GiftModal onClose={()=>setGiftModal(false)} />}
      <div className="container">
        <ScrollReveal style={{textAlign:'center',marginBottom:64}}>
          <span style={{fontSize:'0.75rem',fontWeight:600,letterSpacing:'0.2em',textTransform:'uppercase',color:C.ruby,display:'block',marginBottom:16,fontFamily:FONTS.sans}}>Give Her the Gift of Health</span>
          <h2 style={{fontFamily:FONTS.serif,fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:700,lineHeight:1.2,color:C.slate,maxWidth:640,margin:'0 auto 16px'}}>The most meaningful gift you can give her.</h2>
          <p style={{fontSize:'1rem',color:C.muted,lineHeight:1.8,maxWidth:520,margin:'0 auto',fontFamily:FONTS.sans}}>Whether you're her employer, her daughter, her partner, or her closest friend — fund her wellbeing with Her Ruby wellness credits.</p>
        </ScrollReveal>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28,marginBottom:56}} className="gift-grid">
          <ScrollReveal delay={0.1}>
            <div style={{background:C.rubyDeep,borderRadius:28,padding:'44px 40px',position:'relative',overflow:'hidden',height:'100%'}}>
              <div style={{position:'absolute',bottom:-40,right:-40,width:180,height:180,borderRadius:'50%',background:'rgba(255,255,255,0.05)'}}/>
              <div style={{fontSize:'2.4rem',marginBottom:20}}>💼</div>
              <div style={{fontSize:'0.75rem',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:C.goldLight,marginBottom:12,fontFamily:FONTS.sans}}>For Employers & HR Teams</div>
              <h3 style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:'white',lineHeight:1.2,marginBottom:16}}>Fund your team's midlife wellbeing</h3>
              <p style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.7)',lineHeight:1.8,marginBottom:28,fontFamily:FONTS.sans}}>Your most experienced employees are navigating menopause, burnout, and caregiving — silently. Her Ruby gives them access to programmes, community, and expert knowledge. You get measurable impact and a team that stays.</p>
              <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:32}}>
                {EMPLOYER_PERKS.map((p,i)=>(
                  <div key={i} style={{display:'flex',gap:10,alignItems:'center',fontFamily:FONTS.sans,fontSize:'0.87rem',color:'rgba(255,255,255,0.75)'}}>
                    <div style={{width:24,height:24,borderRadius:7,background:'rgba(240,214,136,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.65rem',color:C.goldLight,flexShrink:0}}>✓</div>
                    {p}
                  </div>
                ))}
              </div>
              <button onClick={()=>setEmpModal(true)} style={{background:C.gold,color:C.slate,border:'none',borderRadius:12,padding:'13px 26px',fontFamily:FONTS.sans,fontSize:'0.9rem',fontWeight:600,cursor:'pointer'}}>Partner With Us →</button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div style={{background:'white',borderRadius:28,padding:'44px 40px',border:`2px solid ${C.faint}`,position:'relative',overflow:'hidden',height:'100%'}}>
              <div style={{position:'absolute',bottom:-40,right:-40,width:180,height:180,borderRadius:'50%',background:'rgba(184,41,47,0.04)'}}/>
              <div style={{fontSize:'2.4rem',marginBottom:20}}>🎁</div>
              <div style={{fontSize:'0.75rem',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:C.ruby,marginBottom:12,fontFamily:FONTS.sans}}>For Family & Friends</div>
              <h3 style={{fontFamily:FONTS.serif,fontSize:'1.8rem',fontWeight:700,color:C.slate,lineHeight:1.2,marginBottom:16}}>Give her the support she never asks for</h3>
              <p style={{fontSize:'0.9rem',color:C.muted,lineHeight:1.8,marginBottom:28,fontFamily:FONTS.sans}}>She's been holding everything together for years. Wellness credits let her book a programme, join a community, or access expert knowledge — all on her own terms.</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:20}}>
                {CREDIT_PACKS.map(p=>(
                  <div key={p.id} style={{background:C.blush,borderRadius:14,padding:'16px 10px',textAlign:'center',border:p.popular?`2px solid ${C.ruby}`:`2px solid ${C.faint}`,boxShadow:p.popular?'0 4px 16px rgba(184,41,47,0.1)':'none',position:'relative'}}>
                    {p.popular&&<div style={{position:'absolute',top:-10,left:'50%',transform:'translateX(-50%)',background:C.ruby,color:'white',fontSize:'0.6rem',fontWeight:600,padding:'2px 8px',borderRadius:8,whiteSpace:'nowrap',fontFamily:FONTS.sans}}>MOST LOVED</div>}
                    <div style={{fontSize:'1.3rem',marginBottom:5}}>{p.emoji}</div>
                    <div style={{fontFamily:FONTS.sans,fontSize:'0.68rem',fontWeight:600,color:C.muted,textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:5}}>{p.label}</div>
                    <div style={{fontFamily:FONTS.serif,fontSize:'1.4rem',fontWeight:700,color:C.ruby}}>${p.price}</div>
                    <div style={{fontFamily:FONTS.sans,fontSize:'0.7rem',color:C.muted,marginTop:3}}>{p.credits} credits</div>
                  </div>
                ))}
              </div>
              <p style={{fontFamily:FONTS.sans,fontSize:'0.8rem',color:C.muted,marginBottom:20,lineHeight:1.6}}>1 credit = $20 of wellbeing value. Credits never expire.</p>
              <button onClick={()=>setGiftModal(true)} style={{background:C.ruby,color:'white',border:'none',borderRadius:12,padding:'13px 26px',fontFamily:FONTS.sans,fontSize:'0.9rem',fontWeight:600,cursor:'pointer'}}>Send a Gift ✦</button>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div style={{background:C.blush,borderRadius:22,padding:'36px 40px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32,border:`1px solid ${C.faint}`}} className="gift-steps">
            {HOW_STEPS.map(s=>(
              <div key={s.n} style={{textAlign:'center'}}>
                <div style={{width:52,height:52,borderRadius:'50%',background:C.ruby,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px',fontFamily:FONTS.serif,fontSize:'1.2rem',fontWeight:700,color:'white'}}>{s.n}</div>
                <div style={{fontFamily:FONTS.serif,fontSize:'1.1rem',fontWeight:700,color:C.slate,marginBottom:6}}>{s.title}</div>
                <p style={{fontSize:'0.85rem',color:C.muted,lineHeight:1.65,fontFamily:FONTS.sans}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <style>{`@media(max-width:900px){.gift-grid{grid-template-columns:1fr!important;}.gift-steps{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
