"use client";
import React, { Component, useState, useEffect } from "react";
import ClientService from "@/services/client.service";
import IClientData from "@/types/client.type";

interface Props {}

interface State {
  clients: Array<IClientData>;
  newClientData: IClientData;
}

class Table extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      clients: [],
      newClientData: {
        id: null,
        firstName: "",
        lastName: "",
        dob: new Date(),
        primaryLanguage: "",
        secondaryLanguage: "",
        primaryFundingSourceId: 1,
      },
    };
  }

  componentDidMount() {
    this.retrieveClients();
  }

  retrieveClients() {
    ClientService.getAll()
      .then((response: any) => {
        this.setState({
          clients: response.data,
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  deleteClient(id: number) {
    ClientService.delete(id)
      .then((response: any) => {
        this.retrieveClients();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    return (
      <main className="flex min-h-screen min-w-full bg-gray-950 items-center justify-center">
        <div>
          <span className="text-white font-bold">Clients</span>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
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
                {this.state.clients.map((client, index) => {
                  return (
                    <tr
                      key={index}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td className="px-6 py-4">
                        {client.firstName} {client.lastName}
                      </td>
                      <td className="px-6 py-4">
                        {client.dob.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">{client.primaryLanguage}</td>
                      <td className="px-6 py-4">{client.secondaryLanguage}</td>
                      <td className="px-6 py-4">
                        {client.primaryFundingSourceId}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex row justify-center">
                          <button
                            data-modal-target="default-modal"
                            data-modal-toggle="default-modal"
                            className="block mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="button"
                          >
                            Edit
                          </button>
                          <button
                            data-modal-target="default-modal"
                            data-modal-toggle="default-modal"
                            className="block mx-1 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="button"
                            onClick={() => this.deleteClient(client.id!)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="block mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
            >
              Add new
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Table;
