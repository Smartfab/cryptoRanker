const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
// origin: "http://127.0.0.1:5501",

// app.get("/Qwsogvtv82FCd'", (req, res) => {
// 	res.json();
// });
const API_KEY = "coinrankingf36fc95ec770e2ab926df278fd5cc2155c13bb716de999de";

function getCoinCUUID(coinName) {
	return axios
		.get(
			"https://api.coinranking.com/v2/coin/Qwsogvtv82FCd" +
				"https://api.coinranking.com/v2/coins?uuids[]=razxDUgYGNAdQ&uuids[]=Qwsogvtv82FCd" +
				coinName +
				"?api_key=" +
				API_KEY
		)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((err) => console.log(err));
}
// GET all coins data
// localhost:4000/coinData
app.get("/coinData", async (req, res) => {
	const coinName = "vlotz";
	//CUUID
	const CUUID = await getCoinCUUID(coinName);
});
app.listen(4000, function () {
	console.log("Server started on port 4000");
});
