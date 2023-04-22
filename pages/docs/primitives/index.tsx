import ContentContainer from '@/components/layouts/content-container';
import { LargeHeading } from '@/components/primitives/typography';
import AllPrimitives from '@/components/sections/all-primitives';
import { cn } from '@/scripts/utils';

const PrimitivesIndex: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <div className={cn('primitives-view', className)}>
      <ContentContainer>
        <LargeHeading>UI Primitives</LargeHeading>
        <div className={cn('primitives-container my-12', className)} {...attr}>
          <AllPrimitives />
        </div>
      </ContentContainer>
    </div>
  );
};

export default PrimitivesIndex;
