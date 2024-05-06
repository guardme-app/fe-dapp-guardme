import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import close from '@/presentation/assets/close.png';
import { Button } from '@/presentation/components/Button/Button';
import { useModal } from '@/core/hooks/useModal';
import vehicle from '@/presentation/assets/vehicle.png';

import { BuyVehicleStyles } from './styles';
import { useWallet } from '@/core/hooks/useWallet';
import { toast } from 'react-toastify';

export const BuyVehicle: React.FC = () => {
  const [inputAmount, setInputAmount] = useState<number | string>();
  const [insuranceCost, setInsuranceCost] = useState<number>(0);
  const { closeModal } = useModal();

  const { buyPlan } = useWallet();

  return (
    <BuyVehicleStyles.Container>
      <BuyVehicleStyles.Header>
        <h4>Hire a vehicle insurance</h4>
        <div onClick={() => closeModal()}>
          <Image src={close} alt="close" width={20} />
        </div>
      </BuyVehicleStyles.Header>
      <BuyVehicleStyles.Option>
        <Image id="sideLeft" src={vehicle} alt="ticket" width={300} />
        <span>
          12-month insurance cost: <p> ${insuranceCost?.toFixed(2)} </p>
        </span>
      </BuyVehicleStyles.Option>
      <BuyVehicleStyles.ButtonsContainer>
        <input
          type="number"
          placeholder="Vehicle value"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputAmount(e.target.value);
            setInsuranceCost(Number(e.target.value) * 0.1);
          }}
          value={inputAmount}
        />
        <Button.Default onClick={async () => {
          try{
            await buyPlan(1);
            toast.success('Insurance done');
            closeModal();
          }catch(error){
            toast.error('Error when purchasing insurance');
          }
        }}>
          Purchase
        </Button.Default>
      </BuyVehicleStyles.ButtonsContainer>
    </BuyVehicleStyles.Container>
  );
};
