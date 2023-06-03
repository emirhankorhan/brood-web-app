import './focus.css';
import { useState, React } from "react";
import Content from "../content/Content"
// import Features from './components/features/Features';
// import Featurestwo from './components/featurestwo/Featurestwo';


function Focus() {

  const [onButton, setOnButton] = useState(false);
 

  const menuIsOpen = () => {
    setOnButton(true);
    
  }

  const menuIsClose = () => {
    setOnButton(false);
    
  }

  if (onButton === false) {
    return (
      <div className='app'>
        <div className='header-navbar'>
          <div className='header-nav-logo'>

            <p className='first-logo'>brood</p>
          </div>
          <button onClick={menuIsOpen} className='menu-button'><i class="fa-solid fa-layer-group"></i></button>
          <div className='header-nav-link'>
            <a href='/'>Home</a>
            <a href='/features'>Features</a>
            <a href='/pricing'>Pricing</a>
            <a href='/contact'>Contact</a>
          </div>
          <div className='header-nav-log'>
            <button className='sign-button'>Sign in</button>
            <button className='login-button'>Login</button>
            
          </div>
        </div>
        <div>Odaklanma ve Konsantrasyon sorunu özellikle çocukluk çağında görülürken yetişkinlik döneminde de gün yüzüne çıkabilir. Hiçbir birey mükemmel bir odaklanmaya sahip değildir. Herkeste eser miktarda odaklanma problemi olur ki bu yaşadığımız çağın hareketliliğinden ve karmaşasından dolayı gayet doğaldır.

“Kitabı elime alıyorum 2 sayfa okuyamadan fırlatıyorum, sınava çalışırken, ders dinlerken hatta sevdiğim diziyi bile izlerken birkaç dakika sonra başka alemlere gidiyorum. Çok fazla sıkılıyorum.” diyenlerdenseniz ‘Dikkat Eksiliği ve Hiperaktivite Hastalığı‘ ile tanışmışsınızdır. Fakat her odaklanma sorunu yaşayan insanda bu hastalık mevcut diyemeyiz. ‘Beyin Yorgunluğu’ dediğimiz durum da odaklanma sorunu yaşatır.</div>
      </div>
    )

  } else if (onButton === true) {
    return (
      <div className='app'>

        <div className="menu-open">

          <div className="close-button"><i onClick={menuIsClose} class="fa-solid fa-xmark"></i></div>
          <div className='header-nav-close-link'>
            <a href='/'>Home</a>
            <a href='/features'>Features</a>
            <a href='/pricing'>Pricing</a>
            <a href='/contact'>Contact</a>
          </div>

          <div className='header-nav-close-log'>
            <button className='sign-button'>Sign in</button>
            <button className='login-button'>Login</button>
          </div>

        </div>
        <div className='header-navbar'>
          <div className='header-nav-logo'>

            <p className='first-logo'>brood</p>
          </div>
          <button onClick={menuIsOpen} className='menu-button'><i class="fa-solid fa-layer-group"></i></button>
          <div className='header-nav-link'>
            <a href='/'>Home</a>
            <a href='/features'>Features</a>
            <a href='/pricing'>Pricing</a>
            <a href='/contact'>Contact</a>
          </div>
          <div className='header-nav-log'>
            <button className='sign-button'>Sign in</button>
            <button className='login-button'>Login</button>
          </div>
        </div>
        <div>Odaklanma ve Konsantrasyon sorunu özellikle çocukluk çağında görülürken yetişkinlik döneminde de gün yüzüne çıkabilir. Hiçbir birey mükemmel bir odaklanmaya sahip değildir. Herkeste eser miktarda odaklanma problemi olur ki bu yaşadığımız çağın hareketliliğinden ve karmaşasından dolayı gayet doğaldır.

“Kitabı elime alıyorum 2 sayfa okuyamadan fırlatıyorum, sınava çalışırken, ders dinlerken hatta sevdiğim diziyi bile izlerken birkaç dakika sonra başka alemlere gidiyorum. Çok fazla sıkılıyorum.” diyenlerdenseniz ‘Dikkat Eksiliği ve Hiperaktivite Hastalığı‘ ile tanışmışsınızdır. Fakat her odaklanma sorunu yaşayan insanda bu hastalık mevcut diyemeyiz. ‘Beyin Yorgunluğu’ dediğimiz durum da odaklanma sorunu yaşatır.</div>
      </div>
    )
  }
}

export default Focus;
