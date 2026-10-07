const AU = 149.6;
const DEG = Math.PI / 180;
const EARTH_OBLIQUITY = 23.4 * DEG;
const SIDEREAL_DAY = 23.9 / 24;
const STARS = buildStars(96);

const SUN = {
  id: "sun",
  name: "Sun",
  symbol: "☉",
  color: "#ffd56a",
  diameterKm: 1392700,
};

const BODIES = [
  {
    id: "mercury",
    name: "Mercury",
    symbol: "☿",
    color: "#c5c5c5",
    perihelion: 46.0,
    aphelion: 69.8,
    periodDays: 88.0,
    eccentricity: 0.206,
    periArgDeg: 77.5,
    mean0: 2.1,
    diameterKm: 4879,
    mass: "0.330 × 10²⁴ kg",
    density: "5427 kg/m³",
    gravity: "3.7 m/s²",
    rotationHours: 1407.6,
    dayHours: 4222.6,
    moons: 0,
    rings: false,
    magnetic: true,
    temperature: "167°C",
  },
  {
    id: "venus",
    name: "Venus",
    symbol: "♀",
    color: "#e8c87a",
    perihelion: 107.5,
    aphelion: 108.9,
    periodDays: 224.7,
    eccentricity: 0.007,
    periArgDeg: 131.5,
    mean0: 0.8,
    diameterKm: 12104,
    mass: "4.87 × 10²⁴ kg",
    density: "5243 kg/m³",
    gravity: "8.9 m/s²",
    rotationHours: -5832.5,
    dayHours: 2802.0,
    moons: 0,
    rings: false,
    magnetic: false,
    temperature: "464°C",
  },
  {
    id: "earth",
    name: "Earth",
    symbol: "⊕",
    color: "#6b93d6",
    perihelion: 147.1,
    aphelion: 152.1,
    periodDays: 365.2,
    eccentricity: 0.017,
    periArgDeg: 102.9,
    mean0: 1.7,
    diameterKm: 12756,
    mass: "5.97 × 10²⁴ kg",
    density: "5514 kg/m³",
    gravity: "9.8 m/s²",
    rotationHours: 23.9,
    dayHours: 24.0,
    moons: 1,
    rings: false,
    magnetic: true,
    temperature: "15°C",
  },
  {
    id: "moon",
    name: "Moon",
    symbol: "☽",
    color: "#d7d4cc",
    perihelion: 0.363,
    aphelion: 0.406,
    periodDays: 27.3,
    eccentricity: 0.055,
    periArgDeg: 0,
    mean0: 0.4,
    diameterKm: 3475,
    mass: "0.073 × 10²⁴ kg",
    density: "3340 kg/m³",
    gravity: "1.6 m/s²",
    rotationHours: 655.7,
    dayHours: 708.7,
    moons: 0,
    rings: false,
    magnetic: false,
    temperature: "−20°C",
    parent: "earth",
  },
  {
    id: "mars",
    name: "Mars",
    symbol: "♂",
    color: "#c1440e",
    perihelion: 206.7,
    aphelion: 249.3,
    periodDays: 687.0,
    eccentricity: 0.094,
    periArgDeg: 336.0,
    mean0: 0.3,
    diameterKm: 6792,
    mass: "0.642 × 10²⁴ kg",
    density: "3933 kg/m³",
    gravity: "3.7 m/s²",
    rotationHours: 24.6,
    dayHours: 24.7,
    moons: 2,
    rings: false,
    magnetic: false,
    temperature: "−65°C",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    symbol: "♃",
    color: "#c88b3a",
    perihelion: 740.6,
    aphelion: 816.4,
    periodDays: 4331,
    eccentricity: 0.049,
    periArgDeg: 14.8,
    mean0: 0.5,
    diameterKm: 142984,
    mass: "1898 × 10²⁴ kg",
    density: "1326 kg/m³",
    gravity: "23.1 m/s²",
    rotationHours: 9.9,
    dayHours: 9.9,
    moons: 95,
    rings: true,
    magnetic: true,
    temperature: "−110°C",
  },
  {
    id: "saturn",
    name: "Saturn",
    symbol: "♄",
    color: "#e6d19c",
    perihelion: 1357.6,
    aphelion: 1506.5,
    periodDays: 10747,
    eccentricity: 0.052,
    periArgDeg: 92.4,
    mean0: 1.2,
    diameterKm: 120536,
    mass: "568 × 10²⁴ kg",
    density: "687 kg/m³",
    gravity: "9.0 m/s²",
    rotationHours: 10.7,
    dayHours: 10.7,
    moons: 274,
    rings: true,
    magnetic: true,
    temperature: "−140°C",
  },
  {
    id: "uranus",
    name: "Uranus",
    symbol: "♅",
    color: "#7ec8c8",
    perihelion: 2732.7,
    aphelion: 3001.4,
    periodDays: 30589,
    eccentricity: 0.047,
    periArgDeg: 170.8,
    mean0: 2.4,
    diameterKm: 51118,
    mass: "86.8 × 10²⁴ kg",
    density: "1271 kg/m³",
    gravity: "8.7 m/s²",
    rotationHours: -17.2,
    dayHours: 17.2,
    moons: 28,
    rings: true,
    magnetic: true,
    temperature: "−195°C",
  },
  {
    id: "neptune",
    name: "Neptune",
    symbol: "♆",
    color: "#4166f5",
    perihelion: 4471.1,
    aphelion: 4558.9,
    periodDays: 59800,
    eccentricity: 0.010,
    periArgDeg: 44.8,
    mean0: 5.1,
    diameterKm: 49528,
    mass: "102 × 10²⁴ kg",
    density: "1638 kg/m³",
    gravity: "11.0 m/s²",
    rotationHours: 16.1,
    dayHours: 16.1,
    moons: 16,
    rings: true,
    magnetic: true,
    temperature: "−200°C",
  },
  {
    id: "pluto",
    name: "Pluto",
    symbol: "♇",
    color: "#c4a574",
    perihelion: 4436.8,
    aphelion: 7375.9,
    periodDays: 90560,
    eccentricity: 0.244,
    periArgDeg: 224.1,
    mean0: 0.1,
    diameterKm: 2376,
    mass: "0.0130 × 10²⁴ kg",
    density: "1850 kg/m³",
    gravity: "0.7 m/s²",
    rotationHours: -153.3,
    dayHours: 153.3,
    moons: 5,
    rings: false,
    magnetic: "Unknown",
    temperature: "−225°C",
  },
];

