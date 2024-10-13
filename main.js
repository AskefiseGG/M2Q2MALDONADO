// MALDONADO M2 Q2

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: '#0000ff' } );
const cube = new THREE.Mesh( boxGeometry, boxMaterial );
cube.position.set(-4, 0, 0);
scene.add( cube );

const coneGeometry = new THREE.ConeGeometry( 0.7, 1, 32 );
const coneMaterial = new THREE.MeshBasicMaterial( { color: '#00ff00' } );
const cone = new THREE.Mesh( coneGeometry, coneMaterial );
cone.position.set(-2, 0, 0);
scene.add( cone );

const cylinderGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 1, 32 );
const cylinderMaterial = new THREE.MeshBasicMaterial( { color: '#ffa500' } );
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
cylinder.position.set(0, 0, 0);
scene.add( cylinder );

const sphereGeometry = new THREE.SphereGeometry( 0.7, 32, 32 );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: '#ff0000' } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(2, 0, 0);
scene.add( sphere );

const torusGeometry = new THREE.TorusGeometry( 0.7, 0.3, 16, 100 );
const torusMaterial = new THREE.MeshBasicMaterial( { color: '#ffff00' } );
const torus = new THREE.Mesh( torusGeometry, torusMaterial );
torus.position.set(4, 0, 0);
scene.add( torus );

camera.position.z = 7;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    renderer.render( scene, camera );
}
