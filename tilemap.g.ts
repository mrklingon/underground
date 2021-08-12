// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000030300000000000000000000000000000302030303030303030303030303030003020202020202030302020202030300030202020202020302020202020303000302020202020203020202020203030003020202020202030202020202020300030202020202020303020202020203000302020202020202020202020202030003020202020202020202020202020300030202020202020202020202020203000302020202020201030302020201030003020202020202020201030303030301030202020202020202020202020203010302020202020202020202020202030103020202020202020202020202020303030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . 2 2 . . 2 . 
. . 2 . 2 2 2 2 2 2 . 2 2 2 . . 
. . 2 . . . . . . 2 . . . 2 2 2 
. . 2 . . . . . . 2 . . . . . 2 
. . 2 . . . . . . 2 . . . . . 2 
. . 2 . . . . . 2 2 . . . . . 2 
. . 2 . . . . . . . . . . . . 2 
. . 2 . . . . . . . . . . . . 2 
. . 2 . . . . . . . . . . . . 2 
. . 2 . . . . . . . . . . . . 2 
. . 2 . . . . . 2 2 . . . . . 2 
. . 2 . . . . . . 2 2 2 2 2 2 2 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.greenOuterNorth0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
