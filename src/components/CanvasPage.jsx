import { ColorPicker, Divider, Tooltip } from "antd";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import React, { useEffect, useState } from "react";
import pageIcon from '../../public/editor/add-page.svg';
import brushIcon from '../../public/editor/brush.svg';
import backgroundIcon from '../../public/editor/change-background-color.svg';
import clearIcon from '../../public/editor/clear-page.svg';
import deleteIcon from '../../public/editor/delete.svg';
import downloadIcon from '../../public/editor/download.svg';
import redoIcon from '../../public/editor/redo.svg';
import textIcon from '../../public/editor/text-insert.svg';
import thickLine from '../../public/editor/thick-line.svg';
import thinLine from '../../public/editor/thin-line.svg';
import undoIcon from '../../public/editor/undo.svg';


import Image from "next/image";

const CanvasPage = ({downloadAllPages, addPage}) => {
  const inputRef = React.useRef(null);
  const { editor, onReady } = useFabricJSEditor();

  const history = [];
  const [color, setColor] = useState("#ffffff");
  const [cropImage, setCropImage] = useState(true);
  const [isDrawing, setIsDrawing] = useState(false);
  const [freeDrawingBrushWidth, setFreeDrawingBrushWidth] = useState(5);

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }

    if (cropImage) {
      editor.canvas.__eventListeners = {};
      return;
    }

    if (!editor.canvas.__eventListeners["mouse:wheel"]) {
      editor.canvas.on("mouse:wheel", function (opt) {
        var delta = opt.e.deltaY;
        var zoom = editor.canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        editor.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
    }

    if (!editor.canvas.__eventListeners["mouse:down"]) {
      editor.canvas.on("mouse:down", function (opt) {
        var evt = opt.e;
        if (evt.ctrlKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:move"]) {
      editor.canvas.on("mouse:move", function (opt) {
        if (this.isDragging) {
          var e = opt.e;
          var vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:up"]) {
      editor.canvas.on("mouse:up", function (opt) {
        // on mouse up we want to recalculate new interaction
        // for all objects, so we call setViewportTransform
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });
    }

    editor.canvas.renderAll();
  }, [editor]);

  const addBackground = () => {
    if (!editor || !fabric) {
      return;
    }
    //change background color
    editor.canvas.setBackgroundColor(color, editor.canvas.renderAll.bind(editor.canvas));
    
    // fabric.Image.fromURL(
    //   "https://thegraphicsfairy.com/wp-content/uploads/2019/02/Anatomical-Heart-Illustration-Black-GraphicsFairy.jpg",
    //   (image) => {
    //     editor.canvas.setBackgroundImage(
    //       image,
    //       editor.canvas.renderAll.bind(editor.canvas)
    //     );
    //   }
    // );
  };

  const fromSvg = () => {
    fabric.loadSVGFromString(
      `
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="500" height="500" viewBox="0 0 500 500" xml:space="preserve">
    
    <g transform="matrix(1 0 0 1 662.5 750)"  >
      <image style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"  xlink:href="https://thegraphicsfairy.com/wp-content/uploads/2019/02/Anatomical-Heart-Illustration-Black-GraphicsFairy.jpg" x="-662.5" y="-750" width="1325" height="1500"></image>
    </g>
    <g transform="matrix(1 0 0 1 120.5 120.5)"  >
    <circle style="stroke: rgb(53,54,58); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;"  cx="0" cy="0" r="20" />
    </g>
    <g transform="matrix(1 0 0 1 245.5 200.5)"  >
    <line style="stroke: rgb(53,54,58); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"  x1="-75" y1="-50" x2="75" y2="50" />
    </g>
    <g transform="matrix(1 0 0 1 141.4 220.03)" style=""  >
        <text xml:space="preserve" font-family="Arial" font-size="16" font-style="normal" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(53,54,58); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-16.9" y="-5.46" >inset</tspan><tspan x="-16.9" y="15.51" >text</tspan></text>
    </g>
    <g transform="matrix(1 0 0 1 268.5 98.5)"  >
    <rect style="stroke: rgb(53,54,58); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;"  x="-20" y="-20" rx="0" ry="0" width="40" height="40" />
    </g>
    </svg>`,
      (objects, options) => {
        editor.canvas._objects.splice(0, editor.canvas._objects.length);
        editor.canvas.backgroundImage = objects[0];
        const newObj = objects.filter((_, index) => index !== 0);
        newObj.forEach((object) => {
          editor.canvas.add(object);
        });

        editor.canvas.renderAll();
      }
    );
  };

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.setHeight(500);
    editor.canvas.setWidth(889);
    addBackground();
    editor.canvas.renderAll();
  }, [editor?.canvas.backgroundImage]);

  const increaseSize = () => {
    let size = freeDrawingBrushWidth + 5;
    editor.canvas.freeDrawingBrush.width = size;
    setFreeDrawingBrushWidth(size); 
  };
  const decreaseSize = () => {
    let size = freeDrawingBrushWidth - 5;
    if (size < 5) {
      size = 5;
    }
    editor.canvas.freeDrawingBrush.width = size;
    setFreeDrawingBrushWidth(size);
  };

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.freeDrawingBrush.color = color;
    editor.setStrokeColor(color);
  }, [color]);

  const toggleDraw = () => {
    editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
    setIsDrawing(editor.canvas.isDrawingMode);
  };
  const undo = () => {
    if (editor.canvas._objects.length > 0) {
      history.push(editor.canvas._objects.pop());
    }
    editor.canvas.renderAll();
  };
  const redo = () => {
    if (history.length > 0) {
      editor.canvas.add(history.pop());
    }
  };

  const clear = () => {
    editor.canvas._objects.splice(0, editor.canvas._objects.length);
    history.splice(0, history.length);
    editor.canvas.renderAll();
  };

  const removeSelectedObject = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };

  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };
  const addText = () => {
    editor.addText("inset text");
  };

  const exportSVG = () => {
    const svg = editor.canvas.toSVG();
    console.info(svg);
  };

  const handleAddImage = () => {
    const file = inputRef.current.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageUrl = event.target.result;
      fabric.Image.fromURL(imageUrl, (image) => {
        // Adjust the image properties as needed
        image.set({ left: 0, top: 0 });
        // add image to canvas ref
        editor.canvas.add(image);
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="editor flex flex-col items-center my-4">
      <section className="flex flex-row wrap bg-blue-200 p-2 rounded-md items-center">
        <Divider type="vertical"/>
        <Tooltip title="Add Page">
          <span onClick={addPage} className="editor-icon">
            <Image src={pageIcon} alt="addPage" height={30} width={30}/>
          </span>
        </Tooltip>
        <Tooltip title="Download All Page">
          <span onClick={downloadAllPages} className="editor-icon">
            <Image src={downloadIcon} alt="downloadPage" height={30} width={30}/>
          </span>
        </Tooltip>
        <Divider type="vertical"/>
        <span onClick={undo} className="editor-icon">
          <Image src={undoIcon} alt="undo" height={30} width={30}/>
        </span>
        <span onClick={redo} className="editor-icon">
          <Image src={redoIcon} alt="redo" height={30} width={30}/>
        </span>
        <Divider type="vertical"/>
        <span onClick={toggleDraw} className={`editor-icon ${isDrawing ? 'active' : ''}`}>
          <Image src={brushIcon} alt="enable brush" height={30} width={30}/>
        </span>
        <span onClick={increaseSize} className={`editor-icon `}>
          <Image src={thickLine} alt="increaseSize" height={30} width={30}/>
        </span>
        <span onClick={decreaseSize} className={`editor-icon`}>
          <Image src={thinLine} alt="decreaseSize" height={30} width={30}/>
        </span>
        <Divider type="vertical"/>
        <span onClick={() => addBackground()} className={`editor-icon`}>
          <Image src={backgroundIcon} alt="Change Background Color" height={30} width={30}/>
        </span>
        <ColorPicker
          format="hex"
          value={color}
          onChange={(value) =>{
            setColor('#'+value.toHex());
          }}
        />
        <Divider type="vertical"/>
        <input ref={inputRef} className="custom-file-input" type="file" accept="image/*" onChange={handleAddImage} />
        <span onClick={addText} className={`editor-icon`}>
          <Image src={textIcon} alt="addText" height={30} width={30}/>
        </span>
        <span onClick={clear} className={`editor-icon`}>
          <Image src={clearIcon} alt="clearPage" height={30} width={30}/>
        </span>
        <span onClick={removeSelectedObject} className={`editor-icon`}>
          <Image src={deleteIcon} alt="deletePage" height={30} width={30}/>
        </span>
        <Divider type="vertical"/>
        {/* <Button onClick={exportSVG}>
          {" "}
          ToSVG
        </Button>
        <Button onClick={fromSvg}>
          fromsvg
        </Button> */}
      </section>
      <FabricJSCanvas className={`canvas-page w-[889px] h-[500px] my-10`} onReady={onReady} 
        style={{"display": "inline-block"}}
      />
    </div>
  );
}

export default CanvasPage;