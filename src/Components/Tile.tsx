import ITileProps from "../Models/ITileProps"

function Tile({id, TileClick, content}: ITileProps) {
    return (
        <div className="Tile" onClick={() => {TileClick(id)}}>
            {
                content == 'x' ? (
                    <span className="Cross">{content}</span>
                ) : (
                    <span className="Circle">{content}</span>
                )
            }
        </div>
    )
}

export default Tile