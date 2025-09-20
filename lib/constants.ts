export const MOCK_TRACKS = [
  {
    trackId: '1',
    title: 'Neon Dreams',
    artistName: 'Cyber Pulse',
    album: 'Digital Horizons',
    artworkUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    previewUrl: '',
    duration: 245,
  },
  {
    trackId: '2',
    title: 'Midnight Vibes',
    artistName: 'Luna Echo',
    album: 'Nocturnal',
    artworkUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
    previewUrl: '',
    duration: 198,
  },
  {
    trackId: '3',
    title: 'Electric Soul',
    artistName: 'The Voltage',
    album: 'Amplified',
    artworkUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    previewUrl: '',
    duration: 312,
  },
  {
    trackId: '4',
    title: 'Cosmic Journey',
    artistName: 'Stellar Drift',
    album: 'Beyond the Stars',
    artworkUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
    previewUrl: '',
    duration: 267,
  },
];

export const MOCK_RADIO_ROOMS = [
  {
    roomId: '1',
    name: 'Chill Vibes',
    description: 'Relaxing beats for focus and study',
    theme: 'chill',
    creatorId: 'user1',
    createdAt: new Date(),
    listeners: 42,
    isActive: true,
    currentTrack: MOCK_TRACKS[0],
  },
  {
    roomId: '2',
    name: 'Electronic Fusion',
    description: 'The latest in electronic music',
    theme: 'electronic',
    creatorId: 'user2',
    createdAt: new Date(),
    listeners: 128,
    isActive: true,
    currentTrack: MOCK_TRACKS[1],
  },
  {
    roomId: '3',
    name: 'Indie Discoveries',
    description: 'Hidden gems from independent artists',
    theme: 'indie',
    creatorId: 'user3',
    createdAt: new Date(),
    listeners: 67,
    isActive: true,
    currentTrack: MOCK_TRACKS[2],
  },
];

export const MOCK_PLAYLISTS = [
  {
    playlistId: '1',
    name: 'My Collaborative Mix',
    description: 'A shared playlist with friends',
    isCollaborative: true,
    ownerId: 'user1',
    createdAt: new Date(),
    tracks: MOCK_TRACKS.slice(0, 2),
  },
  {
    playlistId: '2',
    name: 'Late Night Sessions',
    description: 'Perfect for those midnight coding sessions',
    isCollaborative: false,
    ownerId: 'user1',
    createdAt: new Date(),
    tracks: MOCK_TRACKS.slice(1, 3),
  },
];

export const MOCK_ARTISTS = [
  {
    userId: 'artist1',
    username: 'cyberpulse',
    profilePicUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
    walletAddress: '0x1234...5678',
    farcasterId: 'cyberpulse.eth',
    createdAt: new Date(),
  },
  {
    userId: 'artist2',
    username: 'lunaecho',
    profilePicUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    walletAddress: '0x2345...6789',
    farcasterId: 'luna.eth',
    createdAt: new Date(),
  },
];

export const THEME_COLORS = {
  chill: 'from-blue-500 to-purple-500',
  electronic: 'from-pink-500 to-cyan-500',
  indie: 'from-orange-500 to-red-500',
  jazz: 'from-yellow-500 to-orange-500',
  rock: 'from-red-500 to-pink-500',
  default: 'from-accent to-primary',
};
