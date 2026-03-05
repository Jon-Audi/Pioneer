'use client'

import { useState, useCallback, useEffect } from 'react'
import { ANIMATIONS, type Animation } from '@/lib/animations'

// ── Head unit definitions ─────────────────────────────────────────────────────

interface UnitDef {
  id:          string
  name:        string
  subtitle:    string
  displayFilter: string   // CSS filter applied to the animation img
  displayBg:   string     // CSS background for the screen area
  screenGlow:  string     // box-shadow glow color
}

const UNITS: UnitDef[] = [
  {
    id:            'pioneer',
    name:          'Pioneer DEH',
    subtitle:      'DEH-P7600MP · OEL Display',
    displayFilter: 'none',
    displayBg:     '#000',
    screenGlow:    '0 0 18px 4px rgba(0,212,255,0.55)',
  },
  {
    id:            'vfd-green',
    name:          'VFD Classic',
    subtitle:      'Kenwood / Alpine · Green Fluorescent',
    displayFilter: 'grayscale(1) brightness(0.9) sepia(1) hue-rotate(90deg) saturate(4)',
    displayBg:     '#000a00',
    screenGlow:    '0 0 18px 4px rgba(0,255,80,0.5)',
  },
  {
    id:            'vfd-amber',
    name:          'Vintage Receiver',
    subtitle:      'Late 70s Hi-Fi · Amber VFD',
    displayFilter: 'grayscale(1) sepia(1) hue-rotate(10deg) saturate(3) brightness(1.1)',
    displayBg:     '#0a0500',
    screenGlow:    '0 0 20px 5px rgba(255,160,0,0.5)',
  },
  {
    id:            'modern',
    name:          'Modern LCD',
    subtitle:      'Current Era · Full-Color Display',
    displayFilter: 'saturate(1.3) brightness(1.05)',
    displayBg:     '#000',
    screenGlow:    '0 0 12px 2px rgba(255,255,255,0.2)',
  },
]

// ── Unit renderers ────────────────────────────────────────────────────────────

