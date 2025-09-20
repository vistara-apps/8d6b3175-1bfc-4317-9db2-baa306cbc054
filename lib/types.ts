export interface User {
  userId: string;
  username: string;
  farcasterId?: string;
  walletAddress?: string;
  profilePicUrl?: string;
  createdAt: Date;
}

export interface Track {
  trackId: string;
  title: string;
  artistName: string;
  album?: string;
  artworkUrl?: string;
  previewUrl?: string;
  sourceUrl?: string;
  duration?: number;
}

export interface Playlist {
  playlistId: string;
  name: string;
  description?: string;
  isCollaborative: boolean;
  ownerId: string;
  createdAt: Date;
  tracks: Track[];
  collaborators?: User[];
}

export interface Tip {
  tipId: string;
  senderId: string;
  receiverId: string;
  trackId?: string;
  amount: string; // ETH amount as string
  txHash?: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
}

export interface RadioRoom {
  roomId: string;
  name: string;
  description?: string;
  theme: string;
  creatorId: string;
  createdAt: Date;
  currentTrack?: Track;
  listeners: number;
  isActive: boolean;
}

export interface MarketplaceListing {
  listingId: string;
  artistId: string;
  type: 'track' | 'album' | 'collaboration' | 'artwork';
  title: string;
  description: string;
  price: string; // ETH price as string
  tokenAddress?: string;
  tokenId?: string;
  createdAt: Date;
  status: 'active' | 'sold' | 'cancelled';
  imageUrl?: string;
}

export interface FeedItem {
  id: string;
  type: 'tip' | 'playlist_created' | 'track_added' | 'room_joined';
  userId: string;
  user: User;
  timestamp: Date;
  data: any; // Flexible data based on type
}
