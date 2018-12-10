## De-Adorn
Similar to puzzle pirates sword fights, but with ornaments and hammers. Put downs on other side are either a single ornament or a cylinder of ornaments

### Ornament objects
#### Cylinders
- turnsAlive: number
- lifespan: number
- size: Size { height: number, width: number }
- position: Position { x: number, y: number }
- ornaments: []OrnamentID[]

#### Ornaments
- turnsAlive: number
- disabled: boolean
- position: Position { x: number, y: number }
- color: Color

#### Cursor: Ornament

#### OrnamentUpdate
```
{
    clear: [],
    draw: [],
}
```

### Reducers
- ornaments
- cylinders
- session {
    newOrnaments: OrnamentId[],
    cursor: OrnamentId,
}

### Drawing lifecycle
redraw(updates: OrnamentUpdates[])
