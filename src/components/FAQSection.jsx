import React, { useState } from 'react';
import Icon from './Icon';
import  '../Style/faqsection.css'
const FAQSection = () => {
    const [activeIndexes, setActiveIndexes] = useState([]);
    
    const faqs = [
      {
        question: "What are the school hours and daily schedule?",
        answer: "Our school hours are from 8:00 AM to 3:30 PM, Monday to Friday. We offer before-school care starting at 7:00 AM and after-school care until 6:00 PM for an additional fee. The daily schedule includes academic blocks, lunch, recess, and specialized activities like art, music, and physical education."
      },
      {
        question: "How do you handle food allergies and dietary restrictions?",
        answer: "We take allergies and dietary restrictions very seriously. We maintain a nut-free environment and our kitchen staff is trained to handle special dietary needs. Please inform us about any allergies during registration, and we'll work with you to create a safe meal plan for your child."
      },
      {
        question: "What is the student-to-teacher ratio at Little Learners Academy?",
        answer: "Our student-to-teacher ratios are designed to ensure personalized attention: 1:6 for toddlers, 1:8 for preschoolers, and 1:12 for kindergarten. We also have teaching assistants in each classroom to provide additional support."
      },
      {
        question: "How do you handle discipline and behavior management?",
        answer: "We use a positive discipline approach that focuses on teaching appropriate behavior rather than punishment. We help children understand their emotions, develop self-regulation skills, and learn conflict resolution. Parents are kept informed about any behavioral concerns, and we work together to support each child's social-emotional development."
      },
      {
        question: "How do I apply for admission to Little Learners Academy?",
        answer: "The admission process begins with submitting an online application form available on our website. After reviewing your application, we'll invite you and your child for a campus tour and an informal assessment. Following a successful assessment, an offer of admission will be made based on availability."
      }
    ];
    

    const toggleFAQ = (index) => {
      const faqItems = document.querySelectorAll('.faq-item');
      const answers = document.querySelectorAll('.answer');
      
      if (faqItems[index].classList.contains('active')) {
        faqItems[index].classList.remove('active');
        answers[index].classList.remove('show');
      } else {
        faqItems[index].classList.add('active');
        answers[index].classList.add('show');
      }
      
      if (activeIndexes.includes(index)) {
        setActiveIndexes(activeIndexes.filter(i => i !== index));
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    };
    
    return (
      <section className="faq-section">
        <div className="container">
          <h2 className="benefits-title">Frequently Asked Questions</h2>
          <p className="faq-intro">
            Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.
          </p>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className="question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className="plus-icon">
                    <Icon name="plus" />
                  </span>
                </div>
                <div className="answer">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default FAQSection ;