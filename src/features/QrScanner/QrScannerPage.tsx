import Navbar from "../../components/Navbar"
import QrScanner from "./components/QrScanner"


const QrScannerPage = () => {
  return (
    <section className='h-[100vh] flex flex-col gap-10 justify-center items-center xl:py-[100px] py-[50px] px-[50px]'>
      <h1 className="text-5xl text-primary font-bold">Scan your Qr Code</h1>
      <QrScanner/>
      <Navbar/>
    </section>
  )
}

export default QrScannerPage;