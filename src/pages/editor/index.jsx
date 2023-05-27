import Image from 'next/image'
import { Inter } from 'next/font/google'
import CanvasPage from '@/components/CanvasPage'
import { useRef, useState } from 'react';
import PptxGenJS from 'pptxgenjs';

const inter = Inter({ subsets: ['latin'] })

export default function EditorPage() {
  const [canvasPages, setCanvasPages] = useState([1]);
  const EditorRefs = useRef([]);

  const addPage = () => {
    const newPage = canvasPages.length + 1;
    setCanvasPages([...canvasPages, newPage]);
  };

  const deletePage = (page) => {
    const updatedPages = canvasPages.filter((p) => p !== page);
    setCanvasPages(updatedPages);
  };

  const downloadAllPages = () => {
    const pptx = new PptxGenJS();

    EditorRefs.current.forEach((page, index) => {
      const canvas = page.getElementsByTagName(`canvas`)[0];
      // add slide
      const slide = pptx.addSlide();
      const dataURL = canvas.toDataURL();
      slide.addImage({ data: dataURL, x: 0, y: 0, w: "100%", h: "100%" });
      });
      pptx.writeFile({ fileName: "Sample Presentation.pptx" });
  };

  return (
    <div>
      <h1>My Canvas Pages</h1>
      <button onClick={addPage}>Add Page</button>
      <button onClick={downloadAllPages}>Download All Pages</button>
      {canvasPages.map((page, index) => (
        <div 
          key={index}
          ref={(el) => (EditorRefs.current[index] = el)}
        >
          <CanvasPage/>
          <button onClick={() => deletePage(page)}>Delete Page</button>
        </div>
      ))}
      
    </div>
  )
}
