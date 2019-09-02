
declare let THREE: any;
import { Infospot } from './models/Infospot';

export const IS_MOBILE = window ? 'ontouchstart' in window || (window as any).navigator.msMaxTouchPoints : false;

export const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};


export const SPOTS: Array<any> = [
    new Infospot({
        id: 'spot-345',
        position: new THREE.Vector3(-5718.26, 1404.26, 3315.81),
        imageSrc: 'public/dist/' + require('./img/info.png'),
        hoverText: 'Michael Stark',
        hasInitialFocus: true,
    })
];
