import { fabric } from "fabric";
import React, { useEffect, useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function EditorPlatform() {
  const [editors, setEditors] = useState([]);

  useEffect(() => {
    const newEditors = [];
    for (let i = 0; i < 2; i++) {
      const { editor, onReady } = useFabricJSEditor();
      newEditors.push({ editor, onReady });
    }
    setEditors(newEditors);
  }, []);

  const addPage = () => {
    const { editor, onReady } = useFabricJSEditor();
    setEditors([...editors, { editor, onReady }]);
  };

  const deletePage = (pageIndex) => {
    const updatedEditors = [...editors];
    updatedEditors.splice(pageIndex, 1);
    setEditors(updatedEditors);
  };


  

  

  return (
      <div>
        <h1>FabricJS React Sample</h1>
        {/* <button onClick={onAddCircle}>Add circle</button>
        <button onClick={onAddRectangle} disabled={!cropImage}>
          Add Rectangle
        </button> */}
        <button onClick={addPage}>Add Page</button>
        {editors.map((editorData, index) => (
          <div key={index}>
            <FabricJSCanvas canvas={editorData.editor.canvas} className="sample-canvas" onReady={editorData.onReady} />
            <button onClick={() => deletePage(index)}>Delete Page</button>
          </div>
        ))}
      </div>
    )
  }
export default EditorPlatform