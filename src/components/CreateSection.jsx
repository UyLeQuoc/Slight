import React from 'react'
import { useState } from 'react';
import Step1 from './create/Step1';
import Step2 from './create/Step2';
function CreateSection() {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [numberOfSlides, setNumberOfSlides] = useState(5);
  const [wordsPerSlide, setWordsPerSlide] = useState(50);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [submitBtnName, setSubmitBtnName] = useState('Submit'); 
  const [message, setMessage] = useState('')

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
  console.log('isLoading', isFetchLoading)

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitBtnName("Submitted");
    console.log("submitHandler", topic, numberOfSlides, wordsPerSlide);
    setIsFetchLoading(true);
    fetch('https://slight-gen-api.onrender.com/generate' + 
    '?topic=' + topic +
    '&mode=0' +
    '&n_slides=' + numberOfSlides +
    '&n_words_per_slide=' + wordsPerSlide
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic: topic,
        mode: 0,
        n_slides: numberOfSlides,
        n_words_per_slide: wordsPerSlide
      })
    })
    .then(res => res.blob())
    .then(data => {
      var a = document.createElement("a");
      a.href = window.URL.createObjectURL(data);
      a.download = topic + '.pptx';
      a.click();
      setIsFetchLoading(false);
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
    </div>
  )
}

export default CreateSection