import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-three-d-carousel',
  templateUrl: './three-d-carousel.component.html',
  styleUrls: ['./three-d-carousel.component.css'],
  standalone: true,
})
export class ThreeDCarouselComponent implements AfterViewInit {
  @ViewChild('logoContainer', { static: true }) logoContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private sphere!: THREE.Mesh;

  ngAfterViewInit() {
    this.initThreeJS();
    this.animate();
  }

  private initThreeJS(): void {
    const container = this.logoContainer.nativeElement;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Create scene, camera, and renderer
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 3;
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(width, height);
    container.appendChild(this.renderer.domElement);

    // Debug background
    this.scene.background = new THREE.Color(0x222222);

    // Create a sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const texture = new THREE.TextureLoader().load(
      'assets/images/EF_logo.jpg',
      () => console.log('Texture loaded successfully'),
      undefined,
      (err) => console.error('Error loading texture:', err)
    );
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    // Add OrbitControls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableZoom = false;
    controls.enableDamping = true;
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    // Rotate the sphere
    this.sphere.rotation.y += 0.01;

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  };
}