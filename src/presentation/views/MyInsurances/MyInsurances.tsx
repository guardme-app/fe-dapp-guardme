'use client';

import { MyInsuranceStyles } from '@/presentation/views/MyInsurances/styles';
import { MyInsuranceCard } from './components/MyInsuranceCard/MyInsuranceCard';
import { myInsuranceItems } from './components/MyInsuranceCard/utils/items';

export const MyInsurances: React.FC = () => {
  return (
    <MyInsuranceStyles.Container>
      <MyInsuranceStyles.Title>My Insurances</MyInsuranceStyles.Title>
      <MyInsuranceStyles.Content>
        {myInsuranceItems.map((item) => (
          <MyInsuranceCard
            key={item.type}
            type={item.type}
            image={item.image}
            modalName={item.modalName}
            value={item.value}
          />
        ))}
      </MyInsuranceStyles.Content>
    </MyInsuranceStyles.Container>
  );
};
