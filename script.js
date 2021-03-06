//TODO:
/*

[]Add sort and search methods for cards
[]Add api fetch to place country flags as card image
[]Better css 
[]Convert CSS to SASS
[x]fix header to keep centered on mobile devices (bootstrap?)
	[]add global case/death/recovered
	[]potential hamburger menu
[]styling for cards
*/

$(document).ready(function() {
	fetch('https://corona.lmao.ninja/v2/countries').then((response) => {
		return (response.json());
	})
	.then((data) => {
		var template = ``;
		var container = document.getElementById('container');
		console.log(data);
		data.forEach((element) => {
			template += `
				<div class="card" style="width: 18rem;">
					<div class="card-body" style="color: black;">
						<p class="card-text"><h4><strong>${element.country}</strong></h4>Cases: ${element.cases}<br>Deaths: ${element.deaths}</p>
					</div>
				</div>
			
			`	
		});
		container.innerHTML = template;
	});
});
