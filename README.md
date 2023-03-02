# ••• Spotify Web •••

**`HTML, CSS, TYPESCRIPT, ANGULAR`**

O projeto em questão é uma aplicação web desenvolvida com o Angular, que tem como objetivo fornecer aos usuários uma interface simples e intuitiva para explorar e descobrir músicas, artistas e playlists na plataforma do Spotify.

Ao iniciar a aplicação, os usuários são apresentados com uma tela inicial que destaca suas musicas de músicas favoritas e álbuns no Spotify. Eles também têm a opção de fazer login em suas contas do Spotify para acessar recursos adicionais, como suas próprias playlists e bibliotecas pessoais de músicas.

No geral, este projeto demonstra como a API do Spotify pode ser usada para criar uma aplicação web interativa e personalizada para usuários que desejam explorar a música na plataforma do Spotify.
 
   <a href="https://spotify-kappa-ebon.vercel.app/login" target="_blank"><img src="https://img.shields.io/badge/-Clique Aqui para acessar o Projeto-990000?style=for-the-badge&logo=vercel&logoColor=white" target="_blank"></a>
   
<br/>
 
 ## 🚀 Resultados 
 <br/>
 
  <div align="center">
    <img width="400px" src="https://user-images.githubusercontent.com/117487925/222295915-feb9930d-4a8d-421a-885d-9c6c886d2633.png" />
    <img width="400px" src="https://user-images.githubusercontent.com/117487925/222295917-a1149af1-684d-4311-83b2-a6608f9b09a9.png" />
  </div>
  
 <br/>
 
Se você é um amante da música e de technologia, o meu projeto do Spotify é o lugar certo para você! você pode facilmente acessar dados sobre artistas, álbuns, músicas e playlists do Spotify.

Com a API do Spotify, você pode construir recursos personalizados para seus usuários, como recomendações de músicas com base em seus hábitos de escuta, exibir informações detalhadas sobre artistas, álbuns e músicas em seu aplicativo, criar playlists personalizadas e muito mais!

Com a API do Spotify, as possibilidades são infinitas. Comece a construir sua experiência musical personalizada hoje mesmo, espero que meu projeto sirva de inspiração para você construir uma tambem, bora codar !!

</br>

  <div align="center">
    <img width="800px" src="https://user-images.githubusercontent.com/117487925/222298500-13704221-e67b-4871-aebe-54e6629ee728.png" />
  </div>
  
 <br/>
  
O player de música é fácil de usar e oferece todas as funcionalidades necessárias para ouvir suas músicas favoritas. Você pode pausar, avançar ou retroceder a faixa atual, ajustar o volume e até mesmo ver a letra da música em reprodução.

Além do player de música, você também encontrará as músicas mais curtidas pelos usuários do aplicativo. Essas músicas são selecionadas com base no número de curtidas e reproduções, garantindo que você sempre esteja atualizado com as músicas mais populares do momento.
  
<br/>

## 📌 Como fazer login e sincronizar o Spotify ?
> Primeiramente é preciso saber se você tem condições validas para acessar a API

• Você precisa de uma conta do **Spotify Premium**, é muito importante porque é só com ela que você terá seu token pessoal

• Você precisa seguir os passos para obter o Token e configura-lo corretamente, você pode encontrar o tutorial logo na tela de login em "Como obter meu Token?"

• Você precisa do Spotify Desktop instalado em seu computador, para que você consiga sincroniza-lo e ter todas as funcionalidades liberadas"

• Deixe as musicas tocando apenas no Spotify do Desktop, caso esteja tocando as musicas pelo celular, a API não vai conseguir obter os dados corretamente causando conflitos".

#

### `Mobile (ERROR)`

 <img width="400px" src="https://user-images.githubusercontent.com/117487925/222315096-582cba46-2fc4-4ad1-b466-6cd4bb9fc819.png" />

• O projeto ainda não esta disponivel para dispositivos moveis, pois a estrutura usada é diferente, mas em breve estará disponivel, então use um computador com o Spotify Desktop instalado em sua maquina para que o projeto funcione corretamente.

#

<br/>

### `INVALID_CLIENT (ERROR)`

 <img width="400px" src="https://user-images.githubusercontent.com/117487925/222300819-3a346dd5-003c-4749-b709-10b1cc8e8779.png" />

• Esse erro aparece caso o Token inserido seja incorreto, volte para tela de login, siga o tutorial e tente novamente, a configuração precisa estar 100% correta para que a API consiga obter seus dados atravez do Token de Acesso, caso mesmo assim não funcione, entre em contato comigo.

#

<br/>

