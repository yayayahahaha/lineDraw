window.onload = function(argument) {
	/* setting of scence, camera and renderer */
	var scene = new THREE.Scene(),
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
		renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	/* start to create the cube */
	var geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
		material = new THREE.MeshBasicMaterial({
			color: 0xff00fd,
			wireframe: true
		}),
		cube = new THREE.Mesh(geometry, material);
	console.log("cube:", cube.geometry.vertices[0]);
	scene.add(cube);

	camera.position.z = 5;

	function render() {
		requestAnimationFrame(render);

		cube.rotation.x += 0.01,
			cube.rotation.y += 0.01;

		cube.geometry.vertices[0].x += 0.01;

		renderer.render(scene, camera);
	}
	render();
}