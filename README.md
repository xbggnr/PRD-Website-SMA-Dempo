# Product Requirement Document 
**Website Profil Sekolah SMA Dempo**

### Identitas
Nama : Benedictus Imanuel Wicaksono
NRP  : 5025251039

## 1. Informasi Produk

| Item                  | Detail                                                                             |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Nama Produk**       | Website Profil Sekolah SMA Katolik St. Albertus Malang                             |
| **Jenis Produk**      | Website Informasi & Profil Institusi                                               |
| **Target Pengguna**   | Siswa, calon siswa baru, orang tua, guru, alumni, awam                             |
| **Platform**          | Web Interaktif                                                                     |
| **Tujuan**            | Sumber informasi resmi sekolah yang terstruktur, menarik, dan mudah diakses |

## 2. Latar Belakang
Saat ini website sekolah menjadi media digital yang vital sebagai sumber informasi mengenai identitas sekolah, program akademik, kegiatan siswa, prestasi, berita, fasilitas, serta informasi penerimaan peserta didik baru. Website dirancang tidak hanya sebagai profile sekolah, tetapi juga sebagai pusat informasi digital sekolah.

## 3. Tujuan Produk
- Menampilkan profil dan identitas sekolah.
- Menyampaikan informasi akademik dan kesiswaan.
- Menampilkan berita dan kegiatan sekolah.
- Menyediakan informasi PPDB.
- Menampilkan dokumentasi kegiatan sekolah.
- Menyediakan informasi kontak sekolah.
- Memberikan user experience yang responsif baik di tampilan desktop maupun mobile.

## 4. Target Pengguna
- **Calon Siswa:** Mencari informasi terkait akademik, kegiatan, prestasi, dan PPDB.
- **Orang Tua:** Mencari informasi program sekolah, jadwal, pengumuman, dan kegiatan.
- **Siswa:** Mengakses berita, agenda, pengumuman, dan informasi sekolah terkini.
- **Guru/Staff:** Menyampaikan informasi serta mengelola konten melalui sistem administrasi.
- **Pengunjung Umum:** Mencari informasi mengenai sekolah, fasilitas, program, dan kontak.

## 5. Struktur Website
**Website Profil Sekolah**
- **Beranda**
- **Profil**
  - Sejarah Sekolah
  - Sambutan Kepala Sekolah
  - Visi & Misi
  - Sarana & Prasarana
  - Lokasi Map
- **Akademik**
  - Kurikulum
  - Program Unggulan
  - Kalender Akademik
  - Ekstrakurikuler
  - Prestasi Akademik
- **Kesiswaan**
  - Jurusan
  - OSIS
  - Ekstrakurikuler
  - Prestasi Siswa
  - Kegiatan Siswa
  - Jumlah Siswa
- **Berita**
  - Berita
  - Pengumuman
- **Galeri**
  - Dokumentasi Kegiatan
- **PPDB**
  - Pendaftaran (Pengembangan)
- **Kontak**
  - Kirim Pesan
  - Contact Person


## 6. Functional Requirements

* **FR-01 Beranda**
  - Header dan navigation
  - Hero section: nama sekolah, tagline, sejarah sekolah, tombol Profil Sekolah, PPDB, Video Profil
  - Keunggulan sekolah
  - Berita terbaru
  - Agenda kegiatan
  - Lokasi di Maps
  - Footer
* **FR-02 Profil Sekolah**
  - Sejarah sekolah
  - Visi dan misi
  - Sambutan kepala sekolah
  - Fasilitas
  - Identitas sekolah
* **FR-03 Akademik**
  - Kurikulum
  - Program unggulan
  - Kalender akademik
  - Program akademik
  - Prestasi akademik
* **FR-04 Kesiswaan**
  - OSIS
  - Ekstrakurikuler
  - Prestasi siswa
  - Kegiatan siswa
  - Jumlah Siswa
* **FR-05 Berita (Pengemabangan)**
  - Judul, thumbnail, tanggal dan tahun, ringkasan, konten, penulis
  - Search, pengurutan, detail berita
* **FR-06 Galeri (Pengembangan)**
  - Kategori: semua, kegiatan, prestasi, fasilitas, ekstrakurikuler, upacara, laboratorium
  - Preview gambar ukuran lebih besar
* **FR-07 PPDB(Pengembangan)**
  - Informasi PPDB, persyaratan, jadwal, alur pendaftaran, dokumen, FAQ, link pendaftaran
  - CTA: DAFTAR SEKARANG
* **FR-08 Kontak**
  - Alamat, telepon, email, jam operasional, Google Maps, formulir kontak, media sosial
  - Form: nama, email, subjek, pesan

## 7. Admin / Content Management
**Admin Dashboard**
- Dashboard
- Profil Sekolah
- Berita
- Agenda
- Galeri
- Prestasi
- Program Akademik
- PPDB
- Pengumuman
- Pesan Kontak
- User Management
*Admin dapat melakukan operasi Create, Read, Update, dan Delete (CRUD) terhadap konten website.*

## 8. Non-Functional Requirements
* **Responsive**
  - Desktop
  - Tablet
  - Mobile
* **Performance**
  - Optimasi gambar
  - Lazy loading
  - Hover pada button
* **Accessibility**
  - Kontras warna
  - Ukuran teks
  - Alt text gambar
  - Navigasi keyboard
  - Struktur heading yang benar
* **Security**
  - Validasi input
  - Sanitasi data
  - HTTPS
  - Autentikasi admin
  - Proteksi halaman admin

## 9. Teknologi yang Digunakan
* **Level 3 - Modern Web Development**
  - Frontend: HTML, CSS, Javascript(belum)
  - Backend: Node.js (belum)
  - Database: MySQL (belum)
  - Version Control: Git, GitHub
  - Deployment: Vercel

## 10. Struktur Database
Tabel: `users`, `schools`, `teachers`, `programs`, `extracurriculars`, `achievements`, `news`, `categories`, `events`, `galleries`, `gallery_categories`, `announcements`, `ppdb_information`, `contacts`

**Relasi utama:** `categories` → `news`; `gallery_categories` → `galleries`; `users` → `news`.

## 11. Prioritas Fitur

**MVP (Minimum Viable Product)**
- Beranda
- Profil
- Akademik
- Kesiswaan
- Berita
- Galeri
- PPDB
- Kontak
- Responsive Design

**Pengembangan Berikutnya**
- Admin Dashboard
- Database
- Login Admin
- CMS Berita
- CMS Galeri
- Search
- API
- Statistik pengunjung
- Integrasi Google Maps
- Integrasi media sosial

## 12. User Flow
**Pengunjung**
> Beranda ➔ Profil ➔ Akademik ➔ Kesiswaan ➔ Berita ➔ Galeri ➔ PPDB ➔ Kontak

**Contoh Flow Calon Siswa**
> Beranda ➔ Profil Sekolah ➔ Program Unggulan ➔ Prestasi ➔ Galeri ➔ PPDB ➔ Persyaratan ➔ Daftar

## 13. Struktur Project

```
Profile SMA Katolik St. Albertus
PRD-Website-SMA-Dempo/
├── index.html
├── README.md
├── pages/
│   ├── profil.html
│   ├── akademik.html
│   ├── kesiswaan.html
│   ├── berita.html
│   ├── galeri.html
│   ├── ppdb.html
│   └── kontak.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── images/
└── components/
    ├── header.html
    └── footer.html
```