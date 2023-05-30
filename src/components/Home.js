import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import TableJadwal from "./TableJadwal.js";

const Home = () => {
  const fetcher = async () => {
    const response = await axios.get("https://jadwal-express.vercel.app/api/jadwal");
    return response.data;
  };
  const data = useSWR("jadwal", fetcher);
  if (!data) {
    return <h2 className="text-center text-3xl mt-24">Loading...</h2>;
  }
  return (
    <>
      <TableJadwal />
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link to={"/dashboard"}>
                  <button
                    type="button"
                    className="flex items-center justify-center text-white bg-black hover:bg-gray-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-2">Dashboard</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((jadwal, index) => (
                    <tr className="border-b dark:border-gray-700">
                      <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {jadwal.hari}
                      </th>
                      <td className="px-4 py-3">{jadwal.waktu}</td>
                      <td className="px-4 py-3">{jadwal.mataKuliah}</td>
                      <td className="px-4 py-3">{jadwal.ruangan}</td>
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

export default Home;
