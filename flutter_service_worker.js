'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ee275daef740a63ce684008c14ea57d",
"version.json": "d7f5e85c936784f2eac05d7de3ac961f",
"index.html": "57a37647493d211f9963ba0495924499",
"/": "57a37647493d211f9963ba0495924499",
"main.dart.js": "07f36ef09c23465ecf6b928ad82842a4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6e92e15e90352839562c54228bd1f91",
"assets/AssetManifest.json": "e2aeed5ad6a8cf186123315545208fde",
"assets/NOTICES": "e9b5f85802994cea006909dbc2cb1b53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e3ecdc6cd3b93eed0224dde98c96bc1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "60fbdd94be85d50db51afe12b5853851",
"assets/fonts/MaterialIcons-Regular.otf": "33c5b4833916b6ba3c60aaaf8670a7db",
"assets/assets/March%2520Medical%2520Supporter.jpg": "3bcea4acab8cd59abaeb9f222ac1cf5b",
"assets/assets/Animation%2520-%25201733929380411.json": "fd8c981896c1e03ebb391c2bd00decaa",
"assets/assets/defaultProfile.png": "66eb953a24a3e9b29c54fc3427056704",
"assets/assets/Q8/never%2520there.png": "bea0d64d21538eaac824e52ce1a78ab6",
"assets/assets/Q8/Always%2520pinful.png": "bc749a6ca9d4e23d70ea643ea0a1c444",
"assets/assets/Q8/Often%2520Painful.png": "b4697509b655f3ab4b04f5f5f213407b",
"assets/assets/Q8/Rarely%2520painful.png": "1f3b882fe7344b019e38cddcd70db795",
"assets/assets/Q6/Pretty%2520oftern%2520actually.png": "3fa0503c725cac6b9807240269da259e",
"assets/assets/Q6/Occoisanally%2520pinponted.png": "5f56cac3bd609ed8c1a1249f66d75e1c",
"assets/assets/Q6/Barely%2520notice%2520it.png": "2275b14bdfe82e242c16ba29abcad871",
"assets/assets/Q6/Always%2520feels%2520like%2520a%2520sword!.png": "9aa06d7e4219c99a343db218e451d490",
"assets/assets/Q1/Never.png": "f2a3163f050b9de985f7cfac6ab286c8",
"assets/assets/Q1/Rarely.png": "c78820954a9df62f2285f6429547c7bb",
"assets/assets/Q1/Often.png": "aa339e8494ca71a8c121cb4bf105d161",
"assets/assets/Q1/Always.png": "85e32542b1d063874fb2fe269bdc7055",
"assets/assets/Q14/Never.png": "9029e87bd2ebc9f01e7392b4be4f448b",
"assets/assets/Q14/Rarely.png": "991323ead07deb1b48818300025d36c5",
"assets/assets/Q14/Often.png": "689e864466b1d27b5b8ebde04faed8c7",
"assets/assets/Q14/Always.png": "924fae1d9559d780a8577ded5ec02ca1",
"assets/assets/Q13/Rarely.png": "6340ce27611faaaa9aece2ef9fec8056",
"assets/assets/Q13/Often.png": "758ddc160506581eec3ec726cf211a7e",
"assets/assets/Q13/Always%2520(2).png": "ff88c4f4c72f8f48b22c5bed81c59c55",
"assets/assets/Q13/Never%2520(2).png": "c77423d84f977987b7c24e297842434e",
"assets/assets/Q7/Not%2520at%2520all.png": "2a3f2d613e1a660734d3bb173430ecb2",
"assets/assets/Q7/Always%2520pain%2520with%2520intense%2520discomfort.png": "962acb0eb43df482add224459e99d482",
"assets/assets/Q7/Barely%2520there.png": "688ee81eb045c0128359a2e85777dd65",
"assets/assets/Q7/Occoisanal%2520pain.png": "02c26f78dfb620d38f5304d633211f9c",
"assets/assets/Q9/Never.png": "7e7a51eceb6cbf05ba20e48868a7c7f7",
"assets/assets/Q9/Occaisionally.png": "f5c5246a2a37a08d59e013aa9686c2c6",
"assets/assets/Q9/Often.png": "a2f6a52270ceeb86e7c46aa2bbd51c59",
"assets/assets/Q9/Always.png": "21e1e0b838ebc464cbbaaa17b6ae4256",
"assets/assets/Q12/Often.png": "8e06324772402a80b3cb3991a1d7adde",
"assets/assets/Q12/Never%2520felt%2520pressure.png": "4b3990fffc3fcb09b9f930d691137804",
"assets/assets/Q12/All%2520the%2520time!.png": "a0ecd2073543fabd7941e12a1d50bd7a",
"assets/assets/Q12/Barely.png": "ae5c8aed2ec205b9d18f64f791d5e167",
"assets/assets/Q15/Never.png": "a70dfe2d954bfd4f08f81752d3dc4254",
"assets/assets/Q15/Rarely.png": "2de9611106932a7729884810487ec9dc",
"assets/assets/Q15/Often.png": "c3c6ebc6cc4570bf5c3551e787bc0002",
"assets/assets/Q15/Always.png": "484cfb4f7159b9381908aea80990854e",
"assets/assets/edit.svg": "93a43c43f9552946dd4691328d2ac6d9",
"assets/assets/QR.png": "8c20c8d9174f3cfb4cd2ac4535ca40d8",
"assets/assets/Q10/never.png": "dd1c5354084737473277ff0e1e6e7795",
"assets/assets/Q10/Rarely.png": "77a65428e00772e82bd0d322dea26e81",
"assets/assets/Q10/Often.png": "791036d8e8f588d943ac380ddb707cc2",
"assets/assets/Q10/always.png": "7a75680c3fe68101445c39643f84d60b",
"assets/assets/Q17/Never.png": "feff821accb46fe65630515709566bbc",
"assets/assets/Q17/Rarely.png": "fa230118970faf27d55781696de24c65",
"assets/assets/Q17/Often.png": "c0097adae7023e80b1dc4b62e02503c2",
"assets/assets/Q17/Always.png": "35548fe0c51dee115ab62398b4abf949",
"assets/assets/2.png": "3d1dd9b67432104df2e8cf2643a174aa",
"assets/assets/Q21/Never.png": "e528068b8cf0dcd6c2b9539a12ad66c8",
"assets/assets/Q21/Rarely.png": "247a298267a1b6789aface2b678f0db4",
"assets/assets/Q21/Often.png": "36baf57bc69aed727c67198f9d44f219",
"assets/assets/Q21/Always.png": "08f89c58812c9d0a612cb457ef51530b",
"assets/assets/Q19/Occasionally%2520Influential.png": "ced7b794bb68dcd0be05224b2e39da01",
"assets/assets/Q19/Frequently%2520Impactful.png": "4a3c83db931d6e5593bf662976e04b70",
"assets/assets/Q19/Never%2520Affects%2520Me.png": "dfe53bf9dc1797fae8786c73517c3c98",
"assets/assets/Q19/Consistently%2520Dominating.png": "274e7bab05cc737440030ccfa465fa86",
"assets/assets/3.png": "5684a3127a2cc7a7dde644bd406bb24c",
"assets/assets/Q2/Never%2520feel%2520bad.png": "c6e2de529ba95bb3c2b7ac249bd13ab2",
"assets/assets/Q2/Always%2520angry.png": "2bc170f09ee7076d42a8f765d47bd620",
"assets/assets/Q2/Sometimes%2520feel%2520angry.png": "a4fa82a79963c398113e305a9781ec81",
"assets/assets/Q2/Often%2520feel%2520annoyed.png": "4b356b41c9950b3ab090d49313407714",
"assets/assets/Q5/Never.png": "bcbb54510cef9a4de55151f55f58e245",
"assets/assets/Q5/Rarely.png": "370bf0851254551a2e7d6f77c5c907d7",
"assets/assets/Q5/Often.png": "6a7806c30192ebf8f8efcdb021d2b9d5",
"assets/assets/Q5/ALways.png": "c7655163a3f6e4bdba0fbf1fcc5ec25b",
"assets/assets/shield-check.svg": "36d1995a8a2ef1981cdac97c62b174da",
"assets/assets/Q18/Never.png": "0e652c56b14e6a1f6849759276240433",
"assets/assets/Q18/Sometimes.png": "082e2aaf41c5faf74888b392577ec2ab",
"assets/assets/Q18/Often.png": "f21bbf5a2f15b442af94942a731d1de4",
"assets/assets/Q18/Always.png": "c697855d86a82e03ec9b84f111e0dd32",
"assets/assets/Q20/I'm%2520often%2520aware%2520of%2520the%2520changes.png": "94404135392f60dd872eb97b2050c1bd",
"assets/assets/Q20/I%2520feel%2520and%2520track%2520every%2520little%2520shift.png": "66554a5a49b1bd5cb7a25e5f9e7d532e",
"assets/assets/Q20/I%2520catch%2520a%2520few%2520signals%2520here%2520and%2520there.png": "2076321d38f70ca1559e1aa152da023f",
"assets/assets/Q20/I%2520barely%2520notice%2520any%2520changes.png": "0ac63bb3cd73ec3fe7b4b87cc6d30136",
"assets/assets/Q16/Never.png": "26e088fb51d72efc3b2559f4c518d2d0",
"assets/assets/Q16/Rarely.png": "1192bec6d54ceaeb6e794ec2f7ac4b5a",
"assets/assets/Q16/Often.png": "b907a35a0f0dcaed3a9d1d0375f45b46",
"assets/assets/Q16/ALways.png": "42832d8309b4f62978771dc9b31ec3dd",
"assets/assets/Q11/Never.png": "00c90dadc016fb9ccbac4d1cb4c56e09",
"assets/assets/Q11/Rarely.png": "32392343af599a3b90039228f2f78d8b",
"assets/assets/Q11/Often.png": "2a0d32804de9ce1768709a611b0183df",
"assets/assets/Q11/Always.png": "5dd4f87e93a4432607fc1ce3d2aa7e7c",
"assets/assets/Q4/4.png": "f6891bf3c51f2be894bb77747041c59d",
"assets/assets/Q4/2.png": "fe4bd27867e360a0fdb288c113c74dcd",
"assets/assets/Q4/3.png": "a00348efa89ee69be87b027a4905c46b",
"assets/assets/Q4/1.png": "9ec6472ef529ccaaed4d8241bceaf235",
"assets/assets/Q3/Always%2520experience%2520discomfort.png": "3e49b6bd7b06bf437025c1dc960c238c",
"assets/assets/Q3/Often%2520experience%2520discomfort.png": "24c671a9604451c6529e0f7c4031f495",
"assets/assets/Q3/Rarely%2520experience%2520discomfort.png": "bad845f236f42bd017d3995dfc842bbf",
"assets/assets/Q3/Never%2520experience%2520discomfort.png": "1c3edb8c82ab1198f43c895d22efff61",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
