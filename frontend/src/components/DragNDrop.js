import React from 'react';
import { useDropzone } from 'react-dropzone';
import './styles.css'

const DragNDrop = ({operationToBePerformed,files,setFiles}) => {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: async(acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      await operationToBePerformed(acceptedFiles[0])
    },
  });

  
  return (
    <div>
      <div {...getRootProps()} className='rootStyle' >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default DragNDrop;
