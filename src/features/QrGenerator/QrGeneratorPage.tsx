import Navbar from "../../components/Navbar"
import QrGenerator from "./components/Generator";

const QrGeneratorPage = () => {
  return (
    <section className='h-[100vh] flex flex-col gap-10 justify-center items-center'>
      <QrGenerator/>
      <Navbar/>
    </section>
  )
}

export default QrGeneratorPage;