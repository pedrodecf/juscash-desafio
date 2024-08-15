"use client"

import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-gray-100 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] p-8 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-600 hover:text-gray-900"
      >
        &times;
      </button>
      <div>{children}</div>
    </div>
  </div>
  )
}