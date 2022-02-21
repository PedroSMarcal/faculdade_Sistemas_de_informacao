import React, { useRef } from 'react'
import { Repos, Form, Title, Error } from './styles'
import logo from '../../assets/logo.svg'
import {api} from '../../service/api'
import { Link } from 'react-router-dom'
import {FiChevronRight} from 'react-icons/fi'

export const Dashboard: React.FC = () => {
    // criando uma interface para receber os dados do Github -> e filtrar os dados
    interface GitHubRepository{
        full_name: string;
        description: string;
        owner: {
            login: string;
            avatar_url: string;
        }
    }

    // criar variaveis no react 
    //useState altera o valor da variavel, e no caso está com valor null
    const [newRepository, setNewRepository] = React.useState('')

    // repositories é uma lista de GitHubRepositories, que inicia será uma lista vazia
    const [repositories, setRepositories] = React.useState<GitHubRepository[]>( ()=>{
            // variavel para guardar os repositorios locais, representado pelo item @GitCollection
        
            const storageRepos = localStorage.getItem('@GitCollection:repositories')
            if (storageRepos) {
                    return JSON.parse(storageRepos); // converte string em json
            }

            return []
    })



    // cria uma variavel que guarda o erro
    const [inputError, setInputError] = React.useState('')

    // vamos usar um hook para resetar o conteudo do 
    const formEl = React.useRef<HTMLFormElement | null>(null)

    // é executada toda vez que repositories for executado
    React.useEffect(() => {
        // converte antes para string
        localStorage.setItem('@GitCollection:repositories', JSON.stringify(repositories))
    }, [repositories])

    // função chamada quando a caixa de texto for alterada 
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        //alterar a variavel 
        setNewRepository(event.target.value) // valor do elemento que sofreu o evento
    }

    // Função que chama a API
    async function handleAddRepository(event: React.ChangeEvent<HTMLFormElement>, ): Promise<void>{
        event.preventDefault();
        
        if (!newRepository){
            setInputError('Informe o username/repositorio')
            return 
        }

        setInputError('')
        try{
            const response = await api.get<GitHubRepository>(`repos/${newRepository}`)
            const repository = response.data
            //adicionar a lista de repositorios a lista de repositorios
            setRepositories([...repositories, repository])
            // limpa o repositorio atual - para limpar caixa de texto
            setNewRepository('')

            formEl.current?.reset()
        }
        catch{
            setInputError('Nenhum Repositorio Encontrado')
            setNewRepository('')
        }
    }

    return (
    <>
        <img src={logo} alt="GitCollection" />    
        <Title> Dashboard </Title>
        <Form 
            ref = {formEl}
            hasError = {Boolean(inputError)} 
            onSubmit={handleAddRepository}>
            {/** Quando a caixa de texto sofrer alteração o metodo será executado */}
            <input value={newRepository} onChange={handleInputChange}  placeholder="username/repository_name" />
            <button type="submit"> Buscar </button>
        </Form>
        {inputError && <Error> {inputError} </Error>}

        <Repos>
            {/* vamos percorrer a lista de repositorios */}
            
            {
            repositories.map( (repository, index) => (
                <Link to={`/repositories/${repository.full_name}`}
                    key={repository.full_name + index}>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <strong> {repository.full_name} </strong>
                        <p> {repository.description} </p>
                    </div>
                    <FiChevronRight size={20}></FiChevronRight>
                </Link>    
                )
            )
            }

            {/* <a href="/repositories">
                <img src="https://avatars.githubusercontent.com/u/62404639?v=4" alt="imagem" />
            <div>
                <strong> PedroSMarcal/Django </strong>
                <p> Api com Django </p>
            </div>
            </a> */}
        </Repos>
    </>
    )
}