import { useEffect } from "react";
import Navbar from "../components/Navbar"
import { useState } from "react"

const UjPage = () => {
    const [marka, setMarka] = useState('');
    const [rendszam, setRendszam] = useState('');
    const [uzemananyag, setUzemananyag] = useState('');

    useEffect(() => {
        // Itt lehetne lekérni a már meglévő adatokat, ha szükséges
    }, []);

    // Form adatok küldése a backendnek
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ marka, rendszam, uzemananyag })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };


    return (
        <div>
            <Navbar />
            <main>
                <div className="container mt-5">
                    <h2>Új gépjármű felvétele</h2>
                    <form className="mt-4 w-75 mx-auto" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Márka és Típus</label>
                                <input type="text" className="form-control" placeholder="Pl. Volkswagen Golf" value={marka} onChange={(e) => setMarka(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Rendszám</label>
                                <input type="text" className="form-control" placeholder="AAA-111" value={rendszam} onChange={(e) => setRendszam(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Üzemanyag</label>
                            <select className="form-select" value={uzemananyag} onChange={(e) => setUzemananyag(e.target.value)}>
                                <option selected disabled>Válasszon...</option>
                                <option>Benzin</option>
                                <option>Dízel</option>
                                <option>Elektromos</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Mentés</button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default UjPage