// import { sanityFetch } from "@/sanity/lib/live"
// import { Posts } from "@/components/Posts"
// import { sanityFetch } from "@/sanity/lib/client"
// import { POSTS_QUERY } from "@/sanity/lib/queries"
// import { POSTS_QUERYResult } from "#/sanity.types"
// import { getArtists } from "@/app/api/artists/getArtists"

import { Fragment } from "react"
import { spacedEmDash } from "@/components/custom.constants"
import SVGShapes from '@/components/fx/svg-shapes'
// import OnScrollScene from '#/src/on-scroll/scene'
import ZoomSpot from '#/src/on-scroll/zoom-spot'
import Landscape from '#/src/on-scroll/svg-landscape'
import Cover from '#/src/on-scroll/front'
import Intro from '#/src/on-scroll/intro'
import Outro from '#/src/on-scroll/outro'
import StickySections from '#/src/on-scroll/sticky-sections'

//#region - Mock data for sections
const CITE = [
  `Приятно слышать, что вы так вежливо обращаетесь с котом. \
  Котам обычно почему-то говорят «ты», \
  хотя ни один кот никогда ни с кем не пил брудершафта.`,

  `Мне кажется почему-то, что вы не очень-то кот,\
  ${spacedEmDash}нерешительно ответил мастер.`
]
const mockA = [
  {
    id: 1,
    head: `Живопись`,
    lead: `Художник работает в основном в жанре пейзажа и натюрморта, используя в чисто реалистических изображениях приёмы кубизма${spacedEmDash}строго классическое построение осложняется дробнымми пересечениями плоскостей.`,
    // image: '/landsape.jpg'
    image: '/still-life-2.jpg'
  }, {
    id: 2,
    head: `Натюрморт`,
    lead: `В творчестве Игаева даёт пожалуй наиболее яркое представление о его живописных достижениях. Как Булгаковский «не очень-то кот», получается на холсте не «очень-то стол», или «не очень-то стена», что-то в этой стене проглядывает, какая-то то ли дальняя роща, то ли другая планета.`,
    image: '/still-life-3.jpg'
  }, {
    id: 3,
    head: `Другая сторона`, // 'С другой стороны'
    lead: `Помимо экспериментальных элементов, в картинах Владимира всегда есть, такие узнаваемые, Подмосковные перелески. И даже запах мокрого букета сирени на старой дачной веранде (на такой, знаете ли с почерневшими досками и облупившейся краской на рамах)${spacedEmDash}чувствуется именно таким, каким он бывает после майского дождя.`,
    image: '/still-life-1.jpg'
  }
]
const mockB = [
  {
    id: 1,
    head: `Волшебство искусства`,
    lead: `Художники акварельной живописи располагают обилием технических приемов. Лессировка или многослойная акварельная живопись состоит из слоев полупрозрачных оттенков поверх имеющегося рисунка. Работа «по сырому листу» предполагает исполнение изображения за один прием, но допускает акценты на деталях. Соль-акварель разъедает краску и создает специфическую фактуру изображения. Смешанная или авторская техника акварельной живописи включает брызги воды, парафин и импровизированные добавки в краску. Материалы создают впечатление объема и текстуры на ровной поверхности основы.`,
    image: '/flowers-2.jpg'
  },{
    id: 2,
    head: `Живопись акварелью`,
    lead: `Техника изобразительного искусства, в которой художник создает живописный образ при помощи акварельных красок и фактуры основы. Техника объединяет элементы живописи и графики, является переходным этапом и допускает использование гуаши, белил, пастели, сангины. Картины акварельной живописи отличают две особенности: белый цвет отсутствует в палитре${spacedEmDash}функцию исполняет основа, а мазок кисти${spacedEmDash}прозрачный и не обладает рельефом. Изображению на акварельной картине присущи нежность, воздушность, тонкая палитра оттенков. Хлопковая или целлюлозная бумага и картон издавна стали основой для изображения.`,
    image: '/watercolor-sennelier.jpg'
  }, {
    id: 3,
    head: `Анимализм`,
    lead: `Жанр изобразительного искусства, главным объектом которого являются животные, птицы, рыбы и насекомые. Стоит различать мастеров, которые вводят животных в свои картины в качестве второстепенных персонажей, и художников-анималистов, которые изображают только животных, зачастую специализируясь лишь на некоторых из них, добиваясь максимальной достоверности изображения.`,
    image: '/animalism-owl.jpg'
  }
]
export const ARTISTS = [{
  bio: {
    firstName: 'Владимир', lastName: 'Игаев',
    about: `Впервые взял в руки карандаш, записавшись весьма случайно, на отделение Рисунка и Живописи, при Московском педагогическом государственном институте им. В. И. Ленина (теперь университет), которым руководил анималист М. М. Кукунов. Сначала посещал занятия за компанию со своим другом, но как-то возвратился домой, забросил портфель, и неделю провел на этюдах.`,
  },
  genres: [...mockA],
},{
  bio: {
    firstName: 'Наталья', lastName: 'Игаева',
    about: ``,
  },
  genres: [...mockB],
}]
//#endregion

export default async function HomePage() {
  // const artists = await getArtists()

  // return <OnScrollScene />
  return (<>
    <SVGShapes />
    <ZoomSpot back={<Landscape />} front={<Cover />} />

    {ARTISTS.map((artist: any, index: number) => (
      <Fragment key={index}>
        <Intro data={artist.bio} />

        <StickySections effect={
          index == 0
            ? 'inner-rx-perspective'
            : 'stack-swiping-offscreen'
          } data={ARTISTS[index].genres} />

        <Outro data={CITE[index]} />
      </Fragment>
    ))}
  </>)
}