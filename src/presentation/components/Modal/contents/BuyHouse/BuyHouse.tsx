import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import close from '@/presentation/assets/close.png';
import { Button } from '@/presentation/components/Button/Button';
import { useModal } from '@/core/hooks/useModal';
import house from '@/presentation/assets/house.png';

import { BuyHouseStyles } from './styles';

export const BuyHouse: React.FC = () => {
  const [inputAmount, setInputAmount] = useState<number | string>();
  const [insuranceCost, setInsuranceCost] = useState<number>(0);
  const { closeModal } = useModal();

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
        <Button.Default onClick={() => console.log('implement onClick')}>
          Purchase
        </Button.Default>
      </BuyHouseStyles.ButtonsContainer>
    </BuyHouseStyles.Container>
  );
};
