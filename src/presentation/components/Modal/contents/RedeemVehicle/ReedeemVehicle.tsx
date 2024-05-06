import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import close from '@/presentation/assets/close.png';
import { Button } from '@/presentation/components/Button/Button';
import { useModal } from '@/core/hooks/useModal';
import vehicle from '@/presentation/assets/vehicle.png';

import { RedeemVehicleStyles } from './styles';

export const RedeemVehicle: React.FC = () => {
  const [inputAmount, setInputAmount] = useState<number | string>();
  const [insuranceCost, setInsuranceCost] = useState<number>(0);
  const { closeModal } = useModal();

  return (
    <RedeemVehicleStyles.Container>
      <RedeemVehicleStyles.Header>
        <h4>Redeem your vehicle insurance</h4>
        <div onClick={() => closeModal()}>
          <Image src={close} alt="close" width={20} />
        </div>
      </RedeemVehicleStyles.Header>
      <RedeemVehicleStyles.Option>
        <Image id="sideLeft" src={vehicle} alt="ticket" width={300} />
        <div>
          <span>Upload your accident or theft report </span>
          <p>Your request is going to be reviewed</p>
        </div>
      </RedeemVehicleStyles.Option>
      <RedeemVehicleStyles.ButtonsContainer>
        <Button.Outlined
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: ' 0 0 0 2rem  ',
          }}
        >
          <input
            type="file"
            accept="application/pdf, image/*"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
          />
        </Button.Outlined>
        <Button.Default
          disabled
          onClick={() => console.log('implement onClick')}
        >
          Redeem
        </Button.Default>
      </RedeemVehicleStyles.ButtonsContainer>
    </RedeemVehicleStyles.Container>
  );
};
