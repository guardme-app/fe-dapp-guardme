import { HireInsuranceStyles } from './styles';
import { Button } from '@/presentation/components/Button/Button';

import Image, { StaticImageData } from 'next/image';
interface InsuranceCardProps {
  type: string;
  image: StaticImageData;
  description: string;
}

export const InsuranceCard: React.FC<InsuranceCardProps> = ({
  type,
  image,
  description,
}) => {
  return (
    <HireInsuranceStyles.Card>
      <Image src={image} alt="insurance image" width={200} height={200} />
      <h1>{type}</h1>
      <p>{description}</p>
      <Button.Default>Hire</Button.Default>
    </HireInsuranceStyles.Card>
  );
};
