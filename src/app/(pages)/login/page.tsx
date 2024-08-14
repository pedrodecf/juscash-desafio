"use client";

import Button from '@/app/components/UI/Button';
import Input from '@/app/components/UI/Input';
import PasswordInput from '@/app/components/UI/PasswordInput';
import { SigninFormData, signinSchema } from '@/app/utils/signinValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema)
  });

  const onSubmit = (data: SigninFormData) => {
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center gap-5">
        <Image src="/logo.svg" alt="JusCash" width={200} height={50} className="mx-auto mb-5" priority/>

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
        
        <Link href="/register" className='w-full mb-1'>
          <p className='text-end text-xs text-blue-900 hover:underline '>
            Não possui uma conta? Fazer o cadastro
          </p>
        </Link>
        
        <Button type='submit' text='Fazer login' />
      </form>
    </div>
  );
}
