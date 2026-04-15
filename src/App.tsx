import { useState } from 'react';
import { SchoolTypeSelector } from './components/SchoolTypeSelector';
import { StudentForm } from './components/StudentForm';
import { CertificatePreview } from './components/CertificatePreview';
import { CertificateData, SchoolType } from './types';
import { MessageCircle } from 'lucide-react';

type Step = 'select-type' | 'fill-form' | 'preview';

function App() {
  const [step, setStep] = useState<Step>('select-type');
  const [schoolType, setSchoolType] = useState<SchoolType | null>(null);
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);

  const handleSchoolTypeSelect = (type: SchoolType) => {
    setSchoolType(type);
    setStep('fill-form');
  };

  const handleFormSubmit = (data: CertificateData) => {
    setCertificateData({
      ...data,
      issueDate: new Date(),
    });
    setStep('preview');
  };

  const handleReset = () => {
    setStep('select-type');
    setSchoolType(null);
    setCertificateData(null);
  };

  const handleBack = () => {
    setStep('select-type');
    setSchoolType(null);
  };

  return (
    <>
      {step === 'select-type' && (
        <SchoolTypeSelector onSelect={handleSchoolTypeSelect} />
      )}
      {step === 'fill-form' && schoolType && (
        <StudentForm
          schoolType={schoolType}
          onBack={handleBack}
          onSubmit={handleFormSubmit}
        />
      )}
      {step === 'preview' && certificateData && (
        <CertificatePreview data={certificateData} onReset={handleReset} />
      )}

      {/* Professional Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-6 mt-auto print:hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold">Jagan Behera</p>
                <p className="text-sm text-gray-300">Web Developer & Designer</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-600"></div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div>
                <p className="text-sm text-gray-300 mb-1">Visit my website:</p>
                <a
                  href="https://jaganwebsolutions.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline"
                >
                  https://jaganwebsolutions.netlify.app
                </a>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-600"></div>
              <div>
                <p className="text-sm text-gray-300 mb-1">Contact me:</p>
                <a
                  href="https://wa.me/917978966065?text=Hello%20Jagan%2C%20I%20would%20like%20to%20contact%20you%20regarding%20your%20web%20development%20services.%20Please%20let%20me%20know%20how%20we%20can%20work%20together."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              © 2024 Jagan Behera. All rights reserved. | Professional Web Solutions
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
