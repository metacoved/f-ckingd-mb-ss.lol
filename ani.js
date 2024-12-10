export function runAni(ani, obj) {
  aniLoop(ani, 0, 0, obj);
}
function aniLoop(ani, i, t, obj) {
  if (i >= ani.length) return;
  //console.log(obj.position.x, obj.position.y, obj.position.z)
  let tStart = Date.now();
  const { dur, to, run } = ani[i];
  if (t >= dur) {
    aniLoop(ani, i + 1, t - dur, obj);
    return;
  }
  run?.();
  const [toX, toY, toZ] = to;
  const [startX, startY, startZ] = i == 0 ? [0, 0, 0] : ani[i - 1].to;
  obj.position.x = startX + (toX - startX) * (t / dur);
  obj.position.y = startY + (toY - startY) * (t / dur);
  obj.position.z = startZ + (toZ - startZ) * (t / dur);
  requestAnimationFrame(() => aniLoop(ani, i, t + (Date.now() - tStart) / 1000, obj));
}
const demoAni = [
  { dur: 0, to: [1, 2, 1] },
]