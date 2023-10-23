let $ = document.querySelector.bind(document);
let data =[
    {
        pattern: "pattern/pattern-product_4 (2).patt",
        src:"images/test.gif",
        position:"-1 0 0",
        rotation:"-90 0 0"

    },
    {
        pattern: "pattern/pattern-Adidas.patt",
        src:"images/Adidas.png",
        position:"-1 0 0",
        rotation:"-90 0 0"

    }
]

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene------------');

		var sceneEl = document.querySelector('a-scene');
		data.map((e,index) => {
            var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',e.pattern);
			markerEl.setAttribute('id',"maker_"+index);
            markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);
            var imgEl = document.createElement('a-image');
			
			imgEl.setAttribute('src',e.src);
			imgEl.object3D.position.set(-1, 0, 0);
			imgEl.object3D.rotation.set(-90, 0, 0);

			markerEl.appendChild(imgEl);
            // var textEl = document.createElement('a-entity');
			
			// textEl.setAttribute('id','text');
			// textEl.setAttribute('text',{color: 'red', align: 'center', value:"maker_" + index, width: '5.5'});
			// textEl.object3D.position.set(0, 0.7, 0);
			// textEl.object3D.rotation.set(-90, 0, 0);

			// markerEl.appendChild(textEl);
        })
		
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});

{/* <a-image src="${e.src}" position="${e.position}" rotation="${e.rotation}"></a-image> */}
