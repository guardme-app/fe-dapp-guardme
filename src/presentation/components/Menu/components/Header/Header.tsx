import { HeaderStyles } from './styles';
import Image from 'next/image';
import { Button } from '@/presentation/components/Button/Button';
import guardMeLogo from '@/presentation/assets/guardme-logo.png';

export const Header: React.FC = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Content>
        <div>
          <Button.Default>Login</Button.Default>
          <Button.Outlined>Sign Up</Button.Outlined>
        </div>
      </HeaderStyles.Content>
    </HeaderStyles.Container>
  );
};
