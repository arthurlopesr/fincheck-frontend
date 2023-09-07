import illustration from '../../assets/Illustration.png'
import { Logo } from '../components/logo/Logo'

export function AuthLayout() {
  return (
    <div className="flex w-full h-full p-8">
      <div className=" w-1/2"></div>

      <div className="w-1/2 h-full flex justify-center items-center">
        <img
          src={illustration}
          alt="default illustration"
          className='object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]'
        />

        <div className='absolute max-w-[656px] bg-white p-10 rounded-b-[32px] bottom-8'>
          <Logo className='text-teal-900 h-8' />
          <p className='text-gray-700 font-medium text-xl mt-6'>
            Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  )
}
