import { Music } from '../interfaces/musics';
import { Playlist } from '../interfaces/playlist';
import { Singer } from '../interfaces/singer';
import { User } from '../interfaces/user';
import { addMilliseconds, format } from 'date-fns';

export function SpotifyProfile(
  user: SpotifyApi.CurrentUsersProfileResponse
): User {
  return {
    id: user.id,
    name: user.display_name,
    imgProfile: user.images.pop().url,
    type: user.type,
  };
}

export function GetSpotifyPlaylist(
  playlist: SpotifyApi.PlaylistObjectSimplified
): Playlist {
  return {
    id: playlist.id,
    name: playlist.name,
    image: playlist.images.pop().url,
  };
}

export function GetSpotifySinger(singer: SpotifyApi.ArtistObjectFull): Singer {
  return {
    id: singer.id,
    name: singer.name,
    imageUrl: singer.images.sort((a, b) => a.width - b.width).pop().url,
    followers: singer.followers.total,
  };
}

export function GetSpotifyTrack(
  spotifyTrack: SpotifyApi.TrackObjectFull
): Music {
  const convertTime = (ms: number) => {
    const date = addMilliseconds(new Date(0), ms);
    return format(date, 'mm:ss');
  };

  return {
    id: spotifyTrack.uri,
    title: spotifyTrack.name,
    album: {
      id: spotifyTrack.id,
      imageUrl: spotifyTrack.album.images.shift().url,
      name: spotifyTrack.album.name,
    },
    singer: spotifyTrack.artists.map((artista) => ({
      id: artista.id,
      name: artista.name,
    })),
    time: convertTime(spotifyTrack.duration_ms),
  };
}
