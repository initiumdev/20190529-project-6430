/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');
  const media = [[base_url+"images/1-bg1.jpg", base_url+"images/1-bg2.jpg", base_url+"images/1-bg3.jpg", base_url+"images/1-bg4.jpg", base_url+"images/1-bg5.jpg", base_url+"images/1-bg6.jpg", "", base_url+"images/1-bg8.jpg", base_url+"images/1-bg9.jpg", base_url+"images/1-bg10.jpg", "", base_url+"images/1-bg13.jpg?b", base_url+"images/1-bg13.jpg?a", base_url+"images/1-bg14.jpg?a", base_url+"images/1-bg15.jpg?a", base_url+"images/1-bg16.jpg?a", base_url+"images/1-bg17.jpg?a"],
[base_url+"images/2-bg1.jpg", base_url+"images/2-bg2.jpg", "", "", base_url+"images/2-bg4.jpg", base_url+"images/2-bg5.jpg", base_url+"images/2-bg6.jpg", base_url+"images/2-bg7.jpg"],
[base_url+"images/3-bg1.jpg?a", base_url+"images/3-bg2.jpg?a", base_url+"images/3-bg3.jpg?a", base_url+"images/3-bg4.jpg?a", "", base_url+"images/3-bg6-2.jpg?a", base_url+"images/3-bg7.jpg", base_url+"images/3-bg8.jpg?a", base_url+"images/3-bg9.jpg?a", base_url+"images/3-bg10.jpg?a", "", base_url+"images/3-bg12.jpg?a", base_url+"images/3-bg13.jpg?a", base_url+"images/3-bg14.jpg?a", "", base_url+"images/3-bg16.jpg"],
[base_url+"images/4-bg1.jpg", base_url+"images/4-bg2.jpg", base_url+"images/4-bg3.jpg", base_url+"images/4-bg4.jpg", base_url+"images/4-bg5.jpg", "", base_url+"images/4-bg7.jpg", "", "", base_url+"images/4-bg10.jpg", base_url+"images/4-bg11.jpg", "", base_url+"images/4-bg13.jpg"],
[base_url+"images/5-bg1.jpg", base_url+"images/5-bg2.jpg", "", base_url+"images/5-bg4.jpg", base_url+"images/5-bg5.jpg", base_url+"images/5-bg6.jpg", "", base_url+"images/5-bg8.jpg", base_url+"images/5-bg9.jpg", base_url+"images/5-bg10.jpg", base_url+"images/5-bg11.jpg"],
[base_url+"images/6-bg1.jpg", base_url+"images/6-bg2.jpg", base_url+"images/6-bg3.jpg", base_url+"images/6-bg4.jpg", base_url+"images/6-bg5.jpg", base_url+"images/6-bg6.jpg", base_url+"images/6-bg7.jpg", base_url+"images/6-bg8.jpg"],
[base_url+"images/7-bg1.jpg", base_url+"images/7-bg2.jpg", base_url+"images/7-bg3.jpg", base_url+"images/7-bg4.jpg", base_url+"images/7-bg5.jpg", base_url+"images/7-bg6.jpg"],
[base_url+"images/8-bg1.jpg", base_url+"images/8-bg2.jpg", base_url+"images/8-bg3.jpg", base_url+"images/8-bg4.jpg", base_url+"images/8-bg5.jpg", base_url+"images/8-bg6.jpg", base_url+"images/8-bg7.jpg", base_url+"images/8-bg8.jpg", base_url+"images/8-bg9.jpg", base_url+"images/8-bg10.jpg", base_url+"images/8-bg11.jpg", base_url+"images/8-bg12.jpg", "", base_url+"images/8-bg14.jpg"],
[base_url+"images/9-bg1.jpg", base_url+"images/9-bg2.jpg", base_url+"images/9-bg3.jpg", "", base_url+"images/9-bg5-2.jpg", base_url+"images/9-bg6.jpg", base_url+"images/9-bg7.jpg", base_url+"images/9-bg8.jpg", "", base_url+"images/9-bg10.jpg"]];
const media_d = [[base_url+"images/1-bg1-d.jpg", base_url+"images/1-bg2-d.jpg", base_url+"images/1-bg3-d.jpg", base_url+"images/1-bg4-d.jpg", base_url+"images/1-bg5-d.jpg", "", "", base_url+"images/1-bg8-d.jpg", base_url+"images/1-bg9-d.jpg", base_url+"images/1-bg10-d.jpg", "", base_url+"images/1-bg13-d.jpg", base_url+"images/1-bg13-d.jpg?b",  base_url+"images/1-bg14-d.jpg", base_url+"images/1-bg15-d.jpg", base_url+"images/1-bg16-d.jpg", base_url+"images/1-bg17-d.jpg"],
[base_url+"images/2-bg1-d.jpg", base_url+"images/2-bg2-d.jpg", "", "", base_url+"images/2-bg4-d.jpg", base_url+"images/2-bg5-d.jpg", base_url+"images/2-bg6-d.jpg", base_url+"images/2-bg7-d.jpg"],
[base_url+"images/3-bg1-d.jpg?a", base_url+"images/3-bg2-d.jpg?a", base_url+"images/3-bg3-d.jpg?a", base_url+"images/3-bg4-d.jpg?a", "", base_url+"images/3-bg6-d.jpg?a", "", base_url+"images/3-bg8-d.jpg?a", base_url+"images/3-bg9-d.jpg?a", base_url+"images/3-bg10-d.jpg?a", "", base_url+"images/3-bg12-d.jpg?a", base_url+"images/3-bg13-d.jpg?a", base_url+"images/3-bg14-d.jpg?a", "", base_url+"images/3-bg16-d.jpg?a"],
[base_url+"images/4-bg1-d.jpg", base_url+"images/4-bg2-d.jpg", base_url+"images/4-bg3-d.jpg", base_url+"images/4-bg4-d.jpg", base_url+"images/4-bg5-d.jpg", "", base_url+"images/4-bg7-d.jpg", "", "", base_url+"images/4-bg10-d.jpg", base_url+"images/4-bg11-d.jpg", "", base_url+"images/4-bg13-d.jpg"],
[base_url+"images/5-bg1-d.jpg", base_url+"images/5-bg2-d.jpg", "", base_url+"images/5-bg4-d.jpg", base_url+"images/5-bg5-d.jpg", base_url+"images/5-bg6-d.jpg", "", base_url+"images/5-bg8-d.jpg", base_url+"images/5-bg9-d.jpg", base_url+"images/5-bg10-d.jpg", base_url+"images/5-bg11-d.jpg"],
[base_url+"images/6-bg1-d.jpg", base_url+"images/6-bg2-d.jpg", "", base_url+"images/6-bg4-d.jpg", "", base_url+"images/6-bg6-d.jpg", "", base_url+"images/6-bg8-d.jpg"],
[base_url+"images/7-bg1-d.jpg", "", "", "", "", base_url+"images/7-bg6-d.jpg"],
[base_url+"images/8-bg1-d.jpg", base_url+"images/8-bg2-d.jpg", base_url+"images/8-bg3-d.jpg", base_url+"images/8-bg4-d.jpg", base_url+"images/8-bg5-d.jpg", base_url+"images/8-bg6-d.jpg", "", base_url+"images/8-bg8-d.jpg", base_url+"images/8-bg9-d.jpg", base_url+"images/8-bg10-d.jpg", base_url+"images/8-bg11-d.jpg", "", "", base_url+"images/8-bg14-d.jpg"],
[base_url+"images/9-bg1-d.jpg", base_url+"images/9-bg2-d.jpg", base_url+"images/9-bg3-d.jpg", "", base_url+"images/9-bg5-2-d.jpg", "", base_url+"images/9-bg7-d.jpg", "", "", base_url+"images/9-bg10-d.jpg"]];
  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    layers:{
      array:[]
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ['#fff']
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: [],
          active_src: [],
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        custom: {},
        inactive:{
          opacity: 0,
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance,
  };
  pJS.tmp.active_id = -1;
  pJS.tmp.img_obj = [];
  pJS.tmp.img_active_obj = [];
  pJS.tmp.img_active_obj.length = pJS.tmp.img_active_loaded =pJS.particles.shape.image.src.length;
  pJS.tmp.bg_active = 0;
  pJS.tmp.islanding = true;
  pJS.tmp.exitingPosition = [];
  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
    pJS.canvas.ctx.globalCompositeOperation = 'screen'
    // pJS.canvas.ctx.globalCompositeOperation = 'destination-in';
    if(pJS.mode == 'floating'){


      $(window).on('detail-intro-2', function(){
        //animateParticle
        pJS.fn.animate(pJS.particles.array[pJS.tmp.active_id], {propname: 'size', to: 400, duration: 2000, starttime: new Date().getTime(), eventname: 'detail-article-0' });


      }).on('float-mode', function(e){
        // pJS.particles.move.enable = true;
        
        // pJS.fn.vendors.draw();
        pJS.particles.size.anim.enable = true;
        for(var i = 0; i < pJS.particles.number.value; i++) {
          var _p = pJS.particles.array[i];
          _p.active = false;
          pJS.fn.animate(_p, {propname: 'size', to: pJS.tmp.exitingPosition[i].r, duration: 1000, starttime: new Date().getTime()});
          pJS.fn.animate(_p, {propname: 'x', to: pJS.tmp.exitingPosition[i].x, duration: 1000, starttime: new Date().getTime()});
          pJS.fn.animate(_p, {propname: 'y', to: pJS.tmp.exitingPosition[i].y, duration: 1000, starttime: new Date().getTime()});
        }
      }).on('grid-mode', function(e){
        var x = ['W*.18', 'W*0.51', 'W*0.84'];
        var y = ['H*.18', 'H*0.51', 'H*0.84'];
        pJS.particles.size.anim.enable = false;
        for(var i = 0; i < pJS.particles.number.value; i++) {
          var _p = pJS.particles.array[i];
          _p.active = true;
          pJS.tmp.exitingPosition.push({x: _p.x, y: _p.y, r: _p.radius});
          pJS.fn.animate(_p, {propname: 'size',from: 60, to: ((pJS.canvas.w > pJS.canvas.h)?'H*.15':'W*.15'), duration: 1000, starttime: new Date().getTime() });
          pJS.fn.animate(_p, {propname: 'x', to: x[(i%3)], duration: 1000, starttime: new Date().getTime()});
          pJS.fn.animate(_p, {propname: 'y', to: y[Math.floor(i/3)], duration: 1100, starttime: new Date().getTime(), eventname: 'pauseBubble' });
        }
      }).on('pauseBubble', function(e){

        // pJS.particles.move.enable = false;
      }).on('detail-article', function(e){
        //switching bg
        if(e.next && (e.frame == undefined || e.frame == 0)){
          var frame = 0;
          pJS.tmp.bg_active = 0;
          pJS.particles.opacity.anim.enable = true;
          var _p = pJS.particles.array[pJS.tmp.active_id];
          pJS.fn.animate(_p, {propname: 'size', from: (_p.radius), to: 500, duration: 600, starttime: (new Date().getTime()) });
          pJS.fn.animate(_p, {propname: 'opacity', from: (_p.opacity_bubble|| _p.opacity), to: .5, duration: 200, starttime: new Date().getTime() });
        }
        else{
          var frame = e.frame;
          
          var l = pJS.layers.array[pJS.tmp.bg_active];
          if(l != undefined && l.opacity > 0){
            // console.log('fadeout: '+pJS.tmp.bg_active+' opacity: '+l.opacity);
            pJS.fn.animate(l,{propname: 'opacity', to: 0, duration: 400, starttime: new Date().getTime() });
          }
          pJS.tmp.bg_active = frame;
        }
        if(e.animate != undefined){
          for( var a = 0; a<e.animate.length; a++){
            var _p = pJS.particles.array[pJS.tmp.active_id];
            var anim = e.animate[a];
            pJS.fn.animate(_p, anim);
          }
        }
        var _l = pJS.layers.array[frame];
        if(_l != undefined){
          if(e.template == 'e'){
            //fade in bg
            pJS.fn.animate(_l,{propname: 'opacity', from: 0, to: 1, duration: 1000, starttime: new Date().getTime() });
            //fade out bg 2sec later
            setTimeout(function(){

              pJS.fn.animate(_l,{propname: 'opacity', from: 1, to: 0, duration: 2000, starttime: new Date().getTime() });
            }, 2000);
          }
          else if(e.template == 'f'){
            //fade in bg
            pJS.fn.animate(_l,{propname: 'opacity', to: 1, duration: 2500, starttime: new Date().getTime() });            
          }
          else{
            //fade in bg
            pJS.fn.animate(_l,{propname: 'opacity', to: 1, duration: 1000, starttime: new Date().getTime() });
          }

        }
        // pJS.particles.size.random = true;
      }).on('landing', function(e){
        //reset bg
        pJS.layers.array = [];
        pJS.tmp.bg_active = 0;
        pJS.tmp.islanding = true;
        pJS.interactivity.events.onclick.enable = true;
        if(!istouch) pJS.interactivity.events.onhover.enable = true;
        //reset particle
        for(var j = 0; j < pJS.particles.array.length; j++){
          var _p = pJS.particles.array[j];
          _p.inactive = false;
          _p.active = false;
          pJS.fn.animate(_p, {propname: 'opacity', to: 1, duration: 600, starttime: new Date().getTime()+(j*30+100) });
          if(pJS.tmp.active_id == _p.id){
            pJS.tmp.active_id = -1;
            pJS.fn.animate(_p, {propname: 'size', to: pJS.particles.size.value, duration: 600, starttime: new Date().getTime()+(j*30+100) });
          }
        }
        
      });
    }
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;
    if(pJS.canvas.el.width > pJS.canvas.el.height){
      mode = 'l';
    }
    else{
      mode = 'p';
    }
    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){
          if(pJS.canvas.el.width > pJS.canvas.el.height){
            mode = 'l';
          }
          else{
            mode = 'p';
          }
          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }
    
    
  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };




  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, idx, position){

    /* size */
    this.radius = Math.max(30, (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value);
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }
    var offset = (pJS.mode == 'floating')? pJS.canvas.w*2 : 0;
    /* position */
    this.x = position ? position.x : (Math.random() * pJS.canvas.w) + offset;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;
    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;
    if(pJS.mode == 'floating'){this.radius_position = {x:this.x, y:this.y};}

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    // if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    // }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;


    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: (pJS.tmp.img_obj[idx])? pJS.tmp.img_obj[idx]: pJS.tmp.img_obj[0],
        src_active: pJS.tmp.img_active_obj[idx],
        ratio: sh.image.width / sh.image.height
      }

      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
      this.id = idx;
    }
    this.hovering = false;
    this.active = false;
    this.inactive = false;
    this.animate = [];
  };


  pJS.fn.particle.prototype.draw = function(i) {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }
    else{
      var radius = p.radius;
    }
    if(p.radius_position != undefined){
      // console.log('radius_position: '+ p.radius_position.x)
      if(p.radius_position.x != undefined) p.x = p.radius_position.x;
      if(p.radius_position.y != undefined) p.y = p.radius_position.y;
      
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }
    else if(p.inactive){
      var opacity = pJS.interactivity.modes.inactive.opacity; //0
    }
    else{
      var opacity = p.opacity;
    }
    /* change opacity status */
    if(pJS.particles.opacity.anim.enable && !p.inactive) {
      if(p.opacity_status == true) {
        if(opacity >= pJS.particles.opacity.value) p.opacity_status = false;
        opacity += p.vo;
      }else {
        if(opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
        opacity -= p.vo;
      }
      if(opacity < 0) opacity = 0;
      p.opacity = opacity;
    }
    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();
    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          if(opacity != undefined && opacity >= 0.01){
            pJS.canvas.ctx.save();
            pJS.canvas.ctx.globalCompositeOperation = 'screen'
            pJS.canvas.ctx.globalAlpha = clamp(opacity, 0, 1);

            pJS.canvas.ctx.drawImage(
              (((pJS.tmp.islanding || p.hovering )&& p.img.src_active!= undefined)?p.img.src_active : p.img.src),
              p.x-radius,
              p.y-radius,
              radius*2,
              radius*2 / p.img.ratio
            );
            // pJS.canvas.ctx.drawImage(
            //   img_obj,
            //   p.x-radius,
            //   p.y-radius,
            //   radius*2,
            //   radius*2 / p.img.ratio
            // );
              pJS.canvas.ctx.restore();
          
          }
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, i));
      
    }
  };

  pJS.fn.createBgs = function(urls){
    pJS.layers.array.length = urls.length;
    for(var i = 0; i < urls.length; i++) {
      if(urls[i] != ""){
        var img = new Image();
        img.addEventListener('load', function(){
          var idx = urls.indexOf(this.src);
          pJS.layers.array[idx] = {
            image: this,
            opacity: 0,
            opacity_bubble: 0,
            animate: []
          };
        });
        img.src = urls[i];
      }
    }
    
  };
  pJS.fn.circleUpdate = function(){
    pJS.canvas.ctx.beginPath();

    for(var i = 0; i < audioHandler.CIRCLES; i++){
      var c = audioHandler.circles[i];
      if(c != undefined){
        var p =pJS.particles.array[pJS.tmp.active_id];
        pJS.canvas.ctx.globalAlpha = 1;
        pJS.canvas.ctx.globalCompositeOperation = 'screen';

        pJS.canvas.ctx.drawImage(
          p.img.src,
          pJS.canvas.w*.5 - c.radius,
          pJS.canvas.h*.5 - c.radius - 100,
          c.radius*2,
          c.radius*2 / p.img.ratio
        );
        pJS.canvas.ctx.restore();

        // pJS.canvas.ctx.fillStyle = c.color;
        // pJS.canvas.ctx.save();
        // pJS.canvas.ctx.arc(pJS.canvas.w*.5, pJS.canvas.h*.5, c.radius, 0, 2 * Math.PI);
        // pJS.canvas.ctx.fill();
        // pJS.canvas.ctx.restore();

        

        // p.radius_bubble = c.radius;
      }
      
    }
    pJS.canvas.ctx.closePath();
  };
  pJS.fn.bgUpdate = function(){
    function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

      if (arguments.length === 2) {
          x = y = 0;
          w = ctx.canvas.width;
          h = ctx.canvas.height;
      }

      // default offset is center
      offsetX = typeof offsetX === "number" ? offsetX : 0.5;
      offsetY = typeof offsetY === "number" ? offsetY : 0.5;

      // keep bounds [0.0, 1.0]
      if (offsetX < 0) offsetX = 0;
      if (offsetY < 0) offsetY = 0;
      if (offsetX > 1) offsetX = 1;
      if (offsetY > 1) offsetY = 1;

      var iw = img.width,
          ih = img.height,
          r = Math.min(w / iw, h / ih),
          nw = iw * r,   // new prop. width
          nh = ih * r,   // new prop. height
          cx, cy, cw, ch, ar = 1;

      // decide which gap to fill    
      if (nw < w) ar = w / nw;                             
      if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
      nw *= ar;
      nh *= ar;

      // calc source rectangle
      cw = iw / (nw / w);
      ch = ih / (nh / h);

      cx = (iw - cw) * offsetX;
      cy = (ih - ch) * offsetY;

      // make sure source rectangle is valid
      if (cx < 0) cx = 0;
      if (cy < 0) cy = 0;
      if (cw > iw) cw = iw;
      if (ch > ih) ch = ih;

      // fill image in dest. rectangle
      ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
    }
    pJS.canvas.ctx.beginPath();
    for(var i = 0; i < pJS.layers.array.length; i++){
      var l = pJS.layers.array[i];
      if(l != undefined){

        // for(var a = 0; a<l.animate.length; a++){
        //   pJS.fn.animateParticle2(l, l.animate[a], a);
        // }
        var opacity = 0;
        if(l.opacity_bubble != undefined){

          opacity = l.opacity_bubble;
        }
        else if(l.opacity != undefined){
          opacity = l.opacity;
        }
        // console.log(opacity);
        if(opacity >0.01){
          pJS.canvas.ctx.globalAlpha = opacity;
          pJS.canvas.ctx.save();
          drawImageProp(pJS.canvas.ctx, l.image);
          pJS.canvas.ctx.restore();
        }
      }
      // pJS.canvas.ctx.drawImage(l.image, 0, 0, l.width,    l.height,     // source rectangle
      //              0, 0, pJS.canvas.w, pJS.canvas.h); // destination rectangle
    }

    pJS.canvas.ctx.closePath();
  }
  pJS.fn.particlesUpdate = function(){
    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable && !p.hovering && !p.active){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }


      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }
    
      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('custom', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.customClickParticle(p);
      }
      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      // if(pJS.tmp.animate.length >0){

        // for(var a = 0; a<p.animate.length; a++){
        //   var that = p.animate[a];
        //   pJS.fn.animateParticle(p, that, a);
        // }
      // }


      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }

      p.draw(i);
    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.bgUpdate();
    pJS.fn.particlesUpdate();
    pJS.fn.circleUpdate();
    /* draw each particle */
    // for(var i = 0; i < pJS.particles.array.length; i++){
    //   var p = pJS.particles.array[i];
    //   p.draw(i);
    // }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(params){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = [];
    pJS.tmp.img_active_obj = [];
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    if(params){
    Object.deepExtend(pJSDom[0].pJS, params);
    }
    pJS.tmp.obj = {
      size_value: pJS.particles.size.value,
      size_anim_speed: pJS.particles.size.anim.speed,
      move_speed: pJS.particles.move.speed,
      line_linked_distance: pJS.particles.line_linked.distance,
      line_linked_width: pJS.particles.line_linked.width,
      mode_grab_distance: pJS.interactivity.modes.grab.distance,
      mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
      mode_bubble_size: pJS.interactivity.modes.bubble.size,
      mode_repulse_distance: pJS.interactivity.modes.repulse.distance,
    };
    pJS.tmp.img_active_obj.length = pJS.tmp.img_active_loaded =pJS.particles.shape.image.src.length;
    /* restart */
    pJS.fn.vendors.eventsListeners();
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }
  pJS.fn.animate = function(p, obj, idx){
    if(typeof obj.to == 'string'){
      obj.to = eval((obj.to).replace('W', pJS.canvas.w).replace('H', pJS.canvas.h).replace('S', p.radius).replace('X', p.x));
    }
    if(obj.from == undefined){
      if(obj.propname == 'x') obj.from = p.x;
      else if(obj.propname == 'y') obj.from = p.y;
      else if(obj.propname == 'opacity') obj.from = p.opacity;
      else if(obj.propname == 'size') obj.from = p.radius;
    }
    var x = obj.to - obj.from;
    var t = 0;
    var tx = obj.from;
    var prop = obj.propname;
    var forwards = true;
    var duration = obj.duration, end = obj.starttime + duration;
    var ease = (obj.easing || "easeInOutQuad");
    function loop(){
      if (t < 0) {
        t = 1-((end - new Date().getTime()) / duration);
        requestAnimFrame(loop);
        return;
      }
      switch(ease){
        case "linear":
          tx = obj.from + EasingFunctions.linear(t) * x;
        break;
        case "easeInQuad":
          tx = obj.from + EasingFunctions.easeInQuad(t) * x;
        break;
        case "easeOutQuad":
          tx = obj.from + EasingFunctions.easeOutQuad(t) * x;
        break;
        case "easeInOutQuad":
          tx = obj.from + EasingFunctions.easeInOutQuad(t) * x;
        break;
        case "easeInCubic":
          tx = obj.from + EasingFunctions.easeInCubic(t) * x;
        break;
        case "easeOutCubic":
          tx = obj.from + EasingFunctions.easeOutCubic(t) * x;
        break;
        case "easeInOutCubic":
          tx = obj.from + EasingFunctions.easeInOutCubic(t) * x;
        break;
        case "easeInQuart":
          tx = obj.from + EasingFunctions.easeInQuart(t) * x;
        break;
        case "easeOutQuart":
          tx = obj.from + EasingFunctions.easeOutQuart(t) * x;
        break;
        case "easeInOutQuart":
          tx = obj.from + EasingFunctions.easeInOutQuart(t) * x;
        break;
        case "easeInQuint":
          tx = obj.from + EasingFunctions.easeInQuint(t) * x;
        break;
        case "easeOutQuint":
          tx = obj.from + EasingFunctions.easeOutQuint(t) * x;
        break;
        case "easeInOutQuint":
          tx = obj.from + EasingFunctions.easeInOutQuint(t) * x;
        break;
      }
      var remaining = end - new Date().getTime();
      if(prop == 'size') p.radius_bubble = tx;
      if(prop == 'x') p.radius_position.x = tx;
      if(prop == 'y') p.radius_position.y = tx;
      if(prop == 'opacity') p.opacity_bubble =clamp(tx, 0, 1);

      if (t < 1) {
          //t += 0.01; //determines speed
          t = 1-((end - new Date().getTime()) / duration);
          requestAnimFrame(loop); //setTimeout(myLoop, 16);
      }
      else{
        if(prop == 'size'){
          p.radius_bubble = undefined;
          if(forwards) p.radius = obj.to;
        }
        if(prop == 'x') p.radius_position.x = undefined;
        if(prop == 'y') p.radius_position.y = undefined;
        if(prop == 'opacity') {
          p.opacity_bubble = undefined;
          if(forwards) p.opacity = obj.to;
        }
        // p.animate.splice(idx, 1); 
        if(obj.eventname!=undefined) $('body').trigger(obj.eventname);
      }
    }
    loop();
  }

  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.customClickParticle = function(p){
    if(pJS.tmp.custom_clicking){
      
      var time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;
      if(time_spent > pJS.interactivity.modes.bubble.duration){
        pJS.tmp.custom_duration_end = true;
      }

      if(time_spent > pJS.interactivity.modes.bubble.duration*2){
        pJS.tmp.custom_clicking = false;
        pJS.tmp.custom_duration_end = false;
        pJS.interactivity.events.onclick.enable = true;
      }
      if(pJS.tmp.custom_clicking){
        var closest = Number.MAX_SAFE_INTEGER;
        var active_id = -1;
        for(var i = 0; i < pJS.particles.array.length; i++){
          var _p = pJS.particles.array[i];
          var dx_mouse = _p.x - pJS.interactivity.mouse.click_pos_x,
          dy_mouse = _p.y - pJS.interactivity.mouse.click_pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
          if(dist_mouse <= _p.radius && dist_mouse < closest){
            closest = dist_mouse;
            active_id = _p.id;
          }
          if(i == pJS.particles.number.value-1){
            if(pJS.tmp.active_id != active_id){
              pJS.tmp.active_id = active_id;
              pJS.fn.clickedParticle(pJS.particles.array[pJS.tmp.active_id]);
            }
          }
        }
      }

    }

  }
  pJS.fn.clickedParticle = function(p){
    pJS.tmp.islanding = false;
    pJS.tmp.active_id = p.id;
    p.hovering =  false;
    p.inactive = false;
    p.active = true;
    pJS.tmp.custom_clicking = false;
    pJS.interactivity.events.onclick.enable = false;
    scrollable = false;
    
    pJS.fn.animate(p,{propname: 'size', from: p.radius, to: 0, duration: 500, starttime: new Date().getTime(), easing: "easeInQuad" });
    pJS.fn.animate(p,{propname: 'x', from: p.x, to: pJS.canvas.w *.5, duration: 500, starttime: new Date().getTime(), easing: "easeInQuad" });
    pJS.fn.animate(p,{propname: 'y', from: p.y, to: pJS.canvas.h *.5, duration: 500, starttime: new Date().getTime(), easing: "easeInQuad" });
    pJS.fn.animate(p, {propname: 'opacity', from: clamp((p.opacity_bubble || p.opacity), 0, 1), to: .4, duration: 1300, starttime: new Date().getTime() });    
    pJS.particles.size.anim.enable = false;
    for(var j = 0; j < pJS.particles.array.length; j++){
      var _p = pJS.particles.array[j];
      if(pJS.tmp.active_id != _p.id){
        _p.inactive = true;
        _p.active = false;

        pJS.fn.animate(_p, {propname: 'opacity', from: clamp((_p.opacity_bubble || _p.opacity), 0, 1), to: 0, duration: 600, starttime: new Date().getTime()+(j*30+100) });
      }
    }
    if(pJS.interactivity.events.onhover.enable) pJS.interactivity.events.onhover.enable = false;
    var event = jQuery.Event( "detail-intro" );
    event.bubble = p.id;
    $( "body" ).trigger( event).removeClass('intro-state');
    if($('body').data('lang') == 'sc'){
      media[2][6] = base_url+"images/sc/3-bg7.jpg";
      media[5][4] = base_url+"images/sc/6-bg5.jpg";
      media[5][6] = base_url+"images/sc/6-bg7.jpg";
      media[7][6] = base_url+"images/sc/8-bg7.jpg";
      media[8][7] = base_url+"images/sc/9-bg8.jpg";
    }
    if(mode == 'l'){
      pJS.fn.createBgs(media_d[p.id]);
    }
    else{
      pJS.fn.createBgs(media[p.id]); //[base_url+"3-bg1.jpg", base_url+"3-bg2.jpg", base_url+"3-bg3.jpg", base_url+"3-bg4.jpg"]
    }
    
    audioHandler.play('story'+(p.id+1)+'audio', true);
    
    
  }
  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;
    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          i,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
        //p.radius_position = {x: p.x, y: p.y};
        p.hovering = false;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          p.hovering = true;
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }
        

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'custom':
              pJS.tmp.custom_clicking = true;
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(src, type, src2){

    pJS.tmp.img_error = undefined;

    if(src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              if(pJS.tmp.img_obj.length == pJS.particles.shape.image.src.length) pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          var i = pJS.particles.shape.image.src.indexOf(this.src);
          // console.log(this.src, i, pJS.particles.shape.image.src);
          pJS.tmp.img_obj[i] = img;
          //var i = pJS.tmp.img_obj.length - 1;
          if(src2 != undefined){
            var img2 = new Image();
            img2.addEventListener('load', function(){
              pJS.tmp.img_active_obj[i] = img2;
              pJS.tmp.img_active_loaded--;

              if(pJS.tmp.img_obj.length == pJS.particles.shape.image.src.length && pJS.tmp.img_active_loaded == 0){
                pJS.fn.vendors.checkBeforeDraw();
              }
            });
            img2.src = src2;
          }
          else{
            if(pJS.tmp.img_obj.length == pJS.particles.shape.image.src.length) pJS.fn.vendors.checkBeforeDraw();
          }
        });
        img.src = src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };

  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj.length>0){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
    if(pJS.mode == 'floating'){
      for(var i = 0; i<pJS.particles.array.length; i++){
        pJS.fn.animate(pJS.particles.array[i], {propname: 'x', to: 'X-(W*1.6)', easing: "easeOutCubic", duration: ((mode == 'l')? 4000:3000), starttime: new Date().getTime()+60*i});
      }
      $('body').trigger('stage2-init');
    }
  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      if(pJS.particles.shape.image.src instanceof Array){
        for (var i = 0; i < pJS.particles.shape.image.src.length; i++) {
          var src = pJS.particles.shape.image.src[i];
          pJS.tmp.img_type = src.substr(src.length - 3);
          if(pJS.particles.shape.image.active_src[i]){
            pJS.fn.vendors.loadImg(src, pJS.tmp.img_type, pJS.particles.shape.image.active_src[i]);
          }
          else{
            pJS.fn.vendors.loadImg(src, pJS.tmp.img_type);
          }
          
        }
      }
      else{
        pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
        pJS.fn.vendors.loadImg(pJS.particles.shape.image.src, pJS.tmp.img_type);
      }
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {

  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

var EasingFunctions = {
    linear: function (t) {
        return t
    },
    easeInQuad: function (t) {
        return t * t
    },
    easeOutQuad: function (t) {
        return t * (2 - t)
    },
    easeInOutQuad: function (t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic: function (t) {
        return t * t * t
    },
    easeOutCubic: function (t) {
        return (--t) * t * t + 1
    },
    easeInOutCubic: function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart: function (t) {
        return t * t * t * t
    },
    easeOutQuart: function (t) {
        return 1 - (--t) * t * t * t
    },
    easeInOutQuart: function (t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
    },
    easeInQuint: function (t) {
        return t * t * t * t * t
    },
    easeOutQuint: function (t) {
        return 1 + (--t) * t * t * t * t
    },
    easeInOutQuint: function (t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
    }
};

/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};
window.updateParticlesJS = function(params){
  
    pJSDom[0].pJS.fn.particlesRefresh(params);
  
};
window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};
var audioHandler = {
  url: '',
  analyserNode: null,
  freqFloatData: null, freqByteData: null, timeByteData: null, circleFreqChunk: null, tickTimer: null,
  circles: {},
  CIRCLES : 8,
  dataAverage: [42, 42, 42, 42],
  playing: false,
  playingBG: false,
  init: function(){

    // var _ = this;
    
    createjs.Sound.on("fileload", handleLoad, this);
    function handleLoad(e){
      // if(e.id == 'background-music'){

      //     audioHandler.playBG();
      // }
    }
    for(var j = 0; j < 9; j++){
      var url = base_url+'audio/'+(j+1)+'.wav';
      audioHandler.load(url, 'story'+(j+1)+'audio', true);
    }
    audioHandler.load(base_url+'audio/bg.mp3', 'background-music', true);

    $('.detail-article .audio-btn').bind('click', function(e){
      e.preventDefault();
      if(audioHandler.playing) return;
      audioHandler.play('story'+(pageHandler.cur_id+1)+'audio', false);
      $(this).addClass('disabled');
    });
  },
  load: function(src, id, playnow){
    createjs.Sound.registerSound(src, id);
  },
  playBG: function(){
    if(audioHandler.playingBG) return;
    audioHandler.playingBG = true;
    // audioHandler.play('background-music', false);
    createjs.Sound.play('background-music', {volume: 1, loop: -1});
  },
  stopBG: function(){
    if(audioHandler.playingBG){
      audioHandler.playingBG = false;
      // audioHandler.stop('background-music', false);  
      createjs.Sound.stop('background-music');
    }
  },
  play: function(id, effect){
    var _ = this;
    var FFTSIZE = 32; 
      // console.log('loaded');
      audioHandler.stopBG();
      createjs.Sound.off("fileload");

      if(effect){
        var context = createjs.Sound.activePlugin.context;

        if(audioHandler.analyserNode !=null){
          audioHandler.analyserNode.connect(context.destination);
        }
        else{
          // create an analyser node
          audioHandler.analyserNode = context.createAnalyser();
          audioHandler.analyserNode.fftSize = FFTSIZE;
          audioHandler.analyserNode.smoothingTimeConstant = 0.85;
          audioHandler.analyserNode.connect(context.destination);
          
        }

        var dynamicsNode = createjs.Sound.activePlugin.dynamicsCompressorNode;
        dynamicsNode.disconnect();  // disconnect from destination
        dynamicsNode.connect(audioHandler.analyserNode);
        // set up the arrays that we use to retrieve the analyserNode data
        audioHandler.freqFloatData = new Float32Array(audioHandler.analyserNode.frequencyBinCount);
        audioHandler.freqByteData = new Uint8Array(audioHandler.analyserNode.frequencyBinCount);
        audioHandler.timeByteData = new Uint8Array(audioHandler.analyserNode.frequencyBinCount);

        // calculate the number of array elements that represent each circle
        audioHandler.circleFreqChunk = audioHandler.analyserNode.frequencyBinCount / audioHandler.CIRCLES;

        if (istouch) {
          // messageField.text = "Touch to start";
          // // wrap our sound playing in a click event so we can be played on mobile devices
          // stage.addEventListener("stagemousedown", startPlayback);
          // stage.update();   //update the stage to show text
        } else {
          // audioHandler.play();
        }
      }
      // $(window).trigger('audioloaded');

    audioHandler.playing = true;
    var instance = createjs.Sound.play(id, {volume: 1});
    if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
      audioHandler.reset();
      return;
    }

    instance.addEventListener("complete", function (instance) {
      audioHandler.reset();
      audioHandler.playBG();
      if(effect){
        $(window).trigger("detail-intro-2");
      }
    });
    $(window).on('audioPause', function(){
      // instance.stop();
      createjs.Sound.stop('story'+(pageHandler.cur_id+1)+'audio');
      audioHandler.playing = false;
      audioHandler.playBG();
    });
    if(effect){
      audioHandler.tickTimer = setInterval(audioHandler.tick, 20);
      for (var i = 0; i < audioHandler.CIRCLES; i++) {
        audioHandler.circles[i] = new audioHandler.createCircle();
      }
    }
  },
  reset: function(){
    var _ = this;
    _.playing = false;
    if(_.tickTimer!=null){
      clearInterval(_.tickTimer);
      _.tickTimer = null;
    }
    _.circles = {};
    $('#story'+(pageHandler.cur_id+1)+' .audio-btn').removeClass('disabled');
  },
  tick: function(){
    var WAVE_EMIT_THRESHOLD = 15;
    audioHandler.analyserNode.getFloatFrequencyData(audioHandler.freqFloatData);  // this gives us the dBs
    audioHandler.analyserNode.getByteFrequencyData(audioHandler.freqByteData);  // this gives us the frequency
    audioHandler.analyserNode.getByteTimeDomainData(audioHandler.timeByteData);  // this gives us the waveform
    var lastRadius = 0;  // we use this to store the radius of the last circle, making them relative to each other

    var RADIUS_FACTOR = 40;
    var MIN_RADIUS = 1;
    for (var i = 0; i < audioHandler.CIRCLES; i++) {
      var freqSum = 0;
      var timeSum = 0;
      for (var x = audioHandler.circleFreqChunk; x; x--) {
        var index = (audioHandler.CIRCLES - i) * audioHandler.circleFreqChunk - x;
        freqSum += audioHandler.freqByteData[index];
        timeSum += audioHandler.timeByteData[index];
      }
      freqSum = freqSum / audioHandler.circleFreqChunk / 256;  // gives us a percentage out of the total possible value
      timeSum = timeSum / audioHandler.circleFreqChunk / 256;  // gives us a percentage out of the total possible value
      // NOTE in testing it was determined that i 1 thru 4 stay 0's most of the time

      // draw circle
      lastRadius += freqSum * RADIUS_FACTOR + MIN_RADIUS;
      // var color = createjs.Graphics.getHSL((i / _.CIRCLES * HUE_VARIANCE + circleHue) % 360, 100, 50);
      var c = audioHandler.circles[i];
      // var g = new createjs.Graphics().beginFill(color).drawCircle(centerX, centerY, lastRadius).endFill();
      
      c.radius = ((mode == 'l')? lastRadius * 2 : lastRadius * 3);
    }

  },
  createCircle : function(){
    this.radius = 0;
  }
};
var istouch = $('#touch-detect').is(':visible');
var story = {
  frame: -1,
  $section: null,
  num: 0
};
var stage1Arr = {
    "mode": 'star',
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": false,
          "value_area": 100
        }
      },
      "shape": {
        "type": "image",
        "image": {
          "src": [base_url+"images/blur3.png"],
          "width": 912,
          "height": 600
        }
      },
      "opacity": {
        "value": .4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": .2,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "size": {
        "value": 35,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 40,
          "sync": false
        }
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "left",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 80,
          "size": 150,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  };


