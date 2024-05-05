import { HeaderStyles } from './styles';
import Image from 'next/image';
import { Button } from '@/presentation/components/Button/Button';
import guardMeLogo from '@/presentation/assets/guardme-logo.png';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Content>
        <div>
          <Link href="/login">
            <Button.Default>Login</Button.Default>
          </Link>
          <Link href="/sign-up">
            <Button.Outlined>Sign Up</Button.Outlined>
          </Link>
        </div>
      </HeaderStyles.Content>
    </HeaderStyles.Container>
  );
};