function PioneerDEH({ anim, unit }: { anim: Animation; unit: UnitDef }) {
  return (
    <div className="relative select-none" style={{ width: 560, maxWidth: '100%' }}>
      {/* Chassis */}
      <div
        className="relative rounded-sm overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1c1c1c 0%, #111 60%, #0a0a0a 100%)',
          border: '1px solid #333',
          boxShadow: '0 4px 24px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)',
          padding: '10px 12px',
        }}
      >
        {/* Top strip: Pioneer logo + display + source btn */}
        <div className="flex items-center gap-3 mb-2">
          {/* Pioneer badge */}
          <div
            className="flex-shrink-0 text-[9px] tracking-[0.3em] font-bold px-1"
            style={{ color: '#888', letterSpacing: '0.25em' }}
          >
            PIONEER
          </div>

          {/* OEL Display */}
          <div
            className="flex-1 flex items-center justify-center overflow-hidden rounded-sm relative"
            style={{
              background: unit.displayBg,
              boxShadow: unit.screenGlow + ', inset 0 0 12px rgba(0,0,0,0.6)',
              height: 52,
              border: '1px solid #222',
            }}
          >
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/animations/${anim.file}`}
              alt={anim.name}
              className="anim-gif max-h-full max-w-full object-contain relative z-0"
              style={{ filter: unit.displayFilter }}
            />
          </div>

          {/* Buttons right side */}
          <div className="flex flex-col gap-1 flex-shrink-0">
            {['SRC', 'DISP'].map(lbl => (
              <div key={lbl}
                className="text-[7px] tracking-widest px-1.5 py-0.5 rounded-sm text-center"
                style={{ background: '#1a1a1a', border: '1px solid #333', color: '#555' }}
              >
                {lbl}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip: buttons + knob */}
        <div className="flex items-center gap-2">
          {/* CD slot */}
          <div
            className="flex-1 h-2 rounded-full"
            style={{ background: 'linear-gradient(90deg, #0a0a0a, #222, #0a0a0a)', border: '1px solid #1a1a1a' }}
          />
          {/* Transport buttons */}
          {['◄◄', '▶', '■', '►►'].map(lbl => (
            <div key={lbl}
              className="text-[8px] w-6 h-5 flex items-center justify-center rounded-sm"
              style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#666' }}
            >
              {lbl}
            </div>
          ))}
          {/* Volume knob */}
          <div
            className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[6px]"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #555, #1a1a1a)',
              border: '2px solid #333',
              color: '#888',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            VOL
          </div>
        </div>
      </div>
    </div>
  )
}


function VintageReceiver({ anim, unit }: { anim: Animation; unit: UnitDef }) {
  return (
    <div className="relative select-none" style={{ width: 620, maxWidth: '100%' }}>
      <div
        className="relative rounded overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #2a2218 0%, #1a1610 100%)',
          border: '2px solid #3a3020',
          boxShadow: '0 6px 32px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,200,100,0.08)',
          padding: '12px 16px',
        }}
      >
        {/* Wood-grain side accents */}
        <div className="flex gap-3 items-stretch">
          {/* Left wood panel */}
          <div
            className="w-6 flex-shrink-0 rounded-sm"
            style={{ background: 'linear-gradient(180deg, #5c3a1e, #3a2010, #5c3a1e)', border: '1px solid #6a4422' }}
          />

          {/* Main face */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Top row: brand + display + VU indicator */}
            <div className="flex items-center gap-3">
              <div className="text-[10px] font-bold tracking-[0.3em]" style={{ color: '#c8a060' }}>
                AUDIO MASTER
              </div>
              <div className="flex-1" />
              <div className="text-[7px] tracking-widest" style={{ color: '#665030' }}>
                STEREO
              </div>
            </div>

            {/* Display */}
            <div
              className="relative overflow-hidden flex items-center justify-center"
              style={{
                background: unit.displayBg,
                boxShadow: unit.screenGlow + ', inset 0 0 16px rgba(0,0,0,0.7)',
                height: 56,
                border: '2px solid #2a2010',
                borderRadius: 2,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1px, transparent 1px, transparent 3px)',
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/animations/${anim.file}`}
                alt={anim.name}
                className="anim-gif max-h-full max-w-full object-contain relative z-0"
                style={{ filter: unit.displayFilter }}
              />
            </div>

            {/* Bottom row: knobs */}
            <div className="flex items-center justify-between">
              {['BASS', 'TREB', 'BAL', 'FAD', 'VOL'].map(lbl => (
                <div key={lbl} className="flex flex-col items-center gap-1">
                  <div
                    className="w-7 h-7 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 35% 30%, #888, #2a2010)',
                      border: '2px solid #554030',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.6)',
                    }}
                  />
                  <div className="text-[6px] tracking-wider" style={{ color: '#665030' }}>{lbl}</div>
                </div>
              ))}
              {/* Power LED */}
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: '#ff8020',
                  boxShadow: '0 0 8px 2px rgba(255,128,0,0.7)',
                }}
              />
            </div>
          </div>

          {/* Right wood panel */}
          <div
            className="w-6 flex-shrink-0 rounded-sm"
            style={{ background: 'linear-gradient(180deg, #5c3a1e, #3a2010, #5c3a1e)', border: '1px solid #6a4422' }}
          />
        </div>
      </div>
    </div>
  )
}


