"use client";

import Button from '@/app/components/UI/Button';
import Input from '@/app/components/UI/Input';
import PasswordInput from '@/app/components/UI/PasswordInput';
import { SignupFormData, signupSchema } from '@/app/utils/signupValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
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
        
        <Link href="/login" className='w-full mb-3'>
          <p className='text-end text-xs text-blue-900 hover:underline '>
            Já possui uma conta? Fazer o login
          </p>
        </Link>
        
        <Button type='submit' text='Criar conta' />
      </form>
    </div>
  );
}
