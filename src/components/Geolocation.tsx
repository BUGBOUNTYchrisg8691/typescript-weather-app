import React, { ReactElement, useEffect } from 'react'

interface Location {
  longitude: number,
  latitude: number
}

type HandleSetLocation = (location: Location) => void;

interface Props {
  handleSetLocation: HandleSetLocation,
}

interface Location {
  latitude: number,
  longitude: number,
}

type Success = (pos: any) => void;
type Errors = (err: any) => void;

const options: Options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

export default function Geolocation({ handleSetLocation }: Props): ReactElement {
  const success: Success = (pos: any) => {
    console.log(pos)
    const crd = pos.coords;
    handleSetLocation({ longitude: crd.longitude, latitude: crd.latitude })
    console.log(crd)
  }

  const errors: Errors = (err: any) => {
    console.log(err);
    console.warn(`ERROR: ${err.code}: ${err.message}`)
  }

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((res) => {
          console.log(res)
          if(res.state === "granted") {
            console.log("Granted ==>> "< res.state)
            navigator.geolocation.getCurrentPosition(success)
          } else if(res.state === "prompt") {
            console.log("Prompt ==>> ", res.state)
            navigator.geolocation.getCurrentPosition(success, errors, options)
          } else if(res.state === "denied") {
            console.log("Denied ==>> ", res.state)
          }
          res.onchange = () => {
            console.log("Change ==>> ", res.state)
          }
        })
    } else {
      alert("Sorry, location unavailable")
    }
  }, [])

  return (
    <div>
      Geolocation
    </div>
  )
}
