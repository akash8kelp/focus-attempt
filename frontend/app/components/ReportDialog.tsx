import React, { useState } from 'react';

interface ReportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportDialog: React.FC<ReportDialogProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsLoading(true);
      setError('');
      // Here you would typically send the email to your backend
      console.log('Valid email:', email);
      fetch('/api/send-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          setError('Failed to send email. Please try again.');
        }
      })
      .catch(() => {
        setError('An unexpected error occurred. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const handleClose = () => {
    // ... existing code ...
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="bg-gray-50 rounded-lg shadow-xl w-full max-w-lg mx-4 relative overflow-hidden" 
        style={{
          backgroundImage: "url('/assets/world-map-new.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gray-50 opacity-90"></div>
        <div className="relative p-8">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          {!isSubmitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Download Sample Report</h2>
              <p className="text-gray-600 mb-6">Enter your email to get a sample report delivered to your inbox.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-gray-800 ${error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-primary-green'}`}
                  disabled={isLoading}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button 
                  type="submit" 
                  className="w-full bg-primary-green text-white font-bold py-3 px-4 rounded-lg mt-6 hover:bg-opacity-90 transition-colors flex items-center justify-center disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Send Report'
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center">
                <div className="flex justify-center mb-4">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="#D1FAE5"/>
                        <path d="M52 32L36 48L28 40" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Check your inbox!</h2>
              <p className="text-gray-600 mb-6">We've sent the sample report to <span className="font-semibold">{email}</span>. If you don't see it, please check your spam folder.</p>
              <button onClick={onClose} className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg mt-6 hover:bg-gray-300 transition-colors">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportDialog; 