function stage2(){
  var stage2Arr = {
        "mode": 'floating',
        "particles": {
          "number": {
            "value": 9,
            "density": {
              "enable": false,
              "value_area": 100
            }
          },
          "shape": {
            "type": "image",
            "image": {
              "src": [base_url+"images/1.png?c", base_url+"images/2.png?d", base_url+"images/3.png?c", base_url+"images/4.png?c", base_url+"images/5.png?c", base_url+"images/6.png?c", base_url+"images/7.png?c", base_url+"images/8.png?c", base_url+"images/9.png?c"],
              "active_src": [base_url+"images/1-active.png?d", base_url+"images/2-active.png?d", base_url+"images/3-active.png?d", base_url+"images/4-active.png?d", base_url+"images/5-active.png?d", base_url+"images/6-active.png?d", base_url+"images/7-active.png?d", base_url+"images/8-active.png?d", base_url+"images/9-active.png?d"],
              "width": 234,
              "height": 234
            }
          },
          "opacity": {
            "value": .75,
            "random": false,
            "anim": {
              "enable": false,
              "speed": .4,
              "opacity_min": 0.2,
              "sync": false
            }
          },
          "size": {
            "value": ((mode == 'l')? 300 : 100),
            "random": true,
            "anim": {
              "enable": true,
              "speed": 20,
              "size_min": 200,
              "sync": false
            }
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": ((istouch)?false:true),
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "custom"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 80,
              "size": 150,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "inactive":{
              "opacity": 0,
            },
            "custom":{
              "size": 600,
              "opacity": .8
            }
          }
        },
        "retina_detect": true,
        
      };
  $('body').addClass('landing-state');
  // audioHandler.playBG();
  setTimeout(function(){

    $('#particles-js canvas').addClass('hide');
  }, 400);
  // return;
  setTimeout(function(){
    updateParticlesJS(stage2Arr);
    $('#particles-js canvas').removeClass('hide');
    setTimeout(function(){
      $('#bg').addClass('hide');
      // pageHandler.nextPage();
    }, 3000);
  }, 910);
  
}

