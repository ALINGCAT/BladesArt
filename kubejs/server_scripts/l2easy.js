ServerEvents.recipes(event => {
    event.shaped(
        Item.of('l2complements:life_essence'),
        [
            'aba',
            'bcb',
            'aba'
        ],
        {
            a: 'minecraft:egg',
            b: 'minecraft:glowstone_dust',
            c: 'minecraft:ghast_tear'
        }
    )
    event.shaped(
        Item.of('l2complements:cursed_droplet'),
        [
            'cbc',
            'bab',
            'cbc'
        ],
        {
            a: 'minecraft:ghast_tear',
            b: 'minecraft:bone',
            c: 'iceandfire:witherbone'
        }
    )
    event.shaped(
        Item.of('l2complements:heirophant_green'),
        [
            ' b ',
            'bab',
            ' b '
        ],
        {
            a: 'minecraft:ender_pearl',
            b: 'minecraft:emerald_block',
        }
    )
    event.shaped(
        Item.of('l2complements:resonant_feather'),
        [
            'aba',
            'bcb',
            'aba'
        ],
        {
            a: 'minecraft:sculk',
            b: 'minecraft:diamond',
            c: 'minecraft:feather'
        }
    )
    event.shaped(
        Item.of('l2complements:force_field'),
        [
            'aba',
            'bcb',
            'aba'
        ],
        {
            a: 'minecraft:quartz_block',
            b: 'minecraft:glass',
            c: 'minecraft:nether_star'
        }
    )
    event.shaped(
        Item.of('l2complements:hard_ice'),
        [
            'aba',
            'bab',
            'aba'
        ],
        {
            a: 'minecraft:blue_ice',
            b: 'minecraft:packed_ice',
        }
    )
    event.shapeless(
        Item.of('l2complements:captured_wind'),
        [
            'l2complements:wind_capture_bottle',
            'minecraft:feather'
        ]
    )
    event.shapeless(
        Item.of('l2complements:sun_membrane'),
        [
            'minecraft:phantom_membrane',
            'minecraft:blaze_powder'
        ]
    )
    event.shaped(
        Item.of('l2complements:soul_flame'),
        [
            'aba',
            'bcb',
            'aba'
        ],
        {
            a: 'l2complements:soul_fire_charge',
            b: 'minecraft:soul_sand',
            c: 'minecraft:ghast_tear'
        }
    )
    event.shaped(
        Item.of('l2complements:void_eye'),
        [
            'aba',
            'bcb',
            'aba'
        ],
        {
            a: 'minecraft:sculk',
            b: 'l2complements:explosion_shard',
            c: 'minecraft:ender_eye'
        }
    )
    event.shaped(
        Item.of('l2complements:explosion_shard'),
        [
            'aaa',
            'aca',
            'aaa'
        ],
        {
            a: 'minecraft:coal',
            c: 'minecraft:prismarine_shard'
        }
    )
    event.shaped(
        Item.of('l2complements:blackstone_core'),
        [
            ' b ',
            'bcb',
            ' b '
        ],
        {
            b: 'minecraft:blackstone',
            c: 'minecraft:fire_charge'
        }
    )
    event.shaped(
        Item.of('l2complements:guardian_eye'),
        [
            'dbd',
            'dcd',
            'dad'
        ],
        {
            a: 'l2complements:guardian_rune',
            b: 'minecraft:sculk_shrieker',
            c: 'minecraft:ender_eye',
            d: 'minecraft:quartz_block'
        }
    )
})