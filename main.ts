const N76_ADDR = 0x10
//% color="#AA278D" weight=100
namespace BitRacer {
    //% block
    //% blockId=sensor_readIR block="read IRsensor |%address"
    //% SensorIDs.min=1 SensorIDs.max=5
    export function irRead(address: number): number {
        pins.i2cWriteNumber(N76_ADDR,  address+2,  NumberFormat.UInt8LE,  false)
        return pins.i2cReadNumber(16, NumberFormat.UInt16BE, false)
    }

}
