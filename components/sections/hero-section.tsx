import { cn } from '@/scripts/utils';
import { LargeHeading, Paragraph } from '../primitives/typography';
import Button from '../primitives/button';
import Link from 'next/link';

const HeroSection: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <main className={cn('hero-section', className)} {...attr}>
      <LargeHeading className="text-6xl">
        Build with more cleaner <br />
        and web-accessible <br />
        UI components.
      </LargeHeading>
      <Paragraph className="text-gray-500 my-4">
        A collection of web-accessible components for your react projects.{' '}
        <br />
        Easily customizable, boosts your website&apos;s lighthouse performance{' '}
        <br />
        and takes care of the accessiblity.
      </Paragraph>
      <div className="my-4 flex flex-row items-center justify-start gap-2">
        <Link href={'/docs/primitives'}>
          <Button variant={'primary'}>See Primitives</Button>
        </Link>
        <Link href={'/docs'}>
          <Button variant={'outline'}>Setup and Installation</Button>
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;