function VFDClassic({ anim, unit }: { anim: Animation; unit: UnitDef }) {
  return (
    <div className="relative select-none" style={{ width: 520, maxWidth: '100%' }}>
      <div
        className="relative rounded-sm overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #c8c8c8 0%, #a0a0a0 40%, #888 100%)',
          border: '1px solid #aaa',
          boxShadow: '0 4px 20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.5)',
          padding: '8px 10px',
        }}
      >
        {/* Display bezel */}
        <div className="flex items-center gap-2 mb-2">
          {/* Brand */}
          <div
            className="text-[8px] font-bold tracking-[0.25em] flex-shrink-0"
            style={{ color: '#444' }}
          >
            KENWOOD
          </div>

          {/* VFD screen */}
          <div
            className="flex-1 relative overflow-hidden flex items-center justify-center"
            style={{
              background: unit.displayBg,
              boxShadow: unit.screenGlow + ', inset 0 0 10px rgba(0,0,0,0.8)',
              height: 48,
              border: '2px solid #555',
              borderRadius: 2,
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 2px)',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/animations/${anim.file}`}
              alt={anim.name}
              className="anim-gif max-h-full max-w-full object-contain relative z-0"
              style={{ filter: unit.displayFilter }}
            />
          </div>

          {/* Eject + indicator */}
          <div className="flex flex-col gap-1 flex-shrink-0">
            <div
              className="text-[7px] px-1 py-0.5 text-center rounded"
              style={{ background: '#888', border: '1px solid #666', color: '#333' }}
            >
              ▲
            </div>
            <div
              className="w-2 h-2 rounded-full mx-auto"
              style={{ background: '#00ee00', boxShadow: '0 0 6px rgba(0,238,0,0.8)' }}
            />
          </div>
        </div>

        {/* Button row */}
        <div className="flex gap-1 items-center">
          {['◄◄', '▶▶', '▶', '■', 'ATT', 'EQ'].map(lbl => (
            <div
              key={lbl}
              className="flex-1 text-center text-[7px] py-1 rounded-sm"
              style={{
                background: 'linear-gradient(180deg, #999, #666)',
                border: '1px solid #555',
                color: '#222',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 2px rgba(0,0,0,0.4)',
              }}
            >
              {lbl}
            </div>
          ))}
          {/* Volume knob */}
          <div
            className="w-8 h-8 rounded-full flex-shrink-0"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #ddd, #555)',
              border: '2px solid #444',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      </div>
    </div>
  )
}


