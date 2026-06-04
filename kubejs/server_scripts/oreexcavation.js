ServerEvents.recipes(event => {
	
	event.recipes.createoreexcavation.vein('{"text": "Asurine"}', 'create:asurine')
		.placement(128, 8, 64825185)
		.id("kubejs:azurine")

    event.recipes.createoreexcavation.vein('{"text": "Crimsite"}', 'create:crimsite')
		.placement(128, 8, 2187496)
		.id("kubejs:crimsite")

    event.recipes.createoreexcavation.vein('{"text": "Ochrum"}', 'create:ochrum')
		.placement(128, 8, 21485785)
		.id("kubejs:ochrum")

    event.recipes.createoreexcavation.vein('{"text": "Veridium"}', 'create:veridium')
		.placement(128, 8, 31485785)
		.id("kubejs:veridium")

    event.recipes.createoreexcavation.vein('{"text": "Airstone"}', 'kubejs:airstone')
		.placement(128, 8, 19857625)
		.id("kubejs:airstone")

    event.recipes.createoreexcavation.vein('{"text": "Pitchstone"}', 'kubejs:pitchstone')
		.placement(128, 8, 2466125)
		.id("kubejs:pitchstone")
});
