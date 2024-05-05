import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import close from '@/presentation/assets/close.png';
import { Button } from '@/presentation/components/Button/Button';
import { useModal } from '@/core/hooks/useModal';
import smartphone from '@/presentation/assets/smartphone.png';

import { BuySmartphoneStyles } from './styles';

export const BuySmartphone: React.FC = () => {
  const [inputAmount, setInputAmount] = useState<number | string>();
  const [insuranceCost, setInsuranceCost] = useState<number>(0);
  const { closeModal } = useModal();

  return (
    <BuySmartphoneStyles.Container>
      <BuySmartphoneStyles.Header>
        <h4>Hire a smartphone insurance</h4>
        <div onClick={() => closeModal()}>
          <Image src={close} alt="close" width={20} />
        </div>
      </BuySmartphoneStyles.Header>
      <BuySmartphoneStyles.Option>
        <Image
          id="sideLeft"
          src={smartphone}
          alt="ticket"
          width={100}
          height={175}
        />
        <span>
          12-month insurance cost: <p> ${insuranceCost?.toFixed(2)} </p>
        </span>
      </BuySmartphoneStyles.Option>
      <BuySmartphoneStyles.ButtonsContainer>
        <input
          type="number"
          placeholder="Smartphone value"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputAmount(e.target.value);
            setInsuranceCost(Number(e.target.value) * 0.1);
          }}
          value={inputAmount}
        />
        <Button.Default onClick={() => console.log('implement onClick')}>
          Purchase
        </Button.Default>
      </BuySmartphoneStyles.ButtonsContainer>
    </BuySmartphoneStyles.Container>
  );
};