var mode = 'l', scrollable = true, scrollable1 = true;
var pageHandler = {
  mc: null,
  pages: ["intro", "landing2", "story"], //["intro", "landing", "landing2", "story"]
  cur_page: 0,
  cur_id: null,
  init: function(){
    particlesJS('particles-js', stage1Arr);
    var multiply = .6;
    if($(window).width()<$(window).height()){
      multiply = 0.5;
      mode = 'p';
    }
    var $memoryWrap = $('#bg'), 
      memoryData = [
      {src: base_url+"images/intro-img1-2.jpg", width: 807, ratio: 1, top: 59, left: 6.63}, 
      {src: base_url+"images/intro-img2-2.jpg", width: 823, ratio: 0.8639, top: 878, left: 0.53}, 
      {src: base_url+"images/intro-img3.jpg", width: 670, ratio: 1, top: 898, left: 38.3}, 
      {src: base_url+"images/2.png", width: 435, ratio: 1, top: 909, left: 55.73, opacity: .7}, 
      {src: base_url+"images/5.png", width: 480, ratio:1, top: 589, left: 19.93, opacity: .4},
      {src: base_url+"images/intro-img4.png", width: 579, ratio: 1, top: 519, left: 21.93}];
    if(mode == 'l'){
      memoryData.push({src: base_url+"images/intro-img5.jpg", width: 880, ratio: 1, top: -100, left: 50.4, opacity: .4}, 
      {src: base_url+"images/intro-img6.png", width: 670, ratio: 1, top: 442, left: 66.2}, 
      {src: base_url+"images/9.png", width: 620, ratio:1, top: 247, left: 64.26, opacity: .4},
      {src: base_url+"images/4.png", width: 600, ratio: 1, top: 974, left: 88.2, opacity: .4}
      );
      // {src: base_url+"images/intro-img7.jpg", width: 760, ratio: 1, top: 835, left: 73.93, opacity: .6}, 
      // {src: base_url+"images/intro-img8.png", width: 670, ratio: 1, top: 507, left: 85.1}, 
    }

      // ];
    
    for(var m = 0; m<memoryData.length; m++){
      var $m = $('<div id="memory'+(m+1)+'" class="memory" />'), memory = memoryData[m];
      var w  = memory.width, h = w * memory.ratio;
      $m.css({'backgroundImage':'url('+memory.src+')',width: w*multiply, height: h*multiply, top: memory.top*multiply, left: memory.left/multiply+'%'});
      if(memory.opacity != undefined){
        $m.css({opacity: memory.opacity});

      }
      $memoryWrap.append($m);
    }
  },
  loaded: function(){
    var _ = this;
    // var $canvas = $('#particles-js canvas');
    
    var duration = 4000;
    $('#intro').addClass('active');
    setTimeout(function(){
      stage2();
    }, duration); //7800

    _.mc = new Hammer(document.getElementsByTagName('body')[0]);
    _.mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    _.mc.on("swipeup swipedown", function(ev) {
      // console.log(ev.type +" gesture detected.");
      if(!$('body').hasClass('overlay-state')){
        // ev.preventDefault();

        if(ev.type == 'swipeup'){
          _.prevNextHandler(true);
        }
        else{
          _.prevNextHandler(false);
        }
      }
      else{

      }
    });
    $('body').on('detail-intro', function(e){
      pageHandler.cur_id = e.bubble;
      pageHandler.nextPage();
      
    });
    $('body').on('stage2-init', function(e){
      $('#grid-btn').addClass('on');
    });
    $('body').on('detail-article-0', function(e){
      //caught after the intro audio finished
      $('body').attr('class', 'timeline-state');
      nextFrame();
    });
    $('.detail-article .home-btn, #home-btn').bind('click', function(e){
      e.preventDefault();
      if(audioHandler.playing){
        $(window).trigger('audioPause');
      }
      var $cur = story.$section.find('.frame'+(story.frame+1));
      if($cur.find('.video-wrapper').length == 1){
        $cur.find('.video-wrapper').html('');  
      }
      audioHandler.playBG();
      pageHandler.changePage(story.$section, $('#landing2'), true, true);
      story.$section.find('.detail-article.active, .frame.active').removeClass('active').hide();
      story.frame = -1;
      story.num = 0;
      story.$section = null;
      pageHandler.cur_page = 1;
      pageHandler.cur_id = null;
      $(window).trigger('landing');
    });
    $('.detail-article .prev-btn').bind('click', function(e){
      e.preventDefault();
      scrollable = false;
      prevFrame();
    });
    $('.detail-article .next-btn').bind('click', function(e){
      e.preventDefault();
      scrollable = false;
      nextFrame();
    });
    $('#credits-btn').bind('click', function(e){
      var $credits = $('#credits');
      $credits.toggleClass('active');
      if($credits.hasClass('active')){
        pageHandler.mc.set({ touchAction: 'auto' });
        $credits.fadeIn(400);
        $('body').addClass('overlay-state');
        $credits.get(0).scrollTop = 0;
      }
      else{
        pageHandler.mc.set({ touchAction: 'none' });
        $credits.fadeOut(200);
        $('body').removeClass('overlay-state'); 
      }
    });
    $('#credits .close-btn').bind('click', function(e){
      e.preventDefault();
      $('#credits-btn').trigger('click');
    });
    $('#grid-btn').bind('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
        //change to grid mode
        $(window).trigger('grid-mode');
      }
      else{
        //change to floating mode
        $(window).trigger('float-mode');
      }
    });
    $('.detail-article .video-btn').bind('click', function(e){
      e.preventDefault();
      var video = $(this).parent().find('video').get(0);
      var $wrap = $(this).parent().find('.video-wrapper');
      if (video.paused) {
        audioHandler.stopBG();
        video.play();
        video.addEventListener('waiting', (event) => {
          
          $wrap.addClass('loading');
        });
        video.addEventListener('playing', (event) => {
          $(this).addClass('disabled');
          $wrap.removeClass('loading');
        });
        video.addEventListener('pause', (event) => {
          audioHandler.playBG();
          $(this).removeClass('disabled');
          $wrap.removeClass('loading');
        });
        video.addEventListener('ended', (event) => {
          audioHandler.playBG();
          $(this).parents('.frame').find('.next-btn').trigger('click');
        });
      } else {
        audioHandler.playBG();
        video.pause();
      }
    });
    $(window).bind('wheel', function(e) {
      if(!$('body').hasClass('overlay-state')){

        if (e.originalEvent.wheelDelta >= 0) {
          _.prevNextHandler(false);
        }
        else {
          _.prevNextHandler(true);
        }
      }
    });
    $('#intro .next-btn').click(function(e){
      e.preventDefault();
      _.nextPage();
    });
  },
  prevNextHandler: function(next){
    var _ = this;
    if(story.$section != null && scrollable){
      if(audioHandler.playing && story.frame>=0){
        // console.log('audio pause');
        $(window).trigger('audioPause');
      }
      if(next){
        $('.detail-article.active .frame'+(story.frame+1)+' .next-btn').trigger('click');
      }
      else{
        $('.detail-article.active .frame'+(story.frame+1)+' .prev-btn').trigger('click'); 
      }
    }
    else if($('body').hasClass('landing-state')){
      $('#bg').addClass('hide');
      _.nextPage();
    }
    setTimeout(function(){
      $("html, body").animate({ scrollTop: 0 }, 0);
    }, 200);
  },
  nextPage: function(){
    if(!scrollable1) return;
    var _ = this;
    scrollable1 = false;
    if(_.cur_page >= _.pages.length){
      return;
    }
    var to = _.pages[(_.cur_page+1)];
    if(to == 'story'){
      to = to + (_.cur_id+1);
      $('#'+to+' .detail-intro').show().addClass('active'); 
    }
    _.changePage($('#'+_.pages[_.cur_page]), $('#'+to), true, true);
    _.cur_page++;
    setTimeout(function(){
      scrollable1 = true;
    }, 400);
    // if(!audioHandler.playingBG){
      audioHandler.playBG();
    // }
  },
  changePage: function($from, $to, ispage, dim){
    var _ = this;
    if(story.$section != null){
      story.$section.removeClass('in');
    }
    $from.fadeOut(200);
    $to.fadeIn(400, function(){
      $from.removeClass('active');
      $to.addClass('active');
      if(ispage) $('body').attr('class', _.pages[_.cur_page]+'-state');
      if(story.$section!=null && dim){story.$section.addClass('in');}
    });
  }
};
var touchEvent = (istouch)? 'touchstart' : 'click';
pageHandler.init();