function ModernLCD({ anim, unit }: { anim: Animation; unit: UnitDef }) {
  return (
    <div className="relative select-none" style={{ width: 540, maxWidth: '100%' }}>
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
          border: '1px solid #2a2a2a',
          boxShadow: '0 8px 40px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.04)',
          padding: '10px 12px',
        }}
      >
        {/* Glass panel top */}
        <div
          className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
          }}
        />

        <div className="flex items-center gap-3">
          {/* Logo dot */}
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: '#00aaff', boxShadow: '0 0 8px rgba(0,170,255,0.8)' }}
          />

          {/* Large LCD display */}
          <div
            className="flex-1 relative overflow-hidden flex items-center justify-center rounded"
            style={{
              background: unit.displayBg,
              boxShadow: unit.screenGlow + ', inset 0 0 20px rgba(0,0,0,0.5)',
              height: 60,
              border: '1px solid #1a1a1a',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/animations/${anim.file}`}
              alt={anim.name}
              className="anim-gif max-h-full max-w-full object-contain"
              style={{ filter: unit.displayFilter }}
            />
          </div>

          {/* Touch buttons */}
          <div className="flex flex-col gap-1.5 flex-shrink-0">
            {['⏮', '⏭', '⏏'].map(lbl => (
              <div
                key={lbl}
                className="w-7 h-5 flex items-center justify-center text-xs rounded"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid #2a2a2a',
                  color: '#555',
                }}
              >
                {lbl}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            {['FM', 'AM', 'USB', 'BT'].map(lbl => (
              <div key={lbl} className="text-[7px] tracking-wider" style={{ color: '#333' }}>
                {lbl}
              </div>
            ))}
          </div>
          <div className="text-[7px] tracking-widest" style={{ color: '#333' }}>
            VOL ●●●●●○○
          </div>
        </div>
      </div>
    </div>
  )
}

const UNIT_COMPONENTS: Record<string, React.ComponentType<{ anim: Animation; unit: UnitDef }>> = {
  pioneer:   PioneerDEH,
  'vfd-green': VFDClassic,
  'vfd-amber': VintageReceiver,
  modern:    ModernLCD,
}

// ── Page ──────────────────────────────────────────────────────────────────────

// Animations suitable for the wide display (skip static 1-frame patterns)
const SHOWCASE_ANIMS = ANIMATIONS.filter(a => a.frames > 1)

export default function UnitsPage() {
  const [unitIdx,  setUnitIdx]  = useState(0)
  const [animIdx,  setAnimIdx]  = useState(0)

  const currentUnit = UNITS[unitIdx]
  const currentAnim = SHOWCASE_ANIMS[animIdx]

  const prevAnim = useCallback(() =>
    setAnimIdx(i => (i - 1 + SHOWCASE_ANIMS.length) % SHOWCASE_ANIMS.length), [])
  const nextAnim = useCallback(() =>
    setAnimIdx(i => (i + 1) % SHOWCASE_ANIMS.length), [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prevAnim()
      if (e.key === 'ArrowRight') nextAnim()
      if (e.key === 'ArrowUp')   setUnitIdx(i => (i - 1 + UNITS.length) % UNITS.length)
      if (e.key === 'ArrowDown') setUnitIdx(i => (i + 1) % UNITS.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prevAnim, nextAnim])

  const UnitRenderer = UNIT_COMPONENTS[currentUnit.id]

  return (
    <>
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 gap-4">
          <div className="flex items-center gap-3">
            <span className="glow-dot inline-block w-2.5 h-2.5 rounded-full bg-cyan" />
            <span className="text-cyan font-mono text-sm sm:text-base tracking-[0.2em] font-bold">
              HEAD UNITS
            </span>
          </div>
          <a href="/" className="text-muted hover:text-white text-xs font-mono tracking-wider transition-colors">
            ← GALLERY
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 flex flex-col gap-8">

        {/* ── Unit selector ── */}
        <div className="flex flex-col gap-3">
          <div className="text-muted text-[10px] tracking-[0.2em] font-mono">SELECT UNIT</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {UNITS.map((unit, i) => (
              <button
                key={unit.id}
                onClick={() => setUnitIdx(i)}
                className={`
                  p-3 text-left rounded border font-mono transition-all
                  ${i === unitIdx
                    ? 'border-cyan bg-cyan/10 text-cyan'
                    : 'border-border bg-card text-muted hover:border-border hover:text-white'}
                `}
              >
                <div className="text-xs font-bold">{unit.name}</div>
                <div className="text-[9px] mt-0.5 opacity-70">{unit.subtitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Head unit display ── */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full flex justify-center">
            <UnitRenderer anim={currentAnim} unit={currentUnit} />
          </div>

          {/* Now playing */}
          <div className="text-center">
            <div className="text-cyan font-mono text-sm tracking-widest">{currentAnim.name}</div>
            <div className="text-muted text-xs mt-1 font-mono">
              {currentAnim.id} · {currentAnim.width}×{currentAnim.height} · {currentAnim.frames} frames
            </div>
          </div>

          {/* Transport controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevAnim}
              className="w-10 h-10 border border-border bg-card rounded flex items-center justify-center text-muted hover:text-cyan hover:border-cyan transition-colors font-mono"
              aria-label="Previous animation"
            >
              ◄
            </button>

            <div className="text-muted text-xs font-mono tabular-nums">
              {animIdx + 1} / {SHOWCASE_ANIMS.length}
            </div>

            <button
              onClick={nextAnim}
              className="w-10 h-10 border border-border bg-card rounded flex items-center justify-center text-muted hover:text-cyan hover:border-cyan transition-colors font-mono"
              aria-label="Next animation"
            >
              ►
            </button>
          </div>

          <div className="text-muted text-[10px] font-mono tracking-wider">
            ← → to change animation · ↑ ↓ to change unit
          </div>
        </div>

        {/* ── Animation strip ── */}
        <div className="flex flex-col gap-3">
          <div className="text-muted text-[10px] tracking-[0.2em] font-mono">ALL ANIMATIONS</div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {SHOWCASE_ANIMS.map((anim, i) => (
              <button
                key={anim.id}
                onClick={() => setAnimIdx(i)}
                className={`
                  flex-shrink-0 flex flex-col gap-1 p-1.5 rounded border transition-all
                  ${i === animIdx ? 'border-cyan bg-cyan/10' : 'border-border bg-card hover:border-border'}
                `}
                title={anim.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/animations/${anim.file}`}
                  alt={anim.name}
                  className="anim-gif block"
                  style={{
                    width: 80, height: 20, objectFit: 'cover',
                    filter: currentUnit.displayFilter,
                    background: currentUnit.displayBg,
                    imageRendering: 'pixelated',
                  }}
                />
                <div className={`text-[8px] font-mono text-center truncate w-20 ${i === animIdx ? 'text-cyan' : 'text-muted'}`}>
                  {anim.name}
                </div>
              </button>
            ))}
          </div>
        </div>

      </main>

      <footer className="border-t border-border py-4 px-4 text-center text-muted text-[10px] font-mono tracking-widest">
        PIONEER OEL ANIMATION LIBRARY · HEAD UNIT SHOWCASE
      </footer>
    </>
  )
}
