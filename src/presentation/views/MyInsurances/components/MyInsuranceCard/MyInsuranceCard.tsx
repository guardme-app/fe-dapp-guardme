import { MyInsuranceStyles } from './styles';
import { Button } from '@/presentation/components/Button/Button';
import { useModal } from '@/core/hooks/useModal';

import Image, { StaticImageData } from 'next/image';

interface InsuranceCardProps {
  type: string;
  image: StaticImageData;
  value: string;
  modalName: string;
}

export const MyInsuranceCard: React.FC<InsuranceCardProps> = ({
  type,
  image,
  value,
  modalName,
}) => {
  const { openModal } = useModal();

  return (
    <MyInsuranceStyles.Card>
      <h1>{type}</h1>
      <Image src={image} alt="insurance image" width={150} height={80} />
      <div>
        <span>Value:</span>
        <p>{value}</p>{' '}
        <Button.Default
          onClick={() => openModal({ name: modalName } as any)}
        >
          Redeem
        </Button.Default>
      </div>
    </MyInsuranceStyles.Card>
  );
};
