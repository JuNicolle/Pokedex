const GameVersionPage = () => {
    const { gameversion } = useParams()
    const [gameVersionById, setGameVersionById] = useState([])
    

    const fetchPokemonByGameVersion = async () => {
        try {
            const response = await GenerationService.GetGenByID(gameversion)

            console.log(response.data)
            setGameVersionById(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemonByGameVersion();
    }, [gameversion])

    return <>

    <h1>Versions des jeux</h1>
    </>
}

export default GameVersionPage;