import { Navbar } from "../../components/Navbar";

const rankingDataMock = [
  {
    name: 'Danilo',
    score: 40,
    position: 1,
    avatar: 'https://robohash.org/teste1',
  },
  {
    name: 'Danilo',
    score: 35,
    position: 2,
    avatar: 'https://robohash.org/teste2',
  },
  {
    name: 'Danilo',
    score: 30,
    position: 3,
    avatar: 'https://robohash.org/teste3',
  },
  {
    name: 'Danilo',
    score: 25,
    position: 4,
    avatar: 'https://robohash.org/teste4',
  },
  {
    name: 'Danilo',
    score: 20,
    position: 5,
    avatar: 'https://robohash.org/teste5',
  },
]

type RankingItemProps = {
  name: string;
  score: number;
  position: number;
  avatar?: string;
}

const RankingItem = ({ name, position, score, avatar }: RankingItemProps) => {
  return (
    <div className="flex text-white bg-[#43556A] rounded-md py-1.5 px-2 justify-between relative">
      <div className="flex gap-6 items-center">
        <div className="flex p-1 items-center justify-center rounded-full bg-[#324050FF]">
          <img
            src={avatar}
            width={50}
            height={50}
            alt={name}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-fredoka">
            <p>{name}</p>
          </div>
          <div className="flex gap-2">
            <p>{score}</p>
            <span className="material-symbols-outlined">emoji_events</span>
          </div>
        </div>
      </div>
      <div
        className={`flex ${
          position <= 3
            ? 'absolute right-3 -top-2.8 text-red-500 text-2xl font-bold'
            : 'items-center'
        } rounded-full px-2 `}
      >
        <p>{position}</p>
      </div>
    </div>
  )
}

export const Ranking = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto gap-6 pt-16">
      <header className="flex justify-between">
        <div className="max-w-60">
          <h1 className="text-em-pink font-fredoka text-2xl font-medium">Ranking</h1>
        </div>
      </header>

      <div className="block w-full h-em-1 bg-white/10" />
      <main>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-4 p-1 m-2">
            {rankingDataMock.map((user) => (
              <RankingItem key={user.position} {...user} />
            ))}
          </div>
        </div>
      </main>
      <Navbar />
    </div>

  )
}
