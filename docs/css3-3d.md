

<b>对于CSS3 3D虽然已经出来很久，但一直没有机会在项目中更多地去实践，但作为一名优秀的
前端工程师有必要对其有一定的认识，如是制作了一个简单的3d演示，如下</b>

<style>
@-moz-keyframes roll {
  0% {
    -moz-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  10% {
    -moz-transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
    transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
  }
  20% {
    -moz-transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
    transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
  }
  30% {
    -moz-transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
    transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
  }
  40% {
    -moz-transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
    transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
  }
  50% {
    -moz-transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
    transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
  }
  60% {
    -moz-transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
    transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
  }
  70% {
    -moz-transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
    transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
  }
  80% {
    -moz-transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
    transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
  }
  90% {
    -moz-transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
    transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
  }
  100% {
    -moz-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
@-webkit-keyframes roll {
  0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  10% {
    -webkit-transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
    transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
  }
  20% {
    -webkit-transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
    transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
  }
  30% {
    -webkit-transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
    transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
  }
  40% {
    -webkit-transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
    transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
    transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
  }
  60% {
    -webkit-transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
    transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
  }
  70% {
    -webkit-transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
    transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
  }
  80% {
    -webkit-transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
    transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
  }
  90% {
    -webkit-transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
    transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
@keyframes roll {
  0% {
    -moz-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  10% {
    -moz-transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
    -ms-transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
    -webkit-transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
    transform: rotateX(36deg) rotateY(36deg) rotateZ(36deg);
  }
  20% {
    -moz-transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
    -ms-transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
    -webkit-transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
    transform: rotateX(72deg) rotateY(72deg) rotateZ(72deg);
  }
  30% {
    -moz-transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
    -ms-transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
    -webkit-transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
    transform: rotateX(108deg) rotateY(108deg) rotateZ(108deg);
  }
  40% {
    -moz-transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
    -ms-transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
    -webkit-transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
    transform: rotateX(144deg) rotateY(144deg) rotateZ(144deg);
  }
  50% {
    -moz-transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
    -ms-transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
    -webkit-transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
    transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
  }
  60% {
    -moz-transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
    -ms-transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
    -webkit-transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
    transform: rotateX(216deg) rotateY(216deg) rotateZ(216deg);
  }
  70% {
    -moz-transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
    -ms-transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
    -webkit-transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
    transform: rotateX(252deg) rotateY(252deg) rotateZ(252deg);
  }
  80% {
    -moz-transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
    -ms-transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
    -webkit-transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
    transform: rotateX(288deg) rotateY(288deg) rotateZ(288deg);
  }
  90% {
    -moz-transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
    -ms-transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
    -webkit-transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
    transform: rotateX(324deg) rotateY(324deg) rotateZ(324deg);
  }
  100% {
    -moz-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    -ms-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
#container-3d {
  -moz-perspective: 800px;
  -webkit-perspective: 800px;
  perspective: 800px;
  -moz-perspective-origin: 50% 50%;
  -webkit-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
}
#container-3d > .cube {
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  width: 200px;
  height: 200px;
  margin: 50px auto;
  position: relative;
  -moz-transform-origin: center 50%;
  -ms-transform-origin: center 50%;
  -webkit-transform-origin: center 50%;
  transform-origin: center 50%;
  -moz-animation: roll 10s linear forwards infinite;
  -webkit-animation: roll 10s linear forwards infinite;
  animation: roll 10s linear forwards infinite;
}
#container-3d > .cube > .side {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50px;
  left: 67px;
  border: 3px solid transparent;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#container-3d > .cube > .side:nth-of-type(1) {
  -moz-transform-origin: left 50%;
  -ms-transform-origin: left 50%;
  -webkit-transform-origin: left 50%;
  transform-origin: left 50%;
  -moz-transform: rotateY(45deg);
  -webkit-transform: rotateY(45deg);
  transform: rotateY(45deg);
  border-color: rgba(255, 0, 0, 0.5);
  left: 26px;
}
#container-3d > .cube > .side:nth-of-type(2) {
  -moz-transform-origin: left 50%;
  -ms-transform-origin: left 50%;
  -webkit-transform-origin: left 50%;
  transform-origin: left 50%;
  border-color: rgba(0, 128, 0, 0.5);
  -moz-transform: rotateY(-45deg);
  -ms-transform: rotateY(-45deg);
  -webkit-transform: rotateY(-45deg);
  transform: rotateY(-45deg);
  left: 26px;
}
#container-3d > .cube > .side:nth-of-type(3) {
  -moz-transform-origin: right 50%;
  -ms-transform-origin: right 50%;
  -webkit-transform-origin: right 50%;
  transform-origin: right 50%;
  border-color: rgba(0, 0, 255, 0.5);
  -moz-transform: rotateY(-45deg);
  -webkit-transform: rotateY(-45deg);
  transform: rotateY(-45deg);
}
#container-3d > .cube > .side:nth-of-type(4) {
  -moz-transform-origin: right 50%;
  -ms-transform-origin: right 50%;
  -webkit-transform-origin: right 50%;
  transform-origin: right 50%;
  border-color: rgba(255, 255, 0, 0.5);
  -moz-transform: rotateY(45deg);
  -webkit-transform: rotateY(45deg);
  transform: rotateY(45deg);
}
#container-3d > .cube > .side:nth-of-type(5) {
  border-color: rgba(0, 0, 0, 0.8);
  left: 46px;
  -moz-transform: rotateX(90deg) translateZ(-50px) rotateZ(45deg);
  -webkit-transform: rotateX(90deg) translateZ(-50px) rotateZ(45deg);
  transform: rotateX(90deg) translateZ(-50px) rotateZ(45deg);
}
#container-3d > .cube > .side:nth-of-type(6) {
  border-color: rgba(128, 0, 128, 0.8);
  left: 46px;
  -moz-transform: rotateX(90deg) translateZ(50px) rotateZ(45deg);
  -webkit-transform: rotateX(90deg) translateZ(50px) rotateZ(45deg);
  transform: rotateX(90deg) translateZ(50px) rotateZ(45deg);
}
</style>
<div id="container-3d">
    <div class="cube">
        <p class="side"></p>
        <p class="side"></p>
        <p class="side"></p>
        <p class="side"></p>
        <p class="side"></p>
        <p class="side"></p>
    </div>
