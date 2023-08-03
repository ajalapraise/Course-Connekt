import React from 'react'
import { useState } from 'react'
import './faqdetails.css'
export interface FAQProps {
    question: string,
    answer: string,
    id: number
}

export const FAQData = [
    {
        question: 'What is CourseConnekt?',
        answer: 'CourseConnekt is a platform that provides a wide range of courses to students. It is a platform that connects students with the best courses available online.',
        id: 1
    },

    {
        question: 'How do I enroll in a course?',
        answer: 'You can enroll in a course by clicking on the Apply button on the course page. You will be redirected to the course page where you can start the course.',
        id: 2
    },

    {
        question: "What if I don't like the course?",
        answer: 'You can drop the course anytime you want. You can also start another course if you want to.',
        id: 3
    },

    {
        question: 'What if I have any queries?',
        answer: 'You can contact us through the Contact Us page. We will get back to you as soon as possible.',
        id: 4
    },

    {
        question: 'Whats the duration of the course?',
        answer: 'The duration of the course depends on the course you choose and how fast you complete the course.',
        id: 5
    },

    {
        question: ' Will I get a certificate after completing the course?',
        answer: 'No, we do not provide any certificate after completing the course.',
        id: 6
    }

]

export const FAQlayout: React.FC<FAQProps> = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 py-3 faq-cont">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
                <h3 className="text-lg font-semibold">{question}                 <span className={`transition-transform transform ${isOpen ? 'rotate-0' : '-rotate-180'}`}>
                    &#x25BE;
                </span></h3>

            </div>
            {isOpen && <p className="mt-2">{answer}</p>}
        </div>
    )
}