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
    e.shaped(
  Item.of('4x kubejs:airstone_tile_stairs'),
  [
    'a  ',
    'aa ',
    'aaa'
  ],
  {
    a: 'kubejs:airstone_tiles',
  }
)
    e.shaped(
  Item.of('4x kubejs:polished_airstone_stairs'),
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
    e.shaped(
  Item.of('6x kubejs:airstone_wall'),
  [
    'aaa',
    'aaa'
  ],
  {
    a: 'kubejs:airstone',
  }
)
    e.shaped(
  Item.of('6x kubejs:cobble_airstone_wall'),
  [
    'aaa',
    'aaa'
  ],
  {
    a: 'kubejs:cobble_airstone',
  }
)
    e.shaped(
  Item.of('6x kubejs:airstone_brick_wall'),
  [
    'aaa',
    'aaa'
  ],
  {
    a: 'kubejs:airstone_bricks',
  }
)
    e.shaped(
  Item.of('6x kubejs:polished_airstone_wall'),
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

    //remove
    e.remove({id:'createadditionallogistics:crafting/kinetics/flexible_shaft'})
    e.remove({id:'galosphere:rope_dart'})

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

    // rebalances

    //e.remove({id: 'create:crafting/materials/electron_tube'})

    e.shaped('create:electron_tube', [
      'Q',
      'S'
    ], {
      Q: 'create:rose_quartz',
      S: 'kubejs:silver_sheet'
    })

    //e.remove({mod: 'computercraft'})

    e.remove({output: 'computercraft:computer_normal'})
    e.shaped('computercraft:computer_normal', [
      'PPP',
      'PEP',
      'PGP'
    ], {
      E: 'powergrid:integrated_circuit',
      G: 'minecraft:tinted_glass',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:pocket_computer_normal'})
    e.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
    e.shaped('computercraft:pocket_computer_normal', [
      'PBP',
      'PEP',
      'PGP'
    ], {
      E: 'powergrid:integrated_circuit',
      G: 'minecraft:tinted_glass',
      P: 'galosphere:palladium_ingot',
      B: 'powergrid:battery'
    })

    e.remove({output: 'computercraft:computer_advanced'})
    e.shaped('computercraft:computer_advanced', [
      'PPP',
      'PEP',
      'PGP'
    ], {
      E: 'powergrid:electrical_gizmo',
      G: 'minecraft:tinted_glass',
      P: 'oreganized:electrum_ingot'
    })

    e.custom({
      "type": "computercraft:transform_shaped",
      "category": "redstone",
      "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:computer_normal"}}],
      "key": {"#": {"tag": "c:ingots/electrum"}, "C": {"item": "computercraft:computer_normal"}, "E": {"item": "powergrid:electrical_gizmo"}},
      "pattern": ["###", "#C#", "#E#"],
      "result": {"count": 1, "id": "computercraft:computer_advanced"}
    })

    e.custom({
      "type": "computercraft:transform_shaped",
      "category": "redstone",
      "function": [
        {"type": "computercraft:copy_components", "from": {"item": "computercraft:pocket_computer_normal"}}
      ],
      "key": {"#": {"tag": "c:ingots/electrum"}, "C": {"item": "computercraft:pocket_computer_normal"}, "E": {"item": "powergrid:electrical_gizmo"}},
      "pattern": ["# #", "#C#", "#E#"],
      "result": {"count": 1, "id": "computercraft:pocket_computer_advanced"}
    })

    e.remove({id: 'computercraft:pocket_computer_advanced'})
    e.shaped('computercraft:pocket_computer_advanced', [
      'PBP',
      'PEP',
      'PGP'
    ], {
      E: 'powergrid:electrical_gizmo',
      G: 'minecraft:tinted_glass',
      P: 'oreganized:electrum_ingot',
      B: 'powergrid:battery'
    })

    e.remove({id: 'computercraft:monitor_normal'})
    e.shaped('6x computercraft:monitor_normal', [
      'PEP',
      'PGP'
    ], {
      E: 'powergrid:copper_coil',
      G: 'minecraft:tinted_glass',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:monitor_advanced'})
    e.shaped('6x computercraft:monitor_advanced', [
      'PEP',
      'PGP'
    ], {
      E: 'powergrid:crt',
      G: 'minecraft:tinted_glass',
      P: 'oreganized:electrum_ingot'
    })

    e.remove({id: 'computercraft:cable'})
    e.shaped('6x computercraft:cable', [
      'PRP',
    ], {
      R: 'minecraft:redstone',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:wired_modem'})
    e.shaped('computercraft:wired_modem', [
      'R ',
      'PP',
    ], {
      R: 'minecraft:repeater',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:wireless_modem_normal'})
    e.shaped('computercraft:wireless_modem_normal', [
      'R ',
      'PP',
    ], {
      R: 'create:transmitter',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:wireless_modem_advanced'})
    e.shaped('computercraft:wireless_modem_advanced', [
      'RE',
      'PP',
    ], {
      R: 'create:transmitter',
      E: 'minecraft:ender_eye',
      P: 'oreganized:electrum_ingot'
    })

    e.remove({id: 'computercraft:printer'})
    e.shaped('computercraft:printer', [
      'PEP',
      'PGP'
    ], {
      E: 'create:spout',
      G: 'minecraft:redstone',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:speaker'})
    e.shaped('computercraft:speaker', [
      'PEP',
      'PGP'
    ], {
      E: 'supplementaries:speaker_block',
      G: 'minecraft:redstone',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:disk_drive'})
    e.shaped('computercraft:disk_drive', [
      'PEP',
      'PGP'
    ], {
      E: 'powergrid:magnet',
      G: 'minecraft:redstone',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'computercraft:redstone_relay'})
    e.shaped('computercraft:redstone_relay', [
      'PGP',
      'GEG',
      'PGP'
    ], {
      E: 'computercraft:wired_modem',
      G: 'minecraft:redstone',
      P: 'galosphere:palladium_ingot'
    })

    e.remove({output: 'computercraft:disk'})
    e.shapeless('computercraft:disk', ['powergrid:magnet', 'minecraft:paper', 'kubejs:silver_sheet'])

    e.remove({output: 'computercraft:turtle_normal'})
    e.remove({output: 'computercraft:turtle_advanced'})
    e.custom({
      "type": "computercraft:transform_shaped",
      "category": "redstone",
      "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:computer_normal"}}],
      "key": {
        "#": {"tag": "c:ingots/palladium"},
        "C": {"item": "computercraft:computer_normal"},
        "I": {"tag": "kubejs:portable_engines"}
      },
      "pattern": ["#C#", "#I#"],
      "result": {"count": 1, "id": "computercraft:turtle_normal"}
    })

    e.custom({
      "type": "computercraft:transform_shaped",
      "category": "redstone",
      "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:computer_advanced"}}],
      "key": {
        "#": {"tag": "c:ingots/electrum"},
        "C": {"item": "computercraft:computer_advanced"},
        "I": {"tag": "kubejs:portable_engines"}
      },
      "pattern": ["#C#", "#I#"],
      "result": {"count": 1, "id": "computercraft:turtle_advanced"}
    })

    e.custom({
      "type": "computercraft:transform_shaped",
      "category": "redstone",
      "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:turtle_normal"}}],
      "key": {
        "#": {"tag": "c:ingots/electrum"},
        "B": {"tag": "c:storage_blocks/electrum"},
        "C": {"item": "computercraft:turtle_normal"},
        "E": {"item": "powergrid:electrical_gizmo"}
      },
      "pattern": [" B ","#C#", " E "],
      "result": {"count": 1, "id": "computercraft:turtle_advanced"}
    })

    e.remove({id: 'createdieselgenerators:crafting/diesel_engine'})
    e.shaped('createdieselgenerators:diesel_engine', [
      ' E ',
      'PBP',
      'IFI'
    ], {
      E: 'simulated:engine_assembly',
      B: 'create:brass_block',
      F: 'create:fluid_tank',
      P: 'createdieselgenerators:engine_piston',
      I: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'createdieselgenerators:crafting/large_diesel_engine'})
    e.shaped('createdieselgenerators:large_diesel_engine', [
      'BEB',
      ' I '
    ], {
      B: 'create:andesite_alloy',
      E: 'createdieselgenerators:diesel_engine',
      I: 'galosphere:palladium_ingot'
    })

    e.remove({id: 'createdieselgenerators:crafting/huge_diesel_engine'})
    e.shaped('createdieselgenerators:huge_diesel_engine', [
      'EPE',
      'ISI',
      'IBI'
    ], {
      E: 'simulated:engine_assembly',
      B: 'create:brass_block',
      S: 'create:steam_engine',
      P: 'create:precision_mechanism',
      I: 'galosphere:palladium_ingot'
    })
})

