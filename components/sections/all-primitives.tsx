import { cn } from '@/scripts/utils';
import AllPrimitivesData from '@/lib/localdb/primitives.json';
import { Paragraph, SmallHeading } from '../primitives/typography';
import Button from '../primitives/button';
import Link from 'next/link';
import {
  FormContainer,
  FormInput,
  FormInputItem,
  FormInputSupportText,
} from '../primitives/input';

const AllPrimitives: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <section
      className={cn(
        'all-primitives-container grid grid-cols-3 gap-12',
        className,
      )}
      {...attr}>
      {AllPrimitivesData?.map((primitive, primitiveIndex) => {
        return (
          <Link
            href={
              `/docs/primitives/${primitive?.redirectTo}` || '/docs/primitives'
            }
            key={primitiveIndex}>
            <div className="primitive-option-content-container w-[420px] cursor-pointer p-3 transition-all rounded-md hover:bg-gray-50 hover:scale-105">
              <div className="w-full h-[240px] bg-white border border-gray-200 rounded-md border-dashed mb-4 flex flex-row items-center justify-center cursor-default">
                <PrimitiveDemoComponent
                  componentName={primitive?.componentName}
                />
              </div>
              <SmallHeading>{primitive?.componentName}</SmallHeading>
              <Paragraph className="text-gray-500 mt-1">
                {primitive?.description}
              </Paragraph>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

const PrimitiveDemoComponent: React.FunctionComponent<{
  componentName: string;
}> = ({ componentName }) => {
  switch (componentName) {
    case 'Button':
      return (
        <div className="demo-button-container grid grid-cols-2 items-center justify-center gap-6">
          <Button variant={'primary'}>Primary</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'danger'}>Danger</Button>
        </div>
      );
    case 'Typography':
      return (
        <div className="demo-typography-container">
          <SmallHeading>Better Typography.</SmallHeading>
        </div>
      );
    case 'Form Elements':
      return (
        <div className="demo-form-elements-container w-[280px]">
          <FormContainer className="grid grid-cols-1 gap-4">
            <FormInputItem>
              <FormInput
                type={'email'}
                placeholder={'Enter a username'}
                wFull
              />
            </FormInputItem>
            <FormInputItem>
              <FormInput
                type={'password'}
                placeholder={'Create a password'}
                wFull
              />
            </FormInputItem>
            <Button>Create account</Button>
          </FormContainer>
        </div>
      );
    default:
      return <></>;
  }
};

export default AllPrimitives;
