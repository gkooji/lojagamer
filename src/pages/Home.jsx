import GameCard from '../components/GameCard'
import jogoImg from '../assets/Jogo01.jpg'

const Home = () => {

  const games = [
    { id: 1, titulo: "Jogo-01", preco: "R$ 400,00", imagem: jogoImg },
    { id: 2, titulo: "Jogo-02", preco: "R$ 359,00", imagem: jogoImg },
    { id: 3, titulo: "Jogo-03", preco: "R$ 249,00", imagem: jogoImg },
    { id: 4, titulo: "Jogo-04", preco: "R$ 300,00", imagem: jogoImg },
    { id: 5, titulo: "Jogo-05", preco: "R$ 229,00", imagem: jogoImg },
    { id: 6, titulo: "Jogo-06", preco: "R$ 219,00", imagem: jogoImg },
    { id: 7, titulo: "Jogo-07", preco: "R$ 150,00", imagem: jogoImg },
    { id: 8, titulo: "Jogo-08", preco: "R$ 99,00", imagem: jogoImg },
  ]
  return (
    <main className="px-[5%] mt-10 mb-16 flex-grow">
      <h2 className="textoTitulo titulo text-3xl">Produtos em Destaque</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((game)=>(
          <GameCard key={game.id} titulo={game.titulo} preco={game.preco} imagem={game.imagem}/>

        ))}

      </section>
      
    </main>
  )
}

export default Home