for (const body of BODIES) {
  body.a = (body.perihelion + body.aphelion) / 2;
  body.b = body.a * Math.sqrt(1 - body.eccentricity ** 2);
  body.periArg = body.periArgDeg * DEG;
}

const PLANETS = BODIES.filter((body) => body.id !== "moon");
const BODY_BY_ID = Object.fromEntries(BODIES.map((body) => [body.id, body]));

const state = {
  worldDays: 0,
  earthOrbitDays: 0,
  earthSpinDays: 0,
  playing: true,
  selected: "earth",
  latitude: 40 * DEG,
  softSky: false,
  system: {
    scale: 42,
    ox: 0,
    oy: 0,
    dragging: false,
    lastX: 0,
    lastY: 0,
    compact: true,
    fitted: false,
    fitDistance: 1506.5,
  },
  visual: {
    dirty: true,
    lastDraw: 0,
    hideRays: false,
    orbitSteps: 180,
  },
  rates: {
    daysPerSec: 1,
    orbitMult: 1,
    spinMult: 1,
  },
  sunPath: {
    days: 0,
    hour: 12,
    playing: true,
    yearsPerSec: 0.4,
    trail: [],
    lastStamp: -1,
  },
};

const els = {
  stage: document.getElementById("stage"),
  play: document.getElementById("play-btn"),
  reset: document.getElementById("reset-btn"),
  speed: document.getElementById("speed"),
  orbit: document.getElementById("earth-orbit"),
  spin: document.getElementById("earth-spin"),
  lat: document.getElementById("latitude"),
  softSky: document.getElementById("soft-sky"),
  speedReadout: document.getElementById("speed-readout"),
  orbitReadout: document.getElementById("orbit-readout"),
  spinReadout: document.getElementById("spin-readout"),
  latReadout: document.getElementById("lat-readout"),
  dateLabel: document.getElementById("date-label"),
  timeLabel: document.getElementById("time-label"),
  skyCaption: document.getElementById("sky-caption"),
  skyObjects: document.getElementById("sky-objects"),
  infoName: document.getElementById("info-name"),
  infoSymbol: document.getElementById("info-symbol"),
  infoList: document.getElementById("info-list"),
  mainControls: document.getElementById("main-controls"),
  sunControls: document.getElementById("sun-controls"),
  sunPlay: document.getElementById("sun-play-btn"),
  sunReset: document.getElementById("sun-reset-btn"),
  sunSpeed: document.getElementById("sun-speed"),
  sunHour: document.getElementById("sun-hour"),
  sunSpeedReadout: document.getElementById("sun-speed-readout"),
  sunHourReadout: document.getElementById("sun-hour-readout"),
  sunCaption: document.getElementById("sun-caption"),
};

const systemCanvas = document.getElementById("system-canvas");
const skyCanvas = document.getElementById("sky-canvas");
const sunCanvas = document.getElementById("sun-canvas");
const systemCtx = systemCanvas.getContext("2d", { alpha: false, desynchronized: true });
const skyCtx = skyCanvas.getContext("2d", { alpha: false, desynchronized: true });
const sunCtx = sunCanvas.getContext("2d", { alpha: false, desynchronized: true });
const orbitLayer = {
  canvas: document.createElement("canvas"),
  key: "",
};
const ORBIT_STEP_OPTIONS = [60, 90, 180];
const skyScratch = [];
const alphaCache = new Map();

function buildStars(count) {
  const stars = [];
  for (let i = 0; i < count; i += 1) {
    const ra = Math.random() * Math.PI * 2;
    const dec = Math.asin(2 * Math.random() - 1) * 0.92;
    stars.push({
      ra,
      dec,
      mag: 0.35 + Math.random() * 1.4,
      x: Math.cos(dec) * Math.cos(ra),
      y: Math.cos(dec) * Math.sin(ra),
      z: Math.sin(dec),
    });
  }
  return stars;
}

function solveKepler(meanAnomaly, eccentricity) {
  let E = meanAnomaly;
  for (let i = 0; i < 6; i += 1) {
    const sinE = Math.sin(E);
    const cosE = Math.cos(E);
    E -= (E - eccentricity * sinE - meanAnomaly) / (1 - eccentricity * cosE);
  }
  return E;
}

function buildOrbitPoints(body, steps) {
  const pts = new Array(steps + 1);
  const c = Math.cos(body.periArg);
  const s = Math.sin(body.periArg);
  for (let i = 0; i <= steps; i += 1) {
    const M = (i / steps) * Math.PI * 2;
    const E = solveKepler(M, body.eccentricity);
    const xOrb = body.a * (Math.cos(E) - body.eccentricity);
    const yOrb = body.b * Math.sin(E);
    pts[i] = { x: xOrb * c - yOrb * s, y: xOrb * s + yOrb * c };
  }
  return pts;
}

for (const body of BODIES) {
  body.orbitPts = {};
  for (const steps of ORBIT_STEP_OPTIONS) {
    body.orbitPts[steps] = buildOrbitPoints(body, steps);
  }
}

function orbitPosition(body, days) {
  const M = ((2 * Math.PI * days) / body.periodDays + body.mean0) % (Math.PI * 2);
  const E = solveKepler(M, body.eccentricity);
  const xOrb = body.a * (Math.cos(E) - body.eccentricity);
  const yOrb = body.b * Math.sin(E);
  const c = Math.cos(body.periArg);
  const s = Math.sin(body.periArg);
  return {
    x: xOrb * c - yOrb * s,
    y: xOrb * s + yOrb * c,
  };
}

function heliocentricPositions() {
  const positions = { sun: { x: 0, y: 0 } };
  for (const planet of PLANETS) {
    const days = planet.id === "earth" ? state.earthOrbitDays : state.worldDays;
    positions[planet.id] = orbitPosition(planet, days);
  }
  const earth = positions.earth;
  const moonRel = orbitPosition(BODY_BY_ID.moon, state.worldDays);
  positions.moon = { x: earth.x + moonRel.x, y: earth.y + moonRel.y };
  return positions;
}

function logSpeedDaysPerSec(t) {
  const min = 1 / 24;
  const max = 400;
  return min * (max / min) ** t;
}

