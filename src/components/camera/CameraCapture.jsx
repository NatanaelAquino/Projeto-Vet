import React, { useRef, useState, useEffect } from 'react';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const [photoSrc, setPhotoSrc] = useState(null);
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } }, // Solicita a câmera traseira
      });
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
      setStream(mediaStream);
    } catch (err) {
      console.error('Erro ao acessar a câmera:', err);
      if (err.name === 'NotAllowedError') {
        setError('Permissão para acessar a câmera foi negada.');
      } else if (err.name === 'NotFoundError') {
        setError('Câmera traseira não encontrada.');
      } else {
        setError('Erro ao acessar a câmera. Verifique as permissões e tente novamente.');
      }
    }
  };

  const takePhoto = () => {
    if (!videoRef.current) {
      setError('Câmera não está disponível.');
      return;
    }

    const width = 300;
    const height = 300;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/png");
    setPhotoSrc(dataUrl);
  };

  const closePhoto = () => {
    setPhotoSrc(null);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div>
      <h1>Captura de Imagem da Câmera</h1>
      <div>
        <video ref={videoRef} autoPlay playsInline width="300" height="300"></video>
        <button onClick={startCamera}>Iniciar Câmera</button>
        <button onClick={takePhoto}>Capturar Foto</button>
      </div>
      <div>
        {photoSrc && (
          <>
            <img src={photoSrc} alt="Captura da câmera" style={{ border: '2px solid black', marginTop: '10px' }} />
            <button onClick={closePhoto}>Fechar Foto</button>
          </>
        )}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CameraCapture;
