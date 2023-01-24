import {IMilkDataProps} from '../types'
import milkImg from '../assets/milk.png'
import '../Styles/main.css'

const Main = ({data}:IMilkDataProps) => {
  return (
    <main className='main-section'>
      <section className='cards-section'>
        {data.map(milk =>{
          // console.log(milk)
          return(
            <article className='milk-card'>
              <div className='milk-card-img'>
                <img src={milkImg} alt="milk box" />
              </div>
              <div className='milk-card-description'>
                <h1>{milk.name}</h1>
                <div className='milk-card-description-dtls'>
                  <p>{milk.type}</p>
                  <p>{milk.storage} liters</p>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Main