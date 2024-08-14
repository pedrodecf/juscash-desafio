"use client";

import Button from '@/app/components/UI/Button';
import Input from '@/app/components/UI/Input';
import PasswordInput from '@/app/components/UI/PasswordInput';
import { SignupFormData, signupSchema } from '@/app/utils/signupValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = (data: SignupFormData) => {
    const users = JSON.parse(localStorage.getItem('@juscash:pedrodecf-users') || '[]');
  
    const userExists = users.some((user: SignupFormData) => user.email === data.email);
  
    if (userExists) {
      toast('Este email já está cadastrado.', {
        description: 'Por favor, use outro email.',
        action: {
          label: 'Fechar',
          onClick: () => {}
        },
        classNames: {
          toast: 'bg-white shadow-lg text-gray-800',
          title: 'font-bold',
          description: 'text-gray-500',
        },
        actionButtonStyle: { backgroundColor: '#22c55e' }
      })
    } else {
      users.push(data);
      localStorage.setItem('@juscash:pedrodecf-users', JSON.stringify(users));
      toast('Conta criada com sucesso', {
        description: 'Faça o login.',
        action: {
          label: 'Fechar',
          onClick: () => {}
        },
        classNames: {
          toast: 'bg-white shadow-lg text-gray-800',
          title: 'font-bold',
          description: 'text-gray-500',
        },
        actionButtonStyle: { backgroundColor: '#22c55e' }
      })
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center gap-5">
        <Image src="/logo.svg" alt="JusCash" width={200} height={50} className="mx-auto mb-5" priority/>

        <Input 
          id='fullName'
          label="Seu nome completo" 
          {...register('fullName')}
          error={errors.fullName?.message}
        />
        
        <Input 
          id='email'
          label="E-mail" 
          type="email" 
          {...register('email')}
          error={errors.email?.message}
        />
        
        <PasswordInput 
          id='password'
          label="Senha" 
          {...register('password')}
          error={errors.password?.message}
        />
        
        <PasswordInput 
          id='confirmPassword'
          label="Confirme sua senha" 
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
        
        <Link href="/login" className='w-full mb-1'>
          <p className='text-end text-xs text-blue-900 hover:underline '>
            Já possui uma conta? Fazer o login
          </p>
        </Link>
        
        <Button type='submit' text='Criar conta' />
      </form>
    </div>
  );
}
