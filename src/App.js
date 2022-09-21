import Tau from './images/profile.jpeg'
import Beker from './images/beker.png'
import Geo from './images/geo.png'

function App() {
  return (
    <div className='bg-slate-900 w-full h-full flex justify-center'>
      <div className='w-2/3 text-zinc-400 pt-10 flex items-start flex-col'>
        <div className='w-36 h-36 md:w-64 md:h-64 rounded-full overflow-hidden aspect-square object-fill'>
          <img className='' src={Tau} alt='profile'></img>
        </div>
        <div>
          <h1 className='mt-10 text-xl font-black font-sans md:text-xxxl'>Hi, I'm Miras!</h1>
          <ul className='font-sans text-xl'>
            <li className='py-5 pr-5 font-black text-base md:text-xl'>Full-stack ninja, student, indie hacker</li>
            <li className='pb-5 pr-5 font-thin text-sm md:text-xl'>Currently studying <a href='https://nu.edu.kz/' className='font-semibold text-blue-link hover:underline'>@Nazarbayev University</a></li>
            <li className='pb-5 pr-5 font-normal text-sm md:text-xl'>Previously <a href='https://almaty.fizmat.kz/' className='font-medium text-blue-link hover:underline'>@FizMat</a>, <a href='https://academy.yandex.ru/lyceum/' className='font-medium text-blue-link hover:underline'>@Yandex.Lyceum</a>(Python, Flask, SQL) and <a href='https://www.linkedin.com/pulse/%25D0%25B1%25D0%25B5%25D1%2581%25D0%25BF%25D0%25BB%25D0%25B0%25D1%2582%25D0%25BD%25D1%258B%25D0%25B9-%25D0%25BB%25D0%25B5%25D1%2582%25D0%25BD%25D0%25B8%25D0%25B9-%25D0%25BB%25D0%25B0%25D0%25B3%25D0%25B5%25D1%2580%25D1%258C-%25D0%25BF%25D0%25BE-%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D0%25BC%25D0%25BC%25D0%25B8%25D1%2580%25D0%25BE%25D0%25B2%25D0%25B0%25D0%25BD%25D0%25B8%25D1%258E-arman-suleimenov/?trackingId=bNiecgclArMgVr6jLvb%2FPw%3D%3D' className='font-semibold text-blue-link hover:underline'>@NFactorial Incubator</a>(MERN stack)</li>
            <li className='pb-5 pr-5'></li>
            <h1 className='mt-10 text-lg md:text-xxl font-black font-sans pb-10'>My projects:</h1>
            <div className='flex flex-row justify-evenly pb-10'>
              <a href='https://beker.vercel.app/' className='hover:scale(1.05)'>
                <div className='w-30 h-60 md:w-96 md:h-128  bg-slate-200 mr-2 p-3 pt-5 md:p-10 rounded-xl hover:scale-105'>
                  <img src={Beker}></img>
                  <h1 className='text-base md:text-xxl font-normal text-slate-900 text-center'>Beker</h1>
                  <p className='text-sm md:text-m text-slate-900 text-center m-3'>This is a project that tests if people track government procurement</p>
                </div>
              </a>
              <a href='https://geoguess-e-r.vercel.app/'>
                <div className='w-30 h-60 md:w-96 md:h-128 bg-slate-200 ml-2 p-3 pt-5 md:p-10 rounded-xl hover:scale-105'>
                  <img src={Geo}></img>
                  <h1 className='text-base md:text-xxl font-normal text-slate-900 text-center'>Geoguesser</h1>
                  <p className='text-sm md:text-m text-slate-900 text-center m-3'>You have to guess the capital city by its description and mark it on the map</p>
                </div>
              </a>
            </div>
          </ul>
        </div>
      </div >
    </div >
  );
}

export default App;
