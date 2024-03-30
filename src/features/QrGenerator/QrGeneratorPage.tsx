import Navbar from "../../components/Navbar"
import QrGenerator from "./components/Generator";

const QrGeneratorPage = () => {
  return (
    <section className='h-fit flex flex-col gap-10 justify-center items-center xl:py-[100px] py-[50px] px-[50px]'>
      <h1 className="text-5xl text-primary font-bold">Type to Generate a new QrCode</h1>
      <QrGenerator/>
      <Navbar/>
    </section>
  )
}

export default QrGeneratorPage;