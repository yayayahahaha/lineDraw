window.onload = function(argument) {
	/* setting of scence, camera and renderer */
	var scene = new THREE.Scene(),
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
		renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	/* start to create the cube */
	var geometry = new THREE.BoxGeometry(1, 1, 1),
		material = new THREE.MeshBasicMaterial({
			color: 0xff00fd,
			wireframe: false
		}),
		cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	var lineMeterial = new THREE.LineBasicMaterial({
		color: 0x00ff00
	});

	var lineGeometry = new THREE.Geometry();
	lineGeometry.vertices.push(
		new THREE.Vector3(-5, 0, 0),
		new THREE.Vector3(0, 3, 0),
		new THREE.Vector3(5, 0, 1.5),
		new THREE.Vector3(0, -3, 0)
	);

	var line = new THREE.Line(lineGeometry, lineMeterial);

	console.log(line.position);
	console.log(line);

	scene.add(line);

	camera.position.z = 5;

	function render() {
		requestAnimationFrame(render);

		cube.rotation.x += 0.05,
			cube.rotation.y += 0.05;

		line.rotation.x += 0.01;
		line.rotation.y += 0.01;

		if (line.geometry.vertices[0].z <= 5) {
			line.geometry.vertices[0].x += 0.01;
			line.geometry.vertices[0].y += 0.01;
			line.geometry.vertices[0].z -= 0.05;
		} else{
			line.geometry.vertices[0].x = -5;
			line.geometry.vertices[0].y = 0;
			line.geometry.vertices[0].z = 0;
		}

		line.geometry.verticesNeedUpdate = true;

		renderer.render(scene, camera);
	}
	render();

}