import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleDownload = () => {
        const canvas = document.getElementById('qrcode-canvas');
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className='outer'>
            <h2>QR Code Generator</h2>
            <input type="text" value={text} onChange={handleChange} placeholder="Enter text for QR code" />
            {text && (
                <div className="qrcode-container">
                    <QRCode id="qrcode-canvas" value={text} size={200} /> <br/>
                    <button onClick={handleDownload}>Download QR Code</button>
                </div>
            )}
            <div className='textdiv'>
                <p>"Enter the text or link inside the input box. It will automatically create a QR code. Once entered, the QR code will be displayed. You can download the QR code by using the download button."</p>
            </div>
        </div>
    );
}

export default QRCodeGenerator;
