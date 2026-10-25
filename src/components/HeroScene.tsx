import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const objectGroup = new THREE.Group();
    scene.add(objectGroup);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.18, 2),
      new THREE.MeshPhysicalMaterial({
        color: 0xc16b50,
        metalness: 0.62,
        roughness: 0.22,
        clearcoat: 0.8,
        wireframe: true,
        transparent: true,
        opacity: 0.78,
      }),
    );
    objectGroup.add(core);

    const innerCore = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.76, 2),
      new THREE.MeshStandardMaterial({ color: 0xffc987, metalness: 0.48, roughness: 0.3, flatShading: true }),
    );
    objectGroup.add(innerCore);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xe2a978, transparent: true, opacity: 0.54, wireframe: true });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.012, 8, 180), ringMaterial);
    ring.rotation.set(1.02, 0.35, -0.28);
    objectGroup.add(ring);

    const orbit = new THREE.Group();
    orbit.rotation.set(0.6, -0.38, 0.2);
    objectGroup.add(orbit);
    const orbitLine = new THREE.Mesh(
      new THREE.TorusGeometry(2.08, 0.007, 6, 180),
      new THREE.MeshBasicMaterial({ color: 0xc3ded0, transparent: true, opacity: 0.35 }),
    );
    orbit.add(orbitLine);

    const satellite = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.13, 0),
      new THREE.MeshStandardMaterial({ color: 0xe6bf80, metalness: 0.5, roughness: 0.25 }),
    );
    satellite.position.set(2.08, 0, 0);
    orbit.add(satellite);

    const starPositions = new Float32Array(360 * 3);
    for (let index = 0; index < starPositions.length; index += 3) {
      starPositions[index] = (Math.random() - 0.5) * 10;
      starPositions[index + 1] = (Math.random() - 0.5) * 8;
      starPositions[index + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xe9d6c4, size: 0.018, transparent: true, opacity: 0.8 }));
    scene.add(stars);

    scene.add(new THREE.AmbientLight(0xffffff, 1.25));
    const keyLight = new THREE.PointLight(0xf3b77d, 25, 12);
    keyLight.position.set(3, 3, 4);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0x80b9a7, 18, 10);
    fillLight.position.set(-3, -2, 3);
    scene.add(fillLight);

    const pointer = new THREE.Vector2();
    const target = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect();
      target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.48;
      target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.36;
    };
    mount.addEventListener("pointermove", onPointerMove);

    const resizeObserver = new ResizeObserver(() => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    resizeObserver.observe(mount);

    const clock = new THREE.Clock();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const animate = () => {
      const elapsed = reduceMotion ? 0 : clock.getElapsedTime();
      pointer.lerp(target, 0.035);
      objectGroup.rotation.y = elapsed * 0.12 + pointer.x;
      objectGroup.rotation.x = Math.sin(elapsed * 0.18) * 0.08 + pointer.y;
      core.rotation.y = elapsed * 0.08;
      innerCore.rotation.x = -elapsed * 0.11;
      orbit.rotation.z = elapsed * 0.16;
      satellite.position.set(Math.cos(elapsed * 0.42) * 2.08, Math.sin(elapsed * 0.42) * 2.08, 0);
      stars.rotation.y = elapsed * 0.008;
      renderer.render(scene, camera);
      if (!reduceMotion) frame = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />;
};

export default HeroScene;