"use client";
import { Text, Box, Container, Stack, Button, Tabs, TabList, Tab, TabPanel, TabPanels } from '@/app/common/index'

type MyInfo = {
  title: string,
  body: string
}

const myinfo: MyInfo[] = [
  {
    title: "game designer",
    body: "testest"
  }
]

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
  const element = ["game designer", "android developer"];
  let myinfo = ""
  element.forEach((e) => myinfo += e + " / ")
  
  let selected = ""

  return (
    <Container as="main" maxW="container.sm" my="8">
      <Stack align='start'>
        <Text fontSize='2xl'><strong>tacptac</strong></Text>
        <Text fontSize='md'>game designer</Text>
        <Tabs variant='unstyled' align='start'>
          <TabList>
            <Tab _selected={{ color: 'black' }} color='gray.300' paddingEnd='0px' paddingStart='0px'>restaurants</Tab>
            <Tab _selected={{ color: 'black' }} color='gray.300' paddingEnd='0px'>books</Tab>
            <Tab _selected={{ color: 'black' }} color='gray.300' paddingEnd='0px'>games</Tab>
            <Tab _selected={{ color: 'black' }} color='gray.300' paddingEnd='0px'>movies</Tab>
          </TabList> 
          <TabPanels>
            <TabPanel padding='0px'>
              <p>- monk</p>
            </TabPanel>
            <TabPanel padding='0px'>
              <p>- I, Robot</p>
            </TabPanel>
            <TabPanel padding='0px'>
              <p>- League of Legends</p>
            </TabPanel>
            <TabPanel padding='0px'>
              <p>- pulp fiction</p>
              <p>- Porco Rosso(紅の豚)</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  )
}
