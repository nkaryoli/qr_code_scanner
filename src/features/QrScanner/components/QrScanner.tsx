import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QrScanner = () => {
  const [ scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false);

      scanner.render(success, error);

      function success(result:string) {
        scanner.clear();
        setScanResult(result);
      }

      function error(error: string) {
        console.log(error);
      }

  },[]);
  
  return (
    <div className='flex justify-center w-full h-full'>
      <div className='flex flex-col justify-end gap-5 py-10 items-center h-full w-full bg-primary/80 px-5 rounded-xl'>
        {
          scanResult ?
          <div className='text-xl text-contrast w-[300px] h-fit overflow-hidden'>Success: <Link className='text-accent w-full' to={"https://"+scanResult}>{scanResult}</Link></div>
          :<div className='w-full text-contrast text-xl flex flex-col items-center justify-center' id='reader'></div>
        }
      </div>
    </div>
  )
}

export default QrScanner;