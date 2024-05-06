'use client';

import { HireInsuranceStyles } from '@/presentation/views/HireInsurance/styles';
import { InsuranceCard } from './components/InsuranceCard/InsuranceCard';
import { insuranceItems } from './components/InsuranceCard/utils/items';

export const HireInsurance: React.FC = () => {
  return (
    <HireInsuranceStyles.Container>
      <HireInsuranceStyles.Title>
        Pick up your insurance
      </HireInsuranceStyles.Title>
      <HireInsuranceStyles.Content>
        {insuranceItems.map((item) => (
          <InsuranceCard
            key={item.type}
            type={item.type}
            image={item.image}
            modalName={item.modalName}
            description={item.description}
          />
        ))}
      </HireInsuranceStyles.Content>
    </HireInsuranceStyles.Container>
  );
};
