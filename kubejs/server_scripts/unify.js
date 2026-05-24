ServerEvents.recipes(e => {
    // rope unification
    e.remove({id: 'supplementaries:rope'})
    e.remove({id: 'simulated:rope_coupling'})
    e.shaped('farmersdelight:rope', [
        'F',
        'F',
        'F'
    ], {
        F: 'supplementaries:flax'
    })

    e.shapeless('supplementaries:rope','farmersdelight:rope')
    e.shapeless('farmersdelight:rope','supplementaries:rope')

    e.shaped('simulated:rope_coupling', [
        'RRR',
        'RIR',
        'RRR'
    ], {
        R: '#c:ropes',
        I: "#c:nuggets/iron"
    })

    // zinc sheet die
    e.remove({id: 'powergrid:pressing/zinc_sheet'})

    // altimiter
    e.remove({id: 'supplementaries:altimeter'})

    // pebble/rock incompat
    e.remove([{id: 'nomansland:pebbles'}, {id: 'desire:stone_boulder'}, {id: 'desire:deepslate_sheet'}, {id: 'desire:blackstone_chunk'}, {id: 'desire:cobblestone_from_stone_boulder'}, {id: 'desire:deepslate_from_deepslate_sheet'}, {id: 'desire:blackstone_from_blackstone_chunk'}])

    e.shapeless('nomansland:pebbles', '2x spelunkery:stone_pebble')
    e.shaped('desire:stone_boulder', [
        'pp',
        'pp'
    ], {
        p: 'spelunkery:stone_pebble'
    })
    e.shaped('desire:deepslate_sheet', [
        'pp',
        'pp'
    ], {
        p: 'spelunkery:deepslate_pebble'
    })
    e.shaped('desire:blackstone_chunk', [
        'pp',
        'pp'
    ], {
        p: 'spelunkery:blackstone_pebble'
    })

    e.shapeless('4x spelunkery:stone_pebble', 'desire:stone_boulder')
    e.shapeless('4x spelunkery:deepslate_pebble', 'desire:deepslate_sheet')
    e.shapeless('4x spelunkery:blackstone_pebble', 'desire:blackstone_chunk')
})