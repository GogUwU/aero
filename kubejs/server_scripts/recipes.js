ServerEvents.recipes(e => {

    //remove
    e.remove({id:'createadditionallogistics:crafting/kinetics/flexible_shaft'})
    e.remove({id:'galosphere:rope_dart'})
    e.remove({id:'accents:sewing_kit'})
    e.remove({id:'sophisticatedbackpacks:upgrade_base'})
    e.remove({id:'sophisticatedbackpacks:mob_catcher_upgrade'})
    e.remove({id:'sophisticatedbackpacks:advanced_mob_catcher_upgrade'})
    e.remove({id:'spelunkery:compression_blast_miner'})
    e.remove({id:'create:splashing/gravel'})
	
	//remove ore veins
    e.remove({id:'createoreexcavation:ore_vein_type/coal'})
    e.remove({id:'createoreexcavation:ore_vein_type/lapis'})
    e.remove({id:'createoreexcavation:ore_vein_type/redstone'})
    e.remove({id:'createoreexcavation:ore_vein_type/glowstone'})
    e.remove({id:'createoreexcavation:ore_vein_type/quartz'})
    e.remove({id:'createoreexcavation:ore_vein_type/nether_gold'})
    e.remove({id:'createoreexcavation:ore_vein_type/netherite'})
    e.remove({id:'createoreexcavation:ore_vein_type/diamond'})
    e.remove({id:'createoreexcavation:ore_vein_type/hardened_diamond'})
    e.remove({id:'createoreexcavation:ore_vein_type/gold'})
    e.remove({id:'createoreexcavation:ore_vein_type/copper'})
    e.remove({id:'createoreexcavation:ore_vein_type/zinc'})
    e.remove({id:'createoreexcavation:ore_vein_type/emerald'})
    e.remove({id:'createoreexcavation:ore_vein_type/iron'})

    e.remove({id:'createoreexcavation:drilling/coal'})
    e.remove({id:'createoreexcavation:drilling/lapis'})
    e.remove({id:'createoreexcavation:drilling/redstone'})
    e.remove({id:'createoreexcavation:drilling/glowstone'})
    e.remove({id:'createoreexcavation:drilling/quartz'})
    e.remove({id:'createoreexcavation:drilling/nether_gold'})
    e.remove({id:'createoreexcavation:drilling/netherite'})
    e.remove({id:'createoreexcavation:drilling/diamond'})
    e.remove({id:'createoreexcavation:drilling/hardened_diamond'})
    e.remove({id:'createoreexcavation:drilling/gold'})
    e.remove({id:'createoreexcavation:drilling/copper'})
    e.remove({id:'createoreexcavation:drilling/zinc'})
    e.remove({id:'createoreexcavation:drilling/emerald'})
    e.remove({id:'createoreexcavation:drilling/iron'})

    // spelunkery
    // for (let path of [
    //     'asurine',
    //     'crimsite',
    //     'crimsite_recycling',
    //     'diamond_ore',
    //     'emerald_ore',
    //     'lapis_ore',
    //     'ochrum',
    //     'ochrum_recycling',
    //     'redstone_ore',
    //     'tuff',
    //     'tuff_recycling',
    //     'veridium',
    //     'veridium_recycling',
    // ]) e.remove({ id: `create:crushing/${path}` })

    // rebalances

    e.remove({id: 'create:crafting/materials/electron_tube'})

    e.shaped('create:electron_tube', [
        'Q',
        'S'
    ], {
        Q: 'create:polished_rose_quartz',
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
        'P',
        'E',
        'G'
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
        "pattern": ["#", "C", "E"],
        "result": {"count": 1, "id": "computercraft:computer_advanced"}
    })

    e.custom({
        "type": "computercraft:transform_shaped",
        "category": "redstone",
        "function": [
            {"type": "computercraft:copy_components", "from": {"item": "computercraft:pocket_computer_normal"}}
        ],
        "key": {"#": {"tag": "c:ingots/electrum"}, "C": {"item": "computercraft:pocket_computer_normal"}, "E": {"item": "powergrid:electrical_gizmo"}},
        "pattern": ["#", "C", "E"],
        "result": {"count": 1, "id": "computercraft:pocket_computer_advanced"}
    })

    e.remove({id: 'computercraft:pocket_computer_advanced'})
    e.shaped('computercraft:pocket_computer_advanced', [
        'B ',
        'EP',
        'G '
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
        P: 'create:brass_ingot'
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
        P: 'create:brass_ingot'
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
        "pattern": [" # ", " C ", " I "],
        "result": {"count": 1, "id": "computercraft:turtle_advanced"}
    })

    e.custom({
        "type": "computercraft:transform_shaped",
        "category": "redstone",
        "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:turtle_normal"}}],
        "key": {
            "#": {"tag": "c:ingots/electrum"},
            "C": {"item": "computercraft:turtle_normal"},
            "E": {"item": "powergrid:electrical_gizmo"}
        },
        "pattern": [" # "," C ", " E "],
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

    /*e.remove('create:sequenced_assembly/precision_mechanism')
    e.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
        "item": "kubejs:electrum_sheet"
    },
    "loops": 5,
    "results": [
        {
        "chance": 120.0,
        "id": "create:precision_mechanism"
        },
        {
        "chance": 8.0,
        "id": "kubejs:electrum_sheet"
        },
        {
        "chance": 8.0,
        "id": "create:andesite_alloy"
        },
        {
        "chance": 5.0,
        "id": "create:cogwheel"
        },
        {
        "chance": 3.0,
        "id": "oreganized:electrum_nugget"
        },
        {
        "chance": 2.0,
        "id": "create:shaft"
        },
        {
        "chance": 2.0,
        "id": "create:crushed_raw_gold"
        },
        {
        "id": "minecraft:iron_ingot"
        },
        {
        "id": 'oreganized:speedometer'
        }
    ],
    "sequence": [
        {
        "type": "create:deploying",
        "ingredients": [
            {
            "item": "create:incomplete_precision_mechanism"
            },
            {
            "item": "create:cogwheel"
            }
        ],
        "results": [
            {
            "id": "create:incomplete_precision_mechanism"
            }
        ]
        },
        {
        "type": "create:deploying",
        "ingredients": [
            {
            "item": "create:incomplete_precision_mechanism"
            },
            {
            "item": "create:large_cogwheel"
            }
        ],
        "results": [
            {
            "id": "create:incomplete_precision_mechanism"
            }
        ]
        },
        {
        "type": "create:deploying",
        "ingredients": [
            {
            "item": "create:incomplete_precision_mechanism"
            },
            {
            "tag": "c:nuggets/iron"
            }
        ],
        "results": [
            {
            "id": "create:incomplete_precision_mechanism"
            }
        ]
        }
    ],
    "transitional_item": {
        "id": "create:incomplete_precision_mechanism"
    }
    })*/

    e.remove({id: "simulated:redstone_magnet"})
    e.shapeless('simulated:redstone_magnet', ['create:industrial_iron_block','powergrid:copper_coil','minecraft:redstone'])

    e.remove({id: "simulated:redstone_inductor"})
    e.shaped('simulated:redstone_inductor', [
        ' C ',
        'RBT',
        'SSS'
    ], {
        S: '#c:stones',
        R: 'minecraft:redstone',
        B: 'create:brass_sheet',
        T: 'minecraft:redstone_torch',
        C: 'powergrid:copper_coil'
    })

    e.remove({id: 'create_connected:crafting/kinetics/sequenced_pulse_generator'})
    e.shaped('create_connected:sequenced_pulse_generator', [
        'RC ',
        'RBT',
        'SSS'
    ], {
        S: '#c:stones',
        R: 'create:electron_tube',
        B: 'create:brass_sheet',
        T: 'minecraft:redstone_torch',
        C: 'powergrid:integrated_circuit'
    })

    e.remove({id: 'simulated:sequenced_assembly/gyroscopic_mechanism'})
    e.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
        "item": "kubejs:electrum_sheet"
    },
    "loops": 3,
    "results": [
        {
            "chance": 200.0,
            "id": "simulated:gyroscopic_mechanism"
        },
        {
            "chance": 8.0,
            "id": "kubejs:electrum_sheet"
        },
        {
            "chance": 7.0,
            "id": "create:andesite_alloy"
        },
        {
            "chance": 3.0,
            "id": "create:brass_nugget"
        },
        {
            "chance": 2.0,
            "id": "create:crushed_raw_iron"
        },
        {
            "id": "oreganized:speedometer"
        },
        {
            "id": "minecraft:clock"
        }
    ],
    "sequence": [
        {
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": "simulated:incomplete_gyroscopic_mechanism"
                },
                {
                    "item": "create:gearbox"
                }
            ],
            "results": [
                {
                    "id": "simulated:incomplete_gyroscopic_mechanism"
                }
            ]
            },
            {
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": "simulated:incomplete_gyroscopic_mechanism"
                },
                {
                    "item": "minecraft:compass"
                }
            ],
            "results": [
                {
                    "id": "simulated:incomplete_gyroscopic_mechanism"
                }
            ]
            },
            {
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": "simulated:incomplete_gyroscopic_mechanism"
                },
                {
                    "item": "create:brass_nugget"
                }
            ],
            "results": [
                {
                    "id": "simulated:incomplete_gyroscopic_mechanism"
                }
            ]
            }
        ],
        "transitional_item": {
            "id": "simulated:incomplete_gyroscopic_mechanism"
        }
    })

    e.remove({id: 'create_mobile_packages:bee_port'})
    e.shaped('create_mobile_packages:bee_port', [
        'III',
        'ILI',
        'IBI'
    ], {
        B: 'create:brass_casing',
        L: 'create:stock_link',
        I: 'createbigcannons:steel_ingot'
    })

    e.remove({id: 'create_mobile_packages:robo_bee'})
    e.shaped('create_mobile_packages:robo_bee', [
        'PRP',
        'ISI',
        ' E '
    ], {
        R: 'create:transmitter',
        I: 'minecraft:honeycomb',
        P: 'create:propeller',
        S: 'create:item_vault',
        E: 'kubejs:electrum_sheet'
    })

    e.remove({id: 'create_mobile_packages:portable_stock_ticker'})
    e.shapeless('create_mobile_packages:portable_stock_ticker', ['create:clipboard', 'create:redstone_link', 'create:stock_ticker', 'create:brass_casing'])

    e.remove({id: 'create_mobile_packages:mobile_packager'})
    e.shaped('create_mobile_packages:mobile_packager', [
        'SPC',
        'SI ',
        ' I '
    ], {
        C: 'create:cardboard_block',
        P: 'create:packager',
        I: 'createbigcannons:steel_ingot',
        S: 'kubejs:electrum_sheet'
    })

    e.remove([{id: 'sophisticatedbackpacks:stack_upgrade_omega_tier'}, {id: 'sophisticatedbackpacks:inception_upgrade'}, {id: 'sophisticatedbackpacks:stack_upgrade_starter_tier'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_1'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_2'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_3'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_4'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter'}])
    e.shaped('sophisticatedbackpacks:stack_upgrade_starter_tier', [
        'SSS',
        ' U ',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        S: 'create:item_vault'
    })

    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
        'SSS',
        'LVU',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        L: 'sophisticatedbackpacks:stack_upgrade_starter_tier',
        V: 'create:item_vault',
        S: 'minecraft:iron_block'
    })

    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
        'SSS',
        'LVU',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        L: 'sophisticatedbackpacks:stack_upgrade_tier_1',
        V: 'create:item_vault',
        S: 'createbigcannons:steel_block'
    })

    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
        'SSS',
        'LVU',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        L: 'sophisticatedbackpacks:stack_upgrade_tier_2',
        V: 'create:item_vault',
        S: 'createbigcannons:nethersteel_block'
    })

    e.remove([{id: 'sophisticatedbackpacks:everlasting_upgrade'}, {id: 'sophisticatedbackpacks:magnet_upgrade'}, {id: 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic'}])

    e.shaped('sophisticatedbackpacks:everlasting_upgrade', [
        'SSS',
        'SUS',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        S: 'createbigcannons:steel_ingot'
    })

    e.shaped('sophisticatedbackpacks:magnet_upgrade', [
        'SSS',
        'SUS',
        'S S'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        S: 'powergrid:magnet'
    })

    e.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
        'SSS',
        'SUS',
        'S S'
    ], {
        U: 'sophisticatedbackpacks:advanced_pickup_upgrade',
        S: 'powergrid:magnet'
    })

    let backpackUpgrade = (ID) =>
    {
        e.remove({id: 'sophisticatedbackpacks:advanced_'+ID+'_upgrade'})
        e.shaped('sophisticatedbackpacks:advanced_'+ID+'_upgrade', [
            ' E ',
            'DUD',
            'PBP'
        ], {
            U: 'sophisticatedbackpacks:'+ID+'_upgrade',
            E: 'oreganized:electrum_ingot',
            P: 'galosphere:palladium_ingot',
            D: 'minecraft:diamond',
            B: 'sophisticatedbackpacks:upgrade_base'
        })
    }

    backpackUpgrade('filter')
    backpackUpgrade('pickup')
    backpackUpgrade('magnet')
    backpackUpgrade('feeding')
    backpackUpgrade('compacting')
    backpackUpgrade('void')
    backpackUpgrade('restock')
    backpackUpgrade('deposit')
    backpackUpgrade('refill')
    backpackUpgrade('jukebox')
    backpackUpgrade('tool_swapper')
    backpackUpgrade('pump')
    backpackUpgrade('alchemy')

    /*e.remove({id: 'create:industrial_iron_block_from_ingots_iron_stonecutting'})
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "tag": "c:plates/iron"
            },
            {
                "tag": "c:plates/iron"
            },
            {
                "item": "create:andesite_alloy"
            }
        ],
        "results": [
            {
            "count": 3,
            "id": 'createdeco:industrial_iron_ingot'
            }
        ]
    })

    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "tag": "c:ingots/cast_iron"
            },
            {
                "item": "create:andesite_alloy"
            }
        ],
        "results": [
            {
            "count": 6,
            "id": 'createdeco:industrial_iron_ingot'
            }
        ]
    })*/

    // prismarine recycling
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "minecraft:prismarine"
            }
        ],
        "processing_time": 150,
        "results": [
            {
            "count": 3,
            "id": "minecraft:prismarine_shard"
            },
            {
            "chance": 0.5,
            "id": "minecraft:prismarine_shard"
            }
        ]
    })

    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "minecraft:prismarine_bricks"
            }
        ],
        "processing_time": 150,
        "results": [
            {
                "count": 7,
                "id": "minecraft:prismarine_shard"
            },
            {
                "count": 2,
                "chance": 0.5,
                "id": "minecraft:prismarine_shard"
            }
        ]
    })

    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "minecraft:prismarine_shard"
            },
            {
                "item": "minecraft:glowstone_dust"
            }
        ],
        "results": [
            {
                "id": 'minecraft:prismarine_crystals'
            }
        ]
    })

    e.remove({id: 'create:splashing/galosphere/crushed_raw_silver'})
    e.remove([{id: 'oreganized:crushing/glance_recycling'}, {id: 'oreganized:crushing/glance'}])
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "oreganized:glance"
            }
        ],
        "processing_time": 250,
        "results": [
            {
            "chance": 0.8,
            "id": "create:crushed_raw_lead"
            },
            {
            "chance": 0.8,
            "id": 'spelunkery:raw_lead_nugget'
            }
        ]
    })

    e.smelting('minecraft:ink_sac', 'minecraft:glow_ink_sac')

    e.remove({id: 'oreganized:mixing/electrum_ingot'})
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "tag": "c:ingots/silver"
            },
            {
            "tag": "c:ingots/silver"
            },
            {
            "tag": "c:ingots/silver"
            },
            {
            "tag": "c:ingots/silver"
            },
            {
            "tag": "c:ingots/silver"
            },
            {
            "tag": "c:ingots/gold"
            },
            {
            "tag": "c:ingots/gold"
            },
            {
            "tag": "c:ingots/gold"
            }
        ],
        "results": [
            {
                "count": 4,
                "id": "oreganized:electrum_ingot"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:light_blue_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:cerulean_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:green_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:teal_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:lime_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:mint_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:light_blue_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:hazel_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:white_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:frosted_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:red_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:scarlett_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:yellow_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:honey_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:purple_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:taupe_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:brown_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:mocha_seaglass"
            }
        ]
    })

    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:black_stained_glass"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "dustydecorations:liquorice_seaglass"
            }
        ]
    })

    e.remove({id:"brewinandchewin:recipe/cooking/fiery_fondue_pot"})
    e.custom({
        "type": "farmersdelight:cooking",
        "container": {
            "count": 1,
            "id": "minecraft:cauldron"
        },
        "cookingtime": 400,
        "experience": 2.0,
        "ingredients": [
            {
            "item": "farmersdelight:tomato_sauce"
            },
            {
            "tag": "c:crops/potato"
            },
            {
            "tag": "c:drinks/milk"
            },
            {
            "item": "brewinandchewin:scarlet_cheese_wheel"
            },
            {
            "item": "farmersdelight:ham"
            },
            {
            "tag": "c:foods/bread"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "count": 1,
            "id": "brewinandchewin:fiery_fondue_pot"
        }
    })

    e.shapeless('create:shaft', 'createadditionallogistics:lazy_shaft')
    e.shapeless('create:cogwheel', 'createadditionallogistics:lazy_cogwheel')
    e.shapeless('create:large_cogwheel', 'createadditionallogistics:lazy_large_cogwheel')
    //spelunkery crushing
    //coal
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:andesite_coal_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:andesite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:granite_coal_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:granite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:tuff_coal_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:tuff"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:diorite_coal_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "minecraft:coal"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:diorite"
            }
        ]
    })
    //iron
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:andesite_iron_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:andesite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:diorite_iron_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:diorite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:granite_iron_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:granite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:tuff_iron_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_iron"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:tuff"
            }
        ]
    })
    //gold
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:andesite_gold_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 2,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:andesite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:diorite_gold_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 2,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:diorite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:granite_gold_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 2,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:granite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:tuff_gold_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_gold"
            },
            {
                "count": 2,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:tuff"
            }
        ]
    })
    //zinc
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:andesite_zinc_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_zinc"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_zinc"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:andesite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:diorite_zinc_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_zinc"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_zinc"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:diorite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:granite_zinc_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 1,
                "id": "create:crushed_raw_zinc"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:crushed_raw_zinc"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:granite"
            }
        ]
    })
    //copper
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:andesite_copper_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 5,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.25,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:andesite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:diorite_copper_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 5,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.25,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:diorite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:granite_copper_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 5,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.25,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:granite"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "spelunkery:tuff_copper_ore"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "count": 5,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.25,
                "id": "create:crushed_raw_copper"
            },
            {
                "count": 1,
                "chance": 0.75,
                "id": "create:experience_nugget"
            },
            {
                "count": 1,
                "chance": 0.12,
                "id": "minecraft:tuff"
            }
        ]
    })
})
