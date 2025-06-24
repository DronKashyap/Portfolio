import BentoIcon from './Icons/BentoIcon'
import AnimeCard from './BentoCards/AnimeCard'
import AnimeCard2 from './BentoCards/AnimeCard2'
import WakatimeStats from './BentoCards/CodingTimeCard'
import GithubCard from './BentoCards/Githubcard'
import SocialsCard from './BentoCards/SocialsCard'
import StacksCard from './BentoCards/StacksCard'
import Chopstiks from './Chopstiks'

const Bento = () => {
  return (
    <div className=" space-y-10">
      <div className="group/bentoi flex w-fit items-baseline gap-2">
      </div>
      <div className="hidden grid-cols-5 grid-rows-6 gap-4 xs:grid">
        <AnimeCard />
        <StacksCard isForSmall={true} />
        <GithubCard />
        <SocialsCard />
        <WakatimeStats />
        <AnimeCard2 />
      </div>

      <div className="grid grid-cols-5 grid-rows-5 gap-4 xs:hidden">
        <StacksCard />
        <GithubCard />
        <AnimeCard />
        <AnimeCard2 />
        <SocialsCard />
        <WakatimeStats />
      </div>
    </div>
  )
}
export default Bento
