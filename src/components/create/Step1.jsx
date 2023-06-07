import { Button, Input, Upload, message } from 'antd';
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

function Step1() {
  return (
    <div className='flex flex-row justify-center'>
        <div className='step-1-container w-[80vw] flex flex-col justify-evenly'>
            <div className='step-title '>STEP 1</div>
            <div className='step-tips'>
                <span className='font-bold'>
                Tips: 
                </span>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='step-input-container flex flex-col justify-center'>
                <Input.TextArea rows={20} placeholder='Type or paste (Ctrl+V) your text here or upload a document'/>
            </div>
            <div className='step-button-container flex flex-row justify-center'>
                <div className='next-step-button cursor-pointer'>Next Step</div>
            </div>
        </div>
    </div>
  )
}

export default Step1