import React, { useState } from "react";
import docicon from "../../assets/images/mingcute_doc-line.svg";
import pdficon from "../../assets/images/fluent_document-pdf-16-filled.svg";
import screenshot from "../../assets/images/Vector.svg";
import show from "../../assets/images/show.svg";
import { attachments } from "../constants";

function Attachments() {
  const maxVisibleAttachments = 3;
  const allAttachments = attachments;
  const [showAllAttachments, setShowAllAttachments] = useState(false);
  const attachmentsToShow = showAllAttachments
    ? allAttachments
    : allAttachments.slice(0, maxVisibleAttachments);
  const remainingAttachmentsCount =
    allAttachments.length - maxVisibleAttachments;

  const toggleAttachments = () => {
    setShowAllAttachments(!showAllAttachments);
  };
  return (
    <div>
      {" "}
      <div
        className={`justify-start  gap-4 flex flex-wrap ${
          showAllAttachments ? "items-end" : "items-center"
        }`}
      >
        <div
          className={`text-gray-500 text-sm font-normal ${
            showAllAttachments && "w-full"
          }`}
        >
          Attachments:
        </div>
        <div className="max-w-[519px]">
          <div className="justify-start items-start gap-[5px] flex flex-wrap">
            {attachmentsToShow.map((attachment, index) => (
              <div key={index}>
                <div className="w-[142px] px-[13px] py-0.5 rounded-[100px] border border-gray-300 justify-center items-center gap-2.5 flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute">
                      {attachment.type === "doc" ? (
                        <img src={docicon} alt="doc icon" />
                      ) : (
                        ""
                      )}
                      {attachment.type === "pdf" ? (
                        <img src={pdficon} alt="pdf icon" />
                      ) : (
                        ""
                      )}
                      {attachment.type === "xlsx" ? (
                        <img src={screenshot} alt="screenshot icon" />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs font-normal">
                    {attachment.name}
                  </div>
                </div>
              </div>
            ))}
            {showAllAttachments ? (
              ""
            ) : (
              <div className="w-[22px] h-[22px] px-[13px] py-0.5 rounded-[100px] border border-gray-300 justify-center items-center gap-2.5 flex">
                <div className="text-gray-500 text-xs font-normal">
                  +{remainingAttachmentsCount}
                </div>
              </div>
            )}
          </div>
        </div>

        {remainingAttachmentsCount > 0 && (
          <span
            className="text-blue-600 text-sm font-normal cursor-pointer"
            onClick={toggleAttachments}
          >
            {showAllAttachments ? (
              <>
                <div className="flex items-center">
                  Open Ticket
                  <span>
                    <img src={show} alt="open tab" width={24} height={24} />
                  </span>
                </div>
              </>
            ) : (
              "Read more"
            )}
          </span>
        )}
      </div>
    </div>
  );
}

export default Attachments;
