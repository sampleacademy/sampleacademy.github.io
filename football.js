const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-football-v1.p.rapidapi.com/v3/leagues?type=cup",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "bb7ce43ee1msha3eb350ce4d0ca4p18ee90jsn5fe82b1385ff",
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
