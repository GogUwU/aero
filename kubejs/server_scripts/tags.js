ServerEvents.tags('block', e => {
    
    //Komatiite portal frame
    e.add('frame_changer:portal_frames', 'kubejs:komatiite')
    e.add('frame_changer:portal_frames', 'kubejs:polished_komatiite')
    e.add('frame_changer:portal_frames', 'kubejs:inset_komatiite')
    e.add('frame_changer:portal_frames', 'kubejs:cracked_komatiite_bricks')
    e.add('frame_changer:portal_frames', 'kubejs:komatiite_bricks')
    e.add('frame_changer:portal_frames', 'kubejs:komatiite_tiles')
    e.add('minecraft:features_cannot_replace', 'kubejs:komatiite')

    //Airstone
    e.add('c:stones','kubejs:airstone')
    e.add('c:cobblestones','kubejs:cobbled_airstone')

    //Pitchstone
    e.add('c:stones','kubejs:pitchstone')
    e.add('c:cobblestones','kubejs:cobbled_pitchstone')

    //Remove obsidian from portal frame
    e.remove('frame_changer:portal_frames', 'minecraft:obsidian')
    e.remove('frame_changer:portal_frames', 'frame_changer:obsidian_bricks')
    e.remove('frame_changer:portal_frames', 'frame_changer:polished_obsidian')
    e.remove('frame_changer:portal_frames', 'frame_changer:chiseled_obsidian')
    e.remove('frame_changer:portal_frames', 'frame_changer:obsidian_pillar')

    //Physics
    e.add('sable:ultra_heavy', 'oreganized:lead_block')
    e.add('sable:ultra_heavy', 'oreganized:cut_lead')
    e.add('sable:ultra_heavy', 'oreganized:lead_pillar')
    e.add('sable:ultra_heavy', 'oreganized:lead_bricks')
    e.add('sable:ultra_heavy', 'oreganized:lead_bulb')

    e.add('sable:light', 'oreganized:lead_door')
    e.add('sable:light', 'oreganized:lead_bars')
    e.add('sable:light', 'oreganized:lead_trapdoor')
    e.add('sable:light', '#c:skulls')

    e.add('sable:heavy', 'create:steam_engine')

    e.add('sable:heavy', 'createdieselgenerators:diesel_engine')
    e.add('sable:heavy', 'createdieselgenerators:modular_diesel_engine')
    e.add('sable:ultra_heavy', 'createdieselgenerators:huge_diesel_engine')

    //Spelunkery stuff
    e.add('spelunkery:chisel_immune', '#frame_changer:portal_frames')
    e.add('spelunkery:chisel_immune', '#aeronautics:levitite')
    //Clay
    e.add('minecraft:stone_ore_replaceables', 'minecraft:clay')

    //lazy shafts/cogs
    e.add('sable:light', 'createadditionallogistics:lazy_shaft')
    e.add('sable:light', 'createadditionallogistics:lazy_large_cogwheel')
    e.add('sable:light', 'createadditionallogistics:lazy_cogwheel')


    //Adding #wrenchable to create and other stuff

    //Glass
    e.add('create:wrench_pickup', '#c:glass_blocks')
    e.add('create:wrench_pickup', '#c:glass_panes')
    e.add('create:wrench_pickup', '#railways:palettes/dye_groups/round_pane_window')
    e.add('create:wrench_pickup', '#railways:palettes/dye_groups/single_pane_window')
    e.add('create:wrench_pickup', '#railways:palettes/dye_groups/two_pane_window')
    e.add('create:wrench_pickup', '#railways:palettes/dye_groups/four_pane_window')

    //(trap)Doors
    e.add('create:wrench_pickup', '#minecraft:doors')
    e.add('create:wrench_pickup', '#minecraft:trapdoors')

    //Other (too little to separate)
    e.add('create:wrench_pickup', ['minecraft:anvil', 'minecraft:chipped_anvil', 'minecraft:damaged_anvil'])
    e.add('create:wrench_pickup', ['architects_palette:nether_brass_lantern', 'minecraft:lantern', 'minecraft:soul_lantern', 'suppsquared:copper_lantern', 'suppsquared:crimson_lantern', 
        'enderscape:void_lantern', 'enderscape:bulb_lantern', 'darkerdepths:glowshroom_lantern', 'dustydecorations:pillager_paper_lantern', 'architects_palette:redstone_cage_lantern', 
        'architects_palette:glowstone_cage_lantern', 'architects_palette:algal_cage_lantern', 'dustydecorations:paper_lantern', 'dustydecorations:creeper_paper_lantern', 
        'dustydecorations:sakura_paper_lantern', 'dustydecorations:warden_paper_lantern', 'dustydecorations:villager_paper_lantern', 'dustydecorations:panda_paper_lantern', 
        'dustydecorations:taiga_paper_lantern', 'dustydecorations:orchid_paper_lantern', 'dustydecorations:chicken_jockey_paper_lantern'])
    e.add('create:wrench_pickup', ['minecraft:torch', 'minecraft:soul_torch', 'enderscape:void_torch', 'minecraft:redstone_torch', 'nomansland:sconce_torch', 'nomansland:sconce_soul_torch', 
        'architects_palette:nether_brass_torch', 'darkerdepths:void_soul_torch'])
    e.add('create:wrench_pickup', ['kubejs:pontoon', 'kubejs:dumbell', 'kubejs:counterweight_20', 'kubejs:counterweight_40'])
    e.add('create:wrench_pickup', 'minecraft:lightning_rod')
    e.add('create:wrench_pickup', 'minecraft:end_rod')
    e.add('create:wrench_pickup', '#minecraft:all_signs')
    e.add('create:wrench_pickup', '#minecraft:shulker_boxes')
    e.add('create:wrench_pickup', '#c:ladders')
    e.add('create:wrench_pickup', '#create:seats')
    e.add('create:wrench_pickup', 'create:analog_lever')

    //Create Deco
    e.add('create:wrench_pickup', '#createdeco:supports')
    

})

