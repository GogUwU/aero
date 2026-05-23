StartupEvents.postInit(event => {
    const $Supplier = Java.loadClass('java.util.function.Supplier')
    const ContraptionMovementSetting = Java.loadClass('com.simibubi.create.api.contraption.ContraptionMovementSetting')
    const $TypeInfo = Java.loadClass('dev.latvian.mods.rhino.type.TypeInfo')

    const ContraptionMovementSettingType = $TypeInfo.of(ContraptionMovementSetting)
    const SupplierType = $TypeInfo.of($Supplier).withParams(ContraptionMovementSettingType)

    function toContraptionMovementSupplierFn(fn) {
        return Java.makeFunctionProxy(SupplierType, fn)
    }

    function registerContraptionMovementSetting(mod, id, impl) {
        ContraptionMovementSetting.REGISTRY.register(Block.getBlock(`${mod}:${id}`), toContraptionMovementSupplierFn(impl))
    }


    registerContraptionMovementSetting('kubejs','komatiite', () => ContraptionMovementSetting.NO_PICKUP)
    registerContraptionMovementSetting('kubejs','polished_komatiite', () => ContraptionMovementSetting.NO_PICKUP)
    registerContraptionMovementSetting('kubejs','inset_komatiite', () => ContraptionMovementSetting.NO_PICKUP)
    registerContraptionMovementSetting('nomansland','budding_quartzite', () => ContraptionMovementSetting.NO_PICKUP)
})
