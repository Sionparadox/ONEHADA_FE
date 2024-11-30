'use client';

import { Button } from '@/components/ui/button';
import useApi from '@/hooks/useApi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Account, User } from '@/lib/datatypes';

export default function Checking({
  searchParams: {
    account_id: accountId,
    recipient_number: recipientNumber,
    bank: bankName,
    amount,
    recipient: recipientId,
  },
}: {
  searchParams: {
    account_id: string;
    recipient_number: string;
    bank: string;
    amount: string;
    recipient: string;
  };
}) {
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const router = useRouter();

  const { data: accounts } = useApi<Account>('account');
  const { data: users } = useApi<User>('user');

  useEffect(() => {
    if (accounts && users && accountId) {
      const account = accounts.find((acc) => acc.id === accountId);
      if (account) {
        const user = users.find((u) => u.id === account.user_id);
        setSenderName(user ? user.user_name : '알 수 없는 사용자');
      }
    }
  }, [accounts, users, accountId]);

  useEffect(() => {
    if (users && recipientId) {
      const recipient = users.find((user) => user.id === recipientId);
      setRecipientName(recipient ? recipient.user_name : '알 수 없는 사용자');
    }
  }, [users, recipientId]);

  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <div
      style={{ height: 'calc(100vh - 56px)' }}
      className='flex flex-col justify-between items-center px-6 pb-6'
    >
      <div className='tossface-icon text-[3rem] pt-10 text-center'>✅</div>
      <h2 className='text-center font-medium text-lg mb-12'>
        <span className='text-[#479E86]'>{recipientName}</span>
        <span className='font-medium'> 님께 </span>
        <span className='text-[#479E86]'>
          {Number(amount).toLocaleString()}원을
        </span>
        <span className='block'> 송금했습니다!</span>
      </h2>

      <div className='bg-white  rounded-xl shadow-md p-4 mb-6 w-full'>
        <div className='flex justify-between mt-4 mb-10'>
          <p className='font-bold text-sm text-gray-600'>받는 계좌</p>
          <p className='text-gray-800'>
            {bankName} {recipientNumber}
          </p>
        </div>
        <div className='flex justify-between items-center mb-10'>
          <p className='font-bold text-sm text-gray-600'>받는분에게 표기</p>
          <input
            type='text'
            value={senderName}
            readOnly
            className='border-b border-gray-400 w-1/2 text-right focus:outline-none'
          />
        </div>
        <div className='flex justify-between items-center mb-4'>
          <p className='font-bold text-sm text-gray-600'>나에게 표기</p>
          <input
            type='text'
            value={recipientName}
            readOnly
            className='border-b border-gray-400 w-1/2 text-right focus:outline-none'
          />
        </div>
      </div>
      <Button
        id='261'
        onClick={() => handleClick()}
        className='w-full h-10 text-white text-lg bg-main-green hover:bg-[#479e86]  focus:bg-[#479e86] py-3 rounded mt-6  transition'
      >
        확인
      </Button>
    </div>
  );
}
