// Timing in milliseconds. Only a handful of tiles move at any one time.
const CONFIG = Object.freeze({
  intervalMin: 160,
  intervalMax: 320,
  durationMin: 1000,
  durationMax: 1500,
  cooldown: 6000,
  groupChance: 0.35,
  accentChance: 0.24,
  maxActive: 8,
  borderChance: 0.65,
  borderDurationMin: 900,
  borderDurationMax: 1400,
  borderCooldown: 5000,
  maxBorderActive: 5,
});
const randomBetween = (min, max) => min + Math.random() * (max - min);

export function createHeroGrid(element) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const grid = document.createElement('div');
  grid.className = 'hero-grid-tiles';
  element.append(grid);
  let tiles = [];
  let columns = 0;
  let rows = 0;
  let tileSize = 0;
  let timer;
  let visible = true;
  let destroyed = false;
  const active = new Map();
  const borderActive = new Map();
  const canAnimate = () => !destroyed && visible && !document.hidden && !motion.matches;

  function stop() {
    clearTimeout(timer);
    active.forEach((timeout, flap) => {
      clearTimeout(timeout);
      flap.classList.remove('is-flipping', 'is-accent');
    });
    active.clear();
    borderActive.forEach((timeout, tile) => {
      clearTimeout(timeout);
      tile.classList.remove('is-border-flashing');
    });
    borderActive.clear();
  }

  function resize() {
    const size = parseFloat(getComputedStyle(element).getPropertyValue('--tile-size'));
    const nextColumns = Math.ceil(element.clientWidth / size);
    const nextRows = Math.ceil(element.clientHeight / size);
    if (nextColumns === columns && nextRows === rows && size === tileSize) return;
    stop();
    columns = nextColumns;
    rows = nextRows;
    tileSize = size;
    grid.style.setProperty('--grid-columns', columns);
    const fragment = document.createDocumentFragment();
    tiles = Array.from({ length: columns * rows }, () => {
      const tile = document.createElement('span');
      tile.className = 'hero-grid-tile';
      const flap = document.createElement('span');
      flap.className = 'hero-grid-flap';
      tile.append(flap);
      fragment.append(tile);
      return { tile, flap, lastFlip: -Infinity, lastBorder: -Infinity };
    });
    grid.replaceChildren(fragment);
    schedule();
  }

  function flip(index) {
    const tile = tiles[index];
    const now = performance.now();
    // The masked lower rows never animate.
    if (!tile || index / columns >= rows * 0.8 || active.size >= CONFIG.maxActive ||
        active.has(tile.flap) || now - tile.lastFlip < CONFIG.cooldown) return;
    tile.lastFlip = now;
    const duration = randomBetween(CONFIG.durationMin, CONFIG.durationMax);
    tile.flap.style.setProperty('--flip-duration', `${duration}ms`);
    tile.flap.classList.toggle('is-accent', Math.random() < CONFIG.accentChance);
    tile.flap.classList.add('is-flipping');
    active.set(tile.flap, setTimeout(() => {
      tile.flap.classList.remove('is-flipping', 'is-accent');
      active.delete(tile.flap);
    }, duration + 50));
  }

  function flashBorder(index) {
    const entry = tiles[index];
    const now = performance.now();
    if (!entry || borderActive.size >= CONFIG.maxBorderActive ||
        borderActive.has(entry.tile) || now - entry.lastBorder < CONFIG.borderCooldown) return;
    entry.lastBorder = now;
    const duration = randomBetween(CONFIG.borderDurationMin, CONFIG.borderDurationMax);
    entry.tile.style.setProperty('--border-duration', `${duration}ms`);
    entry.tile.classList.add('is-border-flashing');
    borderActive.set(entry.tile, setTimeout(() => {
      entry.tile.classList.remove('is-border-flashing');
      borderActive.delete(entry.tile);
    }, duration + 50));
  }

  function schedule() {
    clearTimeout(timer);
    if (!canAnimate() || !tiles.length) return;
    timer = setTimeout(() => {
      const index = Math.floor(Math.random() * columns * Math.max(1, Math.floor(rows * 0.8)));
      flip(index);
      if (Math.random() < CONFIG.borderChance) {
        flashBorder(Math.floor(Math.random() * columns * Math.max(1, Math.floor(rows * 0.8))));
      }
      if (Math.random() < CONFIG.groupChance) {
        const neighbors = [index - columns, index + columns];
        if (index % columns > 0) neighbors.push(index - 1);
        if (index % columns < columns - 1) neighbors.push(index + 1);
        flip(neighbors[Math.floor(Math.random() * neighbors.length)]);
      }
      schedule();
    }, randomBetween(CONFIG.intervalMin, CONFIG.intervalMax));
  }

  function sync() { stop(); schedule(); }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(element);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  intersectionObserver.observe(element);
  motion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  resize();

  return function destroy() {
    destroyed = true;
    stop();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    motion.removeEventListener('change', sync);
    document.removeEventListener('visibilitychange', sync);
    grid.remove();
  };
}

let cleanups = [];
function mount() {
  if (cleanups.length || !window.ResizeObserver || !window.IntersectionObserver) return;
  cleanups = [...document.querySelectorAll('[data-hero-grid]')].map(createHeroGrid);
}
window.addEventListener('pagehide', () => {
  cleanups.forEach((destroy) => destroy());
  cleanups = [];
});
window.addEventListener('pageshow', mount);
mount();
