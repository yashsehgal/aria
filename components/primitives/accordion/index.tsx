import { cn } from '@/scripts/utils';
import React from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  oneAtTime?: boolean;
}

const AccordionContext = React.createContext({
  singleOpenAtTime: false,
});

const AccordionGroup: React.FunctionComponent<AccordionGroupProps> = ({
  oneAtTime = false,
  className,
  ...attr
}) => {
  return (
    <AccordionContext.Provider value={{ singleOpenAtTime: oneAtTime }}>
      <div
        className={cn(
          'accordion-group grid grid-cols-1 w-[340px] overflow-hidden box-border',
          className,
        )}
        {...attr}>
        {attr?.children}
      </div>
    </AccordionContext.Provider>
  );
};
AccordionGroup.displayName = 'AccordionGroup';

const AccordionItemContext = React.createContext({
  isOpen: false,
});

const AccordionItem: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...attr }) => {
  return (
    <AccordionContext.Consumer>
      {(ACCORDION_CONTEXT) => (
        <AccordionItemContext.Consumer>
          {(ACCORDION_ITEM_CONTEXT) => (
            <details
              className={cn(
                'accordion-item w-full border-b border-gray-200',
                className,
              )}
              {...attr}>
              {attr?.children}
            </details>
          )}
        </AccordionItemContext.Consumer>
      )}
    </AccordionContext.Consumer>
  );
};
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...attr }) => {
    const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);
  return (
    <summary
      className={cn(
        'accordion-trigger accordion-details-summary marker:hidden flex flex-row items-center justify-between list-none p-2 text-gray-900 font-medium cursor-pointer',
        className,
      )}
      onClick={() => {
        setIsAccordionOpen(!isAccordionOpen)
      }}
      {...attr}>
      <span className="accordion-trigger-summary-content">
        {attr?.children}
      </span>
      <span className="accordion-chevronIcon-wrapper">
        {!isAccordionOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </span>
    </summary>
  );
};
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <div
      className={cn(
        'accordion-content p-2 font-normal text-gray-500',
        className,
      )}
      {...attr}>
      {attr?.children}
    </div>
  );
};
AccordionContent.displayName = 'AccordionContent';

export { AccordionGroup, AccordionItem, AccordionTrigger, AccordionContent };
