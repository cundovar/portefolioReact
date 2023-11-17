import React from "react";
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from "classnames";

import { Cammenbert } from "./cammenbert";


const EnsavoirPlus = () => (
    <Accordion.Root className="AccordionRoot" type="single" defaultValue="" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>en savoir plus</AccordionTrigger>
      <AccordionContent className="w-1/2">   <Cammenbert  /></AccordionContent>
    </Accordion.Item>

   
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));


export default EnsavoirPlus;
