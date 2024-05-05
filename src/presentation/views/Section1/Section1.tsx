'use client';

import { Section1Styles } from '@/presentation/views/Section1/styles';
import Link from 'next/link';

export const Section1: React.FC = () => {
  return (
    <Section1Styles.Container>
      <h1>Boilerplate by: </h1>
      <Link href="https://github.com/joaovictor-ferreira" target="_blank">
        {'<João Victor Ferreira />'}
      </Link>{' '}
    </Section1Styles.Container>
  );
};
