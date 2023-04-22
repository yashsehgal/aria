import { cn } from '@/scripts/utils';

const ContentContainer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <div className={cn('content-container m-8', className)} {...attr}>
      {attr?.children}
    </div>
  );
};

export default ContentContainer;
