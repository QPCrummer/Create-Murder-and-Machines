// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
    event.remove({ output: 'create_the_air_wars:gyro_stabilizer' })
	
	event.replaceInput({}, 'oreganized:lead_ingot', 'cgs:lead_ingot')
	event.replaceInput({}, 'createnuclear:lead_ingot', 'cgs:lead_ingot')
	event.replaceInput({}, 'oreganized:lead_nugget', 'cgs:lead_nugget')
	event.replaceInput({}, 'createnuclear:lead_nugget', 'cgs:lead_nugget')
	event.replaceInput({}, 'oreganized:raw_lead', 'cgs:raw_lead')
	event.replaceInput({}, 'createnuclear:raw_lead', 'cgs:raw_lead')
	event.replaceInput({}, 'oreganized:raw_lead_block', 'cgs:raw_lead_block')
	event.replaceInput({}, 'createnuclear:raw_lead_block', 'cgs:raw_lead_block')
	event.replaceInput({}, 'oreganized:raw_lead_block', 'oreganized:lead_block')
	event.replaceInput({}, 'cgs:lead_block', 'oreganized:lead_block')
	
    event.remove({ output: 'oreganized:lead_ingot' })
 	event.remove({ output: 'createnuclear:lead_ingot' })
	event.remove({ output: 'oreganized:lead_nugget' })
	event.remove({ output: 'createnuclear:lead_nugget' })
	event.remove({ output: 'oreganized:raw_lead' })
	event.remove({ output: 'createnuclear:raw_lead' })
	event.remove({ output: 'oreganized:raw_lead_block' })
	event.remove({ output: 'createnuclear:raw_lead_block' })
	event.remove({ output: 'cgs:lead_block' })
})

ItemEvents.tags(event => {
    event.removeAll('c:ingots/lead')
    event.add('c:ingots/lead', 'cgs:lead_ingot')
})

WorldgenEvents.remove(event => {
    event.removeOres(ores => {
        ores.blocks = [
            'oreganized:lead_ore', 
            'oreganized:deepslate_lead_ore',
			'createnuclear:lead_ore',
			'createnuclear:deepslate_lead_ore'
        ]
    })
})