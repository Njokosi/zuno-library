import Head from 'next/head'
import Image from 'next/image'
import { Main } from "../templates/Main";
import { Meta } from "../layout/Meta";

export default function Home() {
  return(
     <Main
      meta={
        <Meta
          title="Zuno Library"
          description="Complete solutions for farm mechanization and innovative services from land preparation to post harvesting"
        />
        
      }
    >
      <div>
        Hello there 2
      </div>
    </Main>
  )
}
