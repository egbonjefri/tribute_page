import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faChevronDown} />
 
 export default function HeaderComponent () {
     function handleScroll() {
        window.scroll({
            top: 2500, 
            left: 0, 
            behavior: 'smooth' 
          });
     }
     return (
         <div>
             
             <button onClick={handleScroll} className='icon'>{element}</button>

             <div className='header'>
            <h1>Osayomore Joseph</h1>
            <p><em>True Legends Live Forever</em></p>
            </div>
            <div className="about">
            <h2>About</h2>
        <p>
            Osayomore Joseph, born in Ugha village near Benin City, 
            Edo State Nigeria is one of the early pioneers of African 
             Highlife music. Specifically, he championed the Edo Funk music genre, which is basically cosmopolitan dance music that integrated elements from the native Edo culture into new sound effects popular in West African night-clubs during the 80s.
            His inspirational and educational  
            lyrics, which were especially critical of the totalitarian regime in Nigeria at the time were mostly sung in Edo (but also in pidgin English) reached a wide 
            audience worldwide.</p>
            <img alt='Old school pose of Osayomore Joseph' src='https://i.discogs.com/bfU_YXHq4N-v1LUxI6oaJmOYVRJYgGtQDDzLqbK4G6Y/rs:fit/g:sm/q:90/h:500/w:336/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE2NzM2/ODAtMTYxNTgwMTE3/NS03NjkyLnBuZw.jpeg' />
            <figcaption>In December 1980, Joseph released
                a new album, Oyeye (Supreme Disk) - a document chronicling is life
                experiences growing up in benin city.
            </figcaption>
            <p>Read more about his exciting lifestyle, inspiration and recent abuction from this  
             <a id="tribute-link" rel="noreferrer" href="https://www.npr.org/sections/therecord/2018/02/09/584266004/in-the-evil-forest-a-nigerian-activist-and-musician-sings-of-his-kidnapping" target="_blank"> article</a>.
          </p>
            <div className='facts'>
            <h2>Random Facts</h2>
                <ul>
                    <li>He started his music career in the Nigerian army band; later forming his own band the Ulele 
                power sound.</li>
                <li>He went on to release several regional hits in the 70's and 80's.</li>
                <li>In his long consistent career, Osayomore has averaged two albums a year totaling one hundred and four albums.</li>
                <li>Today most of his music can be found on Youtube.</li>
                </ul>
            </div>
         

         </div>
         <div className='music'>
             <h2>Discography</h2>
         </div>
         </div>
     )
 }

