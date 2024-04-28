"use client";
import React, { Component, useState, useEffect } from "react";

const App = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/client")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClients(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <main className="flex min-h-screen min-w-full bg-gray-950 items-center">
      <div className="justify-center">
        <span className="text-white font-bold">Clients</span>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  DOB
                </th>
                <th scope="col" className="px-6 py-3">
                  Primary Language
                </th>
                <th scope="col" className="px-6 py-3">
                  Secondary Language
                </th>
                <th scope="col" className="px-6 py-3">
                  Primary Funding Source
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => {
                return (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">
                      {client.firstName} {client.lastName}
                    </td>
                    <td className="px-6 py-4">{client.dob}</td>
                    <td className="px-6 py-4">{client.primaryLanguage}</td>
                    <td className="px-6 py-4">{client.secondaryLanguage}</td>
                    <td className="px-6 py-4">
                      {client.primaryFundingSourceId}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default App;
