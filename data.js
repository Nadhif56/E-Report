// data.js
// Database (sementara, di sisi client) untuk semua laporan E-Report.
//
// Cara pakai:
// 1. Setiap kartu "Selengkapnya..." di index.html / More.html diberi link
//    ke "selengkapnya.html?id=X", dengan X = id laporan di bawah ini.
// 2. selengkapnya.html akan membaca angka id dari URL lalu mencari
//    laporan yang cocok di array reportsData, kemudian mengisi halaman
//    secara otomatis (judul, gambar, kategori, isi, dsb).
//
// Untuk menambah laporan baru: cukup tambahkan satu objek baru ke array
// di bawah (id harus unik), lalu buat link "selengkapnya.html?id=<id baru>"
// di kartu laporan yang sesuai. Tidak perlu menyalin/mengedit selengkapnya.html.

const reportsData = [
  {
    id: 1,
    title: "Ruang Kelas A302 Sangat Kotor",
    category: "Fasilitas",
    image: "./assets/image/kelas kotor.png",
    author: "Nadhif",
    isAnonymous: false,
    time: "2 Hari yang lalu",
    content: [
      "Laporan yang masuk menyebutkan bahwa Ruang Kelas A302 dalam kondisi sangat kotor setelah digunakan pada hari sebelumnya. Sampah kertas berserakan di sekitar meja dan lantai, sementara papan tulis masih penuh coretan yang belum dihapus oleh petugas kebersihan.",
      "Pelapor berharap pihak pengelola gedung dapat segera menugaskan petugas kebersihan agar ruangan kembali nyaman digunakan untuk kegiatan perkuliahan berikutnya."
    ],
    quote: "Papan tulis dan lantai kelas belum dibersihkan sama sekali sejak kemarin sore."
  },
  {
    id: 2,
    title: "AC Perpustakaan Lantai 2 Bocor",
    category: "Fasilitas",
    image: "./assets/image/kelas kotor.png",
    author: "Fauzan",
    isAnonymous: false,
    time: "2 Hari yang lalu",
    content: [
      "Unit AC di area rak buku agama, Perpustakaan Lantai 2, dilaporkan mengalami kebocoran sehingga menimbulkan genangan air di lantai. Genangan ini berpotensi membuat lantai licin dan membahayakan pengunjung perpustakaan.",
      "Pelapor meminta tim teknisi fasilitas untuk segera memeriksa unit AC tersebut sebelum kebocoran merembet ke rak buku di sekitarnya."
    ],
    quote: "Air menetes terus-menerus dari AC dan mulai menggenang di lantai dekat rak buku."
  },
  {
    id: 3,
    title: "Indikasi Kecurangan Ujian",
    category: "Anonymous",
    image: "./assets/image/curi.png",
    author: "Anonim",
    isAnonymous: true,
    time: "3 Hari yang lalu",
    content: [
      "Pelapor yang memilih untuk merahasiakan identitasnya melaporkan adanya indikasi kecurangan saat Ujian Akhir Semester mata kuliah Pemrograman. Beberapa mahasiswa terlihat menggunakan ponsel untuk mencari jawaban selama ujian berlangsung.",
      "Laporan ini diteruskan melalui jalur Pengaduan Anonymous agar identitas pelapor tetap terlindungi selama proses investigasi oleh pihak akademik."
    ],
    quote: "Ada beberapa mahasiswa yang jelas terlihat membuka ponsel di bawah meja saat ujian berlangsung."
  },
  {
    id: 4,
    title: "Penumpukan Sampah di Depan Kantin",
    category: "Kebersihan",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80",
    author: "Dimas",
    isAnonymous: false,
    time: "1 Hari yang lalu",
    content: [
      "Tempat sampah utama di area kantin dilaporkan meluap sejak pagi hari, menyebabkan sampah berserakan di sekitar area makan dan menimbulkan bau tidak sedap.",
      "Pelapor berharap petugas kebersihan dapat mengangkut sampah lebih sering, terutama pada jam-jam sibuk kantin."
    ],
    quote: "Baunya sangat mengganggu terutama saat jam makan siang."
  },
  {
    id: 5,
    title: "Kursi Kuliah Patah di Ruang B201",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=900&auto=format&fit=crop",
    author: "Nabila",
    isAnonymous: false,
    time: "1 Hari yang lalu",
    content: [
      "Beberapa kursi kuliah di Ruang B201 dilaporkan dalam kondisi patah pada bagian dudukan maupun sandaran, sehingga berisiko membahayakan mahasiswa yang menggunakannya.",
      "Pelapor meminta pihak fasilitas untuk segera mengganti atau memperbaiki kursi yang rusak sebelum digunakan kembali untuk perkuliahan."
    ],
    quote: "Salah satu kursi hampir membuat teman saya jatuh saat akan duduk."
  },
  {
    id: 6,
    title: "Kurangnya Penerangan Parkir Belakang",
    category: "Keamanan",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=900&q=80",
    author: "Anonim",
    isAnonymous: true,
    time: "2 Hari yang lalu",
    content: [
      "Area parkir motor bagian belakang gedung dilaporkan sangat gelap saat malam hari karena sebagian besar lampu penerangan mati. Kondisi ini dikhawatirkan dapat meningkatkan risiko kejahatan maupun kecelakaan.",
      "Pelapor, yang memilih anonim demi keamanan, meminta pihak keamanan kampus segera memperbaiki lampu penerangan di area tersebut."
    ],
    quote: "Sangat gelap sampai sulit melihat motor sendiri saat malam hari."
  },
  {
    id: 7,
    title: "Proyektor Lab Komputer Mati Total",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    author: "Rizky",
    isAnonymous: false,
    time: "4 Hari yang lalu",
    content: [
      "Proyektor di Lab Komputer 3 dilaporkan tidak dapat menyala sama sekali saat perkuliahan sedang berlangsung, sehingga dosen terpaksa menjelaskan materi tanpa media tampilan.",
      "Pelapor meminta pihak IT kampus untuk segera memeriksa dan mengganti unit proyektor yang rusak tersebut."
    ],
    quote: "Dosen sampai harus menggambar manual di papan tulis karena proyektor mati total."
  },
  {
    id: 8,
    title: "Jaringan WiFi Kampus Sangat Lambat",
    category: "Layanan",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    author: "Siti",
    isAnonymous: false,
    time: "5 Hari yang lalu",
    content: [
      "Koneksi WiFi di area gedung kantin dan perpustakaan dilaporkan sering terputus dan sangat lambat, terutama pada jam-jam sibuk, sehingga mengganggu aktivitas belajar mahasiswa.",
      "Pelapor berharap tim IT dapat menambah kapasitas bandwidth atau memeriksa access point yang bermasalah di area tersebut."
    ],
    quote: "Untuk membuka satu halaman saja bisa memakan waktu lebih dari satu menit."
  },
  {
    id: 9,
    title: "Pintu Toilet Gedung B Rusak",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    author: "Budi",
    isAnonymous: false,
    time: "5 Hari yang lalu",
    content: [
      "Kunci pintu toilet pria di lantai 1 Gedung B dilaporkan rusak dan tidak bisa dikunci dari dalam, sehingga membuat pengguna merasa tidak nyaman dan kurang privasi.",
      "Pelapor meminta petugas maintenance untuk segera memperbaiki atau mengganti kunci pintu tersebut."
    ],
    quote: "Terpaksa harus menahan pintu manual karena kuncinya tidak berfungsi."
  },
  {
    id: 10,
    title: "Parkir Sembarangan di Depan Gedung C",
    category: "Keamanan",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    author: "Andi",
    isAnonymous: false,
    time: "6 Hari yang lalu",
    content: [
      "Banyak sepeda motor yang diparkir di luar area resmi di depan Gedung C, sehingga menghalangi jalur pejalan kaki dan menyulitkan mobilitas mahasiswa maupun staf.",
      "Pelapor meminta petugas keamanan untuk menertibkan parkir liar tersebut dan menegakkan aturan parkir yang sudah ditentukan."
    ],
    quote: "Jalur pejalan kaki jadi sangat sempit karena dipenuhi motor yang parkir sembarangan."
  },
  {
    id: 11,
    title: "Lampu Koridor Gedung D Redup",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=900&q=80",
    author: "Dewi",
    isAnonymous: false,
    time: "1 Minggu yang lalu",
    content: [
      "Beberapa lampu penerangan di koridor lantai 3 Gedung D dilaporkan mati, membuat area koridor terasa gelap terutama menjelang sore dan malam hari.",
      "Pelapor meminta pihak fasilitas untuk segera mengganti lampu yang mati demi kenyamanan dan keamanan pengguna gedung."
    ],
    quote: "Koridor jadi terasa gelap dan agak menyeramkan saat lewat sendirian."
  },
  {
    id: 12,
    title: "Kehilangan Helm di Parkiran Bawah",
    category: "Keamanan",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=80",
    author: "Anonim",
    isAnonymous: true,
    time: "1 Minggu yang lalu",
    content: [
      "Pelapor kehilangan helm merk KYT berwarna hitam di area parkir motor basement pada siang hari. Helm tersebut diletakkan di jok motor sebelum akhirnya dilaporkan hilang.",
      "Pelapor berharap pihak keamanan dapat memeriksa rekaman CCTV area parkir basement untuk membantu menemukan helm yang hilang."
    ],
    quote: "Helm sudah tidak ada lagi saat saya kembali ke parkiran sekitar 30 menit kemudian."
  }
];
