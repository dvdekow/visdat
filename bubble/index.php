<html>
<head>
	<meta charset="UTF-8"/>
	<title>Minimal BubbleTree Demo</title>
	<script type="text/javascript" src="bubbletree/lib/jquery-1.5.2.min.js"></script>
	<script type="text/javascript" src="bubbletree/lib/jquery.history.js"></script>
	<script type="text/javascript" src="bubbletree/lib/raphael.js"></script>
	<script type="text/javascript" src="bubbletree/lib/vis4.js"></script>
	<script type="text/javascript" src="bubbletree/lib/Tween.js"></script>
	<script type="text/javascript" src="bubbletree/build/bubbletree.js"></script>
	<link rel="stylesheet" type="text/css" href="bubbletree/build/bubbletree.css" />	
	<script type="text/javascript">
		var JumAnak =[6,1,2,2,16,1,4,1,1,1,1],
			Nilai = ['Lembaga Teknis Daerah','Badan Kepegawaian Daerah','Badan Kesatuan Bangsa dan Pemberdayaan Masyarakat','Badan Pelayanan Perizinan Terpadu','Badan Pemberdayaan Perempuan dan Keluarga Berencana','Badan Pengelolaan Lingkungan Hidup','Badan Perencanaan Pembangunan Daerah','Asisten Ekbang dan Kesra','Asisten Ekbang dan Kesra','Asisten Pemerintahan','Bagian Organisasi dan Pemberdayaan Aparatur Daerah','Bagian Pemerintahan Umum','Asisten Administrasi Umum','Bagian Tata Usaha','Bagian Umum dan Perlengkapan','Dinas Daerah','Dinas Bina Marga dan Pengairan','Dinas Kebudayaan dan Parawisata','Dinas Kependudukan dan Catatan Sipil','Dinas Kesehatan','Dinas Komunikasi dan Informasi','Dinas Koperasi, UKM, Perindustrian dan Perdagangan','Dinas Pelayanan Pajak','Dinas Permakaman dan Pertanaman','Dinas Pemuda dan Olahraga','Dinas Pendidikan','Dinas Pengelolaan Keuangan dan Aset Daerah','Dinas Perhubungan','Dinas Pertanian dan Ketahanan Pangan','Dinas Sosial','Dinas Tata Ruang dan Cipta Karya','Dinas Tenaga Kerja','Inspektorat','Inspektorat','Perusahaan DPR','PD BPR','PD Kebersihan','PD Pasar Bermartabat','PDAM','Pemerintah Kota','Pemerintah Kota','Rumah Sakit Khusus Gigi dan Mulut','Rumah Sakit Khusus Gigi dan Mulut','Satpol PP','Satpol PP','Sekretariat DPRD','Sekretariat DPRD'],
			Jumlah = [135,20,4,59,1,38,13,6,6,12,3,9,13,2,11,1548,660,32,82,33,4,35,11,73,8,81,8,355,3,60,90,13,9,9,221,3,114,37,67,21,21,1,1,295,295,1,1]
			;
		var x=0, y=0;
function generateChildren(node, level) {
	
	if (!level)level = 1;

	var numChildren=0;
	node.children = [];
	var amount = node.amount;
	if (level==1) 
	numChildren=11;
	else {
		numChildren=JumAnak[x];
		x++;
	}
	
	
	for (var i=0; i<numChildren ; i++) {
		//i=1;
		var child = { 
			label: Nilai[y], 
			amount: Jumlah[y]		};
		y++;
		if (level == 1) {
			// random color for level 1 children
			child.color = vis4color.fromHSL(i/numChildren*360, .7, .5).x;
		}
		if (level == 2) {
			// children of level 2 will get a similar color of their parent
			child.color = vis4color.fromHex(node.color)
				.lightness('*'+(.5+Math.random()*.5)).x;
		}
		node.children.push(child);
		
		if (level < 2) generateChildren(child, level+1);//kode buat nambahin child selanjutnya 
	}
	
}
 
var data = {
	label: "Jumlah Keluhan Pada Setiap Lembaga Kota Bandung",
	amount: 2262,
};
 
generateChildren(data);


		$(function() {
			new BubbleTree({
				data: data,
				container: '.bubbletree'
			});
		});
</script></head>
<body>
	<div class="bubbletree-wrapper">
		<div class="bubbletree"></div>
	</div>
</body>
</html>