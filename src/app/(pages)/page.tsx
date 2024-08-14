"use client"

import Image from "next/image";
import LeadTable from "../components/LeadTable";
import Button from "../components/UI/Button";
import * as I from "react-icons/fi"
import ModalLead from "../components/ModalLead";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.svg" alt="JusCash" width={600} height={100} className="mx-auto mb-5" priority/>
          <div className="flex w-full justify-end">
            <Button icon={<I.FiPlus />} text="Novo Lead" variant="blue"/>
          </div>
        </div>
        <LeadTable />
      </div>

      {/* <ModalLead /> */}
    </div>
  );
}
