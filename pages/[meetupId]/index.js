import React from 'react';
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import {getDefaultCollection} from "../../utils/mongoDbUtils";
import {ObjectId} from "mongodb";

const MeetUpDetails = (props) => {
  return <MeetUpDetail {...props}/>
}

export const getStaticPaths = async () =>{
  const {collection, client} = await getDefaultCollection();
  const meetupsIds = await collection.find({}, {_id: 1}).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetupsIds.map(item => {
      return {
        params: {
          meetupId: item._id.toString()
        }
      }
    })
  }

}

export const getStaticProps = async (context) => {

  const id= context.params.meetupId;

  const {collection, client} = await getDefaultCollection();
  const meetup = await collection.findOne({_id: new ObjectId(id)});
  await client.close();

  return {
    props: {
      id,
      description: meetup?.description
    }
  }
}

export default MeetUpDetails;