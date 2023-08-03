import React from 'react'
import { FAQData } from '../../components/faqDetails/FAQData'
import { FAQlayout } from '../../components/faqDetails/FAQData'
import { FAQProps } from '../../components/faqDetails/FAQData'

const Faq: React.FC<FAQProps> = () => {

    return (
        <div className="container mx-auto px-4 py-8 faq">
            <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
            {FAQData.map((item, id) => (
                <FAQlayout key={id} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}

export default Faq