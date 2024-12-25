import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewer = ({ pdfUrl }) => {
  
  
  useEffect(() => {
    if (pdfjs) {
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    }
  }, []);
  
  return (
    <div>
      <h2>PDF Viewer</h2>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;