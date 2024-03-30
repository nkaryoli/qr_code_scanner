import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from '../features/Home/HomePage'
import QrGeneratorPage from "../features/QrGenerator/QrGeneratorPage";
import QrScannerPage from "../features/QrScanner/QrScannerPage";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qrGenerator" element={<QrGeneratorPage />} />
        <Route path="/qrScanner" element={<QrScannerPage />} />
    </Routes>
</BrowserRouter>
  )
}

export default Router