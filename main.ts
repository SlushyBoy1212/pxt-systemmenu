//% block="SystemMenu" color="#1c1c1c" weight=100 icon="\uf120"
namespace SystemMenu {
    //% block="Open System Menu"
    export function OpenMenu() {
        scene.systemMenu.showSystemMenu()
    }
    //% block="Close System Menu"
    export function CloseMenu() {
        scene.systemMenu.closeMenu()
    }
}
