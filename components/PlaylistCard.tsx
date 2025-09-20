'use client';

import { Play, Users, Lock } from 'lucide-react';
import { Playlist } from '@/lib/types';
import { cn, timeAgo } from '@/lib/utils';

interface PlaylistCardProps {
  playlist: Playlist;
  variant?: 'default' | 'mini';
  onClick?: () => void;
}

export function PlaylistCard({ playlist, variant = 'default', onClick }: PlaylistCardProps) {
  const trackCount = playlist.tracks.length;
  const firstTrackArtwork = playlist.tracks[0]?.artworkUrl;

  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-surface rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:bg-surface/80 hover:scale-[1.02]',
        variant === 'mini' ? 'p-3' : 'p-4'
      )}
    >
      {/* Playlist Artwork */}
      <div className={cn(
        'relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-md overflow-hidden mb-3',
        variant === 'mini' ? 'aspect-square' : 'aspect-square'
      )}>
        {firstTrackArtwork ? (
          <img 
            src={firstTrackArtwork} 
            alt={`${playlist.name} cover`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-2xl font-bold text-text-secondary">
              {playlist.name.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <button className="w-12 h-12 bg-accent hover:bg-accent/80 rounded-full flex items-center justify-center transition-colors duration-200">
            <Play className="w-5 h-5 text-white ml-0.5" />
          </button>
        </div>

        {/* Collaborative Badge */}
        {playlist.isCollaborative && (
          <div className="absolute top-2 right-2 bg-accent/90 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
            <Users className="w-3 h-3" />
            <span>Collab</span>
          </div>
        )}
      </div>

      {/* Playlist Info */}
      <div className="space-y-1">
        <h3 className={cn(
          'font-semibold text-text-primary truncate',
          variant === 'mini' ? 'text-sm' : 'text-base'
        )}>
          {playlist.name}
        </h3>
        
        {playlist.description && variant === 'default' && (
          <p className="text-sm text-text-secondary line-clamp-2">
            {playlist.description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span>{trackCount} track{trackCount !== 1 ? 's' : ''}</span>
          <span>{timeAgo(playlist.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
