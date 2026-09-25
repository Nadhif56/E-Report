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
//
// Catatan: index.html memakai id 1-3 (bagian "Laporan Terbaru"), sedangkan
// More.html memakai id 4-30 (27 kartu). Array ini mencakup id 1-30 supaya
// setiap tombol "Selengkapnya..." di kedua halaman punya data yang cocok.

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
  },
  {
    id: 13,
    title: "AC Ruang Kelas B302 Tidak Dingin",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&w=900&q=80",
    author: "Faisal",
    isAnonymous: false,
    time: "1 Minggu yang lalu",
    content: [
      "Pelapor menyebutkan bahwa unit AC di Ruang Kelas B302 memang menyala dan mengeluarkan suara normal, namun sama sekali tidak menghasilkan udara dingin sehingga ruangan tetap terasa panas dan pengap selama perkuliahan berlangsung.",
      "Pelapor berharap teknisi fasilitas dapat segera memeriksa unit AC tersebut, mengingat kondisi ruangan yang panas cukup mengganggu konsentrasi mahasiswa saat menerima materi."
    ],
    quote: "AC-nya nyala tapi anginnya sama sekali tidak dingin, malah terasa seperti kipas biasa."
  },
  {
    id: 14,
    title: "Sampah Berserakan di Taman Tengah",
    category: "Kebersihan",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=900&q=80",
    author: "Sinta",
    isAnonymous: false,
    time: "1 Minggu yang lalu",
    content: [
      "Pelapor mendapati banyak sisa bungkus makanan ringan dan botol minuman berserakan di sekitar bangku Taman Tengah, terutama setelah jam istirahat siang berlangsung.",
      "Pelapor berharap petugas kebersihan dapat menambah jadwal pengecekan tempat sampah di area taman serta mengimbau mahasiswa untuk lebih peduli terhadap kebersihan lingkungan bersama."
    ],
    quote: "Bangku taman jadi kotor dan kurang nyaman untuk duduk santai karena sampah berserakan."
  },
  {
    id: 15,
    title: "Gerbang Samping Tidak Dikunci Malam Hari",
    category: "Keamanan",
    image: "https://images.unsplash.com/photo-1506501139174-099022df5260?auto=format&fit=crop&w=900&q=80",
    author: "Anonim",
    isAnonymous: true,
    time: "2 Minggu yang lalu",
    content: [
      "Pelapor yang memilih anonim menyampaikan bahwa gerbang samping kampus sering kali lupa digembok oleh petugas keamanan setelah pukul 21:00 WIB, sehingga area kampus menjadi rawan diakses oleh pihak luar pada malam hari.",
      "Pelapor berharap pihak keamanan dapat menetapkan jadwal pengecekan dan penguncian gerbang secara rutin demi menjaga keamanan lingkungan kampus di malam hari."
    ],
    quote: "Sudah dua kali saya lihat gerbang samping masih terbuka lebar padahal sudah lewat jam malam."
  },
  {
    id: 16,
    title: "Antrean Panjang di Biro Akademik",
    category: "Layanan",
    image: "https://cdn.corenexis.com/f/MAIqdtDu80c.jpg",
    author: "Gilang",
    isAnonymous: false,
    time: "2 Minggu yang lalu",
    content: [
      "Pelapor mengeluhkan proses pelayanan dokumen di Biro Akademik yang berjalan sangat lambat, sehingga antrean mahasiswa mengular hingga keluar ruangan terutama pada jam-jam sibuk menjelang batas akhir pengumpulan berkas.",
      "Pelapor berharap pihak biro dapat menambah petugas layanan atau menyediakan sistem antrean digital agar proses pengurusan dokumen menjadi lebih efisien."
    ],
    quote: "Sudah mengantre lebih dari satu jam tapi loket yang melayani hanya satu orang."
  },
  {
    id: 17,
    title: "Atap Perpustakaan Bocor Saat Hujan",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    author: "Rina",
    isAnonymous: false,
    time: "2 Minggu yang lalu",
    content: [
      "Pelapor melaporkan bahwa atap Perpustakaan mengalami kebocoran cukup parah saat hujan deras kemarin, sehingga menimbulkan genangan air di area rak buku dan berpotensi merusak koleksi buku yang ada di sekitarnya.",
      "Pelapor meminta pihak fasilitas untuk segera memeriksa dan memperbaiki atap yang bocor tersebut sebelum musim hujan berikutnya menyebabkan kerusakan yang lebih besar."
    ],
    quote: "Air menetes langsung ke rak buku dan beberapa buku di bagian bawah sempat basah."
  },
  {
    id: 18,
    title: "Toilet Wanita Lantai 2 Berbau Tidak Sedap",
    category: "Kebersihan",
    image: "https://cdn.corenexis.com/f/vO1kI42QiVP.webp",
    author: "Ayu",
    isAnonymous: false,
    time: "2 Minggu yang lalu",
    content: [
      "Pelapor menyampaikan bahwa toilet wanita di lantai 2 dalam kondisi kurang bersih dan tercium bau tidak sedap sejak pagi hari, sehingga membuat pengguna merasa tidak nyaman saat menggunakannya.",
      "Pelapor berharap petugas kebersihan dapat lebih rutin membersihkan dan mengecek ketersediaan pengharum ruangan di toilet tersebut."
    ],
    quote: "Baunya sudah tercium bahkan dari luar pintu toilet."
  },
  {
    id: 19,
    title: "Kurangnya Kursi & Meja di Kantin Utama",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    author: "Tomi",
    isAnonymous: false,
    time: "3 Minggu yang lalu",
    content: [
      "Pelapor menyebutkan bahwa pada jam istirahat siang, jumlah kursi dan meja yang tersedia di Kantin Utama tidak sebanding dengan jumlah mahasiswa yang ingin makan, sehingga banyak yang terpaksa berdiri atau makan sambil duduk di lantai.",
      "Pelapor berharap pihak pengelola kantin dapat menambah jumlah kursi dan meja, atau mengatur ulang tata letak agar kapasitas ruang makan menjadi lebih memadai."
    ],
    quote: "Setiap jam makan siang selalu susah cari tempat duduk kosong di kantin."
  },
  {
    id: 20,
    title: "Sistem E-Learning Sering Down",
    category: "Layanan",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    author: "Hendra",
    isAnonymous: false,
    time: "3 Minggu yang lalu",
    content: [
      "Pelapor melaporkan bahwa sistem e-learning kampus sering mengalami gangguan atau down, terutama saat masa pengumpulan tugas serentak menjelang batas waktu, sehingga banyak mahasiswa kesulitan mengunggah tugas tepat waktu.",
      "Pelapor berharap tim IT dapat meningkatkan kapasitas server e-learning agar sistem tetap stabil meskipun diakses oleh banyak pengguna secara bersamaan."
    ],
    quote: "Setiap mendekati deadline tugas, website e-learning pasti lemot bahkan sampai error."
  },
  {
    id: 21,
    title: "Pencurian Kaca Spion Motor",
    category: "Keamanan",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    author: "Anonim",
    isAnonymous: true,
    time: "3 Minggu yang lalu",
    content: [
      "Pelapor yang memilih anonim melaporkan kehilangan sepasang kaca spion motor saat memarkirkan kendaraannya di area parkir sayap kanan Gedung A pada siang hari.",
      "Pelapor berharap pihak keamanan dapat meningkatkan pengawasan di area parkir tersebut, termasuk memeriksa rekaman CCTV untuk membantu mengungkap pelaku."
    ],
    quote: "Waktu saya tinggal kondisinya masih lengkap, begitu kembali kaca spionnya sudah hilang."
  },
  {
    id: 22,
    title: "Papan Tulis Kelas A101 Berlubang",
    category: "Fasilitas",
    image: "https://cdn.corenexis.com/f/xXY3ltFUu8F.webp",
    author: "Rian",
    isAnonymous: false,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor menyebutkan bahwa whiteboard di Kelas A101 sudah tidak rata permukaannya dan terdapat beberapa bagian yang berlubang, sehingga menyulitkan dosen saat menulis materi perkuliahan.",
      "Pelapor meminta pihak fasilitas untuk mengganti papan tulis tersebut dengan yang baru agar proses belajar mengajar dapat berjalan lebih optimal."
    ],
    quote: "Setiap menulis di bagian yang berlubang, tulisannya jadi putus-putus dan susah dibaca."
  },
  {
    id: 23,
    title: "Performa Komputer Lab 2 Sangat Lambat",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    author: "Dina",
    isAnonymous: false,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor melaporkan bahwa beberapa unit komputer di sudut kanan Laboratorium Komputer 2 sering mengalami hang atau lag parah saat digunakan untuk praktik desain, sehingga menghambat proses pembelajaran mahasiswa.",
      "Pelapor berharap pihak IT kampus dapat memeriksa spesifikasi maupun melakukan upgrade pada unit-unit komputer yang bermasalah tersebut."
    ],
    quote: "Baru buka satu aplikasi desain saja komputernya sudah langsung not responding."
  },
  {
    id: 24,
    title: "Saluran Air Wastafel Mampet",
    category: "Kebersihan",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=900&q=80",
    author: "Laras",
    isAnonymous: false,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor menyebutkan bahwa wastafel di depan ruang dosen mengalami mampet sehingga air cucian tangan menggenang cukup lama dan tidak kunjung surut.",
      "Pelapor berharap petugas maintenance dapat segera memeriksa dan membersihkan saluran pembuangan wastafel tersebut agar tidak menimbulkan bau maupun genangan yang mengganggu."
    ],
    quote: "Airnya menggenang sampai meluber ke lantai koridor depan ruang dosen."
  },
  {
    id: 25,
    title: "Error Verifikasi Pembayaran Semester",
    category: "Layanan",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    author: "Reza",
    isAnonymous: false,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor menyampaikan bahwa dirinya sudah melakukan transfer pembayaran UKT semester ini, namun status pembayaran pada website akademik masih tercatat belum terbayar selama tiga hari berturut-turut.",
      "Pelapor berharap pihak keuangan kampus dapat segera memverifikasi ulang bukti transfer yang telah dikirimkan agar status akademiknya tidak terganggu."
    ],
    quote: "Sudah transfer dari tiga hari lalu tapi statusnya masih tertulis belum bayar."
  },
  {
    id: 26,
    title: "Banyak Stop Kontak Perpustakaan Mati",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1558864559-ed673ba3610b?auto=format&fit=crop&w=900&q=80",
    author: "Yoga",
    isAnonymous: false,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor melaporkan bahwa beberapa colokan listrik di area baca lantai 2 Perpustakaan dalam kondisi longgar dan tidak dapat mengalirkan listrik, sehingga menyulitkan mahasiswa yang ingin mengisi daya laptop saat mengerjakan tugas.",
      "Pelapor berharap pihak fasilitas dapat memeriksa dan mengganti stop kontak yang rusak tersebut agar area baca tetap nyaman digunakan dalam waktu lama."
    ],
    quote: "Sudah coba beberapa colokan tapi semuanya tidak ada aliran listrik sama sekali."
  },
  {
    id: 27,
    title: "Orang Tidak Dikenal di Area Kelas",
    category: "Keamanan",
    image: "https://images.unsplash.com/photo-1494200483035-db7bc6aa5739?auto=format&fit=crop&w=900&q=80",
    author: "Anonim",
    isAnonymous: true,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor yang memilih anonim menyampaikan bahwa terlihat beberapa remaja yang bukan merupakan siswa atau mahasiswa kampus bersantai di depan area kelas tanpa mendapat teguran dari petugas keamanan.",
      "Pelapor berharap petugas keamanan dapat lebih ketat dalam memeriksa identitas setiap orang yang berada di lingkungan kampus demi menjaga ketertiban dan keamanan bersama."
    ],
    quote: "Mereka duduk-duduk santai di depan kelas padahal jelas bukan siswa di sini."
  },
  {
    id: 28,
    title: "Petugas Keamanan Sering Tidak di Pos",
    category: "Layanan",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    author: "Tika",
    isAnonymous: false,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor menyebutkan bahwa pos satpam di area depan kampus sering kali kosong pada pagi hari, sehingga pengaturan lalu lintas kendaraan yang masuk maupun keluar menjadi tersendat dan kurang tertib.",
      "Pelapor berharap pihak keamanan dapat mengatur jadwal jaga yang lebih konsisten agar pos selalu terisi terutama pada jam-jam sibuk masuk kampus."
    ],
    quote: "Setiap pagi pos satpam selalu kosong padahal kendaraan yang masuk sedang ramai-ramainya."
  },
  {
    id: 29,
    title: "Kaca Jendela Gedung Lama Berdebu Tebal",
    category: "Kebersihan",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    author: "Farhan",
    isAnonymous: false,
    time: "1 Bulan yang lalu",
    content: [
      "Pelapor melaporkan bahwa kaca jendela di lorong penghubung Gedung Lama sudah lama tidak dibersihkan, sehingga dipenuhi debu tebal dan jaring laba-laba yang membuat pemandangan dari lorong menjadi buram.",
      "Pelapor berharap petugas kebersihan dapat menjadwalkan pembersihan kaca jendela secara berkala, tidak hanya di area kelas namun juga di lorong penghubung antar gedung."
    ],
    quote: "Kacanya sampai buram, dari lorong hampir tidak kelihatan pemandangan luar."
  },
  {
    id: 30,
    title: "Keran Air Tempat Wudhu Patah",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=900&q=80",
    author: "Ihsan",
    isAnonymous: false,
    time: "2 Bulan yang lalu",
    content: [
      "Pelapor menyebutkan bahwa dua buah keran di tempat wudhu masjid kampus dalam kondisi patah, sehingga air terus mengalir dan terbuang sia-sia tanpa bisa dimatikan.",
      "Pelapor berharap pihak pengelola masjid maupun fasilitas kampus dapat segera mengganti keran yang rusak tersebut untuk menghindari pemborosan air."
    ],
    quote: "Airnya mengalir terus dari pagi, sayang sekali kalau dibiarkan terbuang begitu saja."
  }
];