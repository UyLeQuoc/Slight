import { Button, ConfigProvider, Input, Upload, message } from 'antd';
import React from 'react'
import { useState } from 'react';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        // extractText(info.file)
        //     .then((text) => console.log(text))
        //     .catch((error) => console.error(error))
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

function Step1({nextStep, topic, setTopic, message}) {
  return (
    <div className='flex flex-row justify-center'>
        <div className='step-1-container w-[80vw] flex flex-col justify-evenly'>
            <div className='step-title '>STEP 1</div>
            <div className='step-tips text-lg'>
                <span className='font-bold mr-2'>
                Tips:  
                </span>
                 Choose Your Topic
            </div>
            <div className='message-container mt-1rem text-center'>{'ERROR: ' + message}</div>
            <div className='step-input-container flex flex-col justify-center'>
                <Input.TextArea rows={20} value={topic} onChange={(e) => setTopic(e.target.value)} placeholder= 'Type or paste (Ctrl+V) your text here or upload a document.'/>
            </div>
            <div className='step-button-container flex flex-row justify-center'>
            <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: '#e52991',
                  },
                }}
              >
              <Button size='large' type='primary' className='cursor-pointer bg-[#e52991]' onClick={nextStep}>Next Step</Button>
            </ConfigProvider>
            </div>
        </div>
    </div>
  )
}

export default Step1