import mlirLogo from './assets/mlir.svg'
import tobLogo from './assets/tob.png'
import './App.css'

function App() {
    return (
        <>
            <div>
                <a href="https://mlir.llvm.org" target="_blank">
                    <img src={mlirLogo} className="logo" alt="MLIR logo"/>
                </a>
                <a href="https://trailofbits.github.io/vast/" target="_blank">
                    <img src={tobLogo} className="logo white" alt="TrailOfBits logo"/>
                </a>
            </div>
            <h1>Vast: Cover every analysis you need</h1>
            <section className="section" id="news">
                <h2>Latest News</h2>
                <div className="box">
                    <p>🎉<b>(03/2025)</b> vast拥有了第一个网站</p>
                </div>
            </section>
            <section className="section" id="features">
                <h2>Features</h2>
                <a href="#" target="_blank">
                    <button>view all features</button>
                </a>
            </section>
            <section className="section" id="compile-result">
                <h2>IR Generation on Real Project</h2>
                <a href="#" target="_blank">
                    <button>view all c/c++ projects vast can compile</button>
                </a>
            </section>
            <section className="section" id="bug-report">
                <h2>Static Analysis Bug Report</h2>
                <a href="bug-report.html" target="_blank">
                    <button>view all bug report</button>
                </a>
            </section>
        </>
    )
}

export default App
