import SectionTitle from "./utils/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto " >
        <SectionTitle>Popular Frequently Asked Questions</SectionTitle>
        <p className="mt-8 lg:mx-40 text-center mb-10">
          Simply Good Food prepares and delivers organically sourced, fresh
          meals to your door nationwide. Unlike other meal kit delivery services
          that need preparation and cleaning, our meals are delivered ready to
          consume. Our mission is to make healthy eating easy and enjoyable
          while not sacrificing flavor. Do you have a question regarding our
          shipping service?
        </p>

        <div className=" lg:mx-44">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger >What are the foods like Steel Yat? How does the mail plan work?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger >How Do I Eat Fresh and Lean?</AccordionTrigger>
              <AccordionContent>
              imply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long do my meals last?</AccordionTrigger>
              <AccordionContent>
              imply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I don t eat them all at once?</AccordionTrigger>
              <AccordionContent>
              imply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What s in the food? Is it organic? Is it gluten free?</AccordionTrigger>
              <AccordionContent>
              imply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
