$(document).ready(function() {
	function state_change(data) {
		//alert(data.state+":"+data.selected);
	}
	$('img').mapster({
		noHrefIsMask: false,
		onStateChange: state_change,
		fillOpacity: 0.7,
		mapKey: "group",
		strokeWidth: 2,
		stroke:true,
		strokeColor: 'F88017',
		render_select: {
			fillColor: 'adadad',
			fillOpacity: 0.5

		},
		onClick: function clickHandler(data){
			console.log(data.key);
			switch(data.key) {
				case "lengkong":
							//console.log("lengkong");
							loadPopup();
							break;
				case "regol":
							console.log("regol");
							break;
				case "nanggal":
							console.log("nanggal");
							break;
				case "kidul":
							console.log("kidul");
							break;
				case "kircon":
							console.log("kircon");
							break;
				case "ckidul":
							console.log("ckidul");
							break;
				case "cicadas":
							console.log("cicadas");
							break;
				case "arcamanik":
							console.log("arcamanik");
							break;
				case "uberung":
							console.log("uberung");
							break;
				case "cibiru":
							console.log("cibiru");
							break;
				case "rancanasari":
							console.log("rancansari");
							break;
				case "margacinta":
							console.log("margacinta");
							break;
				case "anyar":
							console.log("anyar");
							break;
				case "bkidul":
							console.log("bkidul");
							break;
				case "babakan":
							console.log("babakan");
							break;
				case "kulon":
							console.log("kulon");
							break;
				case "andir":
							console.log("andir");
							break;
				case "cicendo":
							console.log("cicendo");
							break;
				case "sukajadi":
							console.log("sukajadi");
							break;
				case "sukasari":
							console.log("sukasari");
							break;
				case "cidadap":
							console.log("cidadap");
							break;
				case "coblong":
							console.log("coblong");
							break;
				case "cibeunying":
							console.log("cibeunying");
							break;
				case "bwetan":
							console.log("bwetan");
							break;
				case "sumurb":
							console.log("sumurb");
							break;
				case "kaler":
							console.log("kaler");
							break;
			}
		},
		areas: [
			{
				key: 'lengkong',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3,
			},
			{
				key: 'regol',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'nanggal',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'kidul',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'kircon',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'ckidul',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'cicadas',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'arcamanik',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'uberung',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'cibiru',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'rancanasari',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'margacinta',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'anyar',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'bkidul',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'babakan',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'kulon',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'andir',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'cicendo',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'sukajadi',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'sukasari',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'cidadap',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'coblong',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'cibeunying',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'bwetan',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'sumurb',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			},
			{
				key: 'kaler',
				fillColor: '0a7a0a',
				stroke: true,
				strokeWidth: 3
			}
		]

	});

});