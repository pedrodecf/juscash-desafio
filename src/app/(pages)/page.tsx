"use client"

import Image from "next/image";
import { useState } from "react";
import * as I from "react-icons/fi";
import LeadTable from "../components/LeadTable";
import ModalLead from "../components/ModalLead";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <main className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl m-4">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.svg" alt="JusCash" width={600} height={100} className="mx-auto mb-5" priority/>
          <div className="flex w-full justify-end">
            <Button icon={<I.FiPlus />} text="Novo Lead" variant="blue" onClick={openModal}/>
          </div>
        </div>
          <LeadTable />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
         <ModalLead onClose={closeModal}/>
      </Modal>
    </div>
  );
}
