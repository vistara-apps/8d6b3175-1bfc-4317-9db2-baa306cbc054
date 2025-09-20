'use client';

import { useState } from 'react';
import { Home, Search, Plus, User, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'minimal';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'discover', icon: Search, label: 'Discover' },
    { id: 'radio', icon: Radio, label: 'Radio' },
    { id: 'create', icon: Plus, label: 'Create' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  if (variant === 'minimal') {
    return (
      <div className="min-h-screen bg-background">
        <main className="pb-safe">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h1 className="text-xl font-bold gradient-text">EchoStream</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-surface rounded-lg transition-colors duration-200">
                <Search className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-50 bg-surface/90 backdrop-blur-md border-t border-surface/50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200',
                    isActive 
                      ? 'text-accent bg-accent/10' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
