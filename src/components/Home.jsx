import '../style.css'

export default function Home() {
    return (
        <div className="home" id='#home'>
            <h1>Gold Images</h1>
            <div className="imgContainer">
                <div className='imgSet'>
                    <img className='img' src="assets/braclet/main.jfif" alt="" />
                    <h2>Braclet</h2>
                </div>
                <div className="imgSet">
                    <img className='img' src="assets/chains/main.jfif" alt="" />
                    <h2>Chains</h2>
                </div>
                <div className="imgSet">
                    <img className='img' src="assets/rings/main.png" alt="" />
                    <h2>Rings</h2>
                </div>
                
                
                
            </div>
        </div>
    )

}