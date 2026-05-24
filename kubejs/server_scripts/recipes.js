ServerEvents.recipes(e => {
    //remove
    e.remove({id:'createadditionallogistics:crafting/kinetics/flexible_shaft'})
    e.remove({id:'galosphere:rope_dart'})

    // rebalances

    e.remove({id: 'create:crafting/materials/electron_tube'})

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

    e.remove('create:sequenced_assembly/precision_mechanism')
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
    })

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
        "item": "create:brass_sheet"
    },
    "loops": 3,
    "results": [
        {
            "chance": 200.0,
            "id": "simulated:gyroscopic_mechanism"
        },
        {
            "chance": 8.0,
            "id": "create:brass_sheet"
        },
        {
            "chance": 8.0,
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
            "id": "minecraft:compass"
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
    ], {
        R: 'create:transmitter',
        I: 'minecraft:honeycomb',
        P: 'create:propeller',
        S: 'create:item_vault'
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

    e.remove([{id: 'sophisticatedbackpacks:stack_upgrade_omega_tier'}, {id: 'sophisticatedbackpacks:stack_upgrade_starter_tier'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_1'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_2'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_3'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_4'}, {id: 'sophisticatedbackpacks:stack_upgrade_tier_1_from_starter'}])
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
        'VUV',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        V: 'create:item_vault',
        S: 'minecraft:iron_block'
    })

    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
        'SSS',
        'VUV',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        V: 'create:item_vault',
        S: 'createbigcannons:steel_block'
    })

    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
        'SSS',
        'VUV',
        'SSS'
    ], {
        U: 'sophisticatedbackpacks:upgrade_base',
        V: 'create:item_vault',
        S: 'createbigcannons:nethersteel_block'
    })

    e.remove({id: 'create:industrial_iron_block_from_ingots_iron_stonecutting'})
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
    })
})