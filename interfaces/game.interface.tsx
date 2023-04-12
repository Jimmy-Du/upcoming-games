import { WithId, Document } from "mongodb";



interface Game extends WithId<Document> {
  title: string,
  releaseDate: string,
  website: string,
  image: string,
  platforms: GamePlatform[]
}



interface GamePlatform {
  name: string,
  website: string,
}



export default Game