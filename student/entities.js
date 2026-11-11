
/* ============================================================================
   entities.js  —  ENEMIES, PICKUPS, AND WHAT EACH MAP LETTER MEANS
   ============================================================================

   This file is a list of descriptions. The engine reads each description and
   makes the thing behave that way. You add new things by COPYING an existing
   description and changing it. You never write the behavior yourself.

   That is how a lot of real software is built: one part of the program does
   the work, another part just describes what to do. Change the description,
   change the program.
   ========================================================================= */


/* ===== HOLE 5 of 7 — Add a new kind of enemy ============================== */

const ENEMY_TYPES = {

  walker: {
    movement: "patrol",
    speed: 60,
    width: 20,
    height: 20,
    color: "#e0605a",
    stompable: true,
    points: 100,
    turnsAtLedges: true,
  },

  flyer: {
    movement: "hover",
    speed: 70,
    width: 22,
    height: 16,
    color: "#b07cff",
    stompable: true,
    points: 150,
    loopWidth: 60,
    loopHeight: 18,
  },

  hopper: {
    movement: "hop",
    speed: 40,
    width: 18,
    height: 18,
    color: "#ff9f43",
    stompable: true,
    points: 200,
    turnsAtLedges: true,
    hopPower: 460,
    hopEvery: 1.4,
  },

  sentry: {
    movement: "patrol",
    speed: 90,
    width: 22,
    height: 22,
    color: "#ff3d81",
    stompable: true,
    points: 250,
    turnsAtLedges: true,
  },

};


/* ===== HOLE 6 of 7 — Add a new pickup ===================================== */

const PICKUP_TYPES = {

  coin: {
    color: "#ffd34d",
    size: 10,
    shape: "circle",
    points: 10,
    treasure: true,
  },

  gem: {
    color: "#6fe3ff",
    size: 13,
    shape: "diamond",
    points: 50,
    treasure: true,
  },

  boots: {
    color: "#9cff6b",
    size: 14,
    shape: "square",
    points: 0,
    treasure: false,
    power: { speed: 1.6, seconds: 6 },
  },

  feather: {
    color: "#f4f4f4",
    size: 12,
    shape: "diamond",
    points: 0,
    treasure: false,
    power: { jump: 1.35, seconds: 8 },
  },

  star: {
    color: "#fff176",
    size: 15,
    shape: "diamond",
    points: 75,
    treasure: true,
  },

};


/* ===== LEGEND — what each letter in a map means =========================== */

const LEGEND = {
  ".": { kind: "tile",   name: "air" },
  "#": { kind: "tile",   name: "solid" },
  "=": { kind: "tile",   name: "ledge" },
  "^": { kind: "tile",   name: "spikes" },
  "P": { kind: "player" },
  "G": { kind: "goal" },

  "o": { kind: "pickup", name: "coin" },
  "*": { kind: "pickup", name: "gem" },
  "b": { kind: "pickup", name: "boots" },
  "f": { kind: "pickup", name: "feather" },
  "+": { kind: "pickup", name: "star" },

  "E": { kind: "enemy",  name: "walker" },
  "F": { kind: "enemy",  name: "flyer" },
  "H": { kind: "enemy",  name: "hopper" },
  "S": { kind: "enemy",  name: "sentry" },
};
