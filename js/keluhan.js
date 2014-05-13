var text = ["KPS 39 kea 940134 A 01 Kapan BLSM Kota bandung dilaksanakan?", "Kepada Yth. Pemerintah Kota Bandung, saya ingin melaporkan mengenai penahanan ijazah asli di minimarket INDOMARET. Apakah ini ada dasar hukumnya penahanan ijazah asli oleh perusahaan....", "!BDG Warga kami RW 05 Kel. Pungkur Kec. Regol yang tidak mampu dan sudah melampirkan SKTM diharuskan membayar 1 juta utk biaya bukti surat kematian (Rp.400.000,-) .....","Tolong diperbaiki sistem saluran air di daerah pasteur dan sukawarna. Rumah saya di sukawarna (komplek istana regensi 1) kena banjir terus","Tolong Pak Ridwan Kamil  geng motor itu di tumpas habis  kami mahasiswa selalu resah dengan adanya geng-geng seperti ini. dan juga pencurian motor tolong di kurangi..", "Air PDAM di daerah Babakan Jeruk tidak ngocor sudah 2 hari","Pak mau lapor di Jalan Ciumbuleuit tidak ada trotoar jadi susah kalo mau jalan kaki  gimana ya Pak?  Terima kasih.","Pak Wali Kota tolong berantas rentenir yang bermodus Koperasi di Kelurahan Cihaurgeulis Kec. Cibeunying Kaler  di daerah muararajeun sangat menjamur dan sangat meresahkan warga kecil.","Bapak Walikota Bandung  trotoar ambruk depan kampus STDI dan seberang Hotel California Jl. Wastukencana  membahayakan pejalan kaki...Terima kasih","harap setiap hari ada petugas kebersihan yg membersihkan jalan di bdg. Harap perbaiki gorong2 di bdg supaya jalan tidak banjir lagi  akibat solokan yg mempet bisa menyebabkan banjir","daripada bikin spanduk  lebih efektif bila Dinas Sosial menghimbau masyarakat melalui radio-radio yang ada di Bandung untuk meyiarkan larangan memberi sedekah......Tapi salurkan sedekah melalui lembaga resmi. ","Tolong ya  kenapa sih pelayanan KIR Dinas Perhubungan Kota Bandung banyak calo nya?","Traffict Light dipertigaan depan pintu tol Buah Batu mati. Sangat membingungkan dan berbahaya untuk pengendara. Mohon perbaikan.","Binong jati sebagai sentra industri rajut di bandung  sayang sekali akses masuknya tidak representative  karena ada pasar tradisional yang semerawut  tidak tertata dengan baik. Agar dapat dicarikan solusinya." ];
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