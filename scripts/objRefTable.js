const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.TiledBg,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{ruina1: 0},
	{ceu: 0},
	{nuvem: 0},
	{morro: 0},
	{arvorefundo: 0},
	{arvorefrente: 0},
	{partemontanha: 0},
	{partemontanha2: 0},
	{pedrinha: 0},
	{casainicial: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{TiledBackground4: 0},
	{TiledBackground5: 0},
	{TiledBackground6: 0},
	{TiledBackground7: 0},
	{TiledBackground8: 0},
	{TiledBackground9: 0},
	{TiledBackground10: 0},
	{TiledBackground11: 0},
	{TiledBackground12: 0},
	{TiledBackground13: 0},
	{TiledBackground14: 0},
	{TiledBackground15: 0},
	{TiledBackground16: 0},
	{portaC: 0},
	{TiledBackground17: 0},
	{miniilha: 0},
	{TiledBackground18: 0},
	{TiledBackground19: 0},
	{TiledBackground20: 0},
	{TiledBackground21: 0},
	{TiledBackground22: 0},
	{TiledBackground23: 0},
	{TiledBackground24: 0},
	{TiledBackground25: 0},
	{TiledBackground26: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{Plataforma: 0},
	{Sung: 0},
	{Teclado: 0},
	{mulher: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{Chefao: 0},
	{General: 0},
	{Sprite7: 0},
	{Minotauro1: 0},
	{MInotaura2: 0},
	{Projétil: 0},
	{BolaFogo: 0},
	{Sprite: 0},
	{Sprite4: 0},
	{chefe: 0},
	{Dano1: 0},
	{Dano2: 0}
];

self.InstanceType = {
	ruina1: class extends self.ISpriteInstance {},
	ceu: class extends self.ITiledBackgroundInstance {},
	nuvem: class extends self.ITiledBackgroundInstance {},
	morro: class extends self.ITiledBackgroundInstance {},
	arvorefundo: class extends self.ITiledBackgroundInstance {},
	arvorefrente: class extends self.ITiledBackgroundInstance {},
	partemontanha: class extends self.ITiledBackgroundInstance {},
	partemontanha2: class extends self.ITiledBackgroundInstance {},
	pedrinha: class extends self.ITiledBackgroundInstance {},
	casainicial: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	TiledBackground6: class extends self.ITiledBackgroundInstance {},
	TiledBackground7: class extends self.ITiledBackgroundInstance {},
	TiledBackground8: class extends self.ITiledBackgroundInstance {},
	TiledBackground9: class extends self.ITiledBackgroundInstance {},
	TiledBackground10: class extends self.ITiledBackgroundInstance {},
	TiledBackground11: class extends self.ITiledBackgroundInstance {},
	TiledBackground12: class extends self.ITiledBackgroundInstance {},
	TiledBackground13: class extends self.ITiledBackgroundInstance {},
	TiledBackground14: class extends self.ITiledBackgroundInstance {},
	TiledBackground15: class extends self.ITiledBackgroundInstance {},
	TiledBackground16: class extends self.ITiledBackgroundInstance {},
	portaC: class extends self.ISpriteInstance {},
	TiledBackground17: class extends self.ITiledBackgroundInstance {},
	miniilha: class extends self.ISpriteInstance {},
	TiledBackground18: class extends self.ITiledBackgroundInstance {},
	TiledBackground19: class extends self.ITiledBackgroundInstance {},
	TiledBackground20: class extends self.ITiledBackgroundInstance {},
	TiledBackground21: class extends self.ITiledBackgroundInstance {},
	TiledBackground22: class extends self.ITiledBackgroundInstance {},
	TiledBackground23: class extends self.ITiledBackgroundInstance {},
	TiledBackground24: class extends self.ITiledBackgroundInstance {},
	TiledBackground25: class extends self.ITiledBackgroundInstance {},
	TiledBackground26: class extends self.ITiledBackgroundInstance {},
	Sung: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	mulher: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	Chefao: class extends self.ISpriteInstance {},
	General: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Minotauro1: class extends self.ISpriteInstance {},
	MInotaura2: class extends self.ISpriteInstance {},
	BolaFogo: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}