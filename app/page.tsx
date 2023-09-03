import Image from 'next/image'
import styles from './page.module.css'

const shuffleArray = (array:string[]) => {
  const cloneArray = [...array]

  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1))
    // 配列の要素の順番を入れ替える
    let tmpStorage = cloneArray[i]
    cloneArray[i] = cloneArray[rand]
    cloneArray[rand] = tmpStorage
  }

  return cloneArray
}

export default function Home() {
  const element = shuffleArray(["game designer", "android developer", "SF", "magazine", "anime", "sao", "web design", "next.js", "kyoto", "z4 coupe 3.0si", "movie", "english", "ramen"]);
  let myinfo = ""
  element.forEach((e) => myinfo+=e+" / ")
  return (
    <div>
      <p><strong>tacptac</strong></p>
      {myinfo}
    </div>
  )
}
