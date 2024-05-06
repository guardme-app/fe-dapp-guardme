import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import close from '@/presentation/assets/close.png';
import { Button } from '@/presentation/components/Button/Button';
import { useModal } from '@/core/hooks/useModal';
import house from '@/presentation/assets/house.png';

import { BuyHouseStyles } from './styles';
import { useWallet } from '@/core/hooks/useWallet';

import { toast } from 'react-toastify';

export const BuyHouse: React.FC = () => {
  const [inputAmount, setInputAmount] = useState<number | string>();
  const [insuranceCost, setInsuranceCost] = useState<number>(0);
  const { closeModal } = useModal();
  const { buyPlan } = useWallet();

  return (
    <BuyHouseStyles.Container>
      <BuyHouseStyles.Header>
        <h4>Hire a House insurance</h4>
        <div onClick={() => closeModal()}>
          <Image src={close} alt="close" width={20} />
        </div>
      </BuyHouseStyles.Header>
      <BuyHouseStyles.Option>
        <Image id="sideLeft" src={house} alt="ticket" width={300} />
        <span>
          12-month insurance cost: <p> ${insuranceCost?.toFixed(2)} </p>
        </span>
      </BuyHouseStyles.Option>
      <BuyHouseStyles.ButtonsContainer>
        <input
          type="number"
          placeholder="House value"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputAmount(e.target.value);
            setInsuranceCost(Number(e.target.value) * 0.1);
          }}
          value={inputAmount}
        />
        <Button.Default onClick={async () => {
          try{
            await buyPlan(3);
            toast.success('Insurance done');
            closeModal();
          }catch(error){
            toast.error('Error when purchasing insurance');
          }
        }}>
          Purchase
        </Button.Default>
      </BuyHouseStyles.ButtonsContainer>
    </BuyHouseStyles.Container>
  );
};
