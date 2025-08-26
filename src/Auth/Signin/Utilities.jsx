import Page from './Page'
import UI from './UI'
export default function Utilities(){
    return (
        <div className="flex h-screen ">
            <div className="bg-linear-to-bl from-blue-950 to-black backdrop-blur-3xl h-screen w-1/2 items-center grid">
            <div className="itexs-center text-center">

            <h1 className="header text-white">Join Our Commmunity</h1>
            <p className="para text-white">Sign Up to explore news articels,adn insights powered by ai</p>
            <button className="graybtn px-4 py-2 lowercase">exlore freature</button>
            </div>
            </div>
            <UI/>
        </div>
    )
}