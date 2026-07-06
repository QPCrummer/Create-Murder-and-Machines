// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('create_the_air_wars:gyro_stabilizer')

	event.remove('oreganized:lead_ingot')
	event.remove('oreganized:lead_ore')
	event.remove('oreganized:deepslate_lead_ore')
	event.remove('oreganized:lead_nugget')
	event.remove('oreganized:raw_lead')
	event.remove('oreganized:raw_lead_block')
	event.remove('createnuclear:lead_ingot')
	event.remove('createnuclear:lead_ore')
	event.remove('createnuclear:deepslate_lead_ore')
	event.remove('createnuclear:lead_nugget')
	event.remove('createnuclear:raw_lead')
	event.remove('createnuclear:raw_lead_block')
	event.remove('createnuclear:lead_block')
	event.remove('cgs:lead_block')
})