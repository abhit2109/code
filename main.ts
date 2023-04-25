function areDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function reverse () {
    wuKong.setAllMotor(-20, -20)
}
function areUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function foward () {
    wuKong.setAllMotor(20, 20)
}
joystickbit.initJoystickBit()
radio.setGroup(17)
basic.showIcon(IconNames.Rollerskate)
basic.forever(function () {
	
})
