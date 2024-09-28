import * as THREE from 'three'

const assets = {
    'grass': (x, y) => {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0x339933 })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData = { id: 'grass', x, y };
        mesh.position.set(x, -0.5, y);
        return mesh
    },
    'residential': (x, y) => {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0xbb5555 })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData = { id: 'residential', x, y };
        mesh.position.set(x, 0.5, y);
        return mesh
    },
    'commercial': (x, y) => {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0xbbbb55 })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData = { id: 'commercial', x, y };
        mesh.position.set(x, 0.5, y);
        return mesh
    },
    'industrial': (x, y) => {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0x5555bb })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData = { id: 'industrial', x, y };
        mesh.position.set(x, 0.5, y);
        return mesh
    },
    'road': (x, y) => {
        const geometry = new THREE.BoxGeometry(1, 0.1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0xcc000000 })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData = { id: 'road', x, y };
        mesh.position.set(x, 0.5, y);
        return mesh
    }
}

export function createAssetInstance(assetId, x ,y) {
    if (assetId in assets){
        return assets[assetId](x, y);
    }else{
        console.warn(`Asset Id ${assetId} is not found.`)
        return undefined;
    }
}