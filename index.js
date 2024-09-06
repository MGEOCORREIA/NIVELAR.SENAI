
const LoginPerfil = document.querySelector('.Login-perfil')
const titulo = document.querySelector('.titulo')
const ImagemPerfil = document.querySelector('.Imagem-perfil')
const BioPerfil = document.querySelector('.Bio-perfil')
const ReposPerfil = document.querySelector('.Repos-perfil')
const SegPerfil = document.querySelector('.Seg-perfil')
const LocPerfil = document.querySelector('.Loc-perfil')


const getInfos = async () => {
    const response = await fetch('https://api.github.com/users/MGEOCORREIA')
    const data = await response.json()
    console.log(data)

    if(!data.name){
        titulo.innerHTML = 'Mgeo Correia'
        ImagemPerfil.setAttribute('src','https://placeholder.com/100x100')
        BioPerfil.innerHTML = 'Sou Mgeo, sua social media!'
        ReposPerfil.innerHTML = '60'
        SegPerfil.innerHTML = 'Seguidores: 000 perfis e Seguindo: 000 perfis.'
        LocPerfil.innerHTML = 'Bayeux/PB-BR'
        
    }
    else{
        titulo.innerHTML = data.name
        ImagemPerfil.setAttribute('src', data.avatar_url)
        BioPerfil.innerHTML = `Biografia: ${data.bio}`
        ReposPerfil.innerHTML = ` Quantidade de repositórios: ${data.public_repos}.`
        SegPerfil.innerHTML = `Seguidores: ${data.followers} perfis e Seguindo: ${data.following} perfis.`
        LocPerfil.innerHTML = data.location

    }

}
getInfos()