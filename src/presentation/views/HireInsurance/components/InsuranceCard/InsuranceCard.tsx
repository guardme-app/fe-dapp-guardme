import { HireInsuranceStyles } from './styles';
import { Button } from '@/presentation/components/Button/Button';
import { useModal } from '@/core/hooks/useModal';

import Image, { StaticImageData } from 'next/image';
import { IModal } from '@/core/states/modal';

interface InsuranceCardProps {
  type: string;
  image: StaticImageData;
  description: string;
  modalName: string;
}

export const InsuranceCard: React.FC<InsuranceCardProps> = ({
  type,
  image,
  description,
  modalName,
}) => {
  const { openModal } = useModal();

  return (
    <HireInsuranceStyles.Card>
      <Image src={image} alt="insurance image" width={200} height={200} />
      <h1>{type}</h1>
      <p>{description}</p>
      <Button.Default onClick={() => openModal({ name: modalName } as IModal)}>
        Hire
      </Button.Default>
    </HireInsuranceStyles.Card>
  );
};
