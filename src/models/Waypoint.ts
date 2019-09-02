import { s4 } from '../helper';

declare let THREE: any;

export interface WaypointProps {
    id?: string;
    position: any; // THREE.Vector3
    scale?: number;
    center?: any; // THREE.Vector2
    imageSrc: string;

    animated?: boolean;

    clickHandlers?: Array<Function>;
}

export class Waypoint {

    id: string;
    position: any; // THREE.Vector3
    scale: number;
    center: any; // THREE.Vector2
    imageSrc: string;

    animated: boolean;

    clickHandlers: Array<Function>;


    constructor (props: WaypointProps) {
        if (typeof props.position === 'undefined' || props.position === null) {
            throw new Error('Waypoint must have a position specified in props.');
        }
        if (typeof props.imageSrc === 'undefined' || props.imageSrc === null) {
            throw new Error('Waypoint must have a imageSrc specified in props.');
        }


        this.position = props.position;
        this.imageSrc = props.imageSrc;

        this.id = props.id || s4();

        this.clickHandlers = props.clickHandlers || [];

        this.scale = props.scale || 300;
        this.center = props.center || null;
        this.animated = props.animated || true;

    }


    /** Private Methods */

    private fireHandlers = () => {
        if (this.clickHandlers) {
            const scope = this;

            this.clickHandlers.forEach((handler: Function) => {
                if (handler) {
                    handler.call(scope, scope);
                }
            });
        }
    }



    /** Public Methods */

    waypointSelected = () => {
        window.dispatchEvent(new CustomEvent('waypoint-selected', { detail: this }));
        this.fireHandlers();
    }

    addClickHandler = (handler: Function) => {
        this.clickHandlers.push(handler);
    }

    removeClickHandler = (handler: Function) => {
        this.clickHandlers = this.clickHandlers.filter((item: Function) => {
            return item !== handler;
        });
    }

    resetClickHandler = () => {
        this.clickHandlers = [];
    }

}
