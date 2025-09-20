'use client';

import { useState } from 'react';
import { DollarSign, Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TipButtonProps {
  trackId?: string;
  artistName: string;
  variant?: 'default' | 'processing';
  className?: string;
}

export function TipButton({ 
  trackId, 
  artistName, 
  variant = 'default',
  className 
}: TipButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showTipModal, setShowTipModal] = useState(false);

  const handleTip = async (amount: string) => {
    setIsProcessing(true);
    
    try {
      // Simulate tip transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setShowTipModal(false);
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Tip failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <button className={cn(
        'p-2 text-green-500 rounded-lg transition-colors duration-200',
        className
      )}>
        <Check className="w-4 h-4" />
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowTipModal(true)}
        disabled={isProcessing}
        className={cn(
          'p-2 rounded-lg transition-colors duration-200',
          variant === 'processing' || isProcessing
            ? 'text-accent cursor-not-allowed'
            : 'text-text-secondary hover:text-accent hover:bg-accent/10',
          className
        )}
      >
        {isProcessing ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <DollarSign className="w-4 h-4" />
        )}
      </button>

      {/* Tip Modal */}
      {showTipModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-surface rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Tip {artistName}
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              Show your appreciation with ETH
            </p>

            <div className="space-y-3 mb-6">
              {['0.001', '0.005', '0.01', '0.05'].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleTip(amount)}
                  disabled={isProcessing}
                  className="w-full p-3 bg-background hover:bg-accent/10 border border-surface hover:border-accent/20 rounded-lg text-left transition-all duration-200 disabled:opacity-50"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary">{amount} ETH</span>
                    <span className="text-text-secondary text-sm">
                      ~${(parseFloat(amount) * 2000).toFixed(2)}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowTipModal(false)}
                className="flex-1 p-3 bg-background hover:bg-surface border border-surface rounded-lg text-text-secondary transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const customAmount = prompt('Enter custom ETH amount:');
                  if (customAmount) handleTip(customAmount);
                }}
                className="flex-1 p-3 bg-accent hover:bg-accent/80 text-white rounded-lg transition-colors duration-200"
              >
                Custom
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
