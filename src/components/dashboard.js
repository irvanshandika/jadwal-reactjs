import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const Dashboard = () => {
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
    mutate("jadwal");
    navigate("/dashboard");
  };
  return (
    <>
      <section className="bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link to={"/"}>
                  <button type="button" className="flex items-center justify-center text-white bg-black focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800">
                    <ion-icon name="caret-back-circle" className="mr-2"></ion-icon>
                    <span className="ml-2">Kembali</span>
                  </button>
                </Link>
                <Link to={"/add"}>
                  <button
                    type="button"
                    className="flex items-center justify-center text-white bg-black hover:bg-gray-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800">
                    Tambah Jadwal
                    <i class="pl-2 fa-solid fa-plus"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase  bg-gray-700 text-gray-400">
                  <tr>
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
                      Ruangan
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((jadwal, index) => (
                    <tr className="border-b border-gray-700">
                      <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">
                        {jadwal.hari}
                      </th>
                      <td className="px-4 py-3">{jadwal.waktu}</td>
                      <td className="px-4 py-3">{jadwal.mataKuliah}</td>
                      <td className="px-4 py-3">{jadwal.ruangan}</td>
                      <td className="px-4 py-3">
                        <Link to={`/edit/${jadwal.id}`}>
                          <button className="bg-green-400 hover:bg-green-500 text-white text-xs w-16 h-7 font-medium rounded-full">
                            <i class="pr-1 fa-solid fa-pen"></i>
                            Edit
                          </button>
                        </Link>
                        <button onClick={() => deleteJadwal(jadwal.id)} className="bg-red-400 hover:bg-red-500 text-white text-xs w-16 h-7 font-medium rounded-full">
                          <i className="pr-1 fa-solid fa-trash-can"></i>
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
      </section>
    </>
  );
};

export default Dashboard;
