import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditJadwal = () => {
  const [hari, setHari] = useState("");
  const [waktu, setWaktu] = useState("");
  const [mataKuliah, setMataKuliah] = useState("");
  const [ruangan, setRuangan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getJadwalById = async () => {
      const response = await axios.get(`https://jadwal-express.vercel.app/api/jadwal/${id}`);
      setHari(response.data.hari);
      setWaktu(response.data.waktu);
      setMataKuliah(response.data.mataKuliah);
      setRuangan(response.data.ruangan);
    };
    getJadwalById();
  }, [id]);

  const updateJadwal = async (e) => {
    e.preventDefault();
    await axios.patch(`https://jadwal-express.vercel.app/api/jadwal/${id}`, {
      hari: hari,
      waktu: waktu,
      mataKuliah: mataKuliah,
      ruangan: ruangan,
    });
    navigate("/dashboard");
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form className="my-10" onSubmit={updateJadwal}>
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Hari</label>
            <input type="text" value={hari} onChange={(e) => setHari(e.target.value)} className="w-full py-3 mt-1 border boder-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Hari" />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Waktu</label>
            <input type="text" value={waktu} onChange={(e) => setWaktu(e.target.value)} className="w-full py-3 mt-1 border boder-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Waktu" />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Mata Kuliah</label>
            <input
              type="text"
              value={mataKuliah}
              onChange={(e) => setMataKuliah(e.target.value)}
              className="w-full py-3 mt-1 border boder-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Mata Kuliah"
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Ruangan</label>
            <input type="text" value={ruangan} onChange={(e) => setRuangan(e.target.value)} className="w-full py-3 mt-1 border boder-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ruangan" />
          </div>
          <button type="submit" className="bg-blue-400 hover:bg-blue-500 w-full text-black hover:text-white h-10 rounded-lg">
            Update
          </button>
          <Link to={"/dashboard"} className="py-4">
            <button type="submit" className="bg-gray-300 hover:bg-gray-500 w-full text-black hover:text-white h-10 rounded-lg">
              Kembali
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditJadwal;
