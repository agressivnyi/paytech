import Accordion from "./ui/accordion";

export default function FAQs() {
  return (
    <section className="flex flex-col items-center justify-center gap-[64px]">
      <h2 className="text-[40px] font-bold">FAQs</h2>
      <div className="flex flex-col gap-y-6">
        <Accordion title="What credit score do I need to apply for a credit card?" open>
          <p className="text-base text-[#ADB2B1] font-normal">
            The required credit score may vary depending on the specific credit
            card. Generally, a good to excellent credit score (typically 670 or
            above) increases your chances of approval for premium credit cards.
          </p>
        </Accordion>
        <Accordion title=" How can I apply for a credit card online?">
          <p className="text-base text-[#ADB2B1] font-normal">
            The required credit score may vary depending on the specific credit
            card. Generally, a good to excellent credit score (typically 670 or
            above) increases your chances of approval for premium credit cards.
          </p>
        </Accordion>
        <Accordion title="Are there any annual fees associated with the credit card?">
          <p className="text-base text-[#ADB2B1] font-normal">
            The required credit score may vary depending on the specific credit
            card. Generally, a good to excellent credit score (typically 670 or
            above) increases your chances of approval for premium credit cards.
          </p>
        </Accordion>
        <Accordion title="How long does it take to receive the credit card once approved?">
          <p className="text-base text-[#ADB2B1] font-normal">
            The required credit score may vary depending on the specific credit
            card. Generally, a good to excellent credit score (typically 670 or
            above) increases your chances of approval for premium credit cards.
          </p>
        </Accordion>
        <Accordion title=" How can I check my credit card balance and transactions?">
          <p className="text-base text-[#ADB2B1] font-normal">
            The required credit score may vary depending on the specific credit
            card. Generally, a good to excellent credit score (typically 670 or
            above) increases your chances of approval for premium credit cards.
          </p>
        </Accordion>
        <Accordion title="What should I do if my credit card is lost or stolen?">
          <p className="text-base text-[#ADB2B1] font-normal">
            The required credit score may vary depending on the specific credit
            card. Generally, a good to excellent credit score (typically 670 or
            above) increases your chances of approval for premium credit cards.
          </p>
        </Accordion>
        <Accordion title="Is my credit card information secure?">
          <p className="text-base text-[#ADB2B1] font-normal">
            The required credit score may vary depending on the specific credit
            card. Generally, a good to excellent credit score (typically 670 or
            above) increases your chances of approval for premium credit cards.
          </p>
        </Accordion>
      </div>
    </section>
  );
}
