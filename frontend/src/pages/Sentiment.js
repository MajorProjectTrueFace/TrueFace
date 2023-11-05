import React from 'react';
import Webcam from 'react-webcam';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { get_image_with_emotions } from '../controllers/image';
import DragNDrop from '../components/DragNDrop';

const Sentiment = () => {
    const [emotion_file, setEmotionFile] = useState("");
    const [files, setFiles] = useState([]);
    const [cameraImage, setCameraImage] = useState(null);

    const webcamRef = React.useRef(null);
    const [isUsingCamera, setIsUsingCamera] = useState(false);

    const captureScreenshot = async () => {
        if (webcamRef.current) {
            const webCamScreenshot = webcamRef.current.getScreenshot();
            if (!webCamScreenshot) {
                toast.error('Failed to capture an image from the camera.');
                return;
            }

            const img = new Image();
            img.src = webCamScreenshot;
            img.onload = async () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0, img.width, img.height);
                canvas.toBlob(async (blob) => {
                    const cameraFile = new File([blob], "camera-image.png", { type: "image/png" });
                    setCameraImage(URL.createObjectURL(cameraFile));
                    setFiles([cameraFile]);
                    const toastId = toast.loading('Processing Image....please be patient');
                    await get_image_with_emotions(cameraFile).then((result) => {
                        setEmotionFile(result);
                        toast.success('Operation Completed', {
                            id: toastId,
                        });
                        console.log("IT ENDED");
                    });
                });
            };
        }
    };

    const get_emotions = async (file) => {
        if (isUsingCamera) {
            await captureScreenshot();
        } else {
            toast.success("Image uploaded Success");
            const toastId = toast.loading('Processing Image....please be patient');
            let fd = new FormData();
            fd.append("file", file);
            get_image_with_emotions(fd).then((result) => {
                setEmotionFile(result);
                toast.success('Operation Completed', {
                    id: toastId,
                });
            });
        }
    };

    return (
        <>
            <div className='d-flex flex-column align-items-center justify-center'>
                <h2>Explore Emotional Insight!</h2>
                <p>Understand and Analyze the Mood and Feelings Captured within the Image's Faces</p>
            </div>
            <div>
                <button onClick={() => setIsUsingCamera(!isUsingCamera)} className={`btn ${isUsingCamera ? 'btn-danger' : 'btn-primary'} my-2 button`}>
                    {isUsingCamera ? "Switch to File Input" : "Switch to Camera Input"}
                </button>
                {isUsingCamera && (
                <button onClick={captureScreenshot} className="btn btn-primary my-2">Capture</button>
                )}
            </div>
            {isUsingCamera ? (
                <div className="camera-container">
                    <Webcam audio={false} height={480} ref={webcamRef} screenshotFormat="image/jpeg" width={640} mirrored={true} />
                </div>
            ) : (
                <DragNDrop
                    operationToBePerformed={get_emotions}
                    files={files}
                    setFiles={setFiles}
                />
            )}

            {files.length > 0 && (
                <div className='text-center my-5'>
                    <h5>Input Image</h5>
                    {cameraImage ? (
                        <img src={cameraImage} className='imgShow' alt='Input File'/>
                    ) : (
                        <img src={files[0].preview} className='imgShow' alt='Input File'/>
                    )}
                </div>
            )}

            <div className='container' id="output_images">
                {emotion_file && (
                    <>
                        OUTPUT IMAGE :
                        <div className='rounded-3 my-3 d-flex align-items-center justify-content-around border border-light flex-wrap imgOutputContainer'>
                            <div className='my-3 rounded-3'>
                                <img src={emotion_file} className='imgShow' alt="Output File" />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Sentiment;