ServerEvents.tags('item', e => {
    //Airstone
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
    //Sheets
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
    // stupid shingles and stairs and slabs
    e.add('kubejs:scute_shingle_block', 'desire:scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:white_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:light_gray_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:gray_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:black_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:brown_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:red_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:orange_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:yellow_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:lime_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:green_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:cyan_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:light_blue_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:blue_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:purple_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:magenta_scute_shingles')
    e.add('kubejs:scute_shingle_block', 'desire:pink_scute_shingles')

    e.add('kubejs:scute_shingle_stairs', 'desire:white_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:light_gray_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:gray_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:black_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:brown_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:red_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:orange_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:yellow_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:lime_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:green_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:cyan_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:light_blue_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:blue_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:purple_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:magenta_scute_shingle_stairs')
    e.add('kubejs:scute_shingle_stairs', 'desire:pink_scute_shingle_stairs')

    e.add('kubejs:scute_shingle_slabs', 'desire:white_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:light_gray_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:gray_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:black_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:brown_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:red_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:orange_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:yellow_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:lime_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:green_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:cyan_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:light_blue_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:blue_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:purple_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:magenta_scute_shingle_slab')
    e.add('kubejs:scute_shingle_slabs', 'desire:pink_scute_shingle_slab')
    //Painted Planks, Stairs and Slabs
    e.add('kubejs:painted_planks', 'regions_unexplored:white_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:orange_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:magenta_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:light_blue_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:yellow_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:lime_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:pink_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:gray_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:light_gray_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:cyan_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:purple_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:blue_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:brown_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:green_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:red_painted_planks')
    e.add('kubejs:painted_planks', 'regions_unexplored:black_painted_planks')

    e.add('kubejs:painted_stairs', 'regions_unexplored:white_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:orange_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:magenta_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:light_blue_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:yellow_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:lime_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:pink_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:gray_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:light_gray_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:cyan_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:purple_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:blue_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:brown_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:green_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:red_painted_stairs')
    e.add('kubejs:painted_stairs', 'regions_unexplored:black_painted_stairs')

    e.add('kubejs:painted_slabs', 'regions_unexplored:white_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:orange_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:magenta_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:light_blue_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:yellow_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:lime_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:pink_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:gray_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:light_gray_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:cyan_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:purple_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:blue_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:brown_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:green_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:red_painted_slab')
    e.add('kubejs:painted_slabs', 'regions_unexplored:black_painted_slab')

    e.add('createdieselgenerators:fermentable', 'regions_unexplored:salmonberry')

    //Enchants
    e.add('minecraft:enchantable/sword','create:cardboard_sword')
})




