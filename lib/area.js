$(document).ready(function() {
	function state_change(data) {
		//alert(data.state+":"+data.selected);
	}
	$('img').mapster({
		noHrefIsMask: false,
		onStateChange: state_change,
		fillOpacity: 0.5,
		mapKey: "group",
		strokeWidth: 2,
		stroke:true,
		strokeColor: 'F88017',
		render_select: {
			fillColor: '0a7a0a',
			fillOpacity: 0.5

		},
		onClick: function clickHandler(data){
			$('area').mapster('deselect');
			hideAllMarker();
			switch(data.key) {
				case "lengkong":
							$('#marker1').css('left', 405).css('top', 449).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Lengkong</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "regol":
							$('#marker4').css('left', 345).css('top', 463).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Regol</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>lingkungan dan penanggulangan bencana</b></p>";
							break;
				case "nanggal":
							$('#marker2').css('left', 462).css('top', 405).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Batu Nanggal</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>birokrasi</b></p>";
							break;
				case "kidul":
							$('#marker1').css('left', 409).css('top', 535).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Bandung Kidul</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "kircon":
							$('#marker1').css('left', 518).css('top', 403).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Kiara Condong</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "ckidul":
							$('#marker2').css('left', 470).css('top', 297).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Cibeunying Kidul</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>birokrasi</b></p>";
							break;
				case "cicadas":
							$('#marker1').css('left', 563).css('top', 321).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Cicadas</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "arcamanik":
							$('#marker1').css('left', 631).css('top', 406).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Arcamanik</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "uberung":
							$('#marker3').css('left', 692).css('top', 448).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Ujung Berung</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>pendidikan</b></p>";
							break;
				case "cibiru":
							$('#marker1').css('left', 808).css('top', 384).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Cibiru</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "rancanasari":
							$('#marker1').css('left', 680).css('top', 521).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Rancanasari</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "margacinta":
							$('#marker1').css('left', 544).css('top', 488).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Margacinta</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "anyar":
							$('#marker4').css('left', 309).css('top', 464).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Astana Anyar</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>lingkungan dan penanganan bencana</b></p>";
							break;
				case "bkidul":
							$('#marker1').css('left', 267).css('top', 502).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Margacinta</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "babakan":
							$('#marker1').css('left', 172).css('top', 487).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Babakan Cip</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "kulon":
							$('#marker1').css('left', 151).css('top', 396).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Bandung Kulon</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "andir":
							$('#marker2').css('left', 217).css('top', 350).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Andir</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>birokrasi</b></p>";
							break;
				case "cicendo":
							$('#marker1').css('left', 261).css('top', 317).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Cicendo</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "sukajadi":
							$('#marker2').css('left', 234).css('top', 226).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Sukajadi</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>birokrasi</b></p>";
							break;
				case "sukasari":
							$('#marker1').css('left', 199).css('top', 160).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Sukasari</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "cidadap":
							$('#marker1').css('left', 287).css('top', 160).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Cidadap</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "coblong":
							$('#marker1').css('left', 344).css('top', 237).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Coblong</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "cibeunying":
							$('#marker1').css('left', 414).css('top', 257).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Cibeunying Kaler</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "bwetan":
							$('#marker1').css('left', 364).css('top', 305).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Bandung Wetan</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "sumurb":
							$('#marker1').css('left', 324).css('top', 355).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Sumur Bandung</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>infrastruktur</b></p>";
							break;
				case "kaler":
							$('#marker4').css('left', 249).css('top', 415).show();
							document.getElementById("popup_content").innerHTML = "<h2>Kecamatan Bojongloa Kaler</h2><hr /><p>Pada kecamatan ini keluhan paling banyak ada pada masalah <b>lingkungan dan penanganan bencana</b></p>";
							break;
			}
			loadPopup();
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