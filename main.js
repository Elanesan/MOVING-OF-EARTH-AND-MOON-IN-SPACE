const sun = document.getElementById('sun');
    const earth = document.getElementById('earth');

    let sunAngle = 0;
    let earthAngle = 0;

    function animate() {
      const sunRadius = 200; // distance from the center
      const earthRadius = 150; // distance from the sun

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate sun's position
      const sunX = centerX + sunRadius * Math.cos(sunAngle);
      const sunY = centerY + sunRadius * Math.sin(sunAngle);

      // Calculate earth's position
      const earthX = sunX + earthRadius * Math.cos(earthAngle);
      const earthY = sunY + earthRadius * Math.sin(earthAngle);

      sun.style.left = sunX - sun.offsetWidth / 2 + 'px';
      sun.style.top = sunY - sun.offsetHeight / 2 + 'px';

      earth.style.left = earthX - earth.offsetWidth / 2 + 'px';
      earth.style.top = earthY - earth.offsetHeight / 2 + 'px';

      sunAngle += 0.005; // adjust the speed of sun movement
      earthAngle += 0.01; // adjust the speed of earth rotation

      requestAnimationFrame(animate);
    }

    animate();