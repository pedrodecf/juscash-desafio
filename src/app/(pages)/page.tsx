"use client"

import Image from "next/image";
import { useState } from "react";
import * as I from "react-icons/fi";
import LeadTable from "../components/LeadTable";
import ModalLead from "../components/ModalLead";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { Logout } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    Logout();
    router.push('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <main className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl m-4 relative">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.svg" alt="JusCash" width={600} height={100} className="mx-auto mb-5" priority/>
          <div className="flex w-full justify-end gap-3">
            <Button icon={<I.FiPlus />} text="Novo Lead" variant="blue" onClick={openModal}/>
          </div>
        </div>
        <LeadTable />
        <button
            className="absolute -top-10 right-0 left-0 text-white bg-green-500 hover:bg-green-600 px-6 py-1 flex items-center justify-center gap-1 transition-colorsx w-fit rounded"
            onClick={handleLogout}
          >
            Sair
          </button>
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
         <ModalLead onClose={closeModal}/>
      </Modal>
    </div>
  );
}
