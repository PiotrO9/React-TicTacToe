function Tile({id, TileClick, content}: TileProps) {
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

interface TileProps {
    id: number,
    TileClick: any,
    content: string
}

export default Tile