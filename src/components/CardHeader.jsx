const CardHeader = ({ name, type, dimension, population }) => {
    return <div className="card-header">
        <h2 className="name">{name}</h2>
        <div className="info">
            <span> <strong>Type:</strong> {type} </span>
            <span> <strong>Dimension:</strong> {dimension} </span>
            <span> <strong>Population:</strong> {population} </span>
        </div>
    </div>
};

export default CardHeader;