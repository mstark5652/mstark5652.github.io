
declare let PANOLENS: any
import * as React from "react"
import { IS_MOBILE } from "../helper";
import { Waypoint } from "../models/Waypoint"
import { Infospot } from "../models/Infospot"

export interface LensProps {
    src: string
    infospots: Array<any>
    cameraFov?: number
    noZoom?: boolean

}

export interface LensState {
    infospots: Array<any>
}

export class Lens extends React.Component<LensProps, LensState> {

    panolens: any // PANOLENS.ImagePanorama
    panoViewer: any // PANOLENS.Viewer

    constructor(props: LensProps) {
        super(props)
        

        if (!this.props || !this.props.src) {
            throw new Error("Lens requires an image source passed through via props.")
        }

        this.state = {
            infospots: []
        }

    }

    /** Lifecycle Methods */

    componentDidMount () {
        this.setupViewer()

        this.cleanUpPanolens()

        this.panolens = new PANOLENS.ImagePanorama(this.props.src)
        this.panoViewer.add(this.panolens)
        this.panoViewer.setPanorama(this.panolens)

        this.enableControls()
        this.loadinfospots()

        window.addEventListener("infospot-update", this.changePosition)
    }

    shouldComponentUpdate (nextProps: LensProps, nextState: LensProps) {
		return (this.props.src !== nextProps.src);
	}

    componentDidUpdate (prevProps: LensProps, nextProps: LensProps) {
        this.setupViewer()

        if (this.props.src !== prevProps.src) {
            this.cleanUpPanolens()
            this.panolens = new PANOLENS.ImagePanorama(this.props.src)
            this.panoViewer.add(this.panolens)
            this.panoViewer.setPanorama(this.panolens)
            
            this.enableControls()
        }
        
        this.loadinfospots()
    }

    componentWillUnmount () {
        window.removeEventListener("infospot-update", this.changePosition)

        this.cleanUpPanolens()

        if (this.panoViewer) {
            this.panoViewer.destory()
            this.panoViewer = undefined
            delete this.panoViewer
        }
    }

    /** Private Methods */

    private cleanUpPanolens = () => {
        if (this.panolens) {
            this.panolens.dispose()
            this.panoViewer.remove(this.panolens)
            this.panolens = undefined
            delete this.panolens
        }
    }

    private enableControls = () => {
        if (IS_MOBILE) {
        	this.panoViewer.enableControl(PANOLENS.Controls.DEVICEORIENTATION);
		} else {
			this.panoViewer.enableControl(PANOLENS.Controls.ORBIT);
		}
    }

    private changePosition = (event: CustomEvent) => {
        if (event.detail) {
            let id = event.detail.id
            let pos = event.detail.position

            this.state.infospots.forEach((spot: any) => {
                if (spot.spotId == id) {
                    spot.position.copy(pos)
                }
            })
        }
    }

    private setupViewer = () => {
        if (!this.panoViewer) {

            this.panoViewer = new PANOLENS.Viewer({
                container: document.querySelector(".pano-container"),
                // camera
                controlBar: true,
                controlButtons: ['video'],
                horizontalView: true, // allow only horizontal orbital camera controls
                polarModifier: 1, // modifier to block up/down orbital controls (0 is default and will prevent all up/down)
                viewIndicator: true,
                indicatorSize: 50,
                enableReticle: false,
                dwellTime: 1500,
                autoReticleSelect: true,
                cameraFov: this.props.cameraFov || 90,
                autoHideControlBar: false,
				autoHideInfospot: false,
				output: 'console',
            })

            this.panoViewer.OrbitControls.noZoom = this.props.noZoom || true
        }
    }

    private removeInfospots = (infospots: Array<any>) => {
        if (this.panolens) {
            const scope = this
            infospots.forEach((item: any) => {
                scope.panolens.remove(item)
            })
        }
    }

    private loadinfospots = () => {
		this.removeInfospots(this.state.infospots || []);

        const scope = this
        const spots = this.props.infospots || []
        const newInfospots: Array<any> = []

        this.setState({
            infospots: []
        })

        const SCALE_FACTOR = 1.0

        spots.forEach((item: any) => {
            const spot = new PANOLENS.Infospot(
                item.scale || 300,
                item.imageSrc,
                true,
                SCALE_FACTOR,
                item.center
            )
            spot.position.copy(item.position)
            spot.spotId = item.id
            
            if (item.hoverText) {
                spot.setText(item.hoverText)
            }
            
			if (item instanceof Infospot) {
				spot.addEventListener('infospot-modal-appear', (event: Event) => {
					item.infospotSelected();

					// Track 'infospot-modal-appear:' + item.id
				});

				if (item.hasInitialFocus) {
					setTimeout(() => {
						spot.focus(0); // 0 duration so camera doesn't fling
						// _this.panoViewer.tweenControlCenter(spot.position, 0);
					}, 200);
				}
			}

			if (item instanceof Waypoint) {
				spot.addEventListener('infospot-click', (event: Event) => {
					item.waypointSelected();

					// Track 'waypoint-selected:' + item.id
				});
			}

			spot.addEventListener('infospot-modal-dismiss', (event: Event) => {
				// Track 'infospot-modal-dismiss:' + item.id
			});

			newInfospots.push(spot);
			scope.panolens.add(spot);
        })
        
		this.setState({
			infospots: newInfospots,
		})
    } 

    render () {
        return (
            <div className="pano-container" />
        )
    }

}