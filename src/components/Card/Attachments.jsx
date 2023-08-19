import React from "react";
import docicon from "../../assets/images/mingcute_doc-line.svg";
import pdficon from "../../assets/images/fluent_document-pdf-16-filled.svg";
import screenshot from "../../assets/images/Vector.svg";

function Attachments() {
  return (
    <div>
      {" "}
      <div className="justify-start items-center gap-3.5 flex">
        <div className="text-gray-500 text-sm font-normal">Attachments:</div>
        <div className="justify-start items-start gap-[5px] flex flex-wrap">
          <div className="w-[142px] px-[13px] py-0.5 rounded-[100px] border border-gray-300 justify-center items-center gap-2.5 flex">
            <div className="w-4 h-4 relative">
              <div className="w-4 h-4 left-0 top-0 absolute">
                <img src={docicon} alt="doc icon" />
              </div>
            </div>
            <div className="text-gray-500 text-xs font-normal">
              Screenshot.doc
            </div>
          </div>
          <div className="w-[139px] px-[13px] py-0.5 rounded-[100px] border border-gray-300 justify-center items-center gap-2.5 flex">
            <img src={pdficon} alt="pdf icon" />
            <div className="text-gray-500 text-xs font-normal">
              Screenshot.pdf
            </div>
          </div>
          <div className="w-[131px] px-[13px] py-0.5 rounded-[100px] border border-gray-300 justify-center items-center gap-2.5 flex">
            <img src={screenshot} alt="screenshot icon" />
            <div className="text-gray-500 text-xs font-normal">
              Screenshot.xsl
            </div>
          </div>
          <div className="w-[22px] h-[22px] px-[13px] py-0.5 rounded-[100px] border border-gray-300 justify-center items-center gap-2.5 flex">
            <div className="text-gray-500 text-xs font-normal">+3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attachments;