</div>

<b>和CSS3-3D相关的样式属性并不多，但是有几个概念是需要明确的。说简单点儿，
3D相对于2D只不过多了一个自由度，也就是多了一个z轴后者说深度，相信大家
对三维立体坐标系并不陌生。为了在平面上体现立体的效果，我们需要明确这么
几个属性</b>

## perspective

<b>我们的3D物体一般都存在于容器中，这个容器有点像我们的视野，在我们的视野内
可能存在着多个3D物体，根据近大远小的原理呈现在我们的眼中，而perspective
这个属性就表示3D物体距离观察点的距离，也就是所谓的视距。该属性仅仅作用于
3D容器</b>

## perspective-origin

<b>该属性也只作用于3D容器。这个属性用于指定我们观察点/视点，也就是你从容器的那一点
来观察容器内的3D物体，相当于你通过改变视点来改变观察3D物体的角度。如果你想从多角度
观察某物体的话这样做显然是吃力不讨好的。一般我们把视野的中心作为视点，
即perspective-origin(50% 50%),然后让3D物体在X、Y、Z轴上360度旋转，
从而轻松实现全方位的观察该物体。</b>

## transform-style

<b>这是个标志性属性取值为flat或者preserve-3d，当其取值为后者时，该元素和其后代元素
都将具备3D特性，也就意味他们都能在X、Y、Z轴上进行3D旋转和移动，
也就是以下动画</b>

{% highlight css %}
rotateX(*deg) rotateY(*deg) rotateZ(*deg) translateZ(*px) ...
{% endhighlight %}

>上面的示例就是基于此实现的。







