//% color="#AA278D" weight=100
namespace BirRacer {
    //% block
    export function irRead(address: number): number {
        pins.i2cWriteNumber(16,  4,  NumberFormat.Int8LE,  false)
        return pins.i2cReadNumber(16, NumberFormat.UInt16BE, false)
    }

    //% block
    export function irWrite(address: number): void {
        pins.i2cWriteNumber(16, 4, NumberFormat.Int8LE, false)
    }
    
}
