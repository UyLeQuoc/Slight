import { Button, ConfigProvider, Input } from 'antd';
import { Document } from 'docxyz';

function Step1({nextStep, topic, setTopic, message}) {

  function handleFileChange(event) {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileObj);
    reader.onload = function (){
      console.log(fileObj.name);
      var doc = new Document(this.result);
      setTopic(doc.text);
      console.log(doc.text);
    }
  };
  
  return (
    <div className='flex flex-row justify-center'>
        <div className='step-1-container w-[80vw] flex flex-col justify-evenly'>
            <div className='step-title '>STEP 1</div>
            <div className='step-tips text-lg'>
            Enter your topic, a detailed description of 10-15 words will be perfect.  

            Don't have a topic? Try one of these: 'Albert Einstein', 'Cristiano Ronaldo' 

            </div>

            {message && <div className='message-container mt-1rem text-center'>{'ERROR: ' + message}</div>}
            <div className='step-input-container flex flex-col justify-center'>
              <input id='file-upload' className='file-input' type="file" accept='.docx' onChange={handleFileChange} ></input>
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
            <Button className='w-fit mr-4' size='large'>
            <label for='file-upload'>Upload Document</label>
            </Button>
              <Button size='large' type='primary' className='cursor-pointer bg-[#e52991]' onClick={nextStep}>Next Step</Button>
            </ConfigProvider>
            </div>
        </div>
    </div>
  )
}

export default Step1