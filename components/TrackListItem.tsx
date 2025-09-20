'use client';

import { useState } from 'react';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';
import { Track } from '@/lib/types';
import { formatDuration, cn } from '@/lib/utils';
import { TipButton } from './TipButton';

interface TrackListItemProps {
  track: Track;
  variant?: 'default' | 'nowPlaying';
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  showTipButton?: boolean;
}

export function TrackListItem({ 
  track, 
  variant = 'default',
  isPlaying = false,
  onPlay,
  onPause,
  showTipButton = true
}: TrackListItemProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      onPause?.();
    } else {
      onPlay?.();
    }
  };

  return (
    <div className={cn(
      'flex items-center space-x-3 p-3 rounded-lg transition-all duration-200',
      variant === 'nowPlaying' 
        ? 'bg-accent/10 border border-accent/20' 
        : 'hover:bg-surface/50',
      'group'
    )}>
      {/* Artwork & Play Button */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 bg-surface rounded-md overflow-hidden">
          {track.artworkUrl ? (
            <img 
              src={track.artworkUrl} 
              alt={`${track.title} artwork`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-text-secondary">
                {track.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        {/* Play/Pause Overlay */}
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-md"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white ml-0.5" />
          )}
        </button>
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <h3 className={cn(
          'font-medium truncate',
          variant === 'nowPlaying' ? 'text-accent' : 'text-text-primary'
        )}>
          {track.title}
        </h3>
        <p className="text-sm text-text-secondary truncate">
          {track.artistName}
          {track.album && ` • ${track.album}`}
        </p>
      </div>

      {/* Duration */}
      {track.duration && (
        <div className="text-sm text-text-secondary">
          {formatDuration(track.duration)}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center space-x-1">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={cn(
            'p-2 rounded-lg transition-colors duration-200',
            isLiked 
              ? 'text-red-500 hover:text-red-400' 
              : 'text-text-secondary hover:text-text-primary hover:bg-surface'
          )}
        >
          <Heart className={cn('w-4 h-4', isLiked && 'fill-current')} />
        </button>

        {showTipButton && (
          <TipButton 
            trackId={track.trackId}
            artistName={track.artistName}
            variant="default"
          />
        )}

        <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg transition-colors duration-200">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
