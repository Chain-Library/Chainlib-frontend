'use client'
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


interface WalletOptionProps {
  icon: string;
  name: string;
  onConnect: () => void;
  isConnecting: boolean;
}

interface DesktopLeftPanelProps {
  step: string;
}

interface MobileHeaderProps {
  onBack: () => void;
  showBack?: boolean;
}

interface AnimatedLoaderProps {
  size?: number;
}

interface SuccessIconProps {
  size?: number;
}

interface ErrorIconProps {
  size?: number;
}

const mockImages = {
  logo: '/onboarding/logo.svg',
  backgroundDesktop: '/onboarding/Banner.svg',
  qrCode: '/onboarding/qrcode.svg',
  bravosWallet: '/onboarding/braavoos.svg',
  argentWallet: '/onboarding/argent.svg'
};


const AnimatedLoader: React.FC<AnimatedLoaderProps> = ({ size = 60 }) => {
  console.log('AnimatedLoader rendering with size:', size); 
  
  
  const CSSLoader = () => (
    <div className="flex items-center justify-center">
      <div 
        className="rounded-full animate-spin"
        style={{ 
          width: size, 
          height: size,
          border: '4px solid rgb(191 219 254)',
          borderTopColor: 'rgb(37 99 235)'
        }}
      />
    </div>
  );

  try {
    return (
      <div className="flex items-center justify-center">
        <motion.div 
          className="rounded-full"
          style={{ 
            width: size, 
            height: size,
            border: '4px solid rgb(191 219 254)', 
            borderTopColor: 'rgb(37 99 235)' 
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    );
  } catch (error) {
    console.error('Framer Motion error, using CSS fallback:', error);
    return <CSSLoader />;
  }
};

const SuccessIcon: React.FC<SuccessIconProps> = ({ }) => {
  return (
    <div className="flex items-center justify-center">
      <motion.div 
        className="rounded-full flex items-center justify-center"
        style={{ 
          width: 80, 
          height: 80,
          backgroundColor: 'rgb(219 234 254)' 
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.6 
        }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center"
          style={{ 
            width: 48, 
            height: 48,
            backgroundColor: 'rgb(37 99 235)' 
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <span 
            style={{ 
              color: 'white', 
              fontSize: '20px', 
              fontWeight: 'bold',
              lineHeight: 1
            }}
          >
            ✓
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ErrorIcon: React.FC<ErrorIconProps> = ({ }) => {
  return (
    <div className="flex items-center justify-center">
      <div 
        className="rounded-full flex items-center justify-center"
        style={{ 
          width: 80, 
          height: 80,
          backgroundColor: 'rgb(243 244 246)' 
        }}
      >
        <div
          className="rounded-full flex items-center justify-center"
          style={{ 
            width: 48, 
            height: 48,
            backgroundColor: 'rgb(107 114 128)'
          }}
        >
          <span 
            style={{ 
              color: 'white', 
              fontSize: '24px', 
              fontWeight: 'bold',
              lineHeight: 1
            }}
          >
            !
          </span>
        </div>
      </div>
    </div>
  );
};

const WalletOption: React.FC<WalletOptionProps> = ({ icon, name, onConnect, isConnecting }) => {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3">
        <Image src={icon} alt={name} className="w-8 h-8 rounded-full" width={32} height={32}/>
        <span className="font-medium text-gray-900">{name}</span>
      </div>
      <button
        onClick={onConnect}
        disabled={isConnecting}
        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
      >
        Connect
      </button>
    </div>
  );
};


const DesktopLeftPanel: React.FC<DesktopLeftPanelProps> = ({ step }) => {
  const getContent = () => {
    switch (step) {
      case 'qr-scan':
        return {
          title: "You Own Your Voice",
          subtitle: "No middlemen. No boundaries. With ChainLib, your content stays yours. Publish with purpose and keep the rewards you earn."
        };
      case 'connecting':
      case 'sign-message':
      case 'signing':
      case 'connected':
      case 'final-success':
        return {
          title: "Write. Connect. Impact.",
          subtitle: "From local readers to global fans, your story matters. We helps you reach more people, build your community, and leave your mark."
        };
      default:
        return {
          title: "It Starts With a Story",
          subtitle: "Every great book begins with a single idea. We give that idea a stage, a voice, and the freedom to reach the world."
        };
    }
  };

  const getProgressBars = () => {
    let currentStepNumber = 1;
    
    if (['qr-scan'].includes(step)) {
      currentStepNumber = 2;
    } else if (['connecting', 'sign-message', 'connected', 'final-success', 'connection-error'].includes(step)) {
      currentStepNumber = 3;
    }

    return (
      <div className="flex justify-center space-x-2 mt-8">
        <div className={`w-12 h-1 rounded ${currentStepNumber >= 1 ? 'bg-white' : 'bg-blue-300'}`} />
        <div className={`w-12 h-1 rounded ${currentStepNumber >= 2 ? 'bg-white' : 'bg-blue-300'}`} />
        <div className={`w-12 h-1 rounded ${currentStepNumber >= 3 ? 'bg-white' : 'bg-blue-300'}`} />
      </div>
    );
  };

  const content = getContent();

  return (
    <div 
      className="hidden lg:flex lg:w-[45%] text-white p-12 flex-col justify-between relative overflow-hidden m-8 rounded-xl"
      style={{
        backgroundImage: `url(${mockImages.backgroundDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      
      <div className="relative">
        <div className="flex items-center space-x-3 mb-8">
          <Image src={mockImages.logo} alt="ChainLib" className="w-15 h-15 rounded-full" width={40} height={40}/>
          <span className="text-2xl font-bold">ChainLib</span>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          {content.title}
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed">
          {content.subtitle}
        </p>

        {getProgressBars()}
      </div>
    </div>
  );
};
const MobileHeader: React.FC<MobileHeaderProps> = ({ onBack, showBack = true }) => {
  return (
    <div className="flex items-center justify-between px-4 pt-8">
      {showBack ? (
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
const ChainLibOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<string>('wallet-selection');
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);


  useEffect(() => {
    if (currentStep === 'connecting') {
      const timer = setTimeout(() => {
        setCurrentStep('sign-message');
      }, 2000);
      return () => clearTimeout(timer);
    }
    
    if (currentStep === 'sign-message') {
      const timer = setTimeout(() => {
        setCurrentStep('connected');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleWalletConnect = (walletName: string) => {
    setSelectedWallet(walletName);
    setIsConnecting(true);
    setCurrentStep('qr-scan');
  };

  const handleQRConnect = () => {
    setCurrentStep('connecting');
  };


  const handleProceed = () => {
    
    const isSuccess = Math.random() > 0.5; 
    if (isSuccess) {
      setCurrentStep('final-success');
    } else {
      setCurrentStep('connection-error');
    }
  };

  const handleTryAgain = () => {
    setCurrentStep('wallet-selection');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'qr-scan':
        setCurrentStep('wallet-selection');
        setIsConnecting(false); 
        setSelectedWallet(null); 
        break;
      case 'connecting':
        setCurrentStep('qr-scan');
        break;
      case 'sign-message':
        setCurrentStep('connecting');
        break;
      case 'connected':
        setCurrentStep('sign-message');
        break;
      case 'final-success':
        setCurrentStep('connected');
        break;
      case 'connection-error':
        setCurrentStep('connected');
        break;
      default:
        setCurrentStep('wallet-selection');
        setIsConnecting(false);
        setSelectedWallet(null);
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 'wallet-selection':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Sign-up as Reader</h1>
              <p className="text-gray-600">
                Connect your wallet to unlock powerful reading own your books, collect NFTs, and enjoy instant, secure access to premium content.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 space-y-3">
              <WalletOption
                icon={mockImages.bravosWallet}
                name="Bravos"
                onConnect={() => handleWalletConnect('Bravos')}
                isConnecting={isConnecting}
              />
              <WalletOption
                icon={mockImages.argentWallet}
                name="Argent"
                onConnect={() => handleWalletConnect('Argent')}
                isConnecting={isConnecting}
              />
            </div>
            
            <div className="text-center text-sm text-gray-500 pt-4">
              By connecting your wallet, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
              {' '}and our{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </div>
          </div>
        );

      case 'qr-scan':
        return (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Image src={selectedWallet === 'Bravos' ? mockImages.bravosWallet : mockImages.argentWallet} alt={selectedWallet || 'Wallet'} className="w-8 h-8" width={32} height={32}/>
                <span className="text-lg font-medium">{selectedWallet}</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Scan to connect and Sign Up with {selectedWallet} app
                </h2>
                
                <div className="flex justify-center">
                  <Image src={mockImages.qrCode} alt="QR Code" className="w-48 h-48" width={192} height={192}/>
                </div>
                
                <div className="flex space-x-2 mt-4">
                  <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Website
                  </button>
                  <button 
                    onClick={handleQRConnect}
                    className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Mobile App
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'connecting':
        return (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Image src={selectedWallet === 'Bravos' ? mockImages.bravosWallet : mockImages.argentWallet} alt={selectedWallet || 'Wallet'} className="w-8 h-8" width={32} height={32}/>
                <span className="text-lg font-medium">{selectedWallet}</span>
              </div>
              
              <AnimatedLoader size={60} />
              
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Connecting to Wallet...</h2>
              </div>
              
              <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        );

      case 'sign-message':
        return (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-center space-y-6">
              <AnimatedLoader size={60} />
              
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">
                  Sign the message in your wallet to confirm the authentication process
                </h2>
              </div>
              
              <button 
                className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        );

      case 'connected':
        return (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-center space-y-6">
              <SuccessIcon size={40} />
              
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">{selectedWallet} Wallet Connected</h2>
              </div>
              
              <button 
                onClick={handleProceed}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Proceed
              </button>
            </div>
          </div>
        );

      case 'final-success':
        return (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-center space-y-6">
              <ErrorIcon size={60} />
              
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Unable to Connect</h2>
              </div>
              
              <button 
                onClick={handleTryAgain}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        );

      case 'connection-error':
        return (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-center space-y-6">
              <ErrorIcon size={60} />
              
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-gray-900">Unable to Connect</h2>
              </div>
              
              <button 
                onClick={handleTryAgain}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderStep = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {getStepContent()}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="h-screen bg-white flex">
      <DesktopLeftPanel step={currentStep} />
      
      <div className="flex-1 lg:w-1/2 flex flex-col">
        <MobileHeader 
          onBack={handleBack} 
          showBack={currentStep !== 'wallet-selection'}
        />
        
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainLibOnboarding;