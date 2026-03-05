export type Category = 'grayscale' | 'oel' | 'bg' | 'level' | 'pattern' | 'procedural'

export interface Animation {
  id:       string
  name:     string
  category: Category
  file:     string
  width:    number
  height:   number
  frames:   number
  fps:      number
}

export const CATEGORY_LABELS: Record<Category | 'all', string> = {
  all:         'All',
  grayscale:   'Grayscale',
  oel:         'OEL Movies',
  bg:          'BG Loops',
  level:       'Level Meters',
  pattern:     'Patterns',
  procedural:  'Procedural',
}

export const ANIMATIONS: Animation[] = [
  // ── Original 21 Pioneer animations ────────────────────────────────────────
  { id: 'ANIM_00', name: 'Dolphins',    category: 'grayscale', file: 'ANIM_00.gif', width: 248, height: 64, frames: 149, fps: 20 },
  { id: 'ANIM_01', name: 'Airship',     category: 'grayscale', file: 'ANIM_01.gif', width: 248, height: 64, frames: 150, fps: 20 },
  { id: 'ANIM_02', name: 'DragonRide',  category: 'grayscale', file: 'ANIM_02.gif', width: 248, height: 64, frames: 150, fps: 20 },
  { id: 'ANIM_03', name: 'WRC Rally',   category: 'grayscale', file: 'ANIM_03.gif', width: 248, height: 64, frames: 150, fps: 20 },
  { id: 'ANIM_04', name: 'Wildlife',    category: 'grayscale', file: 'ANIM_04.gif', width: 248, height: 64, frames: 150, fps: 20 },
  { id: 'ANIM_05', name: 'Waterboard',  category: 'grayscale', file: 'ANIM_05.gif', width: 248, height: 64, frames: 150, fps: 20 },
  { id: 'ANIM_06', name: 'Metropolis',  category: 'grayscale', file: 'ANIM_06.gif', width: 248, height: 64, frames: 150, fps: 20 },
  { id: 'ANIM_07', name: 'Movie 1',     category: 'oel',       file: 'ANIM_07.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_08', name: 'Carrozzeria', category: 'oel',       file: 'ANIM_08.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_09', name: 'Movie 3',     category: 'oel',       file: 'ANIM_09.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_10', name: 'Movie 4',     category: 'oel',       file: 'ANIM_10.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_11', name: 'Pioneer ID',  category: 'oel',       file: 'ANIM_11.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_12', name: 'Movie 6',     category: 'oel',       file: 'ANIM_12.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_13', name: 'FightMovie',  category: 'oel',       file: 'ANIM_13.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_14', name: 'Movie 8',     category: 'oel',       file: 'ANIM_14.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_15', name: 'Movie 9',     category: 'oel',       file: 'ANIM_15.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_16', name: 'Movie 10',    category: 'oel',       file: 'ANIM_16.gif', width: 248, height: 64, frames:  60, fps: 20 },
  { id: 'ANIM_17', name: 'BG Loop 1',   category: 'bg',        file: 'ANIM_17.gif', width: 248, height: 64, frames:  29, fps: 20 },
  { id: 'ANIM_18', name: 'BG Loop 2',   category: 'bg',        file: 'ANIM_18.gif', width: 248, height: 64, frames:  29, fps: 20 },
  { id: 'ANIM_19', name: 'BG Loop 3',   category: 'bg',        file: 'ANIM_19.gif', width: 248, height: 64, frames:  29, fps: 20 },
  { id: 'ANIM_20', name: 'BG Loop 4',   category: 'bg',        file: 'ANIM_20.gif', width: 248, height: 64, frames:  29, fps: 20 },
  // ── BG Patterns (256×48, static) ──────────────────────────────────────────
  { id: 'ANIM_21', name: 'BG Pattern 1',  category: 'pattern', file: 'ANIM_21.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_22', name: 'BG Pattern 2',  category: 'pattern', file: 'ANIM_22.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_23', name: 'BG Pattern 3',  category: 'pattern', file: 'ANIM_23.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_24', name: 'BG Pattern 4',  category: 'pattern', file: 'ANIM_24.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_25', name: 'BG Pattern 5',  category: 'pattern', file: 'ANIM_25.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_26', name: 'BG Pattern 6',  category: 'pattern', file: 'ANIM_26.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_27', name: 'BG Pattern 7',  category: 'pattern', file: 'ANIM_27.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_28', name: 'BG Pattern 8',  category: 'pattern', file: 'ANIM_28.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_29', name: 'BG Pattern 9',  category: 'pattern', file: 'ANIM_29.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_30', name: 'BG Pattern 10', category: 'pattern', file: 'ANIM_30.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_31', name: 'BG Pattern 11', category: 'pattern', file: 'ANIM_31.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_32', name: 'BG Pattern 12', category: 'pattern', file: 'ANIM_32.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_33', name: 'BG Pattern 13', category: 'pattern', file: 'ANIM_33.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_34', name: 'BG Pattern 14', category: 'pattern', file: 'ANIM_34.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_35', name: 'BG Pattern 15', category: 'pattern', file: 'ANIM_35.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_36', name: 'BG Pattern 16', category: 'pattern', file: 'ANIM_36.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_37', name: 'BG Pattern 17', category: 'pattern', file: 'ANIM_37.gif', width: 256, height: 48, frames: 1, fps: 20 },
  { id: 'ANIM_38', name: 'BG Pattern 18', category: 'pattern', file: 'ANIM_38.gif', width: 256, height: 48, frames: 1, fps: 20 },
  // ── Level Meters (96×96, 22 frames) ───────────────────────────────────────
  { id: 'ANIM_39', name: 'Level Meter 1', category: 'level', file: 'ANIM_39.gif', width: 96, height: 96, frames: 22, fps: 20 },
  { id: 'ANIM_40', name: 'Level Meter 2', category: 'level', file: 'ANIM_40.gif', width: 96, height: 96, frames: 22, fps: 20 },
  { id: 'ANIM_41', name: 'Level Meter 3', category: 'level', file: 'ANIM_41.gif', width: 96, height: 96, frames: 22, fps: 20 },
  { id: 'ANIM_42', name: 'Level Meter 4', category: 'level', file: 'ANIM_42.gif', width: 96, height: 96, frames: 22, fps: 20 },
  { id: 'ANIM_43', name: 'Level Meter 5', category: 'level', file: 'ANIM_43.gif', width: 96, height: 96, frames: 22, fps: 20 },
  { id: 'ANIM_44', name: 'Level Meter 6', category: 'level', file: 'ANIM_44.gif', width: 96, height: 96, frames: 22, fps: 20 },
  { id: 'ANIM_45', name: 'Level Meter 7', category: 'level', file: 'ANIM_45.gif', width: 96, height: 96, frames: 22, fps: 20 },
  // ── BG Euro Patterns (128×33, static) ─────────────────────────────────────
  { id: 'ANIM_46', name: 'BG Euro 1', category: 'pattern', file: 'ANIM_46.gif', width: 128, height: 33, frames: 1, fps: 20 },
  { id: 'ANIM_47', name: 'BG Euro 2', category: 'pattern', file: 'ANIM_47.gif', width: 128, height: 33, frames: 1, fps: 20 },
  { id: 'ANIM_48', name: 'BG Euro 3', category: 'pattern', file: 'ANIM_48.gif', width: 128, height: 33, frames: 1, fps: 20 },
  { id: 'ANIM_49', name: 'BG Euro 4', category: 'pattern', file: 'ANIM_49.gif', width: 128, height: 33, frames: 1, fps: 20 },
  { id: 'ANIM_50', name: 'BG Euro 5', category: 'pattern', file: 'ANIM_50.gif', width: 128, height: 33, frames: 1, fps: 20 },
  // ── Level Indicators (64×66, 30 frames) ───────────────────────────────────
  { id: 'ANIM_51', name: 'Level Indicator 1', category: 'level', file: 'ANIM_51.gif', width: 64, height: 66, frames: 30, fps: 20 },
  { id: 'ANIM_52', name: 'Level Indicator 2', category: 'level', file: 'ANIM_52.gif', width: 64, height: 66, frames: 30, fps: 20 },
  { id: 'ANIM_53', name: 'Level Indicator 3', category: 'level', file: 'ANIM_53.gif', width: 64, height: 66, frames: 30, fps: 20 },
  { id: 'ANIM_54', name: 'Level Indicator 4', category: 'level', file: 'ANIM_54.gif', width: 64, height: 66, frames: 30, fps: 20 },
  { id: 'ANIM_55', name: 'Level Indicator 5', category: 'level', file: 'ANIM_55.gif', width: 64, height: 66, frames: 30, fps: 20 },
  { id: 'ANIM_56', name: 'Level Indicator 6', category: 'level', file: 'ANIM_56.gif', width: 64, height: 66, frames: 30, fps: 20 },
  { id: 'ANIM_57', name: 'Level Indicator 7', category: 'level', file: 'ANIM_57.gif', width: 64, height: 66, frames: 30, fps: 20 },
  { id: 'ANIM_58', name: 'Level Indicator 8', category: 'level', file: 'ANIM_58.gif', width: 64, height: 66, frames: 30, fps: 20 },
  // ── Procedural (generated) ────────────────────────────────────────────────
  { id: 'PROC_spectrum',    name: 'Spectrum',     category: 'procedural', file: 'PROC_spectrum.gif',    width: 248, height: 64, frames: 30, fps: 20 },
  { id: 'PROC_oscilloscope',name: 'Oscilloscope', category: 'procedural', file: 'PROC_oscilloscope.gif',width: 248, height: 64, frames: 40, fps: 20 },
  { id: 'PROC_starwarp',    name: 'Star Warp',    category: 'procedural', file: 'PROC_starwarp.gif',    width: 248, height: 64, frames: 40, fps: 20 },
  { id: 'PROC_plasma',      name: 'Plasma',       category: 'procedural', file: 'PROC_plasma.gif',      width: 248, height: 64, frames: 48, fps: 20 },
  { id: 'PROC_scanner',     name: 'Scanner',      category: 'procedural', file: 'PROC_scanner.gif',     width: 248, height: 64, frames: 24, fps: 20 },
  { id: 'PROC_matrix',      name: 'Matrix Rain',  category: 'procedural', file: 'PROC_matrix.gif',      width: 248, height: 64, frames: 30, fps: 20 },
  { id: 'PROC_vumeter',     name: 'VU Meters',    category: 'procedural', file: 'PROC_vumeter.gif',     width: 248, height: 64, frames: 30, fps: 20 },
  { id: 'PROC_synthwave',   name: 'Synthwave',    category: 'procedural', file: 'PROC_synthwave.gif',   width: 248, height: 64, frames: 40, fps: 20 },
]
