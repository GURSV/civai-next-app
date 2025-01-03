'use client';

import { FileUpload } from './ui/file-upload';

function DocumentUpload() {
  const handleFileChange = (files: File[]) => {
    console.log('Files uploaded:', files);
    // Handle files here
  };

  return (
    <div className="p-4">
      <FileUpload onChange={handleFileChange} />
    </div>
  );
}

export default DocumentUpload;