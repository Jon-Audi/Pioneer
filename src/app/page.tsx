'use client'

import { useState, useCallback, useEffect } from 'react'
import { ANIMATIONS, CATEGORY_LABELS, type Animation, type Category } from '@/lib/animations'

// ── Types ─────────────────────────────────────────────────────────────────────

type FilterKey = keyof typeof CATEGORY_LABELS

// ── Modal ─────────────────────────────────────────────────────────────────────

function Modal({ anim, onClose }: { anim: Animation; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center gap-6 rounded border border-border bg-card p-6 shadow-2xl w-full max-w-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-muted hover:text-white text-xl leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <div className="text-center">
          <div className="text-cyan font-mono text-xl tracking-widest">{anim.name}</div>
          <div className="mt-1 text-muted text-xs tracking-wider">
            {anim.id} · {CATEGORY_LABELS[anim.category]}
          </div>
        </div>

        {/* GIF */}
        <div className="bg-black border border-border rounded overflow-hidden flex items-center justify-center p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/animations/${anim.file}`}
            alt={anim.name}
            className="anim-gif max-w-full"
            style={{ maxHeight: '60vh', objectFit: 'contain' }}
          />
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full text-center">
          {[
            ['SIZE',   `${anim.width}×${anim.height}`],
            ['FRAMES', String(anim.frames)],
            ['FPS',    String(anim.fps)],
            ['TYPE',   CATEGORY_LABELS[anim.category]],
          ].map(([label, value]) => (
            <div key={label} className="bg-surface border border-border rounded p-3">
              <div className="text-muted text-[10px] tracking-widest">{label}</div>
              <div className="text-white text-sm mt-1 font-mono">{value}</div>
            </div>
          ))}
        </div>

        {/* Download */}
        <a
          href={`/animations/${anim.file}`}
          download={`${anim.name.replace(/\s+/g, '_')}.gif`}
          className="flex items-center gap-2 rounded border border-cyan bg-cyan/10 px-6 py-2.5 text-cyan text-sm tracking-wider hover:bg-cyan/20 transition-colors"
        >
          <span>↓</span>
          Download GIF
        </a>
      </div>
    </div>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────────

function AnimCard({ anim, onClick }: { anim: Animation; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col gap-0 text-left w-full rounded border border-border bg-card hover:border-cyan-dim transition-all duration-200 overflow-hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan"
    >
      {/* GIF preview — black bg so transparent edges look right */}
      <div className="flex items-center justify-center bg-black w-full overflow-hidden p-2 aspect-[4/1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/animations/${anim.file}`}
          alt={anim.name}
          className="anim-gif w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Info row */}
      <div className="flex items-center justify-between px-3 py-2.5 border-t border-border gap-2">
        <div className="min-w-0">
          <div className="text-white text-sm font-mono truncate group-hover:text-cyan transition-colors">
            {anim.name}
          </div>
          <div className="text-muted text-[10px] mt-0.5 tracking-wider">
            {anim.width}×{anim.height} · {anim.frames}fr · {anim.fps}fps
          </div>
        </div>

        {/* Download icon — direct link so it works without opening modal */}
        <a
          href={`/animations/${anim.file}`}
          download={`${anim.name.replace(/\s+/g, '_')}.gif`}
          onClick={e => e.stopPropagation()}
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded border border-border text-muted hover:border-cyan hover:text-cyan transition-colors text-sm"
          title="Download GIF"
          aria-label={`Download ${anim.name} GIF`}
        >
          ↓
        </a>
      </div>
    </button>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [filter, setFilter]   = useState<FilterKey>('all')
  const [search, setSearch]   = useState('')
  const [selected, setSelected] = useState<Animation | null>(null)

  const closeModal = useCallback(() => setSelected(null), [])

  const visible = ANIMATIONS.filter(a => {
    if (filter !== 'all' && a.category !== filter) return false
    if (search.trim()) {
      const q = search.toLowerCase()
      return a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q)
    }
    return true
  })

  const counts = Object.fromEntries(
    (['all', ...Object.keys(CATEGORY_LABELS).filter(k => k !== 'all')] as FilterKey[]).map(k => [
      k,
      k === 'all' ? ANIMATIONS.length : ANIMATIONS.filter(a => a.category === k).length,
    ])
  ) as Record<FilterKey, number>

  return (
    <>
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <span
              className="glow-dot inline-block w-2.5 h-2.5 rounded-full bg-cyan"
              aria-hidden="true"
            />
            <span className="text-cyan font-mono text-sm sm:text-base tracking-[0.2em] font-bold whitespace-nowrap">
              PIONEER OEL
            </span>
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded px-3 py-1.5 text-sm font-mono text-white placeholder-muted focus:outline-none focus:border-cyan-dim transition-colors"
              aria-label="Search animations"
            />
          </div>

          {/* Count badge */}
          <div className="text-muted text-xs font-mono flex-shrink-0 hidden sm:block">
            {visible.length}/{ANIMATIONS.length}
          </div>

          {/* Head Units link */}
          <a
            href="/units/"
            className="flex-shrink-0 px-3 py-1.5 border border-border rounded text-xs font-mono text-muted hover:text-cyan hover:border-cyan transition-colors tracking-wider whitespace-nowrap"
          >
            HEAD UNITS
          </a>
        </div>

        {/* Filter tabs */}
        <div className="mx-auto max-w-7xl px-4 pb-0">
          <div className="flex gap-1 overflow-x-auto pb-0 no-scrollbar">
            {(Object.keys(CATEGORY_LABELS) as FilterKey[]).map(key => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`
                  flex-shrink-0 px-4 py-2 text-xs font-mono tracking-wider border-b-2 transition-all
                  ${filter === key
                    ? 'border-cyan text-cyan'
                    : 'border-transparent text-muted hover:text-white hover:border-border'}
                `}
              >
                {CATEGORY_LABELS[key]}
                <span className="ml-1.5 opacity-50">{counts[key]}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── Grid ── */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-muted gap-2">
            <span className="text-4xl">◈</span>
            <p className="font-mono text-sm">No animations match</p>
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map(anim => (
              <AnimCard key={anim.id} anim={anim} onClick={() => setSelected(anim)} />
            ))}
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-4 px-4 text-center text-muted text-[10px] font-mono tracking-widest">
        PIONEER DEH-P7600MP · OEL SCREENSAVER LIBRARY · {ANIMATIONS.length} ANIMATIONS
      </footer>

      {/* ── Modal ── */}
      {selected && <Modal anim={selected} onClose={closeModal} />}
    </>
  )
}
