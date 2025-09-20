'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { TrackListItem } from '@/components/TrackListItem';
import { PlaylistCard } from '@/components/PlaylistCard';
import { RadioRoomCard } from '@/components/RadioRoomCard';
import { SocialFeed } from '@/components/SocialFeed';
import { MOCK_TRACKS, MOCK_PLAYLISTS, MOCK_RADIO_ROOMS } from '@/lib/constants';
import { Play, TrendingUp, Radio, Music } from 'lucide-react';

export default function HomePage() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (trackId: string) => {
    setCurrentTrack(trackId);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-primary/20 to-purple-500/20 p-8">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Welcome to EchoStream
            </h1>
            <p className="text-text-secondary mb-6 max-w-md">
              Discover, create, and own music moments together. Support your favorite artists with ETH tips.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Start Listening</span>
              </button>
              <button className="bg-surface hover:bg-surface/80 text-text-primary px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <Music className="w-4 h-4" />
                <span>Create Playlist</span>
              </button>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Trending Tracks */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-bold text-text-primary">Trending Now</h2>
            </div>
            <button className="text-accent hover:text-accent/80 text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-2">
            {MOCK_TRACKS.slice(0, 4).map((track) => (
              <TrackListItem
                key={track.trackId}
                track={track}
                isPlaying={currentTrack === track.trackId && isPlaying}
                onPlay={() => handlePlay(track.trackId)}
                onPause={handlePause}
                variant={currentTrack === track.trackId ? 'nowPlaying' : 'default'}
              />
            ))}
          </div>
        </section>

        {/* Radio Rooms */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Radio className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-bold text-text-primary">Live Radio Rooms</h2>
            </div>
            <button className="text-accent hover:text-accent/80 text-sm font-medium">
              Browse All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_RADIO_ROOMS.slice(0, 2).map((room) => (
              <RadioRoomCard
                key={room.roomId}
                room={room}
                variant="joinable"
                onClick={() => console.log('Join room:', room.name)}
              />
            ))}
          </div>
        </section>

        {/* Your Playlists */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Music className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-bold text-text-primary">Your Playlists</h2>
            </div>
            <button className="text-accent hover:text-accent/80 text-sm font-medium">
              Create New
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {MOCK_PLAYLISTS.map((playlist) => (
              <PlaylistCard
                key={playlist.playlistId}
                playlist={playlist}
                onClick={() => console.log('Open playlist:', playlist.name)}
              />
            ))}
          </div>
        </section>

        {/* Social Feed */}
        <SocialFeed />
      </div>
    </AppShell>
  );
}
