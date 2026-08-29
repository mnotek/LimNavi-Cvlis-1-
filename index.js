'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var data = window.APP_DATA;

  // ===================================================
  // EDIT THIS LINE TO CHANGE THE STARTING IMAGE
  // ===================================================
  var START_SCENE_ID = "1-main"; 
  // ===================================================

  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');

  var viewer = new Marzipano.Viewer(panoElement, {
    controls: { mouseViewMode: data.settings.mouseViewMode }
  });

  // Setup Scenes
  var scenes = data.scenes.map(function(sceneData) {
    var source = Marzipano.ImageUrlSource.fromString(
      "tiles/" + sceneData.id + "/{z}/{f}/{y}/{x}.jpg"
    );
    var geometry = new Marzipano.CubeGeometry(sceneData.levels);
    var limiter = Marzipano.RectilinearView.limit.traditional(sceneData.faceSize, 100*Math.PI/180);
    var view = new Marzipano.RectilinearView(sceneData.initialViewParameters, limiter);

    var scene = viewer.createScene({ source: source, geometry: geometry, view: view });

    // Link Hotspots (Navigation Arrows)
    sceneData.linkHotspots.forEach(function(hotspot) {
      var wrapper = document.createElement('div');
      wrapper.className = 'hotspot link-hotspot';
      // Ensure you have an image at img/link.png
      wrapper.innerHTML = '<img src="img/link.png" class="link-hotspot-icon">';
      
      wrapper.onclick = function() { 
        var targetScene = findSceneById(hotspot.target);
        if (targetScene) switchScene(targetScene); 
      };
      
      scene.hotspotContainer().createHotspot(wrapper, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return { data: sceneData, scene: scene, view: view };
  });

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) return scenes[i];
    }
    return null;
  }

  function switchScene(scene) {
    if (!scene) return;
    scene.scene.switchTo();
    if (sceneNameElement) sceneNameElement.innerHTML = scene.data.name;
  }

  // LOG COORDINATES TO CONSOLE (F12 > Console to view)
  viewer.addEventListener('viewChange', function() {
    var view = viewer.view();
    console.log("Yaw: " + view.yaw().toFixed(3) + " | Pitch: " + view.pitch().toFixed(3));
  });

  // Sidebar Toggle Logic
  if (sceneListToggleElement) {
    sceneListToggleElement.onclick = function() {
      sceneListElement.classList.toggle('enabled');
    };
  }

  // Sidebar Link Logic
  var menuLinks = document.querySelectorAll('#sceneList .scene');
  menuLinks.forEach(function(link) {
    link.onclick = function() {
      var target = findSceneById(this.getAttribute('data-id'));
      if (target) {
        switchScene(target);
        sceneListElement.classList.remove('enabled');
      }
    };
  });

  // Start the tour at chosen ID
  var startScene = findSceneById(START_SCENE_ID) || scenes[0];
  switchScene(startScene);

})();