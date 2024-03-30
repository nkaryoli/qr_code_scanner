import { useState } from 'react'
import QRCode from 'qrcode'
import { styles } from '../../../style';

export const QrGenerator = () => {
    const [userName, setUserName] = useState('');
    const [src, setSrc] = useState('');

    const generate = () => {
        QRCode.toDataURL(`https://github.com${userName}`).then(setSrc)

    }
    return (
        <div className='flex flex-col justify-end gap-5 p-10 items-center h-fit w-[400px]'>
            <div className='flex items-center justify-center bg-primary w-[320px] h-[320px]'>
                <img className='w-[300px]' src={src} />
            </div>

            <input onChange={(e) => setUserName(e.target.value)} className={`${styles.input}`}/>
            <button type='button' onClick={generate} className={`${styles.globalBtn}`}>Generate</button>
        </div>
    )
}

export default QrGenerator;
