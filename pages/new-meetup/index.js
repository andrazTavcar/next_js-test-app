import React from 'react';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

const NewMeetUp = (props) => {

  const router = useRouter();

  const onAddMeetupHandler = async (data) => {
    const response = await fetch('/api/new-meetup', {
      method: "POST", body: JSON.stringify(data), headers: {
        "Content-Type": "application/json"
      }
    })

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
}

export default NewMeetUp;