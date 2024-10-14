import { useEffect, useState } from "react";

const UseEffect = () => {

    const [posts, setPost] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
///////////////// useStates exemplo simples ///////////////
    const [mudarTitulo, setMudarTitulo] = useState(0);

    useEffect(() => {
        // const GetPosts = async () => {
        //     try {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //         if (response !== 200) {
        //             console.error("Erro");
        //         }
        //         const data = await response.json();
        //         setPost(data);
        //     } catch (err) {
        //         setErro(err.message);
        //     } finally {
        //         setCarregando(false);
        //     }
        // }
        // GetPosts();
//////////////////////// exemplo simples //////////////////////////////////
        document.title = `Contador: ${mudarTitulo}`;

        return() => {
            document.title = `useEffect ativo.`;
        }
/////////////////////// fim exemplo simples ///////////////////////////////
    }, [mudarTitulo]);

    // if (carregando) return <p>Carregando...</p>;
    // if (erro) return <p>{erro}</p>;

    return (
        <>
            <div className="card " >
                <div className="card-body">
                    <h4 className="card-text">O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Isso pode incluir operações como chamadas de API, manipulação de DOM, ou a configuração de timers. O useEffect é chamado após a renderização do componente, permitindo que você responda a mudanças no estado ou nas propriedades.</h4>
                    <button className="btn btn-success" onClick={() => setMudarTitulo(mudarTitulo + 1)}>Incrementar</button>
                    <h3>{mudarTitulo}</h3>
                    {/* <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </>
    );
}

export default UseEffect;