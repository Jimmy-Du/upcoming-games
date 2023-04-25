import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import Game from "@/interfaces/game.interface";



export async function GET(request: Request) {
  console.log(request.url)

  const client = await clientPromise
  const db = client.db('upcomingMedia')
  const collection = db.collection('games')
  
  let games = await collection
    .find(
      {'releaseDate' : {$gte : new Date(new Date().getDate() - 30)}}
    )
    .sort({'releaseDate' : 1})
    .toArray() as Game[]
  
  return NextResponse.json(games)
}