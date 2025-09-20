'use client';

import { Radio, Users, Play } from 'lucide-react';
import { RadioRoom } from '@/lib/types';
import { cn } from '@/lib/utils';
import { THEME_COLORS } from '@/lib/constants';

interface RadioRoomCardProps {
  room: RadioRoom;
  variant?: 'joinable' | 'active';
  onClick?: () => void;
}

export function RadioRoomCard({ room, variant = 'joinable', onClick }: RadioRoomCardProps) {
  const themeGradient = THEME_COLORS[room.theme as keyof typeof THEME_COLORS] || THEME_COLORS.default;

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02]',
        variant === 'active' ? 'ring-2 ring-accent' : ''
      )}
    >
      {/* Background Gradient */}
      <div className={cn('absolute inset-0 bg-gradient-to-br', themeGradient, 'opacity-80')} />
      
      {/* Content */}
      <div className="relative p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Radio className="w-4 h-4" />
            </div>
            {variant === 'active' && (
              <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>LIVE</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <Users className="w-4 h-4" />
            <span>{room.listeners}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="text-xl font-bold">{room.name}</h3>
          {room.description && (
            <p className="text-white/80 text-sm line-clamp-2">{room.description}</p>
          )}
        </div>

        {/* Current Track */}
        {room.currentTrack && (
          <div className="bg-white/10 rounded-lg p-3 mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-md overflow-hidden flex-shrink-0">
                {room.currentTrack.artworkUrl ? (
                  <img 
                    src={room.currentTrack.artworkUrl} 
                    alt="Current track"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white/60" />
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm truncate">{room.currentTrack.title}</p>
                <p className="text-white/70 text-xs truncate">{room.currentTrack.artistName}</p>
              </div>
            </div>
          </div>
        )}

        {/* Join Button */}
        <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg py-3 px-4 font-medium transition-all duration-200 flex items-center justify-center space-x-2">
          <Play className="w-4 h-4" />
          <span>{variant === 'active' ? 'Listening' : 'Join Room'}</span>
        </button>
      </div>
    </div>
  );
}
