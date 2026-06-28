ServerEvents.tags('block', e => {
    // komatiite portal frame
    e.add('frame_changer:portal_frames', 'kubejs:komatiite')
    e.add('frame_changer:portal_frames', 'kubejs:polished_komatiite')
    e.add('frame_changer:portal_frames', 'kubejs:inset_komatiite')
    e.add('frame_changer:portal_frames', 'kubejs:cracked_komatiite_bricks')
    e.add('frame_changer:portal_frames', 'kubejs:komatiite_bricks')
    e.add('frame_changer:portal_frames', 'kubejs:komatiite_tiles')
    e.add('minecraft:features_cannot_replace', 'kubejs:komatiite')

    //airstone
    e.add('c:stones','kubejs:airstone')
    e.add('c:cobblestones','kubejs:cobbled_airstone')

    //pitchstone
    e.add('c:stones','kubejs:pitchstone')
    e.add('c:cobblestones','kubejs:cobbled_pitchstone')

    //remove obsidian from portal frame
    e.remove('frame_changer:portal_frames', 'minecraft:obsidian')
    e.remove('frame_changer:portal_frames', 'frame_changer:obsidian_bricks')
    e.remove('frame_changer:portal_frames', 'frame_changer:polished_obsidian')
    e.remove('frame_changer:portal_frames', 'frame_changer:chiseled_obsidian')
    e.remove('frame_changer:portal_frames', 'frame_changer:obsidian_pillar')

    // physics
    e.add('sable:ultra_heavy', 'oreganized:lead_block')
    e.add('sable:ultra_heavy', 'oreganized:cut_lead')
    e.add('sable:ultra_heavy', 'oreganized:lead_pillar')
    e.add('sable:ultra_heavy', 'oreganized:lead_bricks')
    e.add('sable:ultra_heavy', 'oreganized:lead_bulb')

    e.add('sable:light', 'oreganized:lead_door')
    e.add('sable:light', 'oreganized:lead_bars')
    e.add('sable:light', 'oreganized:lead_trapdoor')

    e.add('sable:heavy', 'create:steam_engine')

    e.add('sable:heavy', 'createdieselgenerators:diesel_engine')
    e.add('sable:heavy', 'createdieselgenerators:modular_diesel_engine')
    e.add('sable:ultra_heavy', 'createdieselgenerators:huge_diesel_engine')

    //spelunkery stuff
    e.add('spelunkery:chisel_immune', '#frame_changer:portal_frames')
    e.add('spelunkery:chisel_immune', '#aeronautics:levitite')
    //clay
    e.add('minecraft:stone_ore_replaceables', 'minecraft:clay')

    //lazy shafts/cogs
    e.add('sable:light', 'createadditionallogistics:lazy_shaft')
    e.add('sable:light', 'createadditionallogistics:lazy_large_cogwheel')
    e.add('sable:light', 'createadditionallogistics:lazy_cogwheel')
    

})

ServerEvents.tags('item', e => {
//airstone
    e.add('kubejs:airstone','kubejs:inset_airstone')
    e.add('kubejs:airstone','kubejs:chiseled_airstone')
    e.add('kubejs:airstone','kubejs:polished_airstone')
    e.add('kubejs:airstone','kubejs:airstone_tiles')
    e.add('kubejs:airstone','kubejs:airstone_bricks')
    e.add('kubejs:airstone','kubejs:airstone')

    e.add('kubejs:pitchstone','kubejs:inset_pitchstone')
    e.add('kubejs:pitchstone','kubejs:chiseled_pitchstone')
    e.add('kubejs:pitchstone','kubejs:polished_pitchstone')
    e.add('kubejs:pitchstone','kubejs:pitchstone_tiles')
    e.add('kubejs:pitchstone','kubejs:pitchstone_bricks')
    e.add('kubejs:pitchstone','kubejs:pitchstone')

    e.add('c:stones','kubejs:airstone')
    e.add('c:cobblestones','kubejs:cobbled_airstone')
    e.add('kubejs:airstone','kubejs:cobbled_airstone')
    //sheets
    e.add('c:plates', 'kubejs:palladium_sheet')
    e.add('c:plates/palladium', 'kubejs:palladium_sheet')
    e.add('c:plates', 'kubejs:electrum_sheet')
    e.add('c:plates/electrum', 'kubejs:electrum_sheet')
    e.add('c:plates', 'kubejs:silver_sheet')
    e.add('c:plates/silver', 'kubejs:silver_sheet')

    // stupid engines
    e.add('kubejs:portable_engines', 'simulated:white_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:light_gray_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:gray_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:black_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:brown_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:red_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:orange_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:yellow_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:lime_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:green_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:cyan_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:light_blue_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:blue_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:purple_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:magenta_portable_engine')
    e.add('kubejs:portable_engines', 'simulated:pink_portable_engine')
})
