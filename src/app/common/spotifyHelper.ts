import { Playlist } from '../interfaces/playlist';
import { User } from '../interfaces/user';

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
