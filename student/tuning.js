
const TUNING = {

  /* ===== HOLE 1 of 7 — The feel you can see ============================= */

  // How fast you fall.
  GRAVITY: 1600,

  // The fastest you can fall.
  MAX_FALL_SPEED: 850,

  // Top running speed.
  MOVE_SPEED: 280,

  // How quickly you reach top speed on the ground.
  GROUND_ACCEL: 3000,

  // How quickly you stop when you let go.
  GROUND_FRICTION: 3000,

  // How much you can steer while in the air.
  AIR_ACCEL: 1800,

  // How quickly you slow down in the air.
  AIR_FRICTION: 500,

  // How hard you push off the ground when you jump.
  JUMP_VELOCITY: 650,


  /* ===== HOLE 2 of 7 — The feel you can't see =========================== */

  COYOTE_TIME: 0.15,

  JUMP_BUFFER: 0.15,

  JUMP_RELEASE_CUT: 0.45,

  APEX_GRAVITY_MULT: 0.55,

  APEX_THRESHOLD: 100,


  /* ===== HOLE 3 of 7 — A feature in one number ========================== */

  MAX_AIR_JUMPS: 1,


  // ----- Other -------------------------------------------------------------

  STOMP_BOUNCE: 480,

  LIVES: 3,
};
