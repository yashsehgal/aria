import ContentContainer from '@/components/layouts/content-container';
import { LargeHeading, Paragraph } from '@/components/primitives/typography';
import { cn } from '@/scripts/utils';

const DocsIndex: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <div className={cn('docs-view', className)} {...attr}>
      <ContentContainer>
        <LargeHeading>Setup and Installation</LargeHeading>
      </ContentContainer>
    </div>
  );
};

export default DocsIndex;
