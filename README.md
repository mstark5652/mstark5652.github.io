## Overview
Personal user site.
[Launch](https://mstark5652.github.io)

## Adjusting Infospots at Runtime
```js
var ev = new CustomEvent('infospot-update', { detail: { id: 'spot-1', position: new THREE.Vector3(0, 0, 1) } });
window.dispatchEvent(ev);
```

## License
See LICENSE.md