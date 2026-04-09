Hooks.once("ready", () => {
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
});