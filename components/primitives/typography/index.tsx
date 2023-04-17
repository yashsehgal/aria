import { cn } from '@/scripts/utils';

const LargeHeading: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ className, ...attr }) => {
  return (
    <>
      <h1
        className={cn('text-5xl tracking-tight font-bold leading-snug')}
        {...attr}>
        {attr?.children}
      </h1>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

const MediumHeading: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ className, ...attr }) => {
  return (
    <>
      <h2 className={cn('text-4xl tracking-tight font-semibold')} {...attr}>
        {attr?.children}
      </h2>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

const BaseHeading: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ className, ...attr }) => {
  return (
    <>
      <h3 className={cn('text-3xl tracking-tight font-medium')} {...attr}>
        {attr?.children}
      </h3>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

const SmallHeading: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ className, ...attr }) => {
  return (
    <>
      <h4 className={cn('text-2xl tracking-tight font-medium')} {...attr}>
        {attr?.children}
      </h4>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type?: 'base' | 'small';
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  type = 'base',
  className,
  ...attr
}) => {
  return (
    <>
      <p
        className={cn(
          'font-normal mt-2',
          className,
          type === 'base' ? 'text-base' : 'text-sm',
        )}
        {...attr}>
        {attr?.children}
      </p>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

const Blockquote: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <>
      <div
        className={cn(
          'px-4 py-1 border-l-2 border-gray-300 cursor-default hover:border-gray-500 italic text-sm my-2',
          className,
        )}
        {...attr}>
        {attr?.children}
      </div>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

interface InlineCodeProps extends React.HTMLAttributes<HTMLSpanElement> {
  copy?: boolean;
}

const InlineCode: React.FunctionComponent<InlineCodeProps> = ({
  copy = false,
  className,
  ...attr
}) => {
  return (
    <>
      <span
        className={cn(
          'px-1 py-0.5 rounded-md bg-gray-200 text-gray-800 font-medium text-xs font-mono',
          className,
        )}
        {...attr}>
        {attr?.children}
      </span>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

const SubtleText: React.FunctionComponent<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, ...attr }) => {
  return (
    <>
      <p className={cn('text-sm text-gray-500', className)} {...attr}>
        {attr?.children}
      </p>
      <span className="sr-only">{attr?.children}</span>
    </>
  );
};

export {
  LargeHeading,
  MediumHeading,
  BaseHeading,
  SmallHeading,
  Paragraph,
  Blockquote,
  InlineCode,
  SubtleText,
};
