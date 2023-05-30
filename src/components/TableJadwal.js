import React from "react";
import { Link } from "react-router-dom";

function TableJadwal() {
  const Jadwal = [
    {
      IdHari: 1,
      IdJam: 4,
      IdKuliah: 62069,
      Keterangan: "Dilaksanakan sebelum UTS",
      Hari: "SENIN",
      Ruang: "04.02.01",
      Waktu: "13:20-15:00",
      ZoomURL: "https://zoom.us/j/91728875909",
      IsZoomURL: 1,
      Kode: "ST152",
      MataKuliah: "BIG DATA & PREDICTIVE ANALYTICS",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-BigData(ST152)",
      Nik: "190302246",
      NamaDosen: "Rumini, M.Kom",
      EmailDosen: "rumini@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 1,
      IdJam: 5,
      IdKuliah: 61989,
      Keterangan: "",
      Hari: "SENIN",
      Ruang: "05.04.08",
      Waktu: "15:30-17:10",
      ZoomURL: "https://zoom.us/j/95664096215",
      IsZoomURL: 1,
      Kode: "ST084",
      MataKuliah: "PEMROGRAMAN WEB",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-Pemrogr(ST084)",
      Nik: "190302492",
      NamaDosen: "Mujiyanto, M.Kom",
      EmailDosen: "mujiyanto@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 2,
      IdJam: 2,
      IdKuliah: 62008,
      Keterangan: "",
      Hari: "SELASA",
      Ruang: "04.03.02",
      Waktu: "08:50-10:30",
      ZoomURL: "https://zoom.us/j/94023693781",
      IsZoomURL: 1,
      Kode: "ST091",
      MataKuliah: "ANALISIS DESAIN SISTEM INFORMASI",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-Analisi(ST091)",
      Nik: "190302236",
      NamaDosen: "Dwi Nurani, M.Kom",
      EmailDosen: "dwinurani@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 2,
      IdJam: 3,
      IdKuliah: 62017,
      Keterangan: "",
      Hari: "SELASA",
      Ruang: "05.02.04",
      Waktu: "10:40-12:20",
      ZoomURL: "https://zoom.us/j/97966246447",
      IsZoomURL: 1,
      Kode: "ST092",
      MataKuliah: "ALJABAR LINIER DAN MATRIKS",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-Aljabar(ST092)",
      Nik: "190302038",
      NamaDosen: "Krisnawati, S.Si., M.T.",
      EmailDosen: "krisna@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 2,
      IdJam: 5,
      IdKuliah: 62070,
      Keterangan: "Dilaksanakan setelah UTS",
      Hari: "SELASA",
      Ruang: "L 7.3.2",
      Waktu: "15:30-17:10",
      ZoomURL: "https://zoom.us/j/96825252642",
      IsZoomURL: 1,
      Kode: "ST152",
      MataKuliah: "BIG DATA & PREDICTIVE ANALYTICS",
      JenisKuliah: "Praktikum",
      Kelas: "21S1IF07-BigData(ST152)",
      Nik: "190302246",
      NamaDosen: "Rumini, M.Kom",
      EmailDosen: "rumini@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 2,
      IdJam: 5,
      IdKuliah: 62069,
      Keterangan: "Dilaksanakan sebelum UTS",
      Hari: "SELASA",
      Ruang: "05.04.07",
      Waktu: "15:30-17:10",
      ZoomURL: "https://zoom.us/j/94235042277",
      IsZoomURL: 1,
      Kode: "ST152",
      MataKuliah: "BIG DATA & PREDICTIVE ANALYTICS",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-BigData(ST152)",
      Nik: "190302246",
      NamaDosen: "Rumini, M.Kom",
      EmailDosen: "rumini@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 3,
      IdJam: 2,
      IdKuliah: 61991,
      Keterangan: "",
      Hari: "RABU",
      Ruang: "L 7.4.1",
      Waktu: "08:50-10:30",
      ZoomURL: "https://zoom.us/j/92776912295",
      IsZoomURL: 1,
      Kode: "ST084",
      MataKuliah: "PEMROGRAMAN WEB",
      JenisKuliah: "Praktikum",
      Kelas: "21S1IF07-Pemrogr(ST084)",
      Nik: "190302492",
      NamaDosen: "Mujiyanto, M.Kom",
      EmailDosen: "mujiyanto@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 3,
      IdJam: 4,
      IdKuliah: 61973,
      Keterangan: "",
      Hari: "RABU",
      Ruang: "05.02.01",
      Waktu: "13:20-15:00",
      ZoomURL: "https://zoom.us/j/92513888332",
      IsZoomURL: 1,
      Kode: "ST045",
      MataKuliah: "KECERDASAN BUATAN",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-Kecerda(ST045)",
      Nik: "190302185",
      NamaDosen: "Windha Mega Pradnya D, M.Kom",
      EmailDosen: "windha@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 3,
      IdJam: 5,
      IdKuliah: 62026,
      Keterangan: "",
      Hari: "RABU",
      Ruang: "05.04.04",
      Waktu: "15:30-17:10",
      ZoomURL: "https://zoom.us/j/95898549586",
      IsZoomURL: 1,
      Kode: "ST116",
      MataKuliah: "PEMROGRAMAN BASIS DATA",
      JenisKuliah: "Teori",
      Kelas: "21S1IF-Pemrogr2(ST116)",
      Nik: "190302526",
      NamaDosen: "Novi Prisma Yunita, M.Kom",
      EmailDosen: "novi@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 4,
      IdJam: 3,
      IdKuliah: 63625,
      Keterangan: "",
      Hari: "KAMIS",
      Ruang: "VR.01.02",
      Waktu: "10:40-12:20",
      ZoomURL: "https://zoom.us/j/96902430672",
      IsZoomURL: 1,
      Kode: "ST090",
      MataKuliah: "PENDIDIKAN KEWARGANEGARAAN",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-Pendidi(ST090)",
      Nik: "190302438",
      NamaDosen: "Muh. Ayub Pramana, S.H., M.H.",
      EmailDosen: "pramanaayub@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 5,
      IdJam: 1,
      IdKuliah: 62029,
      Keterangan: "",
      Hari: "JUMAT",
      Ruang: "L 2.4.2",
      Waktu: "07:00-08:40",
      ZoomURL: "https://zoom.us/j/99817226048",
      IsZoomURL: 1,
      Kode: "ST116",
      MataKuliah: "PEMROGRAMAN BASIS DATA",
      JenisKuliah: "Praktikum",
      Kelas: "21S1IF-Pemrogr2(ST116)",
      Nik: "190302526",
      NamaDosen: "Novi Prisma Yunita, M.Kom",
      EmailDosen: "novi@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 5,
      IdJam: 2,
      IdKuliah: 62008,
      Keterangan: "",
      Hari: "JUMAT",
      Ruang: "05.04.04",
      Waktu: "08:50-10:30",
      ZoomURL: "https://zoom.us/j/95898549586",
      IsZoomURL: 1,
      Kode: "ST091",
      MataKuliah: "ANALISIS DESAIN SISTEM INFORMASI",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-Analisi(ST091)",
      Nik: "190302236",
      NamaDosen: "Dwi Nurani, M.Kom",
      EmailDosen: "dwinurani@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
    {
      IdHari: 6,
      IdJam: 2,
      IdKuliah: 62041,
      Keterangan: "",
      Hari: "SABTU",
      Ruang: "05.02.07",
      Waktu: "08:50-10:30",
      ZoomURL: "https://zoom.us/j/95352989034",
      IsZoomURL: 1,
      Kode: "ST129",
      MataKuliah: "RISET OPERASI",
      JenisKuliah: "Teori",
      Kelas: "21S1IF07-RisetOp(ST129)",
      Nik: "190302575",
      NamaDosen: "Dr. Kumara Ari Yuana, ST, MT",
      EmailDosen: "kumara.a@amikom.ac.id",
      Jenjang: "S1",
      IsBolehPresensi: 0,
      KodePresensi: "",
    },
  ];
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Kode
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Hari
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Waktu
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Mata Kuliah
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Jenis Kuliah
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Keterangan
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Kelas
                  </th>
                  <th scope="col" className="px-4 py-3">
                    NIK
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Nama Dosen
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email Dosen
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Zoom URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {Jadwal.map((jadwal) => (
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {jadwal.Kode}
                    </th>
                    <td className="px-4 py-3">{jadwal.Hari}</td>
                    <td className="px-4 py-3">{jadwal.Waktu}</td>
                    <td className="px-4 py-3">{jadwal.MataKuliah}</td>
                    <td className="px-4 py-3">{jadwal.JenisKuliah}</td>
                    <td className="px-4 py-3">{jadwal.Keterangan}</td>
                    <td className="px-4 py-3">{jadwal.Kelas}</td>
                    <td className="px-4 py-3">{jadwal.Nik}</td>
                    <td className="px-4 py-3">{jadwal.NamaDosen}</td>
                    <td className="px-4 py-3">{jadwal.EmailDosen}</td>
                    <td className="px-4 py-3">
                      <Link to={jadwal.ZoomURL}>
                        <button
                          data-tooltip-target="tooltip-camera"
                          type="button"
                          className="p-2.5 bg-gray-100 group rounded-full hover:bg-gray-200 mr-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                          </svg>
                          <span className="sr-only">Zoom</span>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableJadwal;
