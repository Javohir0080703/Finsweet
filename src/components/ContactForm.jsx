import React, { useState } from 'react'
import axios from 'axios';

const ContactForm = () => {
  // email
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  // name
  const [inputValue, setInputValue] = useState('');
  const [errorName, setErrorName] = useState('');
  //ketayotgan malumot
  const [nameSend, setNameSend] = useState('');
  const [emailSend, setEmailSend] = useState('');
  const [messageSend, setMessageSend] = useState('');
  const [contextSend, setcontextSend] = useState('');
  const [SubjectSend, setSubjectSend] = useState('');
  const [subject, setSubject] = useState(false)
  // const [subjecttwo, setSubjectTwo] = useState()
  //   email
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    // setNameSend('');
    // setEmailSend('');
    // setMessageSend('');
    // setcontextSend('');
    // setSubjectSend('')
    if (contextSend == "" || SubjectSend == "" || nameSend == "" || emailSend == "") {
      setSubject(true)
    } else {
      setSubject(false)
      const telegram_bot_id = '6449286041:AAHA1VJlhGPS3QKrpeGowx9wGPjhgJ6W53Q';
      const chat_id = '5659934636';

      const telegramMessage = `Ismi: ${nameSend}\nEmail: ${emailSend}\nProvide context: ${contextSend}\nSelect Subject: ${SubjectSend}\nMessage: ${messageSend}`;

      axios


        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setInputValue('');
          setEmail('');
          setMessageSend('');
          setcontextSend('');
          setSubjectSend('')

        })
        alert("Malumot yuborildi")

    }
    if (!validateEmail(email)) {
      setError('Hatolik! Malumot email formatida emas');
      return;
    }
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // name
  const handleChangeName = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 40) {
      setErrorName('Hatolik! Malumot 40 ta harfdan oshib ketdi');
    } else {
      setErrorName('');
    }
  };

  const handleSubmitName = (event) => {
    event.preventDefault();

    if (inputValue.length > 40) {
      setError('Hatolik! Malumot 40 ta harfdan oshib ketdi');
      return;
    }
    // Malumotni yuborish yoki qo'shimcha ishlarni bajarish
  };


  // input

  return (
    <section className='qqq:py-[128px] eee:py-[50px] py-8 bg-white'>
      <div className='containerb'>
        <h1 className='text-#282938 text-center text-3xl ddd:text-5xl font-semibold leading-[64px] mb-4'>Contact Us</h1>
        <p className='text-center text-#282938 text-xs ddd:text-base leading-5 ddd:leading-7 mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
        <div className='ddd:px-[77px] px-11 pt-[55px] pb-[70px] w-full max-w-[1061px] bg-#F4F6FC rounded-xl mx-auto'>
          <form onSubmit={handleSubmitInput} className='grid grid-cols-1 640px:grid-cols-2 gap-x-8 gap-y-6'>
            <div onChange={handleChangeName}>
              <label className='text-black text-lg font-medium leading-8 mb-1.5 block'>Name</label>
              <input max={10} onChange={(e) => setNameSend(e.target.value)} value={inputValue} type="text" className='py-[18px] pl-8 w-full max-w-[438px] border-[#000]/[0.12] border rounded-lg bg-transparent' placeholder='Enter your name' />
              {subject && inputValue.trim() === '' && <p>Iltimos, ma'lumotni kiriting.</p>}
            </div>
            <div onChange={handleChange}>
              <label className='text-black text-lg font-medium leading-8 mb-1.5 block'>Email</label>
              <input onChange={(e) => setEmailSend(e.target.value)} type="email" value={email} className='py-[18px] pl-8 w-full max-w-[438px] border-[#000]/[0.12] border rounded-lg bg-transparent' placeholder='Enter your Emial' />
              {subject && email.trim() === '' && <p>Iltimos, ma'lumotni kiriting.</p>} 
            </div>
            <div>
              <label className='text-black text-lg font-medium leading-8 mb-1.5 block'>Subject</label>
              <input onChange={(e) => setcontextSend(e.target.value)} type="text" value={contextSend} className='py-[18px] pl-8 w-full max-w-[438px] border-[#000]/[0.12] border rounded-lg bg-transparent' placeholder='Provide context' />
              {subject && contextSend.trim() === '' && <p>Iltimos, ma'lumotni kiriting.</p>}
           
            </div>
            <div>
              <label className='text-black text-lg font-medium leading-8 mb-1.5 block'>Subject</label>
              <input onChange={(e) => setSubjectSend(e.target.value)} type="text" value={SubjectSend} className='py-[18px] pl-8 w-full max-w-[438px] border-[#000]/[0.12] border rounded-lg bg-transparent' placeholder='Select Subject' />
              {subject && SubjectSend.trim() === '' && <p>Iltimos, ma'lumotni kiriting.</p>}
            </div>
            <textarea onChange={(e) => setMessageSend(e.target.value)} value={messageSend} placeholder='Write your  question here' className='block 640px:col-span-2 pt-[18px] pb-[92px] pl-8 w-full max-w-[908px] border border-[#000]/[0.12] rounded-lg bg-transparent  overflow-hidden text-black text-base leading-7  h-full max-h-[138px] min-h-[138px] '></textarea>
            <button type='submit' className='px-[51px] py-[15px] bg-#282938 w-full max-w-[254px] rounded-[41px] text-#F4F6FC text-lg font-semibold leading-8' >Yuborish</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm