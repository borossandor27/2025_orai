const Felhasznalokartya = ({ name, email, picture }) => {
    return (
        <div className="felhasznalo-kartya">
            <img src={picture.large} alt={`${name.first} ${name.last}`} />
            <div className="felhasznalo-adatai">
                <h2>{name.title} {name.first} {name.last}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Felhasznalokartya;