import React from "react";

export default function HomePage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          PT Centralindo Mandiri Perkasa
        </h1>
        <p className="text-lg md:text-xl">
          Solusi Terbaik untuk Fabrikasi Baja dan Mechanical Electrical
        </p>
      </section>

      {/* Tentang Kami */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Tentang Kami</h2>
        <p className="text-gray-700 mb-4">
          Berdiri sejak 2009 di Jakarta, PT Centralindo Mandiri Perkasa bergerak di bidang
          fabrikasi baja material telekomunikasi dan penyediaan Mechanical Electrical.
          Kami telah dipercaya mengerjakan proyek-proyek infrastruktur di berbagai daerah
          di Indonesia.
        </p>
        <p className="text-gray-700">
          Kami berkomitmen menjaga kualitas dan ketepatan waktu, serta menawarkan solusi
          dengan harga kompetitif demi kepuasan pelanggan.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Visi & Misi</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Visi</h3>
          <p className="text-gray-600">
            Terus tumbuh dan berkembang memenuhi kebutuhan di bidang teknik, konstruksi,
            dan Mechanical Electrical di Indonesia.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Misi</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Memberikan produk dengan kualitas terbaik sesuai spesifikasi.</li>
            <li>Layanan tepat waktu.</li>
            <li>Meningkatkan nilai tambah bagi seluruh pemangku kepentingan.</li>
          </ul>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Struktur Organisasi</h2>
        <p className="text-gray-700">
          Struktur organisasi kami disusun untuk mendukung kelancaran pelaksanaan proyek dengan
          penanggung jawab dan divisi-divisi yang kompeten di bidangnya.
        </p>
      </section>

      {/* Pengalaman & Proyek */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Pengalaman Proyek</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Base Transceiver Station (BTS): Site Acquisition, pembangunan menara, instalasi, dan perkuatan.</li>
          <li>Fabrication: Monopole, baseframe, angular tower, bracket antena, dan struktur baja lainnya.</li>
          <li>Proyek besar: Pembangunan Transmisi 500 kV - Waskita (PLN) di Sumatra Selatan.</li>
        </ul>
      </section>

      {/* Daftar Klien */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Klien Kami</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>PT. SEKAWAN ABADI PRIMA</li>
          <li>PT. SOLUSI TUNAS PRATAMA</li>
          <li>PT. CAKRA INTI ANDALAN</li>
          <li>PT. INDAH PRATAMA ABADI</li>
          <li>PT. MATAWARI LINTAS NUSA</li>
          <li>PT. PRASETIA DWIDHARMA</li>
          <li>KEMENKOMINFO</li>
          <li>PROTELINDO</li>
          <li>KIN</li>
          <li>WASKITA KARYA</li>
          <li>BACH MULTI GLOBAL</li>
        </ul>
      </section>

      {/* Peralatan Workshop */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Peralatan Workshop</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>CNC Angle Line JNC 2020 & JNC 1616</li>
          <li>CNC Punching, Shearing, Flame & Plasma Cutting</li>
          <li>Mesin Roll, Bending, Bor, Punch, dan Las</li>
          <li>Hoist Crane 3-5 Ton, Air Compressor, dan Transportasi</li>
        </ul>
      </section>

      {/* Kontak */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Kontak</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            <strong>Alamat Workshop:</strong> Kavling Depkes No.2, Pamulang Barat,
            Tangerang Selatan & Pergudangan Sigma Kartika, Gunung Sindur
          </p>
          <p>
            <strong>Telepon/Faks:</strong> +62-21-740 1127
          </p>
          <p>
            <strong>Mobile:</strong> +62-8137 6663 499 (Supardi)
          </p>
          <p>
            <strong>Email:</strong> info@centralindomandiri.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 PT Centralindo Mandiri Perkasa. All rights reserved.</p>
      </footer>
    </main>
  );
}