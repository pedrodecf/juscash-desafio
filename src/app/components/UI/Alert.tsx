"use client";
import React from 'react';
import Button from './Button';

interface AlertProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Alert({ title, message, onConfirm, onCancel }: AlertProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{message}</p>
        <div className="mt-4 flex justify-end gap-4">
          <Button
            variant='outline'
            onClick={onCancel}
            text='Não'
          />

          <Button
            variant='blue'
            onClick={onConfirm}
            text='Sim'
          />
        </div>
      </div>
    </div>
  );
}
