export const environment = {
  production: true,
};

export const SpotifyConfiguration = {
  clientId: '1e253287f0814dfb90028392b8e7849c',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'https://spotify-kappa-ebon.vercel.app/login',
  scopes: [
    'user-read-currently-playing', // musica tocando agora.
    'user-read-recently-played', // ler musicas tocadas recentemente
    'user-read-playback-state', // ler estado do player do usuario
    'user-top-read', // top artistas e musicas do usuario
    'user-modify-playback-state', // alterar do player do usuario.
    'user-library-read', // ler biblioteca dos usuaris
    'playlist-read-private', // ler playlists privads
    'playlist-read-collaborative', // ler playlists colaborativas
  ],
};
