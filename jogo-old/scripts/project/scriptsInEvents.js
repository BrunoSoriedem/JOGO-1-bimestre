

const scriptsInEvents = {

	async Folhafase1_Event17_Act1(runtime, localVars)
	{
		//obter o valor das variavel global vidas
		let vidas = runtime.globalVars.vidas;
		
		//reduz 1 vida
		vidas--;
		
		//atualiza a variavel global construct 3
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegar a 0, execute a ação (ir para GAMEOVER)
		if (vidas <= 0) {
			console.log("Game Over");
			runtime.goToLayout(gameOver)//vai para a tela gamever
		}
	},

	async Folhafase1_Event18_Act1(runtime, localVars)
	{
		//obter o valor das variavel global vidas
		let vidas = runtime.globalVars.vidas;
		
		//reduz 1 vida
		vidas--;
		
		//atualiza a variavel global construct 3
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegar a 0, execute a ação (ir para GAMEOVER)
		if (vidas <= 0) {
			console.log("Game Over");
			runtime.goToLayout(gameOver)//vai para a tela gamever
		}
	},

	async Folhacastelo_Event2_Act1(runtime, localVars)
	{
		//obter o valor das variavel global vidas
		let vidas = runtime.globalVars.vidas;
		
		//reduz 1 vida
		vidas--;
		
		//atualiza a variavel global construct 3
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegar a 0, execute a ação (ir para GAMEOVER)
		if (vidas <= 0) {
			console.log("Game Over");
			runtime.goToLayout(gameOver)//vai para a tela gamever
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
