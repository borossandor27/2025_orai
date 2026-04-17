import { NavLink } from 'react-router-dom'
const IndexPage = () => {
    return (
        <>
            <header className="hero-section mb-5">
                <div className="container  align-items-start w-100 h-100 m-2-auto d-flex">
                    <div className="overlay w-50 text-start">
                        <h1>Drive-IT Nyilvántartó rendszer</h1>
                        <p>Reszponzív weboldal (Bootstrap és egyedi CSS)</p>
                        <NavLink className="btn btn-outline-light mx-2" to="/flotta">Flotta</NavLink>
                        <NavLink className="btn btn-outline-light mx-2" to="/kolcsonzes">Kölcsönzés</NavLink>
                    </div>
                </div>
            </header>
            <main className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Flotta</h5>
                                <p className="card-text">Reszponzív táblázat a gépjárművek adataival.</p>
                                <NavLink className="btn btn-primary w-100" to="/flotta">Megnyitás</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Kölcsönzés</h5>
                                <p className="card-text">Reszponzív táblázat a gépjárművek adataival.</p>
                                <NavLink className="btn btn-primary w-100" to="/kolcsonzes">Megnyitás</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Új autó</h5>
                                <p className="card-text">Reszponzív táblázat a gépjárművek adataival.</p>
                                <NavLink className="btn btn-primary w-100" to="/uj">Megnyitás</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>)
}

export default IndexPage