function logMultiplier(t) {
  if (t <= 0) return 0;
  const min = 0.05;
  const max = 80;
  return min * (max / min) ** t;
}

function formatSpeed(daysPerSec) {
  if (daysPerSec < 1) return `${(daysPerSec * 24).toFixed(1)} h / s`;
  if (daysPerSec < 10) return `${daysPerSec.toFixed(2)} days / s`;
  return `${Math.round(daysPerSec)} days / s`;
}

function formatLat(deg) {
  if (deg === 0) return "0°";
  return deg > 0 ? `${deg}°N` : `${Math.abs(deg)}°S`;
}

function formatMult(value) {
  if (value === 0) return "frozen";
  if (value < 0.1) return `${value.toFixed(2)}×`;
  if (value < 10) return `${value.toFixed(2)}×`;
  return `${Math.round(value)}×`;
}

function wrapPi(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function eclipticToEquatorial(x, y, z) {
  const c = Math.cos(EARTH_OBLIQUITY);
  const s = Math.sin(EARTH_OBLIQUITY);
  return {
    x,
    y: y * c - z * s,
    z: y * s + z * c,
  };
}

function equatorialToHorizontal(eq, lst, latitude) {
  const ra = Math.atan2(eq.y, eq.x);
  const dec = Math.atan2(eq.z, Math.hypot(eq.x, eq.y));
  const ha = lst - ra;
  const sinAlt =
    Math.sin(latitude) * Math.sin(dec) +
    Math.cos(latitude) * Math.cos(dec) * Math.cos(ha);
  const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  const sinAz = (-Math.cos(dec) * Math.sin(ha)) / Math.cos(alt);
  const cosAz =
    (Math.sin(dec) - Math.sin(latitude) * Math.sin(alt)) /
    (Math.cos(latitude) * Math.cos(alt));
  return { alt, az: Math.atan2(sinAz, cosAz) };
}

function skyCoords(gx, gy, lst, latitude) {
  const eq = eclipticToEquatorial(gx, gy, 0);
  return equatorialToHorizontal(eq, lst, latitude);
}

function withAlpha(color, alpha) {
  const key = `${color}:${alpha}`;
  const cached = alphaCache.get(key);
  if (cached) return cached;
  let value = color;
  if (color.startsWith("#") && color.length === 7) {
    const n = parseInt(color.slice(1), 16);
    value = `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
  }
  alphaCache.set(key, value);
  return value;
}

function geocentricSkyBodies(positions) {
  const lst = localSiderealTime();
  const lat = state.latitude;
  const earth = positions.earth;
  let n = 0;
  const write = (id, name, symbol, color, gx, gy, helio) => {
    let item = skyScratch[n];
    if (!item) {
      item = skyScratch[n] = {
        id,
        name,
        symbol,
        color,
        pos: { x: 0, y: 0 },
        helio: { x: 0, y: 0 },
        horiz: null,
      };
    }
    item.id = id;
    item.name = name;
    item.symbol = symbol;
    item.color = color;
    item.pos.x = gx;
    item.pos.y = gy;
    item.helio.x = helio.x;
    item.helio.y = helio.y;
    item.horiz = skyCoords(gx, gy, lst, lat);
    n += 1;
  };
  write("sun", "Sun", "☉", "#ffd56a", -earth.x, -earth.y, positions.sun);
  for (const planet of PLANETS) {
    if (planet.id === "earth") continue;
    const pos = positions[planet.id];
    write(planet.id, planet.name, planet.symbol, planet.color, pos.x - earth.x, pos.y - earth.y, pos);
  }
  const moon = positions.moon;
  write("moon", "Moon", "☽", "#f1eee6", moon.x - earth.x, moon.y - earth.y, moon);
  skyScratch.length = n;
  return skyScratch;
}

function moonScreenPosition(positions, view) {
  let screen = systemToScreen(positions.moon, view);
  const earthScreen = systemToScreen(positions.earth, view);
  const dx = screen.x - earthScreen.x;
  const dy = screen.y - earthScreen.y;
  const dist = Math.hypot(dx, dy);
  if (dist < 10 && dist > 0) {
    screen = {
      x: earthScreen.x + (dx / dist) * 10,
      y: earthScreen.y + (dy / dist) * 10,
    };
  }
  return screen;
}

function localSiderealTime() {
  return wrapPi((state.earthSpinDays / SIDEREAL_DAY) * Math.PI * 2);
}

function localSolarTime(positions) {
  const sun = skyCoords(-positions.earth.x, -positions.earth.y, localSiderealTime(), state.latitude);
  const hours = ((sun.az / (Math.PI * 2)) * 24 + 24) % 24;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function fitCanvas(canvas, ctx) {
  if (canvas._view) return canvas._view;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.max(1, Math.floor(rect.width * dpr));
  const h = Math.max(1, Math.floor(rect.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  canvas._view = { w: rect.width, h: rect.height, dpr };
  return canvas._view;
}

function invalidateViews() {
  systemCanvas._view = null;
  skyCanvas._view = null;
  sunCanvas._view = null;
  orbitLayer.key = "";
}

function warpDistance(pos) {
  if (!state.system.compact) return pos;
  const r = Math.hypot(pos.x, pos.y);
  if (r < 1e-12) return { x: 0, y: 0 };
  const au = r / AU;
  const visual = Math.pow(au, 0.52);
  const f = (visual * AU) / r;
  return { x: pos.x * f, y: pos.y * f };
}

function systemToScreen(pos, view) {
  const warped = warpDistance(pos);
  return {
    x: view.w / 2 + (warped.x / AU) * state.system.scale + state.system.ox,
    y: view.h / 2 - (warped.y / AU) * state.system.scale + state.system.oy,
  };
}

function visualAU(distanceMillionKm) {
  const au = distanceMillionKm / AU;
  return state.system.compact ? Math.pow(au, 0.52) : au;
}

function fitSystemScale(view, distanceMillionKm = 1506.5) {
  const outer = visualAU(distanceMillionKm);
  state.system.scale = Math.min(view.w, view.h) * 0.42 / Math.max(outer, 0.2);
  state.system.ox = 0;
  state.system.oy = 10;
  state.system.fitted = true;
}

function motionLoad() {
  const base = state.rates.daysPerSec;
  const orbit = base * state.rates.orbitMult;
  const spin = base * state.rates.spinMult;
  return { base, orbit, spin, peak: Math.max(base, orbit, spin) };
}

function visualPace(playing) {
  const load = motionLoad();
  if (!playing) {
    return { hideRays: false, interval: 1e9, orbitSteps: 180 };
  }
  return {
    hideRays: load.peak >= 8,
    interval: 0,
    orbitSteps: 180,
  };
}

function markVisualDirty() {
  state.visual.dirty = true;
}

function drawOrbit(ctx, body, view, parentPos) {
  const pts = body.orbitPts[state.visual.orbitSteps] || body.orbitPts[180];
  ctx.beginPath();
  for (let i = 0; i < pts.length; i += 1) {
    const raw = pts[i];
    const pos = parentPos ? { x: parentPos.x + raw.x, y: parentPos.y + raw.y } : raw;
    const p = systemToScreen(pos, view);
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function paintOrbitLayer(view) {
  const dpr = view.dpr;
  const canvas = orbitLayer.canvas;
  const pixelW = Math.max(1, Math.floor(view.w * dpr));
  const pixelH = Math.max(1, Math.floor(view.h * dpr));
  if (canvas.width !== pixelW || canvas.height !== pixelH) {
    canvas.width = pixelW;
    canvas.height = pixelH;
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, view.w, view.h);
  const sun = systemToScreen({ x: 0, y: 0 }, view);
  const glow = ctx.createRadialGradient(sun.x, sun.y, 0, sun.x, sun.y, 90);
  glow.addColorStop(0, "rgba(255, 213, 106, 0.55)");
  glow.addColorStop(1, "rgba(255, 213, 106, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, 90, 0, Math.PI * 2);
  ctx.fill();
  for (const planet of PLANETS) drawOrbit(ctx, planet, view);
}

function ensureOrbitLayer(view) {
  const key = [
    view.w,
    view.h,
    view.dpr,
    state.system.scale,
    state.system.ox,
    state.system.oy,
    state.system.compact,
    state.visual.orbitSteps,
  ].join("|");
  if (orbitLayer.key === key) return;
  orbitLayer.key = key;
  paintOrbitLayer(view);
}

function planetRadius(body, scale) {
  if (body.id === "sun") return Math.max(8, 8 * Math.pow(scale / 70, 0.15));
  const rel = body.diameterKm / 12756;
  return Math.max(3.3, 4.4 * Math.pow(rel, 0.42) * Math.pow(scale / 70, 0.12));
}

function drawEarthSightlines(ctx, positions, view, earthScreen, targets) {
  const sphereR = Math.max(34, Math.min(88, 26 + state.system.scale * 0.18));
  const lst = localSiderealTime();
  const lat = state.latitude;
  const zenEq = {
    x: Math.cos(lat) * Math.cos(lst),
    y: Math.cos(lat) * Math.sin(lst),
    z: Math.sin(lat),
  };
  const c = Math.cos(EARTH_OBLIQUITY);
  const s = Math.sin(EARTH_OBLIQUITY);
  const zenEcl = {
    x: zenEq.x,
    y: zenEq.y * c + zenEq.z * s,
  };
  const zenTip = systemToScreen({
    x: positions.earth.x + zenEcl.x * AU * 0.08,
    y: positions.earth.y + zenEcl.y * AU * 0.08,
  }, view);
  let ux = zenTip.x - earthScreen.x;
  let uy = zenTip.y - earthScreen.y;
  const ulen = Math.hypot(ux, uy) || 1;
  ux /= ulen;
  uy /= ulen;
  const hx = -uy;
  const hy = ux;
  const zenithAng = Math.atan2(uy, ux);

  ctx.beginPath();
  ctx.moveTo(earthScreen.x, earthScreen.y);
  for (let deg = -90; deg <= 90; deg += 5) {
    const a = zenithAng + deg * DEG;
    ctx.lineTo(earthScreen.x + Math.cos(a) * sphereR, earthScreen.y + Math.sin(a) * sphereR);
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(126, 200, 255, 0.14)";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(earthScreen.x, earthScreen.y, sphereR, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(126, 200, 255, 0.45)";
  ctx.lineWidth = 1.25;
  ctx.setLineDash([4, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.moveTo(earthScreen.x - hx * sphereR, earthScreen.y - hy * sphereR);
  ctx.lineTo(earthScreen.x + hx * sphereR, earthScreen.y + hy * sphereR);
  ctx.strokeStyle = "rgba(236, 234, 228, 0.4)";
  ctx.lineWidth = 1;
  ctx.stroke();

  for (const body of targets) {
    const dest = body.id === "moon"
      ? moonScreenPosition(positions, view)
      : systemToScreen(body.helio, view);
    const dx = dest.x - earthScreen.x;
    const dy = dest.y - earthScreen.y;
    const dist = Math.hypot(dx, dy) || 1;
    const visible = body.horiz.alt >= -0.02;
    ctx.beginPath();
    ctx.moveTo(earthScreen.x, earthScreen.y);
    ctx.lineTo(dest.x, dest.y);
    ctx.strokeStyle = withAlpha(body.color, visible ? 0.85 : 0.18);
    ctx.lineWidth = visible ? 2 : 1;
    ctx.setLineDash(visible ? [] : [5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    const sx = earthScreen.x + (dx / dist) * sphereR;
    const sy = earthScreen.y + (dy / dist) * sphereR;
    ctx.beginPath();
    ctx.fillStyle = withAlpha(body.color, visible ? 1 : 0.28);
    ctx.arc(sx, sy, visible ? 3.2 : 2.2, 0, Math.PI * 2);
    ctx.fill();
    if (visible) {
      ctx.fillStyle = "rgba(236,234,228,0.85)";
      ctx.font = "10px Avenir Next, Segoe UI, sans-serif";
      ctx.fillText(body.symbol, sx + 5, sy - 4);
    }
  }
}

function drawSystem(positions, targets) {
  const view = fitCanvas(systemCanvas, systemCtx);
  if (!state.system.fitted) fitSystemScale(view, state.system.fitDistance);
  const ctx = systemCtx;
  ctx.fillStyle = "#090b12";
  ctx.fillRect(0, 0, view.w, view.h);
  ensureOrbitLayer(view);
  ctx.drawImage(orbitLayer.canvas, 0, 0, view.w, view.h);

  const earthPxDist =
    Math.hypot(positions.moon.x - positions.earth.x, positions.moon.y - positions.earth.y) *
    (state.system.scale / AU);
  if (earthPxDist > 10) drawOrbit(ctx, BODY_BY_ID.moon, view, positions.earth);

  const earthScreen = systemToScreen(positions.earth, view);
  if (!state.visual.hideRays) drawEarthSightlines(ctx, positions, view, earthScreen, targets);
  const sun = systemToScreen(positions.sun, view);

  const drawBody = (id, pos) => {
    const body = id === "sun" ? SUN : BODY_BY_ID[id];
    let screen = id === "moon" ? moonScreenPosition(positions, view) : systemToScreen(pos, view);
    const r = planetRadius(body, state.system.scale);
    if (body.rings) {
      ctx.save();
      ctx.translate(screen.x, screen.y);
      ctx.rotate(-0.4);
      ctx.strokeStyle = "rgba(230, 209, 156, 0.7)";
      ctx.lineWidth = Math.max(1.2, r * 0.35);
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 2.1, r * 0.7, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.fillStyle = body.color;
    ctx.arc(screen.x, screen.y, r, 0, Math.PI * 2);
    ctx.fill();
    if (state.selected === id) {
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(screen.x, screen.y, r + 5, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(236,234,228,0.9)";
    ctx.font = "12px Avenir Next, Segoe UI, sans-serif";
    const dx = screen.x - sun.x;
    const dy = screen.y - sun.y;
    const dist = Math.hypot(dx, dy);
    const innerSlot = { mercury: -2.3, venus: -1.5, earth: 2.4, moon: 1.55 };
    const ang = dist < 58 && innerSlot[id] != null ? innerSlot[id] : Math.atan2(dy, dx || 1);
    const labelRadius = Math.max(dist + r + 12, 62);
    const labelX = sun.x + Math.cos(ang) * labelRadius;
    const labelY = sun.y + Math.sin(ang) * labelRadius;
    if (dist < 58 && id !== "sun") {
      ctx.strokeStyle = "rgba(236,234,228,0.28)";
      ctx.beginPath();
      ctx.moveTo(screen.x, screen.y);
      ctx.lineTo(labelX, labelY);
      ctx.stroke();
    }
    ctx.textAlign = labelX < sun.x ? "right" : "left";
    ctx.fillText(`${body.symbol} ${body.name}`, labelX, labelY + 4);
    ctx.textAlign = "left";
    return { id, ...screen, r };
  };

  const hits = [drawBody("sun", positions.sun)];
  for (const planet of PLANETS) hits.push(drawBody(planet.id, positions[planet.id]));
  hits.push(drawBody("moon", positions.moon));
  systemCanvas._hits = hits;
}

function projectSky(alt, az, cx, cy, radius) {
  const r = ((Math.PI / 2 - alt) / (Math.PI / 2)) * radius;
  return {
    x: cx + r * Math.sin(az),
    y: cy - r * Math.cos(az),
  };
}

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function smoothstep(edge0, edge1, value) {
  const t = clamp01((value - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function dayFactor(sunAlt) {
  return smoothstep(-0.32, 0.2, sunAlt);
}

function parseHex(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerpHex(a, b, t) {
  const A = parseHex(a);
  const B = parseHex(b);
  const r = Math.round(A[0] + (B[0] - A[0]) * t);
  const g = Math.round(A[1] + (B[1] - A[1]) * t);
  const bl = Math.round(A[2] + (B[2] - A[2]) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

function mixPalette(from, to, t) {
  return from.map((stop, i) => [stop[0], lerpHex(stop[1], to[i][1], t)]);
}

function skyFill(ctx, view, sunAlt) {
  const t = dayFactor(sunAlt);
  let stops;
  if (state.softSky) {
    const night = [
      [0, "#8eb4c8"],
      [0.55, "#97bbcd"],
      [1, "#a4c6d6"],
    ];
    const day = [
      [0, "#6eb8e4"],
      [0.55, "#87ceeb"],
      [1, "#b6e3f6"],
    ];
    stops = mixPalette(night, day, t);
  } else {
    const night = [
      [0, "#070814"],
      [0.55, "#10152a"],
      [1, "#1b2233"],
    ];
    const dusk = [
      [0, "#1a1630"],
      [0.55, "#4a2a3d"],
      [1, "#e38b4a"],
    ];
    const noon = [
      [0, "#6ea7e8"],
      [0.55, "#8ec4f0"],
      [1, "#dce9f8"],
    ];
    stops = t < 0.45
      ? mixPalette(night, dusk, t / 0.45)
      : mixPalette(dusk, noon, (t - 0.45) / 0.55);
  }
  const g = ctx.createRadialGradient(view.w / 2, view.h / 2, 10, view.w / 2, view.h / 2, Math.max(view.w, view.h) * 0.6);
  for (const [stop, color] of stops) g.addColorStop(stop, color);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, view.w, view.h);
}

function drawMoonPhase(ctx, x, y, r, sunAz, moonAz) {
  const elong = wrapPi(moonAz - sunAz);
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = "#1c1e24";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.clip();
  const offset = Math.cos(elong) * r * 2;
  ctx.beginPath();
  ctx.fillStyle = "#f1eee6";
  ctx.arc(x - Math.sign(Math.sin(elong) || 1) * offset * 0.15, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#1c1e24";
  ctx.beginPath();
  ctx.ellipse(x - Math.cos(elong) * r, y, Math.abs(Math.cos(elong)) * r, r, 0, 0, Math.PI * 2);
  if (Math.cos(elong) > 0) ctx.fill();
  ctx.restore();
  ctx.strokeStyle = "rgba(255,255,255,0.45)";
  ctx.stroke();
}

function drawSky(positions, targets) {
  const view = fitCanvas(skyCanvas, skyCtx);
  const ctx = skyCtx;
  const lst = localSiderealTime();
  const lat = state.latitude;
  const sunSky = targets[0].horiz;
  skyFill(ctx, view, sunSky.alt);

  const radius = Math.min(view.w, view.h) * 0.36;
  const cx = view.w / 2;
  const cy = Math.min(view.h * 0.48, view.h - radius - 78);
  const earthX = cx;
  const earthY = cy + radius + 28;

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.clip();

  const light = state.softSky || dayFactor(sunSky.alt) > 0.42;
  if (!state.visual.hideRays && !state.softSky && dayFactor(sunSky.alt) < 0.35) {
    for (const star of STARS) {
      const horiz = equatorialToHorizontal(star, lst, lat);
      if (horiz.alt <= 0) continue;
      const p = projectSky(horiz.alt, horiz.az, cx, cy, radius);
      ctx.fillStyle = `rgba(255,255,255,${0.25 + star.mag * 0.35})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, star.mag * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();

  ctx.strokeStyle = "rgba(236,234,228,0.28)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  const visible = [];
  const projected = [];
  for (const body of targets) {
    if (body.horiz.alt < -0.02) continue;
    visible.push(body);
    projected.push({
      ...body,
      screen: projectSky(body.horiz.alt, body.horiz.az, cx, cy, radius),
    });
  }

  if (!state.visual.hideRays) {
    for (const body of projected) {
      const gradient = ctx.createLinearGradient(earthX, earthY, body.screen.x, body.screen.y);
      gradient.addColorStop(0, withAlpha(body.color, 0.05));
      gradient.addColorStop(0.45, withAlpha(body.color, 0.55));
      gradient.addColorStop(1, withAlpha(body.color, 0.95));
      ctx.beginPath();
      ctx.moveTo(earthX, earthY);
      ctx.lineTo(body.screen.x, body.screen.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = body.id === "sun" ? 2.4 : 1.6;
      ctx.stroke();
    }
  }

  ctx.beginPath();
  ctx.fillStyle = "rgba(107, 147, 214, 0.22)";
  ctx.arc(earthX, earthY, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#16325c";
  ctx.arc(earthX, earthY, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#6b93d6";
  ctx.arc(earthX - 2, earthY - 1, 13, -0.6, 2.2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#3f7a4a";
  ctx.ellipse(earthX + 1, earthY - 2, 6.5, 3.6, -0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(236,234,228,0.7)";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.arc(earthX, earthY, 13, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = light ? "#122033" : "#f4f1ea";
  ctx.font = "11px Avenir Next, Segoe UI, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Earth", earthX, earthY + 24);
  ctx.textAlign = "left";

  const cardinals = [
    [0, "N"],
    [Math.PI / 2, "E"],
    [Math.PI, "S"],
    [-Math.PI / 2, "W"],
  ];
  ctx.fillStyle = light ? "rgba(18, 32, 51, 0.7)" : "rgba(236,234,228,0.75)";
  ctx.font = "13px Avenir Next, Segoe UI, sans-serif";
  ctx.textAlign = "center";
  for (const [az, label] of cardinals) {
    const p = projectSky(0, az, cx, cy, radius + 16);
    ctx.fillText(label, p.x, p.y + 4);
  }
  ctx.fillText("zenith", cx, cy - radius + 18);
  ctx.textAlign = "left";

  const hits = [];
  for (const body of projected) {
    const p = body.screen;
    if (body.id === "sun") {
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 28);
      g.addColorStop(0, "rgba(255, 230, 140, 0.95)");
      g.addColorStop(1, "rgba(255, 230, 140, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffe27a";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
    } else if (body.id === "moon") {
      drawMoonPhase(ctx, p.x, p.y, 7, sunSky.az, body.horiz.az);
    } else {
      ctx.beginPath();
      ctx.fillStyle = light ? "rgba(20, 28, 40, 0.28)" : "rgba(255,255,255,0.35)";
      ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = body.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = light ? "#122033" : "#f4f1ea";
    ctx.font = "13px Avenir Next, Segoe UI, sans-serif";
    ctx.fillText(`${body.symbol} ${body.name}`, p.x + 10, p.y + 4);
    if (state.selected === body.id) {
      ctx.strokeStyle = light ? "#1a2330" : "#fff";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
      ctx.stroke();
    }
    hits.push({ id: body.id, x: p.x, y: p.y, r: 10 });
  }
  hits.push({ id: "earth", x: earthX, y: earthY, r: 14 });
  skyCanvas._hits = hits;
  const visibleKey = visible.map((body) => body.id).join(",");
  if (els.skyObjects.dataset.key !== visibleKey) {
    els.skyObjects.dataset.key = visibleKey;
    els.skyObjects.innerHTML = visible
      .map((body) => `<li data-id="${body.id}"><i style="background:${body.color}"></i>${body.symbol} ${body.name}</li>`)
      .join("");
  }

  const skyState = sunSky.alt > 0.05 ? "daylight" : sunSky.alt > -0.14 ? "twilight" : "night";
  els.skyCaption.textContent = `Rays from Earth to each body above the horizon · ${skyState}`;
}

function sunYearsPerSec(t) {
  const min = 0.05;
  const max = 6;
  return min * (max / min) ** t;
}

function formatClockHour(hour) {
  const h = Math.floor(hour);
  const m = Math.round((hour - h) * 60) % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function sunSnapshot(day, hour, lat) {
  const earth = orbitPosition(BODY_BY_ID.earth, day);
  const eq = eclipticToEquatorial(-earth.x, -earth.y, 0);
  const meanM = (2 * Math.PI * day) / BODY_BY_ID.earth.periodDays + BODY_BY_ID.earth.mean0;
  const meanLon = meanM + BODY_BY_ID.earth.periArg + Math.PI;
  const meanEq = eclipticToEquatorial(Math.cos(meanLon), Math.sin(meanLon), 0);
  const meanRA = Math.atan2(meanEq.y, meanEq.x);
  const ha = ((hour - 12) / 24) * Math.PI * 2;
  return equatorialToHorizontal(eq, meanRA + ha, lat);
}

function recordSunTrail() {
  const day = Math.floor(state.sunPath.days);
  if (day === state.sunPath.lastStamp) return;
  state.sunPath.lastStamp = day;
  const horiz = sunSnapshot(day, state.sunPath.hour, state.latitude);
  state.sunPath.trail.push({ day, alt: horiz.alt, az: horiz.az });
  if (state.sunPath.trail.length > 800) state.sunPath.trail.splice(0, state.sunPath.trail.length - 800);
}

function clearSunTrail() {
  state.sunPath.trail.length = 0;
  state.sunPath.lastStamp = -1;
}

function drawSunPath() {
  const view = fitCanvas(sunCanvas, sunCtx);
  const ctx = sunCtx;
  const hour = state.sunPath.hour;
  const day = state.sunPath.days;
  const now = sunSnapshot(day, hour, state.latitude);
  skyFill(ctx, view, now.alt);

  const radius = Math.min(view.w, view.h) * 0.38;
  const cx = view.w / 2;
  const cy = view.h * 0.52;
  const light = state.softSky || dayFactor(now.alt) > 0.42;

  ctx.strokeStyle = "rgba(236,234,228,0.28)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = light ? "rgba(18, 32, 51, 0.7)" : "rgba(236,234,228,0.75)";
  ctx.font = "13px Avenir Next, Segoe UI, sans-serif";
  ctx.textAlign = "center";
  const cardinals = [[0, "N"], [Math.PI / 2, "E"], [Math.PI, "S"], [-Math.PI / 2, "W"]];
  for (const [az, label] of cardinals) {
    const p = projectSky(0, az, cx, cy, radius + 16);
    ctx.fillText(label, p.x, p.y + 4);
  }
  ctx.fillText("zenith", cx, cy - radius + 18);

  const trail = state.sunPath.trail;
  ctx.beginPath();
  let started = false;
  for (let i = 0; i < trail.length; i += 1) {
    const pt = trail[i];
    if (pt.alt < -0.05) {
      started = false;
      continue;
    }
    const p = projectSky(pt.alt, pt.az, cx, cy, radius);
    if (!started) {
      ctx.moveTo(p.x, p.y);
      started = true;
    } else ctx.lineTo(p.x, p.y);
  }
  ctx.strokeStyle = "rgba(255, 213, 106, 0.42)";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  for (let i = 0; i < trail.length; i += 1) {
    const pt = trail[i];
    if (pt.alt < -0.05) continue;
    const p = projectSky(pt.alt, pt.az, cx, cy, radius);
    const age = (i + 1) / trail.length;
    ctx.fillStyle = `rgba(255, 213, 106, ${0.18 + age * 0.7})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }

  if (now.alt >= -0.05) {
    const p = projectSky(now.alt, now.az, cx, cy, radius);
    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 26);
    g.addColorStop(0, "rgba(255, 230, 140, 0.95)");
    g.addColorStop(1, "rgba(255, 230, 140, 0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffe27a";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = light ? "#122033" : "#f4f1ea";
    ctx.fillText("☉ Sun", p.x, p.y - 16);
  }

  ctx.textAlign = "left";
  const year = Math.floor(day / 365.2);
  const doy = Math.floor(((day % 365.2) + 365.2) % 365.2) + 1;
  els.sunCaption.textContent = `Daily snapshots at ${formatClockHour(hour)} · year ${year}, day ${doy}`;
}

function syncSunReadouts() {
  state.sunPath.yearsPerSec = sunYearsPerSec(Number(els.sunSpeed.value));
  state.sunPath.hour = Number(els.sunHour.value);
  els.sunSpeedReadout.textContent = `${state.sunPath.yearsPerSec.toFixed(2)} yr / s`;
  els.sunHourReadout.textContent = formatClockHour(state.sunPath.hour);
}

function setViewLayout(layout) {
  document.body.classList.remove("view-split", "view-system", "view-sun");
  document.body.classList.add(layout === "split" ? "view-split" : `view-${layout}`);
  els.mainControls.hidden = layout === "sun";
  els.sunControls.hidden = layout !== "sun";
}

function showInfo(id) {
  state.selected = id;
  if (id === "sun") {
    els.infoName.textContent = "Sun";
    els.infoSymbol.textContent = "☉";
    els.infoList.innerHTML = `
      <dt>Role</dt><dd>Central body</dd>
      <dt>Diameter</dt><dd>1,392,700 km</dd>
      <dt>Note</dt><dd>Planets use table distances and periods. Orbits are coplanar.</dd>
    `;
    return;
  }
  const body = BODY_BY_ID[id];
  els.infoName.textContent = body.name;
  els.infoSymbol.textContent = body.symbol;
  const orbitLabel = body.parent ? "Distance from Earth" : "Distance from Sun";
  els.infoList.innerHTML = `
    <dt>Mass</dt><dd>${body.mass}</dd>
    <dt>Diameter</dt><dd>${body.diameterKm.toLocaleString()} km</dd>
    <dt>Density</dt><dd>${body.density}</dd>
    <dt>Gravity</dt><dd>${body.gravity}</dd>
    <dt>${orbitLabel}</dt><dd>${body.perihelion} – ${body.aphelion} × 10⁶ km</dd>
    <dt>Orbital period</dt><dd>${body.periodDays.toLocaleString()} days</dd>
    <dt>Eccentricity</dt><dd>${body.eccentricity}</dd>
    <dt>Rotation period</dt><dd>${body.rotationHours} hours</dd>
    <dt>Length of day</dt><dd>${body.dayHours} hours</dd>
    <dt>Mean temperature</dt><dd>${body.temperature}</dd>
    <dt>Moons / rings</dt><dd>${body.moons} / ${body.rings ? "yes" : "no"}</dd>
    <dt>Magnetic field</dt><dd>${body.magnetic === true ? "yes" : body.magnetic === false ? "no" : body.magnetic}</dd>
  `;
}

function pick(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const hits = canvas._hits || [];
  let best = null;
  let bestD = 18;
  for (const hit of hits) {
    const d = Math.hypot(hit.x - x, hit.y - y);
    if (d < Math.max(bestD, hit.r + 8)) {
      best = hit;
      bestD = d;
    }
  }
  if (best) showInfo(best.id);
}

function syncReadouts() {
  els.speedReadout.textContent = formatSpeed(logSpeedDaysPerSec(Number(els.speed.value)));
  els.orbitReadout.textContent = formatMult(logMultiplier(Number(els.orbit.value)));
  els.spinReadout.textContent = formatMult(logMultiplier(Number(els.spin.value)));
  const lat = Number(els.lat.value);
  els.latReadout.textContent = formatLat(lat);
  state.latitude = lat * DEG;
  state.rates.daysPerSec = logSpeedDaysPerSec(Number(els.speed.value));
  state.rates.orbitMult = logMultiplier(Number(els.orbit.value));
  state.rates.spinMult = logMultiplier(Number(els.spin.value));
}

function updateClock(positions) {
  const day = Math.floor(state.worldDays);
  const year = Math.floor(day / 365.2);
  const doy = Math.floor(day % 365.2) + 1;
  els.dateLabel.textContent = `Day ${doy} · Year ${year}`;
  els.timeLabel.textContent = `Local ${localSolarTime(positions)}`;
}

document.querySelectorAll("[data-layout]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-layout]").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    els.stage.className = `stage layout-${button.dataset.layout}`;
    setViewLayout(button.dataset.layout);
    requestAnimationFrame(() => {
      invalidateViews();
      markVisualDirty();
    });
  });
});

els.play.addEventListener("click", () => {
  state.playing = !state.playing;
  els.play.textContent = state.playing ? "Pause" : "Play";
  els.play.setAttribute("aria-pressed", String(state.playing));
  markVisualDirty();
});

els.reset.addEventListener("click", () => {
  state.worldDays = 0;
  state.earthOrbitDays = 0;
  state.earthSpinDays = 0;
  els.speed.value = "0.347";
  els.orbit.value = "0.406";
  els.spin.value = "0.406";
  els.lat.value = "40";
  syncReadouts();
  markVisualDirty();
});

els.softSky.addEventListener("change", () => {
  state.softSky = els.softSky.checked;
  markVisualDirty();
});

els.sunPlay.addEventListener("click", () => {
  state.sunPath.playing = !state.sunPath.playing;
  els.sunPlay.textContent = state.sunPath.playing ? "Pause" : "Play";
  els.sunPlay.setAttribute("aria-pressed", String(state.sunPath.playing));
  markVisualDirty();
});

els.sunReset.addEventListener("click", () => {
  state.sunPath.days = 0;
  els.sunSpeed.value = "0.45";
  els.sunHour.value = "12";
  syncSunReadouts();
  clearSunTrail();
  markVisualDirty();
});

els.sunSpeed.addEventListener("input", () => {
  syncSunReadouts();
  markVisualDirty();
});

els.sunHour.addEventListener("input", () => {
  syncSunReadouts();
  clearSunTrail();
  markVisualDirty();
});

function setScaleMode(compact) {
  state.system.compact = compact;
  state.system.fitted = false;
  state.system.fitDistance = compact ? 7375.9 : 816.4;
  document.getElementById("scale-compact").classList.toggle("active", compact);
  document.getElementById("scale-real").classList.toggle("active", !compact);
  invalidateViews();
  markVisualDirty();
}

document.getElementById("scale-compact").addEventListener("click", () => setScaleMode(true));
document.getElementById("scale-real").addEventListener("click", () => setScaleMode(false));

[els.speed, els.orbit, els.spin, els.lat].forEach((el) => {
  el.addEventListener("input", () => {
    const latBefore = state.latitude;
    syncReadouts();
    if (el === els.lat && state.latitude !== latBefore) clearSunTrail();
    markVisualDirty();
  });
});

systemCanvas.addEventListener("pointerdown", (event) => {
  pick(systemCanvas, event);
  state.system.dragging = true;
  state.system.lastX = event.clientX;
  state.system.lastY = event.clientY;
  systemCanvas.setPointerCapture(event.pointerId);
});

systemCanvas.addEventListener("pointermove", (event) => {
  if (!state.system.dragging) return;
  state.system.ox += event.clientX - state.system.lastX;
  state.system.oy += event.clientY - state.system.lastY;
  state.system.lastX = event.clientX;
  state.system.lastY = event.clientY;
  markVisualDirty();
});

systemCanvas.addEventListener("pointerup", () => {
  state.system.dragging = false;
});

systemCanvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  const factor = event.deltaY > 0 ? 0.9 : 1.1;
  state.system.scale = Math.min(1400, Math.max(6, state.system.scale * factor));
  markVisualDirty();
}, { passive: false });

skyCanvas.addEventListener("click", (event) => pick(skyCanvas, event));

els.skyObjects.addEventListener("click", (event) => {
  const item = event.target.closest("[data-id]");
  if (item) showInfo(item.dataset.id);
});

window.addEventListener("resize", () => {
  invalidateViews();
  markVisualDirty();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    if (els.stage.classList.contains("layout-sun")) els.sunPlay.click();
    else els.play.click();
  }
});

let last = performance.now();
function tick(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const sunView = els.stage.classList.contains("layout-sun");

  if (sunView) {
    if (state.sunPath.playing) {
      state.sunPath.days += dt * state.sunPath.yearsPerSec * 365.2;
      recordSunTrail();
    }
    if (state.visual.dirty || state.sunPath.playing) {
      state.visual.dirty = false;
      drawSunPath();
      const day = state.sunPath.days;
      const year = Math.floor(day / 365.2);
      const doy = Math.floor(((day % 365.2) + 365.2) % 365.2) + 1;
      els.dateLabel.textContent = `Day ${doy} · Year ${year}`;
      els.timeLabel.textContent = `Clock ${formatClockHour(state.sunPath.hour)}`;
    }
  } else {
    if (state.playing) {
      const days = state.rates.daysPerSec * dt;
      state.worldDays += days;
      state.earthOrbitDays += days * state.rates.orbitMult;
      state.earthSpinDays += days * state.rates.spinMult;
    }
    const pace = visualPace(state.playing);
    state.visual.hideRays = pace.hideRays;
    state.visual.orbitSteps = pace.orbitSteps;
    const due = state.visual.dirty || pace.interval === 0 || now - state.visual.lastDraw >= pace.interval;
    if (due) {
      state.visual.lastDraw = now;
      state.visual.dirty = false;
      const positions = heliocentricPositions();
      const targets = geocentricSkyBodies(positions);
      if (!els.stage.classList.contains("layout-system")) drawSky(positions, targets);
      if (!els.stage.classList.contains("layout-sky")) drawSystem(positions, targets);
      updateClock(positions);
    } else {
      const day = Math.floor(state.worldDays);
      const year = Math.floor(day / 365.2);
      const doy = Math.floor(day % 365.2) + 1;
      els.dateLabel.textContent = `Day ${doy} · Year ${year}`;
    }
  }
  requestAnimationFrame(tick);
}

syncReadouts();
syncSunReadouts();
showInfo("earth");
requestAnimationFrame(tick);