### `Falha na Sincronização (ERROR)`

 <img width="400px" src="https://user-images.githubusercontent.com/117487925/222302066-43ec56c8-9023-4685-aba4-9626f7ff4d19.png" />

• Isso ocorre pois a API do Spotify precisa puxar os dados de algum lugar, por isso é muito importante que siga as etapas para que a sincronização funcione corretamente, tente ver se o Spotify esta tocando no seu celular, é crucial que apenas o Spotify do Desktop toque as musicas para evitar conflitos, caso não funcionar entre em contato comigo para solucionar esse problema, espero ter ajudado.

</br>

## 💡 Construção
> O Projeto foi criado 100% utilizando Angular 

<br/>

• Este projeto foi construído com Angular, uma plataforma poderosa e flexível que permite criar aplicativos da web escaláveis e de alto desempenho. O uso de Angular nos permite fornecer uma experiência de usuário mais rápida e fluida, além de oferecer recursos avançados, como roteamento, detecção de alterações e injeção de dependência.

<br/>

### `Estrutura no Angular (Organização)`

 <img width="300px" src="https://user-images.githubusercontent.com/117487925/222303682-f87a2eea-3f64-470d-a152-60eba1ea77c9.png" />


• Dentro da pasta "app", temos uma estrutura de pastas que segue a lógica do aplicativo. Por exemplo:

"commum": Esta pasta contém itens personalizados que são usados pelo aplicativo e que tambem são reutilizaveis.

"guards": Esta pasta contém todas as condições dos usuarios para acessar rotas especificas.

"services": Esta pasta contém todos os serviços usados para consumir os dados da API do Spotify atravez do Token.

"interfaces": Esta pasta contém interface em typescript para alocar os dados Json.

"pages": Esta pasta contém os componentes que representam as diferentes páginas do aplicativo.

Ao seguir essa estrutura de pastas, tornei o projeto mais organizado e fácil de manter. Esperamos que isso facilite o desenvolvimento de novos recursos e a solução de problemas, como o projeto é grande, deixar o projeto organizado melhora muito a visualização, isso me ajudou a manter o codigo mais limpo, e ter um otimo desempenho.

#

<br/>

### `Rotas no Angular`

 <img width="500px" src="https://user-images.githubusercontent.com/117487925/222304429-94d0373d-2005-4b8f-b3b1-089fda52968f.png" />

• O roteamento é baseado no módulo "RouterModule" do Angular, que fornece uma maneira fácil e poderosa de definir as rotas do aplicativo. Para configurar o roteamento, temos um arquivo "app-routing.module.ts" na pasta "app" do nosso projeto.

• Nesse arquivo, definimos as rotas do nosso aplicativo usando o método "RouterModule.forRoot()". Cada rota é definida com um objeto que contém o caminho da rota e o componente correspondente que será exibido quando a rota for acessada. Além disso, podemos definir parâmetros opcionais ou obrigatórios e até mesmo criar rotas aninhadas.

• Para tornar a navegação do usuário mais eficiente, também definimos um sistema de navegação com base em parâmetros. Por exemplo, podemos criar um link que navegue diretamente para uma página específica do aplicativo ou até mesmo passar parâmetros que serão usados para personalizar a página.

• Com essa estrutura de roteamento, tornamos a navegação do usuário mais fácil e intuitiva, ao mesmo tempo em que permitimos que o aplicativo responda dinamicamente às necessidades do usuário.

• Alem das rotas, tem os **Guards** que vão determinar se o usuario tem a permissão necessaria para acessar a rota.

<br/>

### `Obtendo Token e autorização do Spotify`

 <img width="500px" src="https://user-images.githubusercontent.com/117487925/222304683-5c8ee356-43e7-48d2-b411-e4d997c42168.png" />

• Com essa estrutura consigo pegar as autorizações dos usuarios, lembrando que esses dados não são divulgados e eu não tenho acesso, pois o usuario vai usar o Token pessoal obtido no proprio site oficial do Spotify, tendo em mente isso, as permissões necessarias são:

<br/>

    'user-read-currently-playing', // musica tocando agora.
    'user-read-recently-played', // ler musicas tocadas recentemente
    'user-read-playback-state', // ler estado do player do usuario
    'user-top-read', // top artistas e musicas do usuario
    'user-modify-playback-state', // alterar do player do usuario.
    'user-library-read', // ler biblioteca dos usuaris
    'playlist-read-private', // ler playlists privads
    'playlist-read-collaborative', // ler playlists colaborativas

<br/>

 ## 🏆 Creditos
 
 <h3>Leonardo Leal @ 2023</h3>

