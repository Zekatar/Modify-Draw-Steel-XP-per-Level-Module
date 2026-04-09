Hooks.once("init", () => {
game.settings.register("modify-draw-steel-xp-per-level", "setXP", {
  name: "XP needed per Level up",
  hint: "Sets the amount of XP per level needed for heroes. Overrides standard settings. 0 allows to level up at any point. Changing this value with active characters might lead to weird behavior as current XP might technically not qualify for current level (this only leads to more XP needed for the next level, no leveling down) or immediate level up prompts after reopening character sheets.",
  scope: "world",
  config: true,
  type: Number,
  default: 16,
  onChange: value => {
//Find values from settings
const levelXP = game.settings.get("modify-draw-steel-xp-per-level", "setXP");

//Create new level progression
const level2 = levelXP;
const level3 = levelXP * 2;
const level4 = levelXP * 3;
const level5 = levelXP * 4;
const level6 = levelXP * 5;
const level7 = levelXP * 6;
const level8 = levelXP * 7;
const level9 = levelXP * 8;
const level10 = levelXP * 9;

//Replace standard level progression
const systemXP = CONFIG.DRAW_STEEL.hero.xpTrack;
systemXP.splice(1, 9, level2, level3, level4, level5, level6, level7, level8, level9, level10);
  }
 });
});