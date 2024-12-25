import React from 'react';

const PdfViewer = ({ pdfUrl }) => (
  <div style={{ height: '750px' }}>
    <iframe
    src={`https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`}
    width="100%"
    height="600px"
    title="PDF Viewer"
  />
  </div>
);

export default PdfViewer;