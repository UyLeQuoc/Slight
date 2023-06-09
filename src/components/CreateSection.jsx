import React from 'react'
import { useState } from 'react';
import Step1 from './create/Step1';
import Step2 from './create/Step2';
import { Button, Modal } from 'antd';


function CreateSection() {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [numberOfSlides, setNumberOfSlides] = useState(5);
  const [wordsPerSlide, setWordsPerSlide] = useState(50);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [submitBtnName, setSubmitBtnName] = useState('Submit'); 
  const [message, setMessage] = useState('')

  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 5;
    const instance = modal.success({
      title: 'Slide generated successfully',
      content: `Your will be download automatically. This popup will close after ${secondsToGo} second.`,
      okType: 'default',
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);

  };

  const nextStep = () => {
    if (topic.length <= 0){
      setMessage("You must enter a topic.");
      return;
    }
    if (topic.length > 150){
      setMessage("Your topic is too long. The limit is 150 chracters or roughly 25 words.");
      return;
    }
    setStep(step + 1);
  
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  const submitHandler = (e) => {
    e?.preventDefault();
    setSubmitBtnName("Submitted");
    console.log("submitHandler", topic, numberOfSlides, wordsPerSlide);
    setIsFetchLoading(true);
    fetch('https://slight-gen-api.onrender.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic: topic,
        mode: 0,
        n_slides: numberOfSlides,
        n_words_per_slide: wordsPerSlide,
        api_token: '2YHoC7gp9rgEwzbwJyd_hg%3D%3D'
      })
    })
    .then(res => res.blob())
    .then(data => {
      var a = document.createElement("a");
      a.href = window.URL.createObjectURL(data);
      a.download = topic + '.pptx';
      a.click();
      countDown();
      setIsFetchLoading(false);
      setSubmitBtnName('Submit');
    })
    .catch(err => {
      console.log(err);
      showModal();
      setIsFetchLoading(false);
      setSubmitBtnName('Submit');
    });
  }

  return (
    <div className='create-step-container'>
       {
          step === 1 ? <Step1 nextStep={nextStep} topic={topic} setTopic={setTopic} message={message}/> : 
          (
            <Step2 
              prevStep={prevStep} 
              numberOfSlides={numberOfSlides}
              setNumberOfSlides={setNumberOfSlides}
              wordsPerSlide={wordsPerSlide}
              setWordsPerSlide={setWordsPerSlide}
              submitHandler={submitHandler}
              isFetchLoading={isFetchLoading}
              submitBtnName={submitBtnName}
            ></Step2>
            
          )
          
       }
       <Modal title="Generation failed" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
       footer={
        [
          <Button onClick={handleCancel}>Cancel</Button>,
          <Button style={{backgroundColor: '#e52991', color: '#fff'}} onClick={handleOk}>OK</Button>
        ]
       }
       >
        <p>There was an error with your request.</p> 
        <p>Please check your internet connection and try to stick to our recommended number of slides and words and then try again.</p>
      </Modal>
       {contextHolder}
    </div>
  )
}

export default CreateSection