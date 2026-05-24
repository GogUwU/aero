ServerEvents.recipes(e => {
    //crafting recipes airstone blocks
    e.smelting('kubejs:airstone', 'kubejs:cobble_airstone')

    e.shaped(
    Item.of('kubejs:polished_airstone', 4),
    [
        'aa',
        'aa'
    ],
    {
        a: 'kubejs:airstone'
    }
    )

        e.shaped(
    Item.of('kubejs:airstone_tiles', 4),
    [
        'aa',
        'aa'
    ],
    {
        a: 'kubejs:airstone_bricks'
    }
    )
        e.shaped(
    Item.of('kubejs:airstone_bricks', 4),
    [
        'aa',
        'aa'
    ],
    {
        a: 'kubejs:polished_airstone'
    }
    )


        e.shaped(
    Item.of('kubejs:chiseled_airstone'),
    [
        'a',
        'a'
    ],
    {
        a: 'kubejs:airstone_bricks_slab'
    }
    )
    //crafting airstone stairs/walls/slabs
        //slabs
        e.shaped(
    Item.of('6x kubejs:airstone_slab'),
    [
        'aaa',
    ],
    {
        a: 'kubejs:airstone',
    }
    )
        e.shaped(
    Item.of('6x kubejs:cobble_airstone_slab'),
    [
        'aaa',
    ],
    {
        a: 'kubejs:cobble_airstone',
    }
    )
        e.shaped(
    Item.of('6x kubejs:airstone_bricks_slab'),
    [
        'aaa',
    ],
    {
        a: 'kubejs:airstone_bricks',
    }
    )
        e.shaped(
    Item.of('6x kubejs:airstone_tiles_slab'),
    [
        'aaa',
    ],
    {
        a: 'kubejs:airstone_tiles',
    }
    )
        e.shaped(
    Item.of('6x kubejs:polished_airstone_slab'),
    [
        'aaa',
    ],
    {
        a: 'kubejs:polished_airstone',
    }
    )
    //stairs
        e.shaped(
    Item.of('4x kubejs:airstone_stairs'),
    [
        'a  ',
        'aa ',
        'aaa'
    ],
    {
        a: 'kubejs:airstone',
    }
    )
        e.shaped(
    Item.of('4x kubejs:cobble_airstone_stairs'),
    [
        'a  ',
        'aa ',
        'aaa'
    ],
    {
        a: 'kubejs:cobble_airstone',
    }
    )
        e.shaped(
    Item.of('4x kubejs:airstone_brick_stairs'),
    [
        'a  ',
        'aa ',
        'aaa'
    ],
    {
        a: 'kubejs:airstone_bricks',
    }
    )
    e.shaped(Item.of('4x kubejs:airstone_tile_stairs'),
        [
            'a  ',
            'aa ',
            'aaa'
        ],
        {
            a: 'kubejs:airstone_tiles',
        }
    )
    e.shaped(Item.of('4x kubejs:polished_airstone_stairs'),
        [
            'a  ',
            'aa ',
            'aaa'
        ],
        {
            a: 'kubejs:polished_airstone',
        }
    )
    //walls
    e.shaped(Item.of('6x kubejs:airstone_wall'),
        [
            'aaa',
            'aaa'
        ],
        {
            a: 'kubejs:airstone',
        }
    )
    e.shaped(Item.of('6x kubejs:cobble_airstone_wall'),
        [
            'aaa',
            'aaa'
        ],
        {
            a: 'kubejs:cobble_airstone',
        }
    )

    e.shaped(Item.of('6x kubejs:airstone_brick_wall'),
        [
            'aaa',
            'aaa'
        ],
        {
            a: 'kubejs:airstone_bricks',
        }
    )

    e.shaped(Item.of('6x kubejs:polished_airstone_wall'),
        [
            'aaa',
            'aaa'
        ],
        {
            a: 'kubejs:polished_airstone',
        }
    )
    //stonecutting/ blocks
    e.stonecutting('kubejs:airstone_tiles','#kubejs:airstone')
    e.stonecutting('kubejs:airstone_bricks','#kubejs:airstone')
    e.stonecutting('kubejs:chiseled_airstone','#kubejs:airstone')
    e.stonecutting('kubejs:polished_airstone','#kubejs:airstone')
    e.stonecutting('kubejs:inset_airstone','#kubejs:airstone')
    //stairs
    e.stonecutting('kubejs:airstone_stairs','kubejs:airstone')
    e.stonecutting('kubejs:polished_airstone_stairs','kubejs:airstone')
    e.stonecutting('kubejs:airstone_brick_stairs','kubejs:airstone')
    e.stonecutting('kubejs:airstone_brick_stairs','kubejs:airstone_bricks')
    e.stonecutting('kubejs:cobble_airstone_stairs','kubejs:cobble_airstone')
    e.stonecutting('kubejs:airstone_tile_stairs','kubejs:airstone_tiles')
    e.stonecutting('kubejs:polished_airstone_stairs','kubejs:polished_airstone')
    //slabs
    e.stonecutting('2x kubejs:airstone_slab','kubejs:airstone')
    e.stonecutting('2x kubejs:polished_airstone_slab','kubejs:airstone')
    e.stonecutting('2x kubejs:cobble_airstone_slab','kubejs:cobble_airstone')
    e.stonecutting('2x kubejs:airstone_tiles_slab','kubejs:airstone_tiles')
    e.stonecutting('2x kubejs:polished_airstone_slab','kubejs:polished_airstone')
    e.stonecutting('2x kubejs:airstone_bricks_slab','kubejs:airstone')
    e.stonecutting('2x kubejs:airstone_bricks_slab','kubejs:airstone_bricks')
    //walls
    e.stonecutting('kubejs:airstone_wall','kubejs:airstone')
    e.stonecutting('kubejs:cobble_airstone_wall','kubejs:cobble_airstone')
    e.stonecutting('kubejs:polished_airstone_wall','kubejs:airstone')
    e.stonecutting('kubejs:airstone_brick_wall','kubejs:airstone')
    e.stonecutting('kubejs:airstone_brick_wall','kubejs:airstone_bricks')
    e.stonecutting('kubejs:polished_airstone_wall','kubejs:polished_airstone')
    //idk how to do this better ↓↓↓
    e.stonecutting('kubejs:airstone_tiles','kubejs:airstone')
    e.stonecutting('kubejs:airstone_bricks','kubejs:airstone')
    e.stonecutting('kubejs:chiseled_airstone','kubejs:airstone')
    e.stonecutting('kubejs:polished_airstone','kubejs:airstone')
    e.stonecutting('kubejs:inset_airstone','kubejs:airstone')



//scribe thing
    e.shapeless(
      Item.of('oreganized:scribe'),
                [
                  'kubejs:broken_scribe',
                'minecraft:amethyst_shard'
                ]
    )
    e.smelting('oreganized:silver_nugget', 'kubejs:broken_scribe')
    
    // new metal stuff
    e.custom({
        "type": "create:cutting",
        "ingredients": [
            {
            "item": "kubejs:silver_sheet"
            }
        ],
        "processingTime": 50,
        "results": [
            {
            "count": 4,
            "id": "kubejs:silver_wire"
            }
        ]
    })

    e.custom({
        "type": "create:pressing",
        "ingredients": [
            {
            "tag": "c:ingots/silver"
            }
        ],
        "results": [
            {
            "id": "kubejs:silver_sheet"
            }
        ]
    })

    e.custom({
        "type": "create:pressing",
        "ingredients": [
            {
            "tag": "c:ingots/electrum"
            }
        ],
        "results": [
            {
            "id": "kubejs:electrum_sheet"
            }
        ]
    })

    // counterweights
    e.shaped('kubejs:dumbell', [
        'III',
    ], {
        I: 'oreganized:lead_ingot'
    })

    e.shaped('kubejs:counterweight_20', [
        'III',
        'IBI',
        'III'
    ], {
        I: 'oreganized:lead_ingot',
        B: 'oreganized:lead_block'
    })

    e.shapeless('kubejs:counterweight_40', ['kubejs:counterweight_20','kubejs:counterweight_20'])



    // processing
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "kubejs:airstone"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.2,
                "id": "create:crushed_raw_silver"
            },
            {
                "chance": 0.2,
                "id": "oreganized:silver_nugget"
            }
        ]
    })

    e.custom({
        "type": "architects_palette:warping",
        "dimension": "minecraft:the_nether",
        "ingredient": {
            "item": "minecraft:blue_ice"
        },
        "result": {
            "count": 1,
            "id": "kubejs:glissant"
        }
    })
})