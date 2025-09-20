'use client';

import { useState, useEffect } from 'react';
import { Heart, Music, Users, DollarSign } from 'lucide-react';
import { FeedItem } from '@/lib/types';
import { UserProfileCard } from './UserProfileCard';
import { timeAgo, formatEthAmount } from '@/lib/utils';
import { MOCK_ARTISTS, MOCK_TRACKS } from '@/lib/constants';

export function SocialFeed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    // Mock feed data
    const mockFeedItems: FeedItem[] = [
      {
        id: '1',
        type: 'tip',
        userId: 'user1',
        user: MOCK_ARTISTS[0],
        timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
        data: {
          amount: '0.005',
          track: MOCK_TRACKS[0],
          recipient: MOCK_ARTISTS[1],
        },
      },
      {
        id: '2',
        type: 'playlist_created',
        userId: 'user2',
        user: MOCK_ARTISTS[1],
        timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        data: {
          playlistName: 'Midnight Vibes Collection',
          trackCount: 12,
        },
      },
      {
        id: '3',
        type: 'track_added',
        userId: 'user1',
        user: MOCK_ARTISTS[0],
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        data: {
          track: MOCK_TRACKS[1],
          playlistName: 'Collaborative Mix',
        },
      },
    ];

    setFeedItems(mockFeedItems);
  }, []);

  const renderFeedItem = (item: FeedItem) => {
    const getIcon = () => {
      switch (item.type) {
        case 'tip':
          return <DollarSign className="w-4 h-4 text-green-500" />;
        case 'playlist_created':
          return <Music className="w-4 h-4 text-accent" />;
        case 'track_added':
          return <Music className="w-4 h-4 text-blue-500" />;
        case 'room_joined':
          return <Users className="w-4 h-4 text-purple-500" />;
        default:
          return <Heart className="w-4 h-4 text-red-500" />;
      }
    };

    const getContent = () => {
      switch (item.type) {
        case 'tip':
          return (
            <div>
              <p className="text-text-primary">
                <span className="font-medium">{item.user.username}</span> tipped{' '}
                <span className="font-medium text-accent">
                  {formatEthAmount(item.data.amount)} ETH
                </span>{' '}
                for <span className="font-medium">{item.data.track.title}</span>
              </p>
              <p className="text-text-secondary text-sm">
                to {item.data.recipient.username}
              </p>
            </div>
          );
        case 'playlist_created':
          return (
            <p className="text-text-primary">
              <span className="font-medium">{item.user.username}</span> created a new playlist{' '}
              <span className="font-medium text-accent">{item.data.playlistName}</span>{' '}
              with {item.data.trackCount} tracks
            </p>
          );
        case 'track_added':
          return (
            <p className="text-text-primary">
              <span className="font-medium">{item.user.username}</span> added{' '}
              <span className="font-medium">{item.data.track.title}</span> to{' '}
              <span className="font-medium text-accent">{item.data.playlistName}</span>
            </p>
          );
        default:
          return null;
      }
    };

    return (
      <div key={item.id} className="bg-surface rounded-lg p-4 space-y-3">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-surface rounded-full flex items-center justify-center">
            {getIcon()}
          </div>
          <div className="flex-1 min-w-0">
            {getContent()}
            <p className="text-text-secondary text-xs mt-1">
              {timeAgo(item.timestamp)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-text-primary">Social Feed</h2>
        <button className="text-accent hover:text-accent/80 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {feedItems.map(renderFeedItem)}
      </div>

      {feedItems.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-text-secondary" />
          </div>
          <h3 className="text-lg font-medium text-text-primary mb-2">No activity yet</h3>
          <p className="text-text-secondary">
            Follow friends to see their music activity here
          </p>
        </div>
      )}
    </div>
  );
}
