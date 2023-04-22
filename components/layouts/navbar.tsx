import { cn } from '@/scripts/utils';
import { Paragraph } from '../primitives/typography';
import Link from 'next/link';
import Button from '../primitives/button';

const NavbarOptions: Array<{
  name: string;
  path: string;
}> = [
  {
    name: 'Documentation',
    path: '/docs',
  },
  {
    name: 'Primitives',
    path: '/docs/primitives',
  },
  {
    name: 'GitHub',
    path: 'https://github.com/yashsehgal/aria',
  },
];

const Navbar: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...attr
}) => {
  return (
    <nav
      className={cn(
        'navbar px-8 py-4 bg-white border-b border-gray-100 flex flex-row  items-center justify-between',
        className,
      )}
      {...attr}>
      <div className="navbar-left-options-container flex flex-row items-center justify-start gap-4">
        <div className="navbar-logo-wrapper">
          <Link href={'/'}>
            <span className="flex flex-row items-center justify-start gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-900 animate-bounce transition-transform" />
              <Paragraph type={'base'} className="font-medium">
                {'aria ⎯ ui primitives'}
              </Paragraph>
            </span>
          </Link>
        </div>
        <div className="navbar-options-list-wrapper">
          <ul className="navbar-options-list flex flex-row items-center justify-start gap-4">
            {NavbarOptions?.map(
              (option: { name: string; path: string }, optionIndex: number) => (
                <li className="navbar-option-item" key={optionIndex}>
                  <Link href={option?.path}>
                    <Paragraph
                      type={'small'}
                      className={'text-gray-500 hover:text-gray-600'}>
                      {option?.name}
                    </Paragraph>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-right-options-container flex flex-row items-center justify-end gap-2">
        <Link href={'/docs'}>
          <Button variant={'primary'}>Get Started</Button>
        </Link>
        <Link href={'https://github.com/yashsehgal/aria'} target={'_blank'}>
          <Button variant={'outline'}>Contribute</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
