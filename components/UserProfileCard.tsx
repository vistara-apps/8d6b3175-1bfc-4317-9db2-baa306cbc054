'use client';

import { User } from '@/lib/types';
import { truncateAddress, cn } from '@/lib/utils';

interface UserProfileCardProps {
  user: User;
  variant?: 'compact' | 'detailed';
  showWallet?: boolean;
}

export function UserProfileCard({ 
  user, 
  variant = 'compact', 
  showWallet = false 
}: UserProfileCardProps) {
  return (
    <div className={cn(
      'flex items-center space-x-3',
      variant === 'detailed' ? 'p-4 bg-surface rounded-lg' : ''
    )}>
      {/* Profile Picture */}
      <div className={cn(
        'flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-accent to-primary',
        variant === 'compact' ? 'w-10 h-10' : 'w-16 h-16'
      )}>
        {user.profilePicUrl ? (
          <img 
            src={user.profilePicUrl} 
            alt={`${user.username}'s profile`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            {user.username.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center space-x-2">
          <h3 className={cn(
            'font-semibold text-text-primary truncate',
            variant === 'compact' ? 'text-sm' : 'text-base'
          )}>
            {user.username}
          </h3>
          {user.farcasterId && (
            <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
              FC
            </span>
          )}
        </div>
        
        {variant === 'detailed' && (
          <div className="space-y-1 mt-1">
            {user.farcasterId && (
              <p className="text-sm text-text-secondary">{user.farcasterId}</p>
            )}
            {showWallet && user.walletAddress && (
              <p className="text-xs text-text-secondary font-mono">
                {truncateAddress(user.walletAddress)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
