import { useEffect, useState } from 'react';
import './App.css'

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';


export default function App() {
  const [data, setData] = useState('')

  async function fetchData() {
    const response = await fetch(url).then(response => response.json());

    if (response.cod !== 200) {
      throw new Error(`Error: ${response.message}`);
    }

    console.log({ response })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="header">
        <div>&nbsp;</div>

        <h2>Mon, 25 May</h2>

        <span>ºC</span>
      </div>

      <div className="body">
        <div className="content">
          <h2>London</h2>

          <h1>15º</h1>

          <h3>Feels like 7º</h3>
        </div>

        <div className="image">
          <img src="./assets/3D Ico_12.png" />
        </div>
      </div>

      <div className="divider"></div>

      <div className="hours">
        <div className="content">
          <h2>3 AM</h2>

          <h3>15º</h3>
        </div>

        <div className="content">
          <h2>5 AM</h2>

          <h3>14º</h3>
        </div>

        <div className="content">
          <h2>7 AM</h2>

          <h3>17º</h3>
        </div>

        <div className="content">
          <h2>9 AM</h2>

          <h3>18º</h3>
        </div>

        <div className="content">
          <h2>11 AM</h2>

          <h3>20º</h3>
        </div>
      </div>

      <div className="divider"></div>

      <div className="week">

        <div className="content">
          <h3>Monday</h3>

          <div className="image">
            <img src="./assets/3D Ico_01.png" />
          </div>

          <div>
            <h3>15º</h3>

            <span>7º</span>
          </div>
        </div>

        <div className="content">
          <h3>Tuesday</h3>

          <div className="image">
            <img src="./assets/3D Ico_02.png" />
          </div>

          <div>
            <h3>15º</h3>

            <span>7º</span>
          </div>
        </div>

        <div className="content">
          <h3>Wednesday</h3>

          <div className="image">
            <img src="./assets/3D Ico_03.png" />
          </div>

          <div>
            <h3>15º</h3>

            <span>7º</span>
          </div>
        </div>

        <div className="content">
          <h3>Thursday</h3>

          <div className="image">
            <img src="./assets/3D Ico_04.png" />
          </div>

          <div>
            <h3>15º</h3>

            <span>7º</span>
          </div>
        </div>

        <div className="content">
          <h3>Friday</h3>

          <div className="image">
            <img src="./assets/3D Ico_05.png" />
          </div>

          <div>
            <h3>15º</h3>

            <span>7º</span>
          </div>
        </div>
      </div>
    </div>
  )
}
