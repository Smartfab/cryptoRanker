const baseUrl =
	"https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins";
const apiKey = "coinrankingf36fc95ec770e2ab926df278fd5cc2155c13bb716de999de";

fetch(baseUrl, {
	method: "GET",
	headers: {
		"Content-type": "application/json",
		"x-access-token": `${apiKey}`,
		"Access-Control-Allow-Origin": "*",
	},
})
	.then((res) => res.json())
	.then((json) => {
		console.log(json.data.coins);
		// if (response.ok) {
		// 	response.json().then((json) => {
		// 		console.log(json.data.coins);

		let coinsData = json.data.coins;

		if (coinsData.length > 0) {
			var cryptoCoins = "";
		}

		//For Loop Starts
		coinsData.forEach((coin) => {
			cryptoCoins += `<tr>
			<td> ${coin.uuid}</td>
			<td> ${coin.btcPrice}</td>
			<td> ${coin.rank}</td>
			<td> ${coin.tier}</td>
			<td> ${coin.name}</td>
			<td>$ ${coin.price}</td>
			<td> ${coin.symbol}</td>
			<td> ${coin.change}</td>
			</tr>`;
		});
		document.getElementById("data").innerHTML = cryptoCoins;
	})
	.catch((error) => {
		console.log(error);
	});

// function getCoinName(event) {
// 	axios
// 		.get("http://localhost:4000/coinData")
// 		.then((res) => res.json())
// 		.then((data) => console.log(data));
// }
