var text = ["KPS 39 kea 940134 A 01 Kapan BLSM Kota bandung dilaksanakan?", "Kepada Yth. Pemerintah Kota Bandung, saya ingin melaporkan mengenai penahanan ijazah asli di minimarket INDOMARET. Apakah ini ada dasar hukumnya penahanan ijazah asli oleh perusahaan....", "!BDG Warga kami RW 05 Kel. Pungkur Kec. Regol yang tidak mampu dan sudah melampirkan SKTM diharuskan membayar 1 juta utk biaya bukti surat kematian (Rp.400.000,-) .....","Tolong diperbaiki sistem saluran air di daerah pasteur dan sukawarna. Rumah saya di sukawarna (komplek istana regensi 1) kena banjir terus"];
var counter = 0;

change();
setInterval(change, 5000);

function change() {
	var elem = document.getElementById("changeText");
	elem.innerHTML = text[counter];
	//$('h3').textEffect("grow");
	counter++;
	if(counter >= text.length) { counter = 0; }
}