const Felhasznalokartya = ({name, email, picture}) => {
    return (
        <div>
            <img src={picture.large} alt={`${name.first} ${name.last}`} />
            <h2>{name.title} {name.first} {name.last}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Felhasznalokartya;