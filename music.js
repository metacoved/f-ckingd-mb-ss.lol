const soundSrcs = {
  "vineboom": "https://cdn.glitch.global/31bace21-7962-42b9-9d94-1ac0006e3342/Vine-boom-sound-effect.mp3?v=1733867710901",
  "fnaf": "https://cdn.glitch.global/31bace21-7962-42b9-9d94-1ac0006e3342/FNAF-Jumpscare-Scream.mp3?v=1733867739175",
  "numa": "https://cdn.glitch.global/31bace21-7962-42b9-9d94-1ac0006e3342/numa.mp3?v=1733870960198",
  "spring": "https://cdn.glitch.global/31bace21-7962-42b9-9d94-1ac0006e3342/spring.mp3?v=1733871186257"
}
const sounds = {}
for (const [key, url] of Object.entries(soundSrcs)) {
  sounds[key] = new Audio(url);
}
await Promise.all(Object.values(sounds).map(sound => new Promise(res => sound.oncanplaythrough = res)));

export function playSound(soundKey) {
  sounds[soundKey].play();
}