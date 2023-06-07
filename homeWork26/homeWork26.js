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

let heroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	56,
	{
		name: "Deadpool"
	},
	{
		name: "Thor"
	},
	[89, 'kk'],
	{
		name: "Spider Man"
	}
];


Array.prototype.heroesRender = function(universe){
	let universeName = universe.replaceAll(' ', '').toLowerCase();

    if (['dc', 'marvel'].includes(universeName)) {
		heroesArray = universeName === 'dc' ? dcHeroes : marvelHeroes;

		let TRs = [];

		this.forEach(function(item){
			if (heroesArray.some(function(element){
				return element.name === item.name;
			})) {
				TRs.push(`
				<tr>
			   	<td>${item.name}</td>
			   	<td>
			    <img src="/homeWork26/${universeName}/${item.name.replaceAll(' ', '').toLowerCase()}.svg">
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
			console.log(`There is no heroes from this universe.`);
		}
    } else {
        console.log('There is no such universe.');
    }
}

heroes.heroesRender('marvel');