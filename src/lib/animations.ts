export type Category = 'grayscale' | 'oel' | 'bg'

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
  all:       'All',
  grayscale: 'Grayscale',
  oel:       'OEL Movies',
  bg:        'BG Loops',
}

// Static metadata — all BIN files are stored at 248×64 (upscaled by extraction script).
// fps is 20 (confirmed from BIN headers). GIFs are rendered at 2× → 496×128 display size.
export const ANIMATIONS: Animation[] = [
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
]
