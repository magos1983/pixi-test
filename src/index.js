import * as PIXI from "pixi.js";
import "pixi-spine";
import { Spine } from "pixi-spine";

const init = async () => {
  const app = new PIXI.Application({
    backgroundColor: "#1099bb",
    hello: true,
    resizeTo: window,
  });
  document.body.appendChild(app.view);

  await PIXI.Assets.init({preferences: {preferCreateImageBitmap: true}})	

  const bg = await PIXI.Assets.load("assets/backgroundMainGame.json");

  const spine = new Spine(bg.spineData);
  const scale = window.innerWidth / spine.width
  spine.position.set(window.innerWidth / 2, window.innerHeight / 2);
  spine.scale.set(scale);
  spine.state.setAnimation(0, "default_landscape", true);

  app.stage.addChild(spine);  
};

init();
