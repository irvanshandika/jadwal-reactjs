import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import Footer from "./footer.js";

const JadwalList = () => {
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("https://jadwal-express.vercel.app/api/jadwal");
    return response.data;
  };
  const data = useSWR("jadwal", fetcher);
  if (!data) {
    return <h2 className="text-center text-3xl mt-24">Loading...</h2>;
  }

  const deleteJadwal = async (jadwalId) => {
    await axios.delete(`https://jadwal-express.vercel.app/api/jadwal/${jadwalId}`);
    mutate("jadwals");
    navigate("/dashboard");
  };
  return (
    <>
      <div className="flex flex-col mt-5 justify-center mx-auto items-center">
        <div className="w-full">
          <Link to="/add">
            <button className="bg-black text-white hover:bg-gray-600 hover:text-gray-300 mx-11 w-32 h-10 rounded-lg">Add Jadwal</button>
          </Link>
          <div className="relative shadow rounded-lg mt-3">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="px-1 py-3 text-center">Hari</th>
                    <th className="px-3 py-3">Waktu</th>
                    <th className="px-3 py-3">Mata Kuliah</th>
                    <th className="px-3 py-3">Ruangan</th>
                    <th className="px-1 py-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((jadwal, index) => (
                    <tr className="bg-white border-b" key={jadwal.id}>
                      {/* <td className="px-1 py-3 text-center">{index + 1}</td> */}
                      <td className="px-1 py-3 font-md text-gray-900 text-center">{jadwal.hari}</td>
                      <td className="px-3 py-3 font-md text-gray-900">{jadwal.waktu}</td>
                      <td className="px-3 py-3 font-md text-gray-900">{jadwal.mataKuliah}</td>
                      <td className="px-3 py-3 font-md text-gray-900">{jadwal.ruangan}</td>
                      <td className="px-1 py-3 text-center">
                        <Link to={`/edit/${jadwal.id}`} className="px-2 py-1">
                          <button className="bg-green-400 hover:bg-green-500 text-white w-14 h-7 font-medium rounded-full">Edit</button>
                        </Link>
                        <button onClick={() => deleteJadwal(jadwal.id)} className="bg-red-400 hover:bg-red-500 text-white w-14 h-7 font-medium rounded-full">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JadwalList;
