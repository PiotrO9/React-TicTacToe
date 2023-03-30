function Tile({id, TileClick, content}: TileProps) {
    return (
        <div className="Tile" onClick={() => {TileClick(id)}}>
            {content}
        </div>
    )
}

interface TileProps {
    id: number,
    TileClick: any,
    content: string
}

export default Tile