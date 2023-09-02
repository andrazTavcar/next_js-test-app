import React from 'react';
import MeetupList from "../components/meetups/MeetupList";
import {getDefaultCollection} from "../utils/mongoDbUtils";
import Head from "next/head";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Test Title",
    image: "https://www.ddtoursdubai.com/images/gallery/rollercoaster-at-img-worlds-of-adventure.jpg",
    address: "Address test",
    description: "Test Description",
  }
]

const HomePage = (props) => {
  return <>
    {/*For SEO  we can add this to other component in our APP*/}
    <Head>
      <title>{"Next js mettups app"}</title>
      <meta name={"description"} content={"Add meetups locations"}></meta>
    </Head>
    <MeetupList meetups={props.meetups}/>
  </>
}

// export const getServerSideProps = async (context) =>{
//   context.req;
//   context.res;
//
//   return {
//     props: {
//       meetups: DUMMY_DATA
//     }
//   }
// }

export const getStaticProps = async () => {

  const {collection, client} = await getDefaultCollection();
  const meetups = await collection.find().toArray();
  await client.close();

  // Props must be valid JSON object
  return {
    props: {
      meetups: meetups.map(item => {
        return {
          title: item.title,
          image: item.image,
          address:item.address,
          description: item.description,
          id: item._id.toString()}
      })
    }
  }
  // return {
  //   props: {
  //     meetups: DUMMY_DATA
  //   }
  // }
}

export default HomePage;