var prevFrame = function(){
  story.frame--;
  if(story.frame <0) return;
  var $current = story.$section.find('.frame'+(story.frame+2));
  var $frame = story.$section.find('.frame'+(story.frame+1));
  changeFrame($current, $frame, false);
};
var changeFrame = function($current, $frame, next){
  var dim = true;
  if($current.find('.video-wrapper').length == 1){
    $current.find('.video-wrapper').html('');  
    audioHandler.playBG();
  }
  if($frame.find('.video-wrapper').length == 1){
    dim = false;
    var $wrap = $frame.find('.video-wrapper');
    var src = (mode == 'l')? $wrap.data('video'):$wrap.data('video-m');
    $wrap.html('<video width="400" ><source src="'+src+'" type="video/mp4">Your browser does not support HTML5 video.</video>');
    $frame.find('.video-btn').trigger('click');
  }
  pageHandler.changePage($current, $frame, false, dim);
  var t = $frame.data('template');
  var event = jQuery.Event( "detail-article");
  event.frame = story.frame;
  event.template = t;
  event.next = next;
  var time = 2100;
  if(t == 'e'){
    time = 4600;
  }
  else if(t == 'f'){
    time = 4100;
  }
  setTimeout(function(){
    scrollable = true;
  }, time);
  var n = event.frame % 4;
  if(n == 1){event.animate = [{propname: 'x', to: '(W*.8)', duration: 1300, starttime: new Date().getTime() }, {propname: 'y', to: '(H*.9)', duration: 1300, starttime: new Date().getTime() }];}
  else if(n == 2){event.animate = [{propname: 'x', to: '0+S*.6', duration: 1300, starttime: new Date().getTime() }, {propname: 'y', to: '(H*.36)', duration: 1300, starttime: new Date().getTime() }];}
  else if(n == 3){event.animate = [{propname: 'x', to: '0+S*.5', duration: 1300, starttime: new Date().getTime() }, {propname: 'y', to: '(H-S*.65)', duration: 1300, starttime: new Date().getTime() }];}
  else if(n == 4){event.animate = [{propname: 'x', to: 'W', duration: 1300, starttime: new Date().getTime() }, {propname: 'y', to: '(H-S)', duration: 1300, starttime: new Date().getTime() }];}
  else if(n == 0){event.animate = [{propname: 'x', to: 'W/2', duration: 1300, starttime: new Date().getTime() }, {propname: 'y', to: '(H/2)', duration: 1300, starttime: new Date().getTime() }];}
  else{event.animate = [];}
  $(window).trigger(event);
};
var nextFrame = function(){
  story.frame++;
  if(story.frame == 0){
    story.$section = $('#story'+(pageHandler.cur_id+1));
    story.num = story.$section.find('.frame').length;
    var $to = story.$section.find('.detail-article');
    pageHandler.changePage(story.$section.find('.detail-intro'), $to, false, true);  
  }
  if(story.frame >= story.num) return;
  
  // var $current = story.$section.find('.frame'+(story.frame));
  // var $frame = story.$section.find('.frame'+(story.frame+1));
  changeFrame(story.$section.find('.frame'+(story.frame)), story.$section.find('.frame'+(story.frame+1)), true);
};

var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
function handleVisibilityChange() {
  if (document[hidden]) {
    audioHandler.stopBG();
  } else {
    audioHandler.playBG();
  }
}
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Handle page visibility change   
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
$(window).load(function(){
  $('body').addClass('loaded');
  pageHandler.loaded();
  setTimeout(function(){
    $("html, body").animate({ scrollTop: 0 }, 0);
  }, 200);
  audioHandler.init();
});
