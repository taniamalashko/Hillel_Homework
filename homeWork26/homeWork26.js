let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];



Array.prototype.heroesRender = function(universe){
	let universeName = universe.replaceAll(' ', '').toLowerCase();

	let TRs = [];

	this.forEach(function(item){
		if (item.name && typeof item.name === 'string') {
			imgName = item.name.replaceAll(' ', '').toLowerCase();
			TRs.push(`
			<tr>
			<td>${item.name}</td>
			<td>
			<img src="/homeWork26/${universeName}/${imgName}.svg">
			</td>
			</tr>`);
		}
	})
	
	if (TRs.length !== 0) {
		document.write(`<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Icon</th>
								</tr>
							</thead>
							<tbody>
								${TRs.join('')}
							</tbody>
						</table>`);
	} else {
		console.log(`There is no heroes .`);
	}
}

dcHeroes.heroesRender('dc');
marvelHeroes.heroesRender('marvel');
