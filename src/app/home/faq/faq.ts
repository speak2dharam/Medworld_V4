import { Component } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  imports: [SideForm,NgbAccordionModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  faqs = [
    {
      question:` Why should I get treatment in India?`,
      answer:`A strong system of healthcare in India has made it a much sought after destination for medical services. The country is known for its high quality and world class medical facilities that boast economical pricing, robust infrastructure and top notch health care services.`
    },
    {
      question:`Are the hospitals in India well equipped and up to international standards?`,
      answer:`India has several private hospitals that are designed to provide world-class medical care in India. These hospitals utilize some of the best medical equipment that is available world-wide. MedWorld has carefully evaluated and selected only those hospitals that meet very high international standards to be a part of our network. MedWorld India has allainces with only the top internationally certified hospitals in India and abroad. All hospitals are certified by Joint Commission International which ensures top quality and stringent patient care.`
    },
    {
      question:`I want treatment in India. What should I do?`,
      answer:`Once you have decided that you want to get treatment in India you can email us your latest medical reports and accompanying X-Rays, MRI Scans and other relevant medical documents at care@medworldindia.com or call us on +91-9811058159 for one to one discussion with our executives.`
    },
    {
      question:`What will you do with my reports?`,
      answer:`Once we receive your reports, we will get them reviewed by our medical experts and will send you a detailed treatment package consisting of doctor’s diagnosis, treatment plan, cost of treatment, duration of stay in hospital and duration of stay in India besides other relevant details.`
    },
    {
      question:`Can I speak to the doctor in India before going on my trip?`,
      answer:`Medworld will be happy to arrange a phone consultation/video conference with the corresponding physician in India and ensure that all of your questions are answered. We provide this as part of our total package, as we want you to be totally comfortable with your decision to go to India for your medical needs. You can also have your doctor consult with our doctors in India.`
    },
    {
      question:`I received the treatment package and want to get treatment in India. How should I proceed?`,
      answer:`Once you have confirmed to us that you want to proceed further to get treatment in India, our team will help you with the Indian medical visa assistance and documentation filing.`
    },
    {
      question:`How will I get the Indian Medical Visa?`,
      answer:`Medworld India will arrange for you the visa invitation letter and other documents as and when required. Once you have all the documents ready, you can apply to the nearest Indian Embassy in your country.`
    },
    {
      question:`How much time will it take to get Indian Medical Visa?`,
      answer:`It depends upon which country you are applying and the local rules and regulations applicable in your country.`
    },
    {
      question:`How do I make payments?`,
      answer:`You will be required to make payment per hospital policy. Usually, this involves paying a deposit prior to undergoing any diagnostic tests and/or procedures. A final bill will be presented to you prior to discharge from the hospital.`
    },
    {
      question:`What modes of payment are accepted for getting treatment in India?`,
      answer:`The hospital accepts payments through Travellers Cheque, major Credit Cards (Master, Visa or Amex), Wire Transfer and Foreign Currencies from international patients.`
    },
    {
      question:`Can I choose my own hotels according to my budget?`,
      answer:`Yes, of course. We will provide you full assistance in getting hotels within your budget.`
    },
    {
      question:`How much does a typical hotel cost?`,
      answer:`Hotels in India start from USD 60 and can go over to USD 1000 per night. A typical clean and good hotel will cost around USD 70 per day.`
    },
    {
      question:` Can I get my home country cuisine?`,
      answer:`We look after our clients’ needs. We provide you with your home country cuisine which can be Continental, African, Arabic food etc.`
    },
    {
      question:`Can you arrange sighting tour for me?`,
      answer:`Yes. We arrange private sight-seeing tours for our clients.`
    },
    {
      question:`I can only speak my native language?`,
      answer:`No worries. We have fully trained certified interpreters for major languages be it Arabic, French, English etc.`
    }
  ];
}
