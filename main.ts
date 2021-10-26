const N76_ADDR = 0x10
//% color="#AA278D" icon="\uf48b" weight=50
namespace BitRacer {
    //% block
    //% blockId=sensor_readIR block="read IRsensor |%address"
    //% address.min=1 address.max=5 address.defl=1
    export function irRead(address: number): number {
        pins.i2cWriteNumber(N76_ADDR,  address+2,  NumberFormat.UInt8LE,  false)
        return pins.i2cReadNumber(N76_ADDR, NumberFormat.UInt16BE, false)
    }
    //% blockId=motor_motorRun block="motor|%index|PWM value|%PWM"
    //% PWM.min=-1000 PWM.max=1000
    export function motorRun(index: number, PWM: number): void {
        let i2cbuf = pins.createBuffer(3);
        if (index == 0) {
            i2cbuf[0] = 0x00;
            i2cbuf[1] = (PWM >> 8);
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
        if (index == 2) {
            i2cbuf[0] = 0x02;
            i2cbuf[1] = (PWM >> 8);
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
    }

}
