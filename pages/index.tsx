import {
  AccordionContent,
  AccordionGroup,
  AccordionItem,
  AccordionTrigger,
} from '@/components/primitives/accordion';

const AppView: React.FunctionComponent = () => {
  return (
    <div className="app-view m-12">
      <AccordionGroup>
        <AccordionItem>
          <AccordionTrigger>This is an accordion</AccordionTrigger>
          <AccordionContent>This is an accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>This is an accordion</AccordionTrigger>
          <AccordionContent>This is an accordion content</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Accessible. Minimal and Clean UI</AccordionTrigger>
          <AccordionContent>
            This accordion is accessible, has a minimal and clean UI.
            Can have a setup for one open accordion at a time.
          </AccordionContent>
        </AccordionItem>
      </AccordionGroup>
    </div>
  );
};

export default AppView;
