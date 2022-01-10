import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function DownloadFile() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={{ url: "http://127.0.0.1:8000/download/?name=Sub phonics.pdf" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}
export default DownloadFile;