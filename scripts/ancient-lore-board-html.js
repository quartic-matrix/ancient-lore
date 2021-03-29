
'use strict'

const boardHtml = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="150 70 208 132"
   version="1.1"
   id="svg8"
   inkscape:version="1.0 (4035a4fb49, 2020-05-01)"
   sodipodi:docname="Prototype map.svg">
  <defs
     id="defs2">
    <linearGradient
       id="linearGradient2760"
       spreadMethod="pad"
       gradientTransform="matrix(0.848818,0,0,-0.848818,39.829642,494.85489)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop2756"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2758"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient2800"
       spreadMethod="pad"
       gradientTransform="matrix(0.917825,0,0,-0.917825,1.272761,499.15031)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop2796"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2798"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient2840"
       spreadMethod="pad"
       gradientTransform="matrix(1.076717,0,0,-1.076717,-18.50331,516.82899)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop2836"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2838"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient2908"
       spreadMethod="pad"
       gradientTransform="matrix(0.981903,0,0,-0.981903,34.451512,498.45041)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop2904"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2906"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath2940"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path2938"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient2946"
       spreadMethod="pad"
       gradientTransform="matrix(0.664845,0,0,0.664845,104.76256,57.810774)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop2942"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2944"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient2952"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,74.562516,54.446341)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop2948"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2950"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient2958"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,59.072719,40.599349)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop2954"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2956"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient2964"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,100.55009,54.994547)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop2960"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop2962"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath3136"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path3134"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient3142"
       spreadMethod="pad"
       gradientTransform="matrix(-0.664845,0,0,0.664845,85.574165,52.454617)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3138"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3140"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3148"
       spreadMethod="pad"
       gradientTransform="matrix(-0.718895,0,0,0.718895,115.77421,49.090184)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3144"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3146"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3154"
       spreadMethod="pad"
       gradientTransform="matrix(-0.843349,0,0,0.843349,131.26401,35.243192)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop3150"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3152"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3160"
       spreadMethod="pad"
       gradientTransform="matrix(-0.769085,0,0,0.769085,89.786637,49.638391)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3156"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3158"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3334"
       spreadMethod="pad"
       gradientTransform="matrix(0.848818,0,0,-0.848818,202.20579,514.00342)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3330"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3332"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3374"
       spreadMethod="pad"
       gradientTransform="matrix(0.917825,0,0,-0.917825,163.64891,518.29885)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3370"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3372"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3414"
       spreadMethod="pad"
       gradientTransform="matrix(1.076718,0,0,-1.076718,143.87283,535.97752)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop3410"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3412"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3482"
       spreadMethod="pad"
       gradientTransform="matrix(0.981903,0,0,-0.981903,196.82766,517.59894)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3478"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3480"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath3514"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path3512"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient3520"
       spreadMethod="pad"
       gradientTransform="matrix(0.664844,0,0,0.664844,267.13871,53.662258)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3516"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3518"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3526"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,236.93867,50.297825)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3522"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3524"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3532"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,221.44887,36.450833)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop3528"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3530"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3538"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,262.92624,50.846031)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3534"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3536"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath3710"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path3708"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient3716"
       spreadMethod="pad"
       gradientTransform="matrix(-0.664844,0,0,0.664844,247.95032,48.30611)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3712"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3714"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3722"
       spreadMethod="pad"
       gradientTransform="matrix(-0.718895,0,0,0.718895,278.15036,44.941677)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3718"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3720"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3728"
       spreadMethod="pad"
       gradientTransform="matrix(-0.843349,0,0,0.843349,293.64016,31.094685)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop3724"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3726"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient3734"
       spreadMethod="pad"
       gradientTransform="matrix(-0.769085,0,0,0.769085,252.16279,45.489883)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3730"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3732"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath3906"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path3904"
         d="m 266.984,238.555 c 1.719,1.015 3.68,2.215 5.649,3.554 -0.563,-2.57 -1.766,-5.332 -3.133,-7.05 1.789,0.398 3.773,1.664 3.773,1.664 0,0 1.207,7.066 2.45,8.367 -1.766,-0.543 -9.118,1.285 -9.118,1.285 0,0 -2.351,-1.637 -3.367,-2.656 2.653,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.719,-3.199 -4.347,-2.918 -5.441,-3.59 -7.609,-7.235 -2.121,-3.562 -2.187,-5.277 -3.039,-6.035 0.5,-0.238 0.754,-0.566 1.016,-1.246 0.418,0.344 0.871,0.449 1.519,0.293 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.895 2.613,3.82 6.554,6.145 z" />
    </clipPath>
    <clipPath
       id="clipPath3914"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path3912"
         d="m 63.559118,160.17281 h 19.262774 v 18.35783 H 63.559118 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient3920"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="158.55438"
       x2="86.434967"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop3916"
         offset="0"
         style="stop-opacity:1;stop-color:#ffffff" />
      <stop
         id="stop3918"
         offset="1"
         style="stop-opacity:0;stop-color:#ffffff" />
    </linearGradient>
    <mask
       id="mask3922"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g3928">
        <g
           id="g3926"
           clip-path="url(#clipPath3914)">
          <path
             id="path3924"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.559118,160.17281 h 19.262774 v 18.35783 H 63.559118 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient3936"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="158.55438"
       x2="86.434967"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop3932"
         offset="0"
         style="stop-opacity:1;stop-color:#ffffff" />
      <stop
         id="stop3934"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <linearGradient
       id="linearGradient3966"
       spreadMethod="pad"
       gradientTransform="matrix(1.106812,0,0,-1.107881,349.08108,595.37983)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop3962"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop3964"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4006"
       spreadMethod="pad"
       gradientTransform="matrix(1.196794,0,0,-1.19795,298.80498,600.98624)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4002"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4004"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4046"
       spreadMethod="pad"
       gradientTransform="matrix(1.403982,0,0,-1.405337,273.01805,624.06054)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop4042"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4044"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4114"
       spreadMethod="pad"
       gradientTransform="matrix(1.280349,0,0,-1.281585,342.06829,600.07272)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4110"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4112"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath4154"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4152"
         d="m 483.957,210.672 c 2.602,0.086 5.594,0.23 8.684,0.535 -2.246,-2.594 -5.352,-5 -7.989,-6.113 2.293,-0.664 5.356,-0.461 5.356,-0.461 0,0 5.797,7.34 8.035,8.051 -2.363,0.484 -9.629,7.179 -9.629,7.179 0,0 -3.715,-0.402 -5.516,-0.933 3.411,-0.981 6.063,-2.34 9.493,-5.313 -3.102,0.012 -5.95,-0.019 -8.543,-0.086 -6.801,-0.617 -8.469,-0.703 -13.231,-3.519 -4.656,-2.754 -5.801,-4.676 -7.25,-5.016 0.422,-0.586 0.504,-1.117 0.383,-2.062 0.691,0.132 1.273,-0.032 1.922,-0.614 0.66,1.235 1.859,2.993 6.941,5.418 2.848,1.262 5.383,2.739 11.344,2.934 z" />
    </clipPath>
    <clipPath
       id="clipPath4162"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4160"
         d="m 60.617518,155.32392 h 22.189114 v 26.96 H 60.617518 Z" />
    </clipPath>
    <mask
       id="mask4170"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4176">
        <g
           id="g4174"
           clip-path="url(#clipPath4162)">
          <path
             id="path4172"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 60.617518,155.32392 h 22.189114 v 26.96 H 60.617518 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient4184"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="158.55438"
       x2="86.434967"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop4180"
         offset="0"
         style="stop-opacity:1;stop-color:#ffffff" />
      <stop
         id="stop4182"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath4216"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4214"
         d="m 428.777,199.469 c -2.976,2.836 -6.828,5.41 -9.886,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.832,-8.063 10.371,-8.746 -2.402,-0.692 -8.617,-8.77 -8.617,-8.77 0,0 -4.047,0.243 -6.082,0.746 3.406,1.321 5.918,3.032 8.895,6.629 -3.293,-0.191 -6.414,-0.187 -9.192,-0.265 -4.375,-0.137 -5.383,-0.364 -9.035,-0.965 -4.457,-0.735 -6.164,-0.707 -8.027,-1.844 0.316,0.695 -0.332,1.395 -1.133,1.938 0.801,0.523 1.34,1.332 1.203,1.945 0.988,-0.453 2.156,-0.227 6.906,0.824 3.711,0.82 4.758,0.895 9.946,1.293 2.566,0.07 6.777,-0.039 9.054,-0.152 z" />
    </clipPath>
    <clipPath
       id="clipPath4224"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4222"
         d="M 61.099431,156.77131 H 80.312219 V 181.8022 H 61.099431 Z" />
    </clipPath>
    <mask
       id="mask4232"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4238">
        <g
           id="g4236"
           clip-path="url(#clipPath4224)">
          <path
             id="path4234"
             style="fill:url(#linearGradient3920);stroke:none"
             d="M 61.099431,156.77131 H 80.312219 V 181.8022 H 61.099431 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient4246"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="158.55438"
       x2="86.434967"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop4242"
         offset="0"
         style="stop-opacity:1;stop-color:#000000" />
      <stop
         id="stop4244"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath4268"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4266"
         d="m 281.574,236.16 c 1.715,1.012 3.68,2.211 5.645,3.551 -0.559,-2.566 -1.766,-5.328 -3.129,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.203,7.071 2.45,8.367 -1.77,-0.543 -9.118,1.286 -9.118,1.286 0,0 -2.355,-1.633 -3.371,-2.657 2.656,0.598 4.942,0.657 8.34,-0.078 -2.09,-1.133 -3.992,-2.203 -5.715,-3.203 -4.351,-2.914 -5.441,-3.586 -7.613,-7.23 -2.121,-3.563 -2.184,-5.278 -3.035,-6.039 0.5,-0.239 0.754,-0.567 1.015,-1.243 0.418,0.34 0.872,0.446 1.52,0.293 -0.012,1.071 0.152,2.696 2.68,6.196 1.453,1.894 2.617,3.82 6.558,6.144 z" />
    </clipPath>
    <clipPath
       id="clipPath4276"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4274"
         d="m 64.087809,159.65837 h 18.387193 v 19.23201 H 64.087809 Z" />
    </clipPath>
    <mask
       id="mask4284"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4290">
        <g
           id="g4288"
           clip-path="url(#clipPath4276)">
          <path
             id="path4286"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 64.087809,159.65837 h 18.387193 v 19.23201 H 64.087809 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath4348"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4346"
         d="m 284.902,145.516 c -0.07,0.972 -0.339,2.07 -0.808,3.308 -0.578,1.547 -1.364,3.223 -2.117,4.785 -2.516,5.204 -2.426,4.989 -5.704,10.032 -0.003,0 -0.003,0.004 -0.007,0.004 -1.203,1.753 -2.493,3.699 -3.86,5.824 -0.168,0.258 -0.562,0.195 -0.64,-0.106 -0.766,-2.988 -0.793,-5.191 -0.344,-7.476 -1.035,1.043 -2.074,2.238 -2.219,2.41 0.051,0.172 0.524,1.793 0.973,3.805 0.238,1.058 0.453,2.175 0.57,3.152 0.074,0.617 0.094,1.137 0.063,1.609 0.464,-0.222 1.011,-0.429 1.695,-0.625 1.035,-0.297 2.254,-0.57 3.426,-0.804 2.254,-0.45 4.172,-0.731 4.316,-0.75 0.106,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.215 -4.996,2.234 -7.762,2.742 -0.32,0.059 -0.543,-0.312 -0.343,-0.57 1.617,-2.004 3.066,-3.867 4.363,-5.574 2.121,-2.735 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.109,-3.461 1.605,-4.778 0.25,-0.66 0.5,-1.218 0.793,-1.66 0.199,-0.301 0.441,-0.519 0.707,-0.68 -0.07,-0.144 -0.133,-0.281 -0.227,-0.445 -0.089,-0.164 -0.148,-0.387 -0.164,-0.629 -0.328,0.004 -0.656,0.02 -0.953,-0.074 -0.152,-0.047 -0.285,-0.121 -0.422,-0.191 z" />
    </clipPath>
    <clipPath
       id="clipPath4356"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4354"
         d="m 64.24642,153.8554 h 13.058904 v 24.00114 H 64.24642 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient4362"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="157.27287"
       x2="84.9888"
       y1="177.48279"
       x1="66.101974">
      <stop
         id="stop4358"
         offset="0"
         style="stop-opacity:1;stop-color:#ffffff" />
      <stop
         id="stop4360"
         offset="1"
         style="stop-opacity:0;stop-color:#ffffff" />
    </linearGradient>
    <mask
       id="mask4364"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4370">
        <g
           id="g4368"
           clip-path="url(#clipPath4356)">
          <path
             id="path4366"
             style="fill:url(#linearGradient4362);stroke:none"
             d="m 64.24642,153.8554 h 13.058904 v 24.00114 H 64.24642 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient4378"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="157.27287"
       x2="84.9888"
       y1="177.48279"
       x1="66.101974">
      <stop
         id="stop4374"
         offset="0"
         style="stop-opacity:1;stop-color:#ffffff" />
      <stop
         id="stop4376"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath4392"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4390"
         d="m 271.746,157.297 c -1.301,1.711 -2.754,3.574 -4.375,5.578 3.102,-0.57 6.434,-1.801 8.508,-3.191 -0.481,1.824 -2.004,3.847 -2.004,3.847 0,0 -8.531,1.231 -10.098,2.496 0.657,-1.8 -1.55,-9.297 -1.55,-9.297 0,0 1.972,-2.398 3.203,-3.437 -0.719,2.711 -0.789,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.864,-5.832 3.277,-5.043 3.168,-4.785 5.683,-9.992 1.508,-3.118 3.129,-6.672 2.965,-8.645 0.289,0.508 1.195,0.773 2.016,0.648 -0.172,0.68 0.312,0.887 0.5,1.551 -1.293,0.278 -1.981,3.543 -3.235,7.082 -1.336,3.782 -3.422,7.903 -5.574,10.684 z" />
    </clipPath>
    <clipPath
       id="clipPath4400"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4398"
         d="m 63.943929,153.40545 h 13.784398 v 25.7155 H 63.943929 Z" />
    </clipPath>
    <mask
       id="mask4408"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4414">
        <g
           id="g4412"
           clip-path="url(#clipPath4400)">
          <path
             id="path4410"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.943929,153.40545 h 13.784398 v 25.7155 H 63.943929 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient4422"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="158.55438"
       x2="86.434967"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop4418"
         offset="0"
         style="stop-opacity:1;stop-color:#000000" />
      <stop
         id="stop4420"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath4438"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4436"
         d="m 233.195,169.586 c 1.758,0.945 3.582,2.012 5.551,3.352 -0.562,-2.567 -1.766,-5.329 -3.133,-7.047 1.789,0.398 3.774,1.66 3.774,1.66 0,0 1.207,7.07 2.449,8.367 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.356,-1.633 -3.367,-2.656 2.652,0.598 4.937,0.656 8.336,-0.078 -2.086,-1.133 -3.993,-2.203 -5.715,-3.203 -1.66,-0.969 -3.836,-2.778 -4.61,-4.231 -1.953,-3.656 -2.187,-5.277 -3.039,-6.039 0.5,-0.238 0.754,-0.566 1.016,-1.242 0.418,0.34 0.871,0.445 1.519,0.293 -0.007,1.07 0.106,2.945 2.184,5.945 1.055,1.399 2.059,2.465 4.152,3.594 z" />
    </clipPath>
    <clipPath
       id="clipPath4446"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4444"
         d="M 63.410763,162.69662 H 80.046795 V 178.4319 H 63.410763 Z" />
    </clipPath>
    <mask
       id="mask4454"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4460">
        <g
           id="g4458"
           clip-path="url(#clipPath4446)">
          <path
             id="path4456"
             style="fill:url(#linearGradient3920);stroke:none"
             d="M 63.410763,162.69662 H 80.046795 V 178.4319 H 63.410763 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient4468"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="158.55438"
       x2="86.434967"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop4464"
         offset="0"
         style="stop-opacity:1;stop-color:#000000" />
      <stop
         id="stop4466"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath4484"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4482"
         d="m 107.066,171.426 c -1.609,2.512 -3.414,5.242 -5.418,8.183 3.844,-0.836 7.973,-2.64 10.543,-4.679 -0.593,2.672 -2.484,5.64 -2.484,5.64 0,0 -10.57,1.805 -12.516,3.664 0.813,-2.644 -1.921,-13.636 -1.921,-13.636 0,0 2.445,-3.52 3.972,-5.039 -0.89,3.972 -0.98,7.386 0.121,12.472 1.696,-3.125 3.293,-5.972 4.785,-8.551 4.063,-7.398 3.93,-7.019 7.043,-14.652 1.868,-4.574 3.879,-9.789 3.676,-12.683 0.36,0.75 1.485,1.136 2.496,0.957 -0.211,0.996 0.391,1.3 0.621,2.269 -1.605,0.41 -2.457,5.195 -4.007,10.391 -1.657,5.543 -4.239,11.586 -6.911,15.664 z" />
    </clipPath>
    <clipPath
       id="clipPath4492"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4490"
         d="m 63.949695,153.60355 h 13.46464 v 25.13282 h -13.46464 z" />
    </clipPath>
    <mask
       id="mask4500"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4506">
        <g
           id="g4504"
           clip-path="url(#clipPath4492)">
          <path
             id="path4502"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.949695,153.60355 h 13.46464 v 25.13282 h -13.46464 z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath4524"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4522"
         d="m 80.57,173.023 c 1.614,2.508 3.414,5.239 5.422,8.184 -3.844,-0.84 -7.972,-2.644 -10.543,-4.684 0.594,2.672 2.485,5.641 2.485,5.641 0,0 10.57,1.805 12.515,3.664 -0.812,-2.64 1.922,-13.633 1.922,-13.633 0,0 -2.449,-3.523 -3.973,-5.043 0.891,3.973 0.981,7.387 -0.121,12.473 -1.695,-3.125 -3.293,-5.973 -4.789,-8.551 -4.062,-7.398 -5.468,-10.898 -13.347,-13.316 -6.09,-1.172 -5.36,-1.332 -6.496,-2.606 -0.36,0.746 -0.848,1.125 -1.864,1.52 0.512,0.621 0.668,1.301 0.438,2.269 1.605,-0.015 1.492,-0.98 7.179,2.075 5.387,2.109 8.504,7.925 11.172,12.007 z" />
    </clipPath>
    <clipPath
       id="clipPath4532"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4530"
         d="m 63.738509,160.26977 h 18.733413 v 18.11902 H 63.738509 Z" />
    </clipPath>
    <mask
       id="mask4540"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g4546">
        <g
           id="g4544"
           clip-path="url(#clipPath4532)">
          <path
             id="path4542"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.738509,160.26977 h 18.733413 v 18.11902 H 63.738509 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient4590"
       spreadMethod="pad"
       gradientTransform="matrix(0.848818,0,0,-0.848818,727.40226,485.73968)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4586"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4588"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4630"
       spreadMethod="pad"
       gradientTransform="matrix(0.917825,0,0,-0.917825,688.84538,490.03511)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4626"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4628"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4670"
       spreadMethod="pad"
       gradientTransform="matrix(1.076718,0,0,-1.076718,669.06931,507.71378)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop4666"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4668"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4738"
       spreadMethod="pad"
       gradientTransform="matrix(0.981903,0,0,-0.981903,722.02413,489.3352)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4734"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4736"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath4770"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4768"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient4776"
       spreadMethod="pad"
       gradientTransform="matrix(0.664844,0,0,0.664844,738.36793,57.933105)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4772"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4774"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4782"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,708.16788,54.568672)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4778"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4780"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4788"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,692.67809,40.72168)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop4784"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4786"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4794"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,734.15545,55.116879)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4790"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4792"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath4966"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path4964"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient4972"
       spreadMethod="pad"
       gradientTransform="matrix(0.664844,0,0,0.664844,662.62041,30.539361)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4968"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4970"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4978"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,632.42037,27.174929)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4974"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4976"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4984"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,616.93057,13.327937)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop4980"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4982"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient4990"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,658.40794,27.723135)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop4986"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop4988"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath5162"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5160"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient5168"
       spreadMethod="pad"
       gradientTransform="matrix(-0.664844,0,0,0.664844,750.2759,101.2148)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop5164"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop5166"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient5174"
       spreadMethod="pad"
       gradientTransform="matrix(-0.718895,0,0,0.718895,780.47594,97.85037)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop5170"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop5172"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient5180"
       spreadMethod="pad"
       gradientTransform="matrix(-0.843349,0,0,0.843349,795.96574,84.003378)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop5176"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop5178"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient5186"
       spreadMethod="pad"
       gradientTransform="matrix(-0.769085,0,0,0.769085,754.48837,98.398576)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop5182"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop5184"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath5382"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5380"
         d="m 753.883,178.957 c 1.152,1.645 11.535,14.063 12.859,16.078 0.344,-2.949 0.172,-6.285 -0.484,-8.539 1.472,0.942 2.84,2.879 2.84,2.879 0,0 -1.254,8.008 -0.567,9.773 -1.406,-1.093 -8.605,-1.203 -8.605,-1.203 0,0 -1.574,-2.445 -2.149,-3.84 2.184,1.403 4.215,2.118 7.512,2.286 -1.5,-1.825 -12.004,-14.114 -13.219,-15.692 -3.547,-4.355 -12.492,-14.773 -16.386,-18.488 -2.332,-2.223 -14.161,-15.266 -15.942,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.863,-0.031 1.496,-0.015 -0.105,1.238 10.848,11.394 14.496,15.472 4.227,4.727 15.164,15.875 17.024,18.586 z" />
    </clipPath>
    <clipPath
       id="clipPath5390"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5388"
         d="M 53.037781,119.40036 H 106.16916 V 179.8218 H 53.037781 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient5396"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="117.66685"
       x2="97.196396"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop5392"
         offset="0"
         style="stop-opacity:1;stop-color:#ffffff" />
      <stop
         id="stop5394"
         offset="1"
         style="stop-opacity:0;stop-color:#ffffff" />
    </linearGradient>
    <mask
       id="mask5398"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g5404">
        <g
           id="g5402"
           clip-path="url(#clipPath5390)">
          <path
             id="path5400"
             style="fill:url(#linearGradient5396);stroke:none"
             d="M 53.037781,119.40036 H 106.16916 V 179.8218 H 53.037781 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient5412"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="117.66685"
       x2="97.196396"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop5408"
         offset="0"
         style="stop-opacity:1;stop-color:#000000" />
      <stop
         id="stop5410"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath5422"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5420"
         d="m 748.047,212.91 c 1.824,-0.144 9.766,-0.508 11.945,-0.75 -1.883,2.125 -4.336,4.098 -6.301,5.008 1.508,0.551 3.657,0.391 3.657,0.391 0,0 4.933,-6.024 6.574,-6.602 -1.578,-0.402 -5.785,-5.922 -5.785,-5.922 0,0 -2.629,0.32 -3.942,0.754 2.243,0.813 3.91,1.938 5.922,4.387 -2.148,-0.012 -10.066,0.179 -11.875,0.226 -5.105,-0.004 -9.488,0.571 -14.34,-0.113 -2.91,-0.406 -12.117,-0.769 -13.425,-1.898 0.218,0.484 -0.028,1.324 -0.504,1.898 0.558,0.211 0.472,0.695 0.847,1.176 0.813,-0.867 7.481,0.64 12.453,0.898 5.758,0.301 11.793,0.817 14.774,0.547 z" />
    </clipPath>
    <clipPath
       id="clipPath5430"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5428"
         d="M 61.351658,137.17035 H 90.724996 V 182.0087 H 61.351658 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient5436"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="128.98515"
       x2="90.583817"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop5432"
         offset="0"
         style="stop-opacity:1;stop-color:#ffffff" />
      <stop
         id="stop5434"
         offset="1"
         style="stop-opacity:0;stop-color:#ffffff" />
    </linearGradient>
    <mask
       id="mask5438"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g5444">
        <g
           id="g5442"
           clip-path="url(#clipPath5430)">
          <path
             id="path5440"
             style="fill:url(#linearGradient5436);stroke:none"
             d="M 61.351658,137.17035 H 90.724996 V 182.0087 H 61.351658 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient5452"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="128.98515"
       x2="90.583817"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop5448"
         offset="0"
         style="stop-opacity:1;stop-color:#000000" />
      <stop
         id="stop5450"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath5462"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5460"
         d="m 781.781,180.547 c 0.012,1.992 0.106,4.105 0.371,6.469 -2.007,-1.696 -3.886,-4.051 -4.769,-6.059 -0.485,1.766 -0.293,4.113 -0.293,4.113 0,0 5.687,4.364 6.254,6.075 0.347,-1.817 5.394,-7.461 5.394,-7.461 0,0 -0.347,-2.848 -0.773,-4.223 -0.715,2.625 -1.727,4.676 -3.969,7.336 -0.023,-2.375 -0.078,-4.559 -0.156,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.051 -2.324,-3.433 -3.648,-4.398 -3.922,-5.504 -0.445,0.329 -0.851,0.399 -1.574,0.317 0.109,0.527 -0.012,0.976 -0.449,1.476 0.949,0.496 2.554,1.469 4.238,4.711 0.742,1.582 1.219,2.969 1.238,5.352 z" />
    </clipPath>
    <clipPath
       id="clipPath5470"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5468"
         d="m 60.503354,158.09075 h 19.879533 v 23.85923 H 60.503354 Z" />
    </clipPath>
    <mask
       id="mask5478"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g5484">
        <g
           id="g5482"
           clip-path="url(#clipPath5470)">
          <path
             id="path5480"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 60.503354,158.09075 h 19.879533 v 23.85923 H 60.503354 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient5492"
       spreadMethod="pad"
       gradientUnits="userSpaceOnUse"
       y2="158.55438"
       x2="86.434967"
       y1="177.82452"
       x1="65.668121">
      <stop
         id="stop5488"
         offset="0"
         style="stop-opacity:1;stop-color:#000000" />
      <stop
         id="stop5490"
         offset="1"
         style="stop-opacity:1;stop-color:#000000" />
    </linearGradient>
    <clipPath
       id="clipPath5508"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5506"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath5542"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5540"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient5586"
       spreadMethod="pad"
       gradientTransform="matrix(2.834646,0,0,-2.834646,33.828364,600.97278)"
       gradientUnits="userSpaceOnUse"
       y2="47.416336"
       x2="207.95593"
       y1="48.812057"
       x1="181.92303">
      <stop
         id="stop5580"
         offset="0"
         style="stop-opacity:1;stop-color:#a7a7a7" />
      <stop
         id="stop5582"
         offset="0.432314"
         style="stop-opacity:1;stop-color:#e4e4e4" />
      <stop
         id="stop5584"
         offset="1"
         style="stop-opacity:1;stop-color:#717171" />
    </linearGradient>
    <clipPath
       id="clipPath5684"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5682"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient5692"
       spreadMethod="pad"
       gradientTransform="matrix(2.834646,0,0,2.834646,33.828364,-5.697203)"
       gradientUnits="userSpaceOnUse"
       y2="47.416336"
       x2="207.95593"
       y1="48.812057"
       x1="181.92303">
      <stop
         id="stop5686"
         offset="0"
         style="stop-opacity:1;stop-color:#a7a7a7" />
      <stop
         id="stop5688"
         offset="0.432314"
         style="stop-opacity:1;stop-color:#e4e4e4" />
      <stop
         id="stop5690"
         offset="1"
         style="stop-opacity:1;stop-color:#717171" />
    </linearGradient>
    <clipPath
       id="clipPath5722"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5720"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath5738"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5736"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath5818"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5816"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath5862"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path5860"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient5928"
       spreadMethod="pad"
       gradientTransform="matrix(0.848818,0,0,-0.848818,39.823412,259.86319)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop5924"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop5926"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient5968"
       spreadMethod="pad"
       gradientTransform="matrix(0.917825,0,0,-0.917825,1.266531,264.15862)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop5964"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop5966"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6008"
       spreadMethod="pad"
       gradientTransform="matrix(1.076717,0,0,-1.076717,-18.509539,281.83729)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop6004"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6006"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6076"
       spreadMethod="pad"
       gradientTransform="matrix(0.981903,0,0,-0.981903,34.445283,263.45871)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6072"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6074"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath6108"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path6106"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient6114"
       spreadMethod="pad"
       gradientTransform="matrix(0.664845,0,0,0.664845,104.75633,292.80247)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6110"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6112"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6120"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,74.556287,289.43804)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6116"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6118"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6126"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,59.06649,275.59104)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop6122"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6124"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6132"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,100.54386,289.98624)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6128"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6130"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath6304"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path6302"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient6310"
       spreadMethod="pad"
       gradientTransform="matrix(-0.664845,0,0,0.664845,85.567936,287.44631)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6306"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6308"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6316"
       spreadMethod="pad"
       gradientTransform="matrix(-0.718895,0,0,0.718895,115.76798,284.08188)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6312"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6314"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6322"
       spreadMethod="pad"
       gradientTransform="matrix(-0.843349,0,0,0.843349,131.25778,270.23489)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop6318"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6320"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6328"
       spreadMethod="pad"
       gradientTransform="matrix(-0.769085,0,0,0.769085,89.780407,284.63009)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6324"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6326"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6502"
       spreadMethod="pad"
       gradientTransform="matrix(0.848818,0,0,-0.848818,202.19956,279.01173)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6498"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6500"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6542"
       spreadMethod="pad"
       gradientTransform="matrix(0.917825,0,0,-0.917825,163.64268,283.30715)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6538"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6540"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6582"
       spreadMethod="pad"
       gradientTransform="matrix(1.076718,0,0,-1.076718,143.86661,300.98583)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop6578"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6580"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6650"
       spreadMethod="pad"
       gradientTransform="matrix(0.981903,0,0,-0.981903,196.82143,282.60725)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6646"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6648"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath6682"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path6680"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient6688"
       spreadMethod="pad"
       gradientTransform="matrix(0.664844,0,0,0.664844,267.13248,288.65395)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6684"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6686"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6694"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,236.93244,285.28952)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6690"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6692"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6700"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,221.44264,271.44253)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop6696"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6698"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6706"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,262.92001,285.83773)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6702"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6704"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath6878"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path6876"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient6884"
       spreadMethod="pad"
       gradientTransform="matrix(-0.664844,0,0,0.664844,247.94409,283.2978)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6880"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6882"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6890"
       spreadMethod="pad"
       gradientTransform="matrix(-0.718895,0,0,0.718895,278.14413,279.93337)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6886"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6888"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6896"
       spreadMethod="pad"
       gradientTransform="matrix(-0.843349,0,0,0.843349,293.63393,266.08638)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop6892"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6894"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient6902"
       spreadMethod="pad"
       gradientTransform="matrix(-0.769085,0,0,0.769085,252.15656,280.48158)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop6898"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop6900"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath7074"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7072"
         d="m 266.977,473.547 c 1.718,1.016 3.679,2.211 5.648,3.555 -0.559,-2.571 -1.766,-5.332 -3.129,-7.051 1.785,0.398 3.774,1.66 3.774,1.66 0,0 1.203,7.07 2.445,8.371 -1.766,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.637 -3.372,-2.656 2.657,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.718,-3.199 -4.348,-2.918 -5.438,-3.59 -7.61,-7.235 -2.121,-3.562 -2.183,-5.277 -3.035,-6.035 0.5,-0.242 0.75,-0.566 1.016,-1.246 0.414,0.344 0.867,0.445 1.515,0.293 -0.008,1.07 0.157,2.695 2.684,6.195 1.453,1.895 2.617,3.821 6.555,6.145 z" />
    </clipPath>
    <clipPath
       id="clipPath7082"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7080"
         d="m 63.551847,160.17826 h 19.262774 v 18.35783 H 63.551847 Z" />
    </clipPath>
    <mask
       id="mask7090"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7096">
        <g
           id="g7094"
           clip-path="url(#clipPath7082)">
          <path
             id="path7092"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.551847,160.17826 h 19.262774 v 18.35783 H 63.551847 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient7134"
       spreadMethod="pad"
       gradientTransform="matrix(1.106812,0,0,-1.107881,349.07485,360.38813)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7130"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7132"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7174"
       spreadMethod="pad"
       gradientTransform="matrix(1.196794,0,0,-1.19795,298.79875,365.99455)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7170"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7172"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7214"
       spreadMethod="pad"
       gradientTransform="matrix(1.403982,0,0,-1.405337,273.01182,389.06885)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop7210"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7212"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7282"
       spreadMethod="pad"
       gradientTransform="matrix(1.280349,0,0,-1.281585,342.06206,365.08103)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7278"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7280"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath7322"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7320"
         d="m 483.953,445.664 c 2.598,0.086 5.594,0.231 8.684,0.535 -2.25,-2.594 -5.356,-5 -7.992,-6.117 2.296,-0.66 5.355,-0.457 5.355,-0.457 0,0 5.801,7.34 8.035,8.051 -2.359,0.484 -9.625,7.179 -9.625,7.179 0,0 -3.719,-0.402 -5.519,-0.933 3.41,-0.981 6.062,-2.34 9.492,-5.313 -3.098,0.012 -5.945,-0.023 -8.543,-0.086 -6.801,-0.617 -8.469,-0.703 -13.231,-3.519 -4.652,-2.754 -5.8,-4.676 -7.25,-5.016 0.422,-0.586 0.508,-1.117 0.383,-2.062 0.692,0.133 1.278,-0.031 1.922,-0.613 0.66,1.234 1.863,2.992 6.941,5.417 2.848,1.262 5.383,2.739 11.348,2.934 z" />
    </clipPath>
    <clipPath
       id="clipPath7330"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7328"
         d="m 60.610623,155.32491 h 22.189115 v 26.96001 H 60.610623 Z" />
    </clipPath>
    <mask
       id="mask7338"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7344">
        <g
           id="g7342"
           clip-path="url(#clipPath7330)">
          <path
             id="path7340"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 60.610623,155.32491 h 22.189115 v 26.96001 H 60.610623 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath7384"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7382"
         d="m 428.773,434.461 c -2.98,2.836 -6.832,5.41 -9.89,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.833,-8.062 10.375,-8.75 -2.406,-0.687 -8.621,-8.765 -8.621,-8.765 0,0 -4.046,0.242 -6.082,0.746 3.407,1.32 5.922,3.031 8.899,6.629 -3.297,-0.192 -6.414,-0.188 -9.192,-0.266 -4.375,-0.137 -5.386,-0.363 -9.035,-0.965 -4.461,-0.734 -6.164,-0.711 -8.031,-1.844 0.316,0.696 -0.328,1.395 -1.133,1.938 0.805,0.523 1.34,1.332 1.207,1.945 0.985,-0.457 2.156,-0.226 6.906,0.824 3.711,0.821 4.754,0.895 9.946,1.293 2.562,0.071 6.773,-0.039 9.054,-0.152 z" />
    </clipPath>
    <clipPath
       id="clipPath7392"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7390"
         d="m 61.101129,156.77782 h 19.212788 v 25.0309 H 61.101129 Z" />
    </clipPath>
    <mask
       id="mask7400"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7406">
        <g
           id="g7404"
           clip-path="url(#clipPath7392)">
          <path
             id="path7402"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 61.101129,156.77782 h 19.212788 v 25.0309 H 61.101129 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath7436"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7434"
         d="m 281.566,471.152 c 1.719,1.012 3.68,2.211 5.649,3.551 -0.563,-2.57 -1.766,-5.328 -3.133,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.208,7.067 2.45,8.368 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.352,-1.637 -3.368,-2.656 2.653,0.597 4.938,0.656 8.34,-0.083 -2.09,-1.128 -3.996,-2.199 -5.719,-3.199 -4.347,-2.914 -5.441,-3.586 -7.609,-7.23 -2.121,-3.563 -2.187,-5.278 -3.039,-6.039 0.5,-0.239 0.754,-0.567 1.016,-1.246 0.418,0.343 0.871,0.449 1.519,0.297 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.894 2.613,3.82 6.554,6.144 z" />
    </clipPath>
    <clipPath
       id="clipPath7444"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7442"
         d="m 64.080537,159.66382 h 18.387194 v 19.23201 H 64.080537 Z" />
    </clipPath>
    <mask
       id="mask7452"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7458">
        <g
           id="g7456"
           clip-path="url(#clipPath7444)">
          <path
             id="path7454"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 64.080537,159.66382 h 18.387194 v 19.23201 H 64.080537 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath7516"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7514"
         d="m 284.898,380.504 c -0.07,0.976 -0.343,2.074 -0.808,3.312 -0.582,1.543 -1.367,3.219 -2.121,4.786 -2.516,5.203 -2.426,4.988 -5.703,10.031 0,0 -0.004,0.004 -0.004,0.004 -1.203,1.754 -2.496,3.695 -3.86,5.824 -0.168,0.258 -0.566,0.195 -0.644,-0.106 -0.766,-2.988 -0.793,-5.191 -0.34,-7.48 -1.035,1.047 -2.078,2.242 -2.223,2.414 0.051,0.172 0.528,1.793 0.977,3.805 0.234,1.058 0.453,2.176 0.57,3.152 0.074,0.617 0.09,1.137 0.059,1.609 0.469,-0.222 1.015,-0.429 1.695,-0.625 1.035,-0.3 2.258,-0.57 3.426,-0.804 2.258,-0.449 4.176,-0.731 4.32,-0.75 0.102,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.211 -4.996,2.231 -7.761,2.742 -0.325,0.059 -0.547,-0.312 -0.344,-0.57 1.613,-2.004 3.066,-3.867 4.363,-5.574 2.117,-2.738 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.105,-3.461 1.605,-4.777 0.25,-0.661 0.5,-1.223 0.789,-1.661 0.199,-0.3 0.442,-0.519 0.711,-0.683 -0.07,-0.141 -0.137,-0.278 -0.226,-0.442 -0.094,-0.164 -0.153,-0.386 -0.168,-0.632 -0.325,0.003 -0.657,0.023 -0.954,-0.071 -0.148,-0.047 -0.285,-0.121 -0.418,-0.195 z" />
    </clipPath>
    <clipPath
       id="clipPath7524"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7522"
         d="m 64.250939,153.86252 h 13.058904 v 24.00114 H 64.250939 Z" />
    </clipPath>
    <mask
       id="mask7532"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7538">
        <g
           id="g7536"
           clip-path="url(#clipPath7524)">
          <path
             id="path7534"
             style="fill:url(#linearGradient4362);stroke:none"
             d="m 64.250939,153.86252 h 13.058904 v 24.00114 H 64.250939 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath7560"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7558"
         d="m 271.738,392.289 c -1.297,1.711 -2.754,3.574 -4.371,5.578 3.102,-0.57 6.43,-1.801 8.508,-3.191 -0.48,1.824 -2.008,3.847 -2.008,3.847 0,0 -8.527,1.227 -10.097,2.497 0.656,-1.801 -1.551,-9.297 -1.551,-9.297 0,0 1.972,-2.399 3.207,-3.438 -0.719,2.707 -0.793,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.86,-5.832 3.281,-5.047 3.172,-4.785 5.683,-9.992 1.508,-3.117 3.133,-6.672 2.969,-8.649 0.289,0.512 1.195,0.778 2.012,0.653 -0.172,0.679 0.316,0.886 0.5,1.55 -1.293,0.278 -1.981,3.54 -3.234,7.082 -1.336,3.782 -3.418,7.903 -5.575,10.684 z" />
    </clipPath>
    <clipPath
       id="clipPath7568"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7566"
         d="m 63.948448,153.41257 h 13.784398 v 25.7155 H 63.948448 Z" />
    </clipPath>
    <mask
       id="mask7576"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7582">
        <g
           id="g7580"
           clip-path="url(#clipPath7568)">
          <path
             id="path7578"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.948448,153.41257 h 13.784398 v 25.7155 H 63.948448 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath7606"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7604"
         d="m 233.191,404.578 c 1.754,0.945 3.579,2.012 5.547,3.352 -0.558,-2.571 -1.765,-5.328 -3.129,-7.047 1.786,0.398 3.77,1.66 3.77,1.66 0,0 1.207,7.066 2.449,8.367 -1.765,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.636 -3.371,-2.656 2.656,0.598 4.937,0.656 8.34,-0.078 -2.09,-1.133 -3.996,-2.203 -5.719,-3.203 -1.656,-0.973 -3.836,-2.778 -4.61,-4.231 -1.953,-3.66 -2.183,-5.277 -3.035,-6.039 0.5,-0.238 0.75,-0.566 1.016,-1.242 0.414,0.34 0.867,0.445 1.516,0.293 -0.008,1.07 0.105,2.945 2.183,5.945 1.055,1.395 2.059,2.465 4.156,3.594 z" />
    </clipPath>
    <clipPath
       id="clipPath7614"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7612"
         d="m 63.403492,162.70206 h 16.636032 v 15.73528 H 63.403492 Z" />
    </clipPath>
    <mask
       id="mask7622"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7628">
        <g
           id="g7626"
           clip-path="url(#clipPath7614)">
          <path
             id="path7624"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.403492,162.70206 h 16.636032 v 15.73528 H 63.403492 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath7652"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7650"
         d="m 107.063,406.418 c -1.614,2.512 -3.415,5.242 -5.422,8.184 3.843,-0.836 7.972,-2.641 10.543,-4.68 -0.594,2.672 -2.485,5.641 -2.485,5.641 0,0 -10.57,1.8 -12.515,3.664 0.812,-2.645 -1.922,-13.637 -1.922,-13.637 0,0 2.449,-3.52 3.972,-5.039 -0.89,3.969 -0.98,7.387 0.121,12.472 1.696,-3.125 3.293,-5.972 4.79,-8.55 4.062,-7.399 3.925,-7.02 7.039,-14.653 1.867,-4.578 3.882,-9.789 3.679,-12.683 0.356,0.75 1.481,1.136 2.496,0.957 -0.214,0.996 0.387,1.301 0.618,2.269 -1.602,0.41 -2.454,5.196 -4.008,10.391 -1.656,5.543 -4.239,11.586 -6.906,15.664 z" />
    </clipPath>
    <clipPath
       id="clipPath7660"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7658"
         d="m 63.953341,153.6084 h 13.464641 v 25.13282 H 63.953341 Z" />
    </clipPath>
    <mask
       id="mask7668"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7674">
        <g
           id="g7672"
           clip-path="url(#clipPath7660)">
          <path
             id="path7670"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.953341,153.6084 h 13.464641 v 25.13282 H 63.953341 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath7692"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7690"
         d="m 80.566,408.016 c 1.61,2.507 3.414,5.238 5.418,8.179 -3.843,-0.836 -7.972,-2.64 -10.543,-4.679 0.594,2.672 2.485,5.64 2.485,5.64 0,0 10.57,1.805 12.515,3.664 -0.812,-2.644 1.922,-13.632 1.922,-13.632 0,0 -2.445,-3.524 -3.972,-5.043 0.89,3.972 0.98,7.386 -0.121,12.472 -1.696,-3.125 -3.293,-5.972 -4.786,-8.551 -4.062,-7.398 -5.468,-10.898 -13.351,-13.32 -6.09,-1.168 -5.36,-1.328 -6.496,-2.601 -0.356,0.746 -0.848,1.125 -1.864,1.519 0.512,0.621 0.672,1.301 0.442,2.27 1.601,-0.016 1.488,-0.981 7.176,2.074 5.386,2.109 8.504,7.926 11.175,12.008 z" />
    </clipPath>
    <clipPath
       id="clipPath7700"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7698"
         d="m 63.734862,160.27463 h 18.733413 v 18.11901 H 63.734862 Z" />
    </clipPath>
    <mask
       id="mask7708"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g7714">
        <g
           id="g7712"
           clip-path="url(#clipPath7700)">
          <path
             id="path7710"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 63.734862,160.27463 h 18.733413 v 18.11901 H 63.734862 Z" />
        </g>
      </g>
    </mask>
    <linearGradient
       id="linearGradient7758"
       spreadMethod="pad"
       gradientTransform="matrix(0.848818,0,0,-0.848818,727.39604,250.74798)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7754"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7756"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7798"
       spreadMethod="pad"
       gradientTransform="matrix(0.917825,0,0,-0.917825,688.83915,255.04341)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7794"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7796"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7838"
       spreadMethod="pad"
       gradientTransform="matrix(1.076718,0,0,-1.076718,669.06308,272.72209)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop7834"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7836"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7906"
       spreadMethod="pad"
       gradientTransform="matrix(0.981903,0,0,-0.981903,722.01791,254.34351)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7902"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7904"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath7938"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path7936"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient7944"
       spreadMethod="pad"
       gradientTransform="matrix(0.664844,0,0,0.664844,738.3617,292.9248)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7940"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7942"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7950"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,708.16165,289.56037)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7946"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7948"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7956"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,692.67186,275.71338)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop7952"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7954"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient7962"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,734.14923,290.10857)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop7958"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop7960"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath8134"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8132"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient8140"
       spreadMethod="pad"
       gradientTransform="matrix(0.664844,0,0,0.664844,662.61418,265.53106)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop8136"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8138"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient8146"
       spreadMethod="pad"
       gradientTransform="matrix(0.718895,0,0,0.718895,632.41414,262.16662)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop8142"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8144"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient8152"
       spreadMethod="pad"
       gradientTransform="matrix(0.843349,0,0,0.843349,616.92434,248.31963)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop8148"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8150"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient8158"
       spreadMethod="pad"
       gradientTransform="matrix(0.769085,0,0,0.769085,658.40171,262.71483)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop8154"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8156"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath8330"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8328"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient8336"
       spreadMethod="pad"
       gradientTransform="matrix(-0.664844,0,0,0.664844,750.26967,336.2065)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop8332"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8334"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient8342"
       spreadMethod="pad"
       gradientTransform="matrix(-0.718895,0,0,0.718895,780.46971,332.84207)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop8338"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8340"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient8348"
       spreadMethod="pad"
       gradientTransform="matrix(-0.843349,0,0,0.843349,795.95951,318.99507)"
       gradientUnits="userSpaceOnUse"
       y2="121.11913"
       x2="114.70379"
       y1="121.11913"
       x1="89.227539">
      <stop
         id="stop8344"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8346"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <linearGradient
       id="linearGradient8354"
       spreadMethod="pad"
       gradientTransform="matrix(-0.769085,0,0,0.769085,754.48214,333.39027)"
       gradientUnits="userSpaceOnUse"
       y2="133.62428"
       x2="90.700348"
       y1="133.62428"
       x1="63.744125">
      <stop
         id="stop8350"
         offset="0"
         style="stop-opacity:1;stop-color:#e5e5e5" />
      <stop
         id="stop8352"
         offset="1"
         style="stop-opacity:1;stop-color:#7a7a7a" />
    </linearGradient>
    <clipPath
       id="clipPath8550"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8548"
         d="m 753.875,413.945 c 1.152,1.649 11.535,14.067 12.859,16.082 0.348,-2.949 0.176,-6.285 -0.484,-8.539 1.477,0.942 2.84,2.875 2.84,2.875 0,0 -1.25,8.012 -0.563,9.778 -1.406,-1.094 -8.609,-1.203 -8.609,-1.203 0,0 -1.574,-2.446 -2.148,-3.84 2.187,1.402 4.218,2.117 7.511,2.285 -1.5,-1.824 -12,-14.117 -13.218,-15.692 -3.543,-4.355 -12.489,-14.773 -16.383,-18.488 -2.336,-2.226 -14.164,-15.265 -15.946,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.868,-0.035 1.5,-0.015 -0.109,1.238 10.844,11.394 14.496,15.472 4.223,4.727 15.161,15.875 17.02,18.586 z" />
    </clipPath>
    <clipPath
       id="clipPath8558"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8556"
         d="M 53.033123,119.40814 H 106.1645 v 60.42143 H 53.033123 Z" />
    </clipPath>
    <mask
       id="mask8566"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g8572">
        <g
           id="g8570"
           clip-path="url(#clipPath8558)">
          <path
             id="path8568"
             style="fill:url(#linearGradient5396);stroke:none"
             d="M 53.033123,119.40814 H 106.1645 v 60.42143 H 53.033123 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath8590"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8588"
         d="m 748.043,447.902 c 1.82,-0.144 9.762,-0.507 11.941,-0.75 -1.879,2.125 -4.332,4.098 -6.3,5.008 1.507,0.551 3.656,0.391 3.656,0.391 0,0 4.937,-6.024 6.574,-6.606 -1.578,-0.402 -5.785,-5.918 -5.785,-5.918 0,0 -2.625,0.321 -3.941,0.754 2.242,0.813 3.914,1.938 5.921,4.387 -2.148,-0.012 -10.066,0.18 -11.875,0.227 -5.105,-0.004 -9.484,0.566 -14.339,-0.114 -2.911,-0.406 -12.118,-0.769 -13.426,-1.898 0.222,0.48 -0.024,1.324 -0.504,1.898 0.558,0.211 0.473,0.696 0.848,1.176 0.812,-0.867 7.484,0.641 12.457,0.898 5.757,0.301 11.793,0.817 14.773,0.547 z" />
    </clipPath>
    <clipPath
       id="clipPath8598"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8596"
         d="m 61.354114,137.17993 h 29.373338 v 44.83835 H 61.354114 Z" />
    </clipPath>
    <mask
       id="mask8606"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g8612">
        <g
           id="g8610"
           clip-path="url(#clipPath8598)">
          <path
             id="path8608"
             style="fill:url(#linearGradient5436);stroke:none"
             d="m 61.354114,137.17993 h 29.373338 v 44.83835 H 61.354114 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath8630"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8628"
         d="m 781.773,415.539 c 0.016,1.992 0.106,4.106 0.375,6.469 -2.011,-1.695 -3.89,-4.051 -4.773,-6.059 -0.48,1.766 -0.293,4.114 -0.293,4.114 0,0 5.688,4.363 6.258,6.07 0.344,-1.817 5.39,-7.461 5.39,-7.461 0,0 -0.343,-2.844 -0.773,-4.219 -0.711,2.625 -1.727,4.672 -3.965,7.336 -0.027,-2.375 -0.082,-4.559 -0.16,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.05 -2.32,-3.434 -3.644,-4.399 -3.918,-5.508 -0.445,0.332 -0.855,0.402 -1.578,0.32 0.109,0.527 -0.012,0.977 -0.449,1.477 0.953,0.492 2.555,1.468 4.238,4.707 0.742,1.586 1.219,2.972 1.238,5.355 z" />
    </clipPath>
    <clipPath
       id="clipPath8638"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8636"
         d="m 60.495135,158.09463 h 19.879533 v 23.85923 H 60.495135 Z" />
    </clipPath>
    <mask
       id="mask8646"
       height="1"
       width="1"
       y="0"
       x="0"
       maskUnits="userSpaceOnUse">
      <g
         id="g8652">
        <g
           id="g8650"
           clip-path="url(#clipPath8638)">
          <path
             id="path8648"
             style="fill:url(#linearGradient3920);stroke:none"
             d="m 60.495135,158.09463 h 19.879533 v 23.85923 H 60.495135 Z" />
        </g>
      </g>
    </mask>
    <clipPath
       id="clipPath8676"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8674"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath8710"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8708"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient8754"
       spreadMethod="pad"
       gradientTransform="matrix(2.834646,0,0,-2.834646,33.822135,365.98108)"
       gradientUnits="userSpaceOnUse"
       y2="47.416336"
       x2="207.95593"
       y1="48.812057"
       x1="181.92303">
      <stop
         id="stop8748"
         offset="0"
         style="stop-opacity:1;stop-color:#a7a7a7" />
      <stop
         id="stop8750"
         offset="0.432314"
         style="stop-opacity:1;stop-color:#e4e4e4" />
      <stop
         id="stop8752"
         offset="1"
         style="stop-opacity:1;stop-color:#717171" />
    </linearGradient>
    <clipPath
       id="clipPath8852"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8850"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       id="linearGradient8860"
       spreadMethod="pad"
       gradientTransform="matrix(2.834646,0,0,2.834646,33.822135,229.29449)"
       gradientUnits="userSpaceOnUse"
       y2="47.416336"
       x2="207.95593"
       y1="48.812057"
       x1="181.92303">
      <stop
         id="stop8854"
         offset="0"
         style="stop-opacity:1;stop-color:#a7a7a7" />
      <stop
         id="stop8856"
         offset="0.432314"
         style="stop-opacity:1;stop-color:#e4e4e4" />
      <stop
         id="stop8858"
         offset="1"
         style="stop-opacity:1;stop-color:#717171" />
    </linearGradient>
    <clipPath
       id="clipPath8890"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8888"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath8906"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8904"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath8986"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path8984"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <clipPath
       id="clipPath9030"
       clipPathUnits="userSpaceOnUse">
      <path
         id="path9028"
         d="M 0,0 H 842 V 596 H 0 Z" />
    </clipPath>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3936"
       id="linearGradient14649"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4184"
       id="linearGradient14651"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4246"
       id="linearGradient14653"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3936"
       id="linearGradient14655"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4378"
       id="linearGradient14657"
       gradientUnits="userSpaceOnUse"
       x1="66.101974"
       y1="177.48279"
       x2="84.9888"
       y2="157.27287"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4422"
       id="linearGradient14659"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient14661"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient14663"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient5412"
       id="linearGradient14667"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="97.196396"
       y2="117.66685"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient5452"
       id="linearGradient14669"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="90.583817"
       y2="128.98515"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient5492"
       id="linearGradient14671"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3936"
       id="linearGradient14673"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4246"
       id="linearGradient14677"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3936"
       id="linearGradient14679"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4378"
       id="linearGradient14681"
       gradientUnits="userSpaceOnUse"
       x1="66.101974"
       y1="177.48279"
       x2="84.9888"
       y2="157.27287"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4422"
       id="linearGradient14683"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient14685"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient14687"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient14689"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient5412"
       id="linearGradient14691"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="97.196396"
       y2="117.66685"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient5452"
       id="linearGradient14693"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="90.583817"
       y2="128.98515"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient5492"
       id="linearGradient14695"
       gradientUnits="userSpaceOnUse"
       x1="65.668121"
       y1="177.82452"
       x2="86.434967"
       y2="158.55438"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7134"
       id="linearGradient17442"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.106812,0,0,-1.107881,349.07485,360.38813)"
       x1="63.744125"
       y1="133.62428"
       x2="90.700348"
       y2="133.62428"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7174"
       id="linearGradient17444"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.196794,0,0,-1.19795,298.79875,365.99455)"
       x1="63.744125"
       y1="133.62428"
       x2="90.700348"
       y2="133.62428"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7214"
       id="linearGradient17446"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.403982,0,0,-1.405337,273.01182,389.06885)"
       x1="89.227539"
       y1="121.11913"
       x2="114.70379"
       y2="121.11913"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7282"
       id="linearGradient17448"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.280349,0,0,-1.281585,342.06206,365.08103)"
       x1="63.744125"
       y1="133.62428"
       x2="90.700348"
       y2="133.62428"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7134"
       id="linearGradient17614"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.106812,0,0,-1.107881,349.07485,360.38813)"
       x1="63.744125"
       y1="133.62428"
       x2="90.700348"
       y2="133.62428"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7174"
       id="linearGradient17616"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.196794,0,0,-1.19795,298.79875,365.99455)"
       x1="63.744125"
       y1="133.62428"
       x2="90.700348"
       y2="133.62428"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7214"
       id="linearGradient17618"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.403982,0,0,-1.405337,273.01182,389.06885)"
       x1="89.227539"
       y1="121.11913"
       x2="114.70379"
       y2="121.11913"
       spreadMethod="pad" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient7282"
       id="linearGradient17620"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.280349,0,0,-1.281585,342.06206,365.08103)"
       x1="63.744125"
       y1="133.62428"
       x2="90.700348"
       y2="133.62428"
       spreadMethod="pad" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="5.6"
     inkscape:cx="95.825835"
     inkscape:cy="69.791468"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     inkscape:document-rotation="0"
     showgrid="false"
     units="px"
     inkscape:snap-global="true"
     inkscape:window-width="1853"
     inkscape:window-height="1057"
     inkscape:window-x="1979"
     inkscape:window-y="-8"
     inkscape:window-maximized="1">
    <inkscape:grid
       type="xygrid"
       id="grid17622" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       inkscape:label="settlement0_highlight"
       id="path17754"
       style="fill:none;stroke:#ffcc00;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 184.1695,145.39353 c 0,0 2.94818,5.60149 3.30687,8.68727 0.15166,-0.0117 0.30419,-0.0207 0.4594,-0.0207 2.79871,0 5.0674,2.00913 5.0674,4.4881 0,0.66076 -0.16803,1.28367 -0.45631,1.84949 2.06235,0.80472 3.50418,2.62862 3.50418,4.75269 0,1.04457 -0.36095,2.00933 -0.94774,2.83342 -0.45924,0.64205 -1.93492,1.34558 -4.91443,1.34358 -3.57865,-0.004 -4.83408,-1.04078 -5.15938,-1.70894 -0.26305,-0.5437 -0.50093,-1.10093 -0.62063,-1.69343 -0.79945,0.53493 -2.03124,0.74547 -2.95693,0.73277 -1.20992,0.0166 -2.94746,-0.34714 -3.55224,-1.32292 0,0 -0.25145,-0.80741 -0.58342,-1.94303 -0.0245,0.0361 -0.047,0.0734 -0.0724,0.10904 -0.42857,0.59937 -1.80945,1.25773 -4.593,1.25573 -3.34604,-0.004 -4.52004,-0.97148 -4.82348,-1.59732 -0.34997,-0.72355 -0.65629,-1.4718 -0.65629,-2.30683 0,-2.6804 2.45339,-4.855 5.47977,-4.855 1.10921,0 2.13978,0.29416 3.0024,0.79633 -0.14956,-0.80282 -0.24745,-1.51734 -0.26045,-2.05724 -0.0701,-2.85927 3.34302,-9.34302 3.34302,-9.34302 1.78478,2.56441 3.31154,2.85122 5.43366,1e-5 z"
       sodipodi:nodetypes="ccsscsccccccccccsscccc"
       class="settlement0 highlight" />
    <g
       class="settlement2 player0 unit"
       id="g2051"
       transform="translate(127.44958,-0.85044448)">
      <path
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
         style="fill:#851111;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path2045" />
      <g
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
         id="g2049">
        <path
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path2047" />
      </g>
    </g>
    <g
       class="settlement1 player0 unit"
       id="g1939"
       transform="translate(63.304889,-70.607792)">
      <path
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
         style="fill:#851111;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path1933" />
      <g
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
         id="g1937">
        <path
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path1935" />
      </g>
    </g>
    <g
       class="settlement1 player1 unit"
       id="g1947"
       transform="translate(73.888222,-70.607792)">
      <path
         id="path1941"
         style="fill:#118512;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
      <g
         id="g1945"
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
        <path
           id="path1943"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
      </g>
    </g>
    <g
       class="settlement1 player2 unit"
       transform="translate(84.471556,-70.607792)"
       id="g1955">
      <path
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
         style="fill:#113185;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path1949" />
      <g
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
         id="g1953">
        <path
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path1951" />
      </g>
    </g>
    <g
       id="g17969"
       transform="translate(17.386905,-0.85044643)"
       class="settlement0 player2 unit">
      <path
         id="path17963"
         style="fill:#113185;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
      <g
         id="g17967"
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
        <path
           id="path17965"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
      </g>
    </g>
    <g
       transform="translate(6.8035711,-0.85044643)"
       id="g17961"
       class="settlement0 player1 unit">
      <path
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
         style="fill:#118512;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17955" />
      <g
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
         id="g17959">
        <path
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17957" />
      </g>
    </g>
    <g
       transform="translate(-3.7797619,-0.85044643)"
       id="g17953"
       class="settlement0 player0 unit">
      <path
         id="path17947"
         style="fill:#851111;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
      <g
         id="g17951"
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
        <path
           id="path17949"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
      </g>
    </g>
    <text
       class="settlement1 player0 number"
       id="text1959"
       y="123.32655"
       x="234.38101"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       xml:space="preserve"><tspan
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
         y="123.32655"
         x="234.38101"
         id="tspan1957"
         sodipodi:role="line">0</tspan></text>
    <text
       class="settlement1 player1 number"
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       x="244.96434"
       y="123.32655"
       id="text1963"><tspan
         sodipodi:role="line"
         id="tspan1961"
         x="244.96434"
         y="123.32655"
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
    <text
       class="settlement1 player2 number"
       id="text1967"
       y="123.32655"
       x="255.54768"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       xml:space="preserve"><tspan
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
         y="123.32655"
         x="255.54768"
         id="tspan1965"
         sodipodi:role="line">0</tspan></text>
    <path
       inkscape:label="settlement2_highlight"
       id="path17920"
       style="fill:none;stroke:#ffcc00;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 313.05939,146.14947 c 0,0 2.94818,5.60149 3.30687,8.68727 0.15166,-0.0117 0.30419,-0.0207 0.4594,-0.0207 2.79871,0 5.0674,2.00913 5.0674,4.4881 0,0.66076 -0.16803,1.28367 -0.45631,1.84949 2.06235,0.80472 3.50418,2.62862 3.50418,4.75269 0,1.04457 -0.36095,2.00933 -0.94774,2.83342 -0.45924,0.64205 -1.93492,1.34558 -4.91443,1.34358 -3.57865,-0.004 -4.83408,-1.04078 -5.15938,-1.70894 -0.26305,-0.5437 -0.50093,-1.10093 -0.62063,-1.69343 -0.79945,0.53493 -2.03124,0.74547 -2.95693,0.73277 -1.20992,0.0166 -2.94746,-0.34714 -3.55224,-1.32292 0,0 -0.25145,-0.80741 -0.58342,-1.94303 -0.0245,0.0361 -0.047,0.0734 -0.0724,0.10904 -0.42857,0.59937 -1.80945,1.25773 -4.593,1.25573 -3.34604,-0.004 -4.52004,-0.97148 -4.82348,-1.59732 -0.34997,-0.72355 -0.65629,-1.4718 -0.65629,-2.30683 0,-2.6804 2.45339,-4.855 5.47977,-4.855 1.10921,0 2.13978,0.29416 3.0024,0.79633 -0.14956,-0.80282 -0.24745,-1.51734 -0.26045,-2.05724 -0.0701,-2.85927 3.34302,-9.34302 3.34302,-9.34302 1.78478,2.56441 3.31154,2.85122 5.43366,1e-5 z"
       sodipodi:nodetypes="ccsscsccccccccccsscccc"
       class="settlement2 highlight" />
    <path
       inkscape:label="settlement1_highlight"
       sodipodi:nodetypes="ccsscsccccccccccsscccc"
       d="m 249.93737,75.845899 c 0,0 2.94818,5.60149 3.30687,8.68727 0.15166,-0.0117 0.30419,-0.0207 0.4594,-0.0207 2.79871,0 5.0674,2.00913 5.0674,4.4881 0,0.66076 -0.16803,1.28367 -0.45631,1.84949 2.06235,0.80472 3.50418,2.62862 3.50418,4.75269 0,1.04457 -0.36095,2.00933 -0.94774,2.83342 -0.45924,0.64205 -1.93492,1.34558 -4.91443,1.34358 -3.57865,-0.004 -4.83408,-1.04078 -5.15938,-1.70894 -0.26305,-0.5437 -0.50093,-1.10093 -0.62063,-1.69343 -0.79945,0.53493 -2.03124,0.74547 -2.95693,0.73277 -1.20992,0.0166 -2.94746,-0.34714 -3.55224,-1.32292 0,0 -0.25145,-0.80741 -0.58342,-1.94303 -0.0245,0.0361 -0.047,0.0734 -0.0724,0.10904 -0.42857,0.59937 -1.80945,1.25773 -4.593,1.25573 -3.34604,-0.004 -4.52004,-0.97148 -4.82348,-1.59732 -0.34997,-0.72355 -0.65629,-1.4718 -0.65629,-2.30683 0,-2.6804 2.45339,-4.855 5.47977,-4.855 1.10921,0 2.13978,0.29416 3.0024,0.79633 -0.14956,-0.80282 -0.24745,-1.51734 -0.26045,-2.05724 -0.0701,-2.85927 3.34302,-9.34302 3.34302,-9.34302 1.78478,2.56441 3.31154,2.85122 5.43366,1e-5 z"
       style="fill:none;stroke:#ffcc00;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path17918"
       class="settlement1 highlight" />
    <g
       id="g3900"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath3906)"
         id="g3902">
        <g
           transform="matrix(0,-1.142099,1.143926,0,71.774133,319.59082)"
           id="g3908">
          <g
             id="g3910" />
          <g
             mask="url(#mask3922)"
             id="g3930">
            <path
               id="path3938"
               style="fill:url(#linearGradient14649);stroke:none"
               d="m 266.984,238.555 c 1.719,1.015 3.68,2.215 5.649,3.554 -0.563,-2.57 -1.766,-5.332 -3.133,-7.05 1.789,0.398 3.773,1.664 3.773,1.664 0,0 1.207,7.066 2.45,8.367 -1.766,-0.543 -9.118,1.285 -9.118,1.285 0,0 -2.351,-1.637 -3.367,-2.656 2.653,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.719,-3.199 -4.347,-2.918 -5.441,-3.59 -7.609,-7.235 -2.121,-3.562 -2.187,-5.277 -3.039,-6.035 0.5,-0.238 0.754,-0.566 1.016,-1.246 0.418,0.344 0.871,0.449 1.519,0.293 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.895 2.613,3.82 6.554,6.145 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g4148"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath4154)"
         id="g4150">
        <g
           transform="matrix(-0.71422,-1.308057,1.308885,-0.716053,311.27323,425.6761)"
           id="g4156">
          <g
             id="g4158" />
          <g
             mask="url(#mask4170)"
             id="g4178">
            <path
               id="path4186"
               style="fill:url(#linearGradient14651);stroke:none"
               d="m 483.957,210.672 c 2.602,0.086 5.594,0.23 8.684,0.535 -2.246,-2.594 -5.352,-5 -7.989,-6.113 2.293,-0.664 5.356,-0.461 5.356,-0.461 0,0 5.797,7.34 8.035,8.051 -2.363,0.484 -9.629,7.179 -9.629,7.179 0,0 -3.715,-0.402 -5.516,-0.933 3.411,-0.981 6.063,-2.34 9.493,-5.313 -3.102,0.012 -5.95,-0.019 -8.543,-0.086 -6.801,-0.617 -8.469,-0.703 -13.231,-3.519 -4.656,-2.754 -5.801,-4.676 -7.25,-5.016 0.422,-0.586 0.504,-1.117 0.383,-2.062 0.691,0.132 1.273,-0.032 1.922,-0.614 0.66,1.235 1.859,2.993 6.941,5.418 2.848,1.262 5.383,2.739 11.344,2.934 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g4210"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath4216)"
         id="g4212">
        <g
           transform="matrix(-1.056316,1.455556,1.230751,0.894898,284.33792,-56.410605)"
           id="g4218">
          <g
             id="g4220" />
          <g
             mask="url(#mask4232)"
             id="g4240">
            <path
               id="path4248"
               style="fill:url(#linearGradient14653);stroke:none"
               d="m 428.777,199.469 c -2.976,2.836 -6.828,5.41 -9.886,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.832,-8.063 10.371,-8.746 -2.402,-0.692 -8.617,-8.77 -8.617,-8.77 0,0 -4.047,0.243 -6.082,0.746 3.406,1.321 5.918,3.032 8.895,6.629 -3.293,-0.191 -6.414,-0.187 -9.192,-0.265 -4.375,-0.137 -5.383,-0.364 -9.035,-0.965 -4.457,-0.735 -6.164,-0.707 -8.027,-1.844 0.316,0.695 -0.332,1.395 -1.133,1.938 0.801,0.523 1.34,1.332 1.203,1.945 0.988,-0.453 2.156,-0.227 6.906,0.824 3.711,0.82 4.758,0.895 9.946,1.293 2.566,0.07 6.777,-0.039 9.054,-0.152 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g4262"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath4268)"
         id="g4264">
        <g
           transform="matrix(0,-1.142099,1.143926,0,86.362614,317.19464)"
           id="g4270">
          <g
             id="g4272" />
          <g
             mask="url(#mask4284)"
             id="g4292">
            <path
               id="path4300"
               style="fill:url(#linearGradient14655);stroke:none"
               d="m 281.574,236.16 c 1.715,1.012 3.68,2.211 5.645,3.551 -0.559,-2.566 -1.766,-5.328 -3.129,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.203,7.071 2.45,8.367 -1.77,-0.543 -9.118,1.286 -9.118,1.286 0,0 -2.355,-1.633 -3.371,-2.657 2.656,0.598 4.942,0.657 8.34,-0.078 -2.09,-1.133 -3.992,-2.203 -5.715,-3.203 -4.351,-2.914 -5.441,-3.586 -7.613,-7.23 -2.121,-3.563 -2.184,-5.278 -3.035,-6.039 0.5,-0.239 0.754,-0.567 1.015,-1.243 0.418,0.34 0.872,0.446 1.52,0.293 -0.012,1.071 0.152,2.696 2.68,6.196 1.453,1.894 2.617,3.82 6.558,6.144 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g4342"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath4348)"
         id="g4344">
        <g
           transform="matrix(1.37837,0,0,1.166611,180.44467,-34.489457)"
           id="g4350">
          <g
             id="g4352" />
          <g
             mask="url(#mask4364)"
             id="g4372">
            <path
               id="path4380"
               style="fill:url(#linearGradient14657);stroke:none"
               d="m 284.902,145.516 c -0.07,0.972 -0.339,2.07 -0.808,3.308 -0.578,1.547 -1.364,3.223 -2.117,4.785 -2.516,5.204 -2.426,4.989 -5.704,10.032 -0.003,0 -0.003,0.004 -0.007,0.004 -1.203,1.753 -2.493,3.699 -3.86,5.824 -0.168,0.258 -0.562,0.195 -0.64,-0.106 -0.766,-2.988 -0.793,-5.191 -0.344,-7.476 -1.035,1.043 -2.074,2.238 -2.219,2.41 0.051,0.172 0.524,1.793 0.973,3.805 0.238,1.058 0.453,2.175 0.57,3.152 0.074,0.617 0.094,1.137 0.063,1.609 0.464,-0.222 1.011,-0.429 1.695,-0.625 1.035,-0.297 2.254,-0.57 3.426,-0.804 2.254,-0.45 4.172,-0.731 4.316,-0.75 0.106,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.215 -4.996,2.234 -7.762,2.742 -0.32,0.059 -0.543,-0.312 -0.343,-0.57 1.617,-2.004 3.066,-3.867 4.363,-5.574 2.121,-2.735 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.109,-3.461 1.605,-4.778 0.25,-0.66 0.5,-1.218 0.793,-1.66 0.199,-0.301 0.441,-0.519 0.707,-0.68 -0.07,-0.144 -0.133,-0.281 -0.227,-0.445 -0.089,-0.164 -0.148,-0.387 -0.164,-0.629 -0.328,0.004 -0.656,0.02 -0.953,-0.074 -0.152,-0.047 -0.285,-0.121 -0.422,-0.191 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g4386"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath4392)"
         id="g4388">
        <g
           transform="matrix(1.37837,0,0,1.166611,173.86161,-41.964537)"
           id="g4394">
          <g
             id="g4396" />
          <g
             mask="url(#mask4408)"
             id="g4416">
            <path
               id="path4424"
               style="fill:url(#linearGradient14659);stroke:none"
               d="m 271.746,157.297 c -1.301,1.711 -2.754,3.574 -4.375,5.578 3.102,-0.57 6.434,-1.801 8.508,-3.191 -0.481,1.824 -2.004,3.847 -2.004,3.847 0,0 -8.531,1.231 -10.098,2.496 0.657,-1.8 -1.55,-9.297 -1.55,-9.297 0,0 1.972,-2.398 3.203,-3.437 -0.719,2.711 -0.789,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.864,-5.832 3.277,-5.043 3.168,-4.785 5.683,-9.992 1.508,-3.118 3.129,-6.672 2.965,-8.645 0.289,0.508 1.195,0.773 2.016,0.648 -0.172,0.68 0.312,0.887 0.5,1.551 -1.293,0.278 -1.981,3.543 -3.235,7.082 -1.336,3.782 -3.422,7.903 -5.574,10.684 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g4432"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath4438)"
         id="g4434">
        <g
           transform="matrix(0,-1.142099,1.143926,0,37.887089,250.42139)"
           id="g4440">
          <g
             id="g4442" />
          <g
             mask="url(#mask4454)"
             id="g4462">
            <path
               id="path4470"
               style="fill:url(#linearGradient14661);stroke:none"
               d="m 233.195,169.586 c 1.758,0.945 3.582,2.012 5.551,3.352 -0.562,-2.567 -1.766,-5.329 -3.133,-7.047 1.789,0.398 3.774,1.66 3.774,1.66 0,0 1.207,7.07 2.449,8.367 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.356,-1.633 -3.367,-2.656 2.652,0.598 4.937,0.656 8.336,-0.078 -2.086,-1.133 -3.993,-2.203 -5.715,-3.203 -1.66,-0.969 -3.836,-2.778 -4.61,-4.231 -1.953,-3.656 -2.187,-5.277 -3.039,-6.039 0.5,-0.238 0.754,-0.566 1.016,-1.242 0.418,0.34 0.871,0.445 1.519,0.293 -0.007,1.07 0.106,2.945 2.184,5.945 1.055,1.399 2.059,2.465 4.152,3.594 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g4478"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath4484)"
         id="g4480">
        <g
           transform="matrix(1.708178,0,0,1.71091,-14.237447,-120.80186)"
           id="g4486">
          <g
             id="g4488" />
          <g
             mask="url(#mask4500)"
             id="g4508">
            <path
               id="path4516"
               style="fill:url(#linearGradient14663);stroke:none"
               d="m 107.066,171.426 c -1.609,2.512 -3.414,5.242 -5.418,8.183 3.844,-0.836 7.973,-2.64 10.543,-4.679 -0.593,2.672 -2.484,5.64 -2.484,5.64 0,0 -10.57,1.805 -12.516,3.664 0.813,-2.644 -1.921,-13.636 -1.921,-13.636 0,0 2.445,-3.52 3.972,-5.039 -0.89,3.972 -0.98,7.386 0.121,12.472 1.696,-3.125 3.293,-5.972 4.785,-8.551 4.063,-7.398 3.93,-7.019 7.043,-14.652 1.868,-4.574 3.879,-9.789 3.676,-12.683 0.36,0.75 1.485,1.136 2.496,0.957 -0.211,0.996 0.391,1.3 0.621,2.269 -1.605,0.41 -2.457,5.195 -4.007,10.391 -1.657,5.543 -4.239,11.586 -6.911,15.664 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g5376"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath5382)"
         id="g5378">
        <g
           transform="matrix(0.377023,-1.238909,1.026969,0.325814,560.8417,221.87602)"
           id="g5384">
          <g
             id="g5386" />
          <g
             mask="url(#mask5398)"
             id="g5406">
            <path
               id="path5414"
               style="fill:url(#linearGradient14667);stroke:none"
               d="m 753.883,178.957 c 1.152,1.645 11.535,14.063 12.859,16.078 0.344,-2.949 0.172,-6.285 -0.484,-8.539 1.472,0.942 2.84,2.879 2.84,2.879 0,0 -1.254,8.008 -0.567,9.773 -1.406,-1.093 -8.605,-1.203 -8.605,-1.203 0,0 -1.574,-2.445 -2.149,-3.84 2.184,1.403 4.215,2.118 7.512,2.286 -1.5,-1.825 -12.004,-14.114 -13.219,-15.692 -3.547,-4.355 -12.492,-14.773 -16.386,-18.488 -2.332,-2.223 -14.161,-15.266 -15.942,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.863,-0.031 1.496,-0.015 -0.105,1.238 10.848,11.394 14.496,15.472 4.227,4.727 15.164,15.875 17.024,18.586 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g5416"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath5422)"
         id="g5418">
        <g
           transform="matrix(-0.658029,1.073926,0.81882,0.591506,660.86033,35.442258)"
           id="g5424">
          <g
             id="g5426" />
          <g
             mask="url(#mask5438)"
             id="g5446">
            <path
               id="path5454"
               style="fill:url(#linearGradient14669);stroke:none"
               d="m 748.047,212.91 c 1.824,-0.144 9.766,-0.508 11.945,-0.75 -1.883,2.125 -4.336,4.098 -6.301,5.008 1.508,0.551 3.657,0.391 3.657,0.391 0,0 4.933,-6.024 6.574,-6.602 -1.578,-0.402 -5.785,-5.922 -5.785,-5.922 0,0 -2.629,0.32 -3.942,0.754 2.243,0.813 3.91,1.938 5.922,4.387 -2.148,-0.012 -10.066,0.179 -11.875,0.226 -5.105,-0.004 -9.488,0.571 -14.34,-0.113 -2.91,-0.406 -12.117,-0.769 -13.425,-1.898 0.218,0.484 -0.028,1.324 -0.504,1.898 0.558,0.211 0.472,0.695 0.847,1.176 0.813,-0.867 7.481,0.64 12.453,0.898 5.758,0.301 11.793,0.817 14.774,0.547 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g5456"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath5462)"
         id="g5458">
        <g
           transform="matrix(-1.009873,-0.533431,-0.534284,1.011488,944.47772,45.602983)"
           id="g5464">
          <g
             id="g5466" />
          <g
             mask="url(#mask5478)"
             id="g5486">
            <path
               id="path5494"
               style="fill:url(#linearGradient14671);stroke:none"
               d="m 781.781,180.547 c 0.012,1.992 0.106,4.105 0.371,6.469 -2.007,-1.696 -3.886,-4.051 -4.769,-6.059 -0.485,1.766 -0.293,4.113 -0.293,4.113 0,0 5.687,4.364 6.254,6.075 0.347,-1.817 5.394,-7.461 5.394,-7.461 0,0 -0.347,-2.848 -0.773,-4.223 -0.715,2.625 -1.727,4.676 -3.969,7.336 -0.023,-2.375 -0.078,-4.559 -0.156,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.051 -2.324,-3.433 -3.648,-4.398 -3.922,-5.504 -0.445,0.329 -0.851,0.399 -1.574,0.317 0.109,0.527 -0.012,0.976 -0.449,1.476 0.949,0.496 2.554,1.469 4.238,4.711 0.742,1.582 1.219,2.969 1.238,5.352 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7068"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7074)"
         id="g7070">
        <g
           transform="matrix(0,-1.142099,1.143926,0,71.767903,554.58252)"
           id="g7076">
          <g
             id="g7078" />
          <g
             mask="url(#mask7090)"
             id="g7098">
            <path
               id="path7106"
               style="fill:url(#linearGradient14673);stroke:none"
               d="m 266.977,473.547 c 1.718,1.016 3.679,2.211 5.648,3.555 -0.559,-2.571 -1.766,-5.332 -3.129,-7.051 1.785,0.398 3.774,1.66 3.774,1.66 0,0 1.203,7.07 2.445,8.371 -1.766,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.637 -3.372,-2.656 2.657,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.718,-3.199 -4.348,-2.918 -5.438,-3.59 -7.61,-7.235 -2.121,-3.562 -2.183,-5.277 -3.035,-6.035 0.5,-0.242 0.75,-0.566 1.016,-1.246 0.414,0.344 0.867,0.445 1.515,0.293 -0.008,1.07 0.157,2.695 2.684,6.195 1.453,1.895 2.617,3.821 6.555,6.145 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7316"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7322)"
         id="g7318">
        <g
           transform="matrix(-0.71422,-1.308057,1.308885,-0.716053,311.267,660.6678)"
           id="g7324">
          <g
             id="g7326" />
          <g
             mask="url(#mask7338)"
             id="g7346" />
        </g>
      </g>
    </g>
    <g
       id="g7378"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7384)"
         id="g7380">
        <g
           transform="matrix(-1.056316,1.455556,1.230751,0.894898,284.33169,178.58109)"
           id="g7386">
          <g
             id="g7388" />
          <g
             mask="url(#mask7400)"
             id="g7408">
            <path
               id="path7416"
               style="fill:url(#linearGradient14677);stroke:none"
               d="m 428.773,434.461 c -2.98,2.836 -6.832,5.41 -9.89,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.833,-8.062 10.375,-8.75 -2.406,-0.687 -8.621,-8.765 -8.621,-8.765 0,0 -4.046,0.242 -6.082,0.746 3.407,1.32 5.922,3.031 8.899,6.629 -3.297,-0.192 -6.414,-0.188 -9.192,-0.266 -4.375,-0.137 -5.386,-0.363 -9.035,-0.965 -4.461,-0.734 -6.164,-0.711 -8.031,-1.844 0.316,0.696 -0.328,1.395 -1.133,1.938 0.805,0.523 1.34,1.332 1.207,1.945 0.985,-0.457 2.156,-0.226 6.906,0.824 3.711,0.821 4.754,0.895 9.946,1.293 2.562,0.071 6.773,-0.039 9.054,-0.152 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7430"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7436)"
         id="g7432">
        <g
           transform="matrix(0,-1.142099,1.143926,0,86.356385,552.18633)"
           id="g7438">
          <g
             id="g7440" />
          <g
             mask="url(#mask7452)"
             id="g7460">
            <path
               id="path7468"
               style="fill:url(#linearGradient14679);stroke:none"
               d="m 281.566,471.152 c 1.719,1.012 3.68,2.211 5.649,3.551 -0.563,-2.57 -1.766,-5.328 -3.133,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.208,7.067 2.45,8.368 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.352,-1.637 -3.368,-2.656 2.653,0.597 4.938,0.656 8.34,-0.083 -2.09,-1.128 -3.996,-2.199 -5.719,-3.199 -4.347,-2.914 -5.441,-3.586 -7.609,-7.23 -2.121,-3.563 -2.187,-5.278 -3.039,-6.039 0.5,-0.239 0.754,-0.567 1.016,-1.246 0.418,0.343 0.871,0.449 1.519,0.297 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.894 2.613,3.82 6.554,6.144 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7510"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7516)"
         id="g7512">
        <g
           transform="matrix(1.37837,0,0,1.166611,180.43844,200.50224)"
           id="g7518">
          <g
             id="g7520" />
          <g
             mask="url(#mask7532)"
             id="g7540">
            <path
               id="path7548"
               style="fill:url(#linearGradient14681);stroke:none"
               d="m 284.898,380.504 c -0.07,0.976 -0.343,2.074 -0.808,3.312 -0.582,1.543 -1.367,3.219 -2.121,4.786 -2.516,5.203 -2.426,4.988 -5.703,10.031 0,0 -0.004,0.004 -0.004,0.004 -1.203,1.754 -2.496,3.695 -3.86,5.824 -0.168,0.258 -0.566,0.195 -0.644,-0.106 -0.766,-2.988 -0.793,-5.191 -0.34,-7.48 -1.035,1.047 -2.078,2.242 -2.223,2.414 0.051,0.172 0.528,1.793 0.977,3.805 0.234,1.058 0.453,2.176 0.57,3.152 0.074,0.617 0.09,1.137 0.059,1.609 0.469,-0.222 1.015,-0.429 1.695,-0.625 1.035,-0.3 2.258,-0.57 3.426,-0.804 2.258,-0.449 4.176,-0.731 4.32,-0.75 0.102,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.211 -4.996,2.231 -7.761,2.742 -0.325,0.059 -0.547,-0.312 -0.344,-0.57 1.613,-2.004 3.066,-3.867 4.363,-5.574 2.117,-2.738 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.105,-3.461 1.605,-4.777 0.25,-0.661 0.5,-1.223 0.789,-1.661 0.199,-0.3 0.442,-0.519 0.711,-0.683 -0.07,-0.141 -0.137,-0.278 -0.226,-0.442 -0.094,-0.164 -0.153,-0.386 -0.168,-0.632 -0.325,0.003 -0.657,0.023 -0.954,-0.071 -0.148,-0.047 -0.285,-0.121 -0.418,-0.195 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7554"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7560)"
         id="g7556">
        <g
           transform="matrix(1.37837,0,0,1.166611,173.85538,193.02716)"
           id="g7562">
          <g
             id="g7564" />
          <g
             mask="url(#mask7576)"
             id="g7584">
            <path
               id="path7592"
               style="fill:url(#linearGradient14683);stroke:none"
               d="m 271.738,392.289 c -1.297,1.711 -2.754,3.574 -4.371,5.578 3.102,-0.57 6.43,-1.801 8.508,-3.191 -0.48,1.824 -2.008,3.847 -2.008,3.847 0,0 -8.527,1.227 -10.097,2.497 0.656,-1.801 -1.551,-9.297 -1.551,-9.297 0,0 1.972,-2.399 3.207,-3.438 -0.719,2.707 -0.793,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.86,-5.832 3.281,-5.047 3.172,-4.785 5.683,-9.992 1.508,-3.117 3.133,-6.672 2.969,-8.649 0.289,0.512 1.195,0.778 2.012,0.653 -0.172,0.679 0.316,0.886 0.5,1.55 -1.293,0.278 -1.981,3.54 -3.234,7.082 -1.336,3.782 -3.418,7.903 -5.575,10.684 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7600"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7606)"
         id="g7602">
        <g
           transform="matrix(0,-1.142099,1.143926,0,37.88086,485.41308)"
           id="g7608">
          <g
             id="g7610" />
          <g
             mask="url(#mask7622)"
             id="g7630">
            <path
               id="path7638"
               style="fill:url(#linearGradient14685);stroke:none"
               d="m 233.191,404.578 c 1.754,0.945 3.579,2.012 5.547,3.352 -0.558,-2.571 -1.765,-5.328 -3.129,-7.047 1.786,0.398 3.77,1.66 3.77,1.66 0,0 1.207,7.066 2.449,8.367 -1.765,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.636 -3.371,-2.656 2.656,0.598 4.937,0.656 8.34,-0.078 -2.09,-1.133 -3.996,-2.203 -5.719,-3.203 -1.656,-0.973 -3.836,-2.778 -4.61,-4.231 -1.953,-3.66 -2.183,-5.277 -3.035,-6.039 0.5,-0.238 0.75,-0.566 1.016,-1.242 0.414,0.34 0.867,0.445 1.516,0.293 -0.008,1.07 0.105,2.945 2.183,5.945 1.055,1.395 2.059,2.465 4.156,3.594 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7646"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7652)"
         id="g7648">
        <g
           transform="matrix(1.708178,0,0,1.71091,-14.243676,114.18983)"
           id="g7654">
          <g
             id="g7656" />
          <g
             mask="url(#mask7668)"
             id="g7676">
            <path
               id="path7684"
               style="fill:url(#linearGradient14687);stroke:none"
               d="m 107.063,406.418 c -1.614,2.512 -3.415,5.242 -5.422,8.184 3.843,-0.836 7.972,-2.641 10.543,-4.68 -0.594,2.672 -2.485,5.641 -2.485,5.641 0,0 -10.57,1.8 -12.515,3.664 0.812,-2.645 -1.922,-13.637 -1.922,-13.637 0,0 2.449,-3.52 3.972,-5.039 -0.89,3.969 -0.98,7.387 0.121,12.472 1.696,-3.125 3.293,-5.972 4.79,-8.55 4.062,-7.399 3.925,-7.02 7.039,-14.653 1.867,-4.578 3.882,-9.789 3.679,-12.683 0.356,0.75 1.481,1.136 2.496,0.957 -0.214,0.996 0.387,1.301 0.618,2.269 -1.602,0.41 -2.454,5.196 -4.008,10.391 -1.656,5.543 -4.239,11.586 -6.906,15.664 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g7686"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath7692)"
         id="g7688">
        <g
           transform="matrix(-1.708178,0,0,1.71091,201.87047,115.78452)"
           id="g7694">
          <g
             id="g7696" />
          <g
             mask="url(#mask7708)"
             id="g7716">
            <path
               id="path7724"
               style="fill:url(#linearGradient14689);stroke:none"
               d="m 80.566,408.016 c 1.61,2.507 3.414,5.238 5.418,8.179 -3.843,-0.836 -7.972,-2.64 -10.543,-4.679 0.594,2.672 2.485,5.64 2.485,5.64 0,0 10.57,1.805 12.515,3.664 -0.812,-2.644 1.922,-13.632 1.922,-13.632 0,0 -2.445,-3.524 -3.972,-5.043 0.89,3.972 0.98,7.386 -0.121,12.472 -1.696,-3.125 -3.293,-5.972 -4.786,-8.551 -4.062,-7.398 -5.468,-10.898 -13.351,-13.32 -6.09,-1.168 -5.36,-1.328 -6.496,-2.601 -0.356,0.746 -0.848,1.125 -1.864,1.519 0.512,0.621 0.672,1.301 0.442,2.27 1.601,-0.016 1.488,-0.981 7.176,2.074 5.386,2.109 8.504,7.926 11.175,12.008 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g8544"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath8550)"
         id="g8546">
        <g
           transform="matrix(0.377023,-1.238909,1.026969,0.325814,560.83547,456.86771)"
           id="g8552">
          <g
             id="g8554" />
          <g
             mask="url(#mask8566)"
             id="g8574">
            <path
               id="path8582"
               style="fill:url(#linearGradient14691);stroke:none"
               d="m 753.875,413.945 c 1.152,1.649 11.535,14.067 12.859,16.082 0.348,-2.949 0.176,-6.285 -0.484,-8.539 1.477,0.942 2.84,2.875 2.84,2.875 0,0 -1.25,8.012 -0.563,9.778 -1.406,-1.094 -8.609,-1.203 -8.609,-1.203 0,0 -1.574,-2.446 -2.148,-3.84 2.187,1.402 4.218,2.117 7.511,2.285 -1.5,-1.824 -12,-14.117 -13.218,-15.692 -3.543,-4.355 -12.489,-14.773 -16.383,-18.488 -2.336,-2.226 -14.164,-15.265 -15.946,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.868,-0.035 1.5,-0.015 -0.109,1.238 10.844,11.394 14.496,15.472 4.223,4.727 15.161,15.875 17.02,18.586 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g8584"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath8590)"
         id="g8586">
        <g
           transform="matrix(-0.658029,1.073926,0.81882,0.591506,660.8541,270.43395)"
           id="g8592">
          <g
             id="g8594" />
          <g
             mask="url(#mask8606)"
             id="g8614">
            <path
               id="path8622"
               style="fill:url(#linearGradient14693);stroke:none"
               d="m 748.043,447.902 c 1.82,-0.144 9.762,-0.507 11.941,-0.75 -1.879,2.125 -4.332,4.098 -6.3,5.008 1.507,0.551 3.656,0.391 3.656,0.391 0,0 4.937,-6.024 6.574,-6.606 -1.578,-0.402 -5.785,-5.918 -5.785,-5.918 0,0 -2.625,0.321 -3.941,0.754 2.242,0.813 3.914,1.938 5.921,4.387 -2.148,-0.012 -10.066,0.18 -11.875,0.227 -5.105,-0.004 -9.484,0.566 -14.339,-0.114 -2.911,-0.406 -12.118,-0.769 -13.426,-1.898 0.222,0.48 -0.024,1.324 -0.504,1.898 0.558,0.211 0.473,0.696 0.848,1.176 0.812,-0.867 7.484,0.641 12.457,0.898 5.757,0.301 11.793,0.817 14.773,0.547 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g8624"
       transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)">
      <g
         clip-path="url(#clipPath8630)"
         id="g8626">
        <g
           transform="matrix(-1.009873,-0.533431,-0.534284,1.011488,944.47149,280.59468)"
           id="g8632">
          <g
             id="g8634" />
          <g
             mask="url(#mask8646)"
             id="g8654">
            <path
               id="path8662"
               style="fill:url(#linearGradient14695);stroke:none"
               d="m 781.773,415.539 c 0.016,1.992 0.106,4.106 0.375,6.469 -2.011,-1.695 -3.89,-4.051 -4.773,-6.059 -0.48,1.766 -0.293,4.114 -0.293,4.114 0,0 5.688,4.363 6.258,6.07 0.344,-1.817 5.39,-7.461 5.39,-7.461 0,0 -0.343,-2.844 -0.773,-4.219 -0.711,2.625 -1.727,4.672 -3.965,7.336 -0.027,-2.375 -0.082,-4.559 -0.16,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.05 -2.32,-3.434 -3.644,-4.399 -3.918,-5.508 -0.445,0.332 -0.855,0.402 -1.578,0.32 0.109,0.527 -0.012,0.977 -0.449,1.477 0.953,0.492 2.555,1.468 4.238,4.707 0.742,1.586 1.219,2.972 1.238,5.355 z" />
          </g>
        </g>
      </g>
    </g>
    <g
       id="g2233"
       class="settlement1 selection">
      <g
         class="settlement1 buildings"
         transform="translate(70.559155,-39.021351)"
         id="g17272">
        <g
           id="g7126"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g7128">
            <path
               id="path7136"
               style="fill:url(#linearGradient7134);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z" />
          </g>
        </g>
        <path
           id="path7138"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 184.08428,131.56493 c 0.23706,-0.42863 0.47801,-1.028 0.12806,-1.55716 -0.25894,-0.39159 -0.85584,-0.63536 -1.11619,-0.91511 -0.24659,0.26176 -0.84067,0.51682 -1.1176,0.91511 -0.34996,0.52916 -0.10866,1.12853 0.12806,1.55716" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7140">
          <path
             id="path7142"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 437.633,394.215 c 0.673,-1.215 1.357,-2.914 0.364,-4.414 -0.735,-1.11 -2.428,-1.801 -3.167,-2.594 -0.7,0.742 -2.385,1.465 -3.171,2.594 -0.994,1.5 -0.309,3.199 0.363,4.414" />
        </g>
        <path
           id="path7144"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 186.78514,124.96975 c -0.48789,0.47801 -0.78281,0.80045 -1.57903,0.78387 0.39829,0.83785 0.69991,2.37702 0.69991,2.37702 0,0 1.24989,-0.20638 2.17029,-1.18216" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7146">
          <path
             id="path7148"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 445.297,375.52 c -1.384,1.355 -2.221,2.269 -4.481,2.222 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.585 6.158,-3.351" />
        </g>
        <path
           id="path7150"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 182.20997,125.9674 c 0.9331,0.38453 1.45521,0.21908 1.83974,0.055 0.0691,0.79657 0.70026,2.32198 0.70026,2.32198 -1.28164,0.25506 -2.48885,0.2286 -3.22615,-0.12418 0.18485,-0.66287 0.56656,-1.42487 0.68615,-2.25284 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7152">
          <path
             id="path7154"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 432.316,378.348 c 2.647,1.09 4.128,0.621 5.219,0.156 0.196,2.258 1.987,6.582 1.987,6.582 -3.637,0.723 -7.062,0.648 -9.154,-0.352 0.524,-1.879 1.607,-4.039 1.948,-6.386 z" />
        </g>
        <path
           id="path7156"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 179.47347,125.0082 c 0.48754,0.47943 0.78246,0.80045 1.57904,0.78423 -0.39829,0.83784 -0.69992,2.37701 -0.69992,2.37701 0,0 -1.24989,-0.20673 -2.17064,-1.18251" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7158">
          <path
             id="path7160"
             style="fill:none;stroke:#000000;stroke-width:1.10788;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -424.55,375.629 c -1.384,1.359 -2.221,2.269 -4.481,2.223 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.586 6.158,-3.352" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7162">
          <path
             id="path7164"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z" />
        </g>
        <g
           id="g7166"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g7168">
            <path
               id="path7176"
               style="fill:url(#linearGradient7174);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z" />
          </g>
        </g>
        <path
           id="path7178"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 168.87497,134.15714 c 0.25612,-0.46461 0.51788,-1.11231 0.13899,-1.68416 -0.28116,-0.42439 -0.92463,-0.68757 -1.2072,-0.98954 -0.266,0.28398 -0.90805,0.55809 -1.20721,0.98954 -0.37888,0.57185 -0.11818,1.21955 0.13794,1.68416" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7180">
          <path
             id="path7182"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 394.478,401.563 c 0.727,-1.317 1.47,-3.153 0.395,-4.774 -0.798,-1.203 -2.623,-1.949 -3.425,-2.805 -0.755,0.805 -2.577,1.582 -3.425,2.805 -1.075,1.621 -0.336,3.457 0.391,4.774" />
        </g>
        <path
           id="path7184"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 171.79632,127.02574 c -0.52775,0.51682 -0.84631,0.86395 -1.70744,0.84596 0.43145,0.90664 0.75812,2.5714 0.75812,2.5714 0,0 1.35043,-0.22331 2.34526,-1.27882" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7186">
          <path
             id="path7188"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 402.767,381.348 c -1.497,1.465 -2.4,2.449 -4.844,2.398 1.224,2.57 2.15,7.289 2.15,7.289 0,0 3.832,-0.633 6.655,-3.625" />
        </g>
        <path
           id="path7190"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 166.84897,128.10312 c 1.00894,0.41628 1.57374,0.23848 1.98861,0.0607 0.0744,0.86148 0.75811,2.51072 0.75811,2.51072 -1.385,0.27446 -2.69134,0.24694 -3.48932,-0.13335 0.20108,-0.71685 0.61313,-1.54235 0.7426,-2.43805 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7192">
          <path
             id="path7194"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 388.73,384.402 c 2.863,1.18 4.466,0.676 5.643,0.172 0.211,2.442 2.15,7.117 2.15,7.117 -3.929,0.778 -7.636,0.7 -9.9,-0.378 0.571,-2.032 1.74,-4.372 2.107,-6.911 z" />
        </g>
        <path
           id="path7196"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 163.89057,127.06701 c 0.52635,0.51823 0.84596,0.86537 1.70604,0.84737 -0.43004,0.907 -0.75671,2.56999 -0.75671,2.56999 0,0 -1.35044,-0.2219 -2.34527,-1.27741" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7198">
          <path
             id="path7200"
             style="fill:none;stroke:#000000;stroke-width:1.19795;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -380.336,381.465 c -1.493,1.469 -2.4,2.453 -4.84,2.402 1.22,2.571 2.146,7.285 2.146,7.285 0,0 3.832,-0.629 6.655,-3.621" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7202">
          <path
             id="path7204"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z" />
        </g>
        <g
           id="g7206"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g7208">
            <path
               id="path7216"
               style="fill:url(#linearGradient7214);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 406.49,403.41 c 0,0 -6.917,-21.937 -7.113,-30.043 -0.199,-8.105 9.486,-26.484 9.486,-26.484 0,0 2.569,9.449 7.707,9.488 5.142,-0.039 7.71,-9.488 7.71,-9.488 0,0 9.686,18.379 9.486,26.484 -0.195,8.106 -7.116,30.043 -7.116,30.043 -1.713,2.766 -6.643,3.797 -10.08,3.75 -3.433,0.047 -8.364,-0.984 -10.08,-3.75 z" />
          </g>
        </g>
        <path
           id="path7218"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 172.40134,117.91666 c 0,0 0.90522,1.18675 1.25377,1.39453 0.0346,1.01177 -0.55668,2.78942 -0.55668,2.78942 0,0 -0.97544,-0.55669 -1.60267,-1.60267" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7220">
          <path
             id="path7222"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -404.484,355.527 c 0,0 -2.569,3.364 -3.558,3.953 -0.098,2.868 1.58,7.907 1.58,7.907 0,0 2.768,-1.578 4.547,-4.543" />
        </g>
        <path
           id="path7224"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 180.82391,117.77767 c 0,0 -0.90559,1.18498 -1.25413,1.39453 -0.0346,1.01141 0.55668,2.78906 0.55668,2.78906 0,0 0.97579,-0.5581 1.60267,-1.60408" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7226">
          <path
             id="path7228"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 428.382,355.133 c 0,0 -2.569,3.359 -3.558,3.953 -0.098,2.867 1.58,7.906 1.58,7.906 0,0 2.768,-1.582 4.547,-4.547" />
        </g>
        <path
           id="path7230"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 175.37631,119.74828 c 1.18533,0.4879 2.05599,0.0688 2.54247,-0.13934 0.0882,1.01035 0.62724,3.13654 0.62724,3.13654 -1.6249,0.56762 -2.77424,0.43004 -3.7084,-0.0166 0.23424,-0.84067 0.38735,-1.93075 0.53869,-2.98062 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7232">
          <path
             id="path7234"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 412.926,360.719 c 3.362,1.383 5.833,0.195 7.214,-0.395 0.25,2.864 1.779,8.891 1.779,8.891 -4.61,1.609 -7.871,1.219 -10.522,-0.047 0.665,-2.383 1.099,-5.473 1.529,-8.449 z" />
        </g>
        <path
           id="path7236"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 178.79826,125.77443 c -0.23425,1.12148 -0.41064,2.28318 -0.25647,3.66431 -1.15888,0.28645 -2.35092,0.36512 -3.60892,0.0247 0.16651,-1.31868 -0.0127,-2.56857 -0.18768,-3.58034 0.80363,0.34607 2.62114,0.53622 4.05307,-0.10866 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7238">
          <path
             id="path7240"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 422.634,377.801 c -0.664,3.179 -1.165,6.472 -0.727,10.387 -3.288,0.812 -6.67,1.035 -10.24,0.07 0.473,-3.738 -0.036,-7.281 -0.532,-10.149 2.279,0.981 7.437,1.52 11.499,-0.308 z" />
        </g>
        <path
           id="path7242"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 170.55313,124.04476 c 0.62301,0.60114 1.49543,1.07774 2.18299,1.22238 -0.12664,1.29963 0.19579,3.1309 0.39406,3.7786 -1.05552,-0.25082 -1.9043,-0.99624 -1.9043,-0.99624" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7244">
          <path
             id="path7246"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 399.241,372.898 c 1.767,1.704 4.242,3.055 6.193,3.465 -0.36,3.684 0.555,8.875 1.118,10.711 -2.995,-0.711 -5.403,-2.824 -5.403,-2.824" />
        </g>
        <path
           id="path7248"
           style="fill:#5b5b5b;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 173.94474,114.86725 c 1.78435,2.56434 3.31117,2.85115 5.43348,0 l -0.77435,1.88242 -1.02799,1.18498 -0.94827,0.27976 -1.09008,-0.41064 -0.97402,-1.28023 z" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7250">
          <path
             id="path7252"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -416.801,407.16 c 3.664,0.047 8.595,-0.984 10.311,-3.75 0,0 6.917,-21.937 7.113,-30.043 0.199,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.569,9.449 -7.805,9.488" />
        </g>
        <path
           id="path7254"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 178.15867,135.92491 c 0.30057,-0.90241 0.60784,-2.16076 0.16263,-3.27272 -0.32949,-0.82268 -1.08585,-1.33526 -1.41676,-1.92229 -0.31115,0.55104 -1.06503,1.08585 -1.41499,1.92229 -0.4452,1.11196 -0.13793,2.37031 0.16122,3.27272" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7256">
          <path
             id="path7258"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 420.82,406.574 c 0.852,-2.558 1.724,-6.125 0.461,-9.277 -0.934,-2.332 -3.081,-3.785 -4.019,-5.449 -0.884,1.562 -3.023,3.078 -4.016,5.449 -1.263,3.152 -0.391,6.719 0.458,9.277" />
        </g>
        <path
           id="path7260"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 182.72961,123.93893 c -0.623,0.60078 -1.49507,1.07597 -2.18264,1.22238 0.12665,1.29787 -0.19579,3.1309 -0.3944,3.77825 1.05586,-0.25048 1.90465,-0.99625 1.90465,-0.99625" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7262">
          <path
             id="path7264"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -433.79,372.598 c 1.768,1.703 4.243,3.05 6.194,3.465 -0.36,3.679 0.555,8.875 1.118,10.71 -2.995,-0.71 -5.403,-2.824 -5.403,-2.824" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7266">
          <path
             id="path7268"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 408.863,346.883 c 5.064,7.269 9.396,8.082 15.417,0" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7270">
          <path
             id="path7272"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 416.343,407.16 c 3.664,0.047 8.594,-0.984 10.307,-3.75 0,0 6.921,-21.937 7.116,-30.043 0.2,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.568,9.449 -7.804,9.488" />
        </g>
        <g
           id="g7274"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g7276">
            <path
               id="path7284"
               style="fill:url(#linearGradient7282);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z" />
          </g>
        </g>
        <path
           id="path7286"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 183.53042,138.69774 c 0.27269,-0.49636 0.73307,-1.52717 0.26987,-2.09761 -0.44379,-0.54963 -0.5207,-0.5387 -0.9465,-1.15747 -0.28399,0.30304 -0.87242,0.40111 -1.19204,0.86113 -0.40675,0.61348 -0.37218,1.45415 -0.0991,1.95016" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7288">
          <path
             id="path7290"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 436.061,414.434 c 0.774,-1.407 2.08,-4.329 0.767,-5.946 -1.259,-1.558 -1.478,-1.527 -2.687,-3.281 -0.805,0.859 -2.475,1.137 -3.382,2.441 -1.153,1.739 -1.055,4.122 -0.281,5.528" />
        </g>
        <path
           id="path7292"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 181.87942,131.45733 c 1.07914,0.44521 1.33808,0.57468 2.52165,0.68086 0.0787,0.92181 0.12136,2.69276 0.12136,2.69276 -2.02283,-0.001 -2.97921,-0.54046 -3.75779,-1.04458 0.43674,-0.74295 0.97543,-1.37125 1.11478,-2.32904 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7294">
          <path
             id="path7296"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 431.377,393.91 c 3.062,1.262 3.797,1.629 7.155,1.93 0.223,2.613 0.345,7.633 0.345,7.633 -5.74,-0.004 -8.454,-1.532 -10.663,-2.961 1.239,-2.106 2.768,-3.887 3.163,-6.602 z" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7298">
          <path
             id="path7300"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z" />
        </g>
        <path
           id="path7302"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 186.28773,132.2719 c 1.07914,0.44485 2.42111,-0.28822 2.86632,-0.47978 0.0801,0.92216 1.08056,2.38266 1.08056,2.38266 -1.11231,0.54151 -2.95346,0.88053 -4.29825,0.76905 0.21484,-0.76623 0.21237,-1.71414 0.35137,-2.67193 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g7304">
          <path
             id="path7306"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 443.885,396.219 c 3.062,1.261 6.87,-0.817 8.133,-1.36 0.227,2.614 3.066,6.754 3.066,6.754 -3.156,1.535 -8.38,2.496 -12.196,2.18 0.61,-2.172 0.602,-4.859 0.997,-7.574 z" />
        </g>
      </g>
      <text
         class="settlement1 name"
         id="text17276"
         y="107.57201"
         x="232.83333"
         style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;stroke-width:0.264583"
         xml:space="preserve"><tspan
           style="stroke-width:0.264583"
           y="107.57201"
           x="232.83333"
           id="tspan17274"
           sodipodi:role="line">Newbridge</tspan></text>
    </g>
    <g
       id="g2317"
       class="settlement2 selection">
      <g
         class="settlement2 buildings"
         id="g17436"
         transform="translate(133.68117,31.28222)">
        <g
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
           id="g17282">
          <g
             id="g17280"
             transform="scale(0.999035,1)">
            <path
               d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z"
               style="fill:url(#linearGradient17442);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path17278" />
          </g>
        </g>
        <path
           d="m 184.08428,131.56493 c 0.23706,-0.42863 0.47801,-1.028 0.12806,-1.55716 -0.25894,-0.39159 -0.85584,-0.63536 -1.11619,-0.91511 -0.24659,0.26176 -0.84067,0.51682 -1.1176,0.91511 -0.34996,0.52916 -0.10866,1.12853 0.12806,1.55716"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17284" />
        <g
           id="g17288"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 437.633,394.215 c 0.673,-1.215 1.357,-2.914 0.364,-4.414 -0.735,-1.11 -2.428,-1.801 -3.167,-2.594 -0.7,0.742 -2.385,1.465 -3.171,2.594 -0.994,1.5 -0.309,3.199 0.363,4.414"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17286" />
        </g>
        <path
           d="m 186.78514,124.96975 c -0.48789,0.47801 -0.78281,0.80045 -1.57903,0.78387 0.39829,0.83785 0.69991,2.37702 0.69991,2.37702 0,0 1.24989,-0.20638 2.17029,-1.18216"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17290" />
        <g
           id="g17294"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 445.297,375.52 c -1.384,1.355 -2.221,2.269 -4.481,2.222 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.585 6.158,-3.351"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17292" />
        </g>
        <path
           d="m 182.20997,125.9674 c 0.9331,0.38453 1.45521,0.21908 1.83974,0.055 0.0691,0.79657 0.70026,2.32198 0.70026,2.32198 -1.28164,0.25506 -2.48885,0.2286 -3.22615,-0.12418 0.18485,-0.66287 0.56656,-1.42487 0.68615,-2.25284 z"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17296" />
        <g
           id="g17300"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 432.316,378.348 c 2.647,1.09 4.128,0.621 5.219,0.156 0.196,2.258 1.987,6.582 1.987,6.582 -3.637,0.723 -7.062,0.648 -9.154,-0.352 0.524,-1.879 1.607,-4.039 1.948,-6.386 z"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17298" />
        </g>
        <path
           d="m 179.47347,125.0082 c 0.48754,0.47943 0.78246,0.80045 1.57904,0.78423 -0.39829,0.83784 -0.69992,2.37701 -0.69992,2.37701 0,0 -1.24989,-0.20673 -2.17064,-1.18251"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17302" />
        <g
           id="g17306"
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m -424.55,375.629 c -1.384,1.359 -2.221,2.269 -4.481,2.223 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.586 6.158,-3.352"
             style="fill:none;stroke:#000000;stroke-width:1.10788;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17304" />
        </g>
        <g
           id="g17310"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17308" />
        </g>
        <g
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
           id="g17316">
          <g
             id="g17314"
             transform="scale(0.999035,1)">
            <path
               d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z"
               style="fill:url(#linearGradient17444);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path17312" />
          </g>
        </g>
        <path
           d="m 168.87497,134.15714 c 0.25612,-0.46461 0.51788,-1.11231 0.13899,-1.68416 -0.28116,-0.42439 -0.92463,-0.68757 -1.2072,-0.98954 -0.266,0.28398 -0.90805,0.55809 -1.20721,0.98954 -0.37888,0.57185 -0.11818,1.21955 0.13794,1.68416"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17318" />
        <g
           id="g17322"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 394.478,401.563 c 0.727,-1.317 1.47,-3.153 0.395,-4.774 -0.798,-1.203 -2.623,-1.949 -3.425,-2.805 -0.755,0.805 -2.577,1.582 -3.425,2.805 -1.075,1.621 -0.336,3.457 0.391,4.774"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17320" />
        </g>
        <path
           d="m 171.79632,127.02574 c -0.52775,0.51682 -0.84631,0.86395 -1.70744,0.84596 0.43145,0.90664 0.75812,2.5714 0.75812,2.5714 0,0 1.35043,-0.22331 2.34526,-1.27882"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17324" />
        <g
           id="g17328"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 402.767,381.348 c -1.497,1.465 -2.4,2.449 -4.844,2.398 1.224,2.57 2.15,7.289 2.15,7.289 0,0 3.832,-0.633 6.655,-3.625"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17326" />
        </g>
        <path
           d="m 166.84897,128.10312 c 1.00894,0.41628 1.57374,0.23848 1.98861,0.0607 0.0744,0.86148 0.75811,2.51072 0.75811,2.51072 -1.385,0.27446 -2.69134,0.24694 -3.48932,-0.13335 0.20108,-0.71685 0.61313,-1.54235 0.7426,-2.43805 z"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17330" />
        <g
           id="g17334"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 388.73,384.402 c 2.863,1.18 4.466,0.676 5.643,0.172 0.211,2.442 2.15,7.117 2.15,7.117 -3.929,0.778 -7.636,0.7 -9.9,-0.378 0.571,-2.032 1.74,-4.372 2.107,-6.911 z"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17332" />
        </g>
        <path
           d="m 163.89057,127.06701 c 0.52635,0.51823 0.84596,0.86537 1.70604,0.84737 -0.43004,0.907 -0.75671,2.56999 -0.75671,2.56999 0,0 -1.35044,-0.2219 -2.34527,-1.27741"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17336" />
        <g
           id="g17340"
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m -380.336,381.465 c -1.493,1.469 -2.4,2.453 -4.84,2.402 1.22,2.571 2.146,7.285 2.146,7.285 0,0 3.832,-0.629 6.655,-3.621"
             style="fill:none;stroke:#000000;stroke-width:1.19795;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17338" />
        </g>
        <g
           id="g17344"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17342" />
        </g>
        <g
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
           id="g17350">
          <g
             id="g17348"
             transform="scale(0.999035,1)">
            <path
               d="m 406.49,403.41 c 0,0 -6.917,-21.937 -7.113,-30.043 -0.199,-8.105 9.486,-26.484 9.486,-26.484 0,0 2.569,9.449 7.707,9.488 5.142,-0.039 7.71,-9.488 7.71,-9.488 0,0 9.686,18.379 9.486,26.484 -0.195,8.106 -7.116,30.043 -7.116,30.043 -1.713,2.766 -6.643,3.797 -10.08,3.75 -3.433,0.047 -8.364,-0.984 -10.08,-3.75 z"
               style="fill:url(#linearGradient17446);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path17346" />
          </g>
        </g>
        <path
           d="m 172.40134,117.91666 c 0,0 0.90522,1.18675 1.25377,1.39453 0.0346,1.01177 -0.55668,2.78942 -0.55668,2.78942 0,0 -0.97544,-0.55669 -1.60267,-1.60267"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17352" />
        <g
           id="g17356"
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m -404.484,355.527 c 0,0 -2.569,3.364 -3.558,3.953 -0.098,2.868 1.58,7.907 1.58,7.907 0,0 2.768,-1.578 4.547,-4.543"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17354" />
        </g>
        <path
           d="m 180.82391,117.77767 c 0,0 -0.90559,1.18498 -1.25413,1.39453 -0.0346,1.01141 0.55668,2.78906 0.55668,2.78906 0,0 0.97579,-0.5581 1.60267,-1.60408"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17358" />
        <g
           id="g17362"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 428.382,355.133 c 0,0 -2.569,3.359 -3.558,3.953 -0.098,2.867 1.58,7.906 1.58,7.906 0,0 2.768,-1.582 4.547,-4.547"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17360" />
        </g>
        <path
           d="m 175.37631,119.74828 c 1.18533,0.4879 2.05599,0.0688 2.54247,-0.13934 0.0882,1.01035 0.62724,3.13654 0.62724,3.13654 -1.6249,0.56762 -2.77424,0.43004 -3.7084,-0.0166 0.23424,-0.84067 0.38735,-1.93075 0.53869,-2.98062 z"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17364" />
        <g
           id="g17368"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 412.926,360.719 c 3.362,1.383 5.833,0.195 7.214,-0.395 0.25,2.864 1.779,8.891 1.779,8.891 -4.61,1.609 -7.871,1.219 -10.522,-0.047 0.665,-2.383 1.099,-5.473 1.529,-8.449 z"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17366" />
        </g>
        <path
           d="m 178.79826,125.77443 c -0.23425,1.12148 -0.41064,2.28318 -0.25647,3.66431 -1.15888,0.28645 -2.35092,0.36512 -3.60892,0.0247 0.16651,-1.31868 -0.0127,-2.56857 -0.18768,-3.58034 0.80363,0.34607 2.62114,0.53622 4.05307,-0.10866 z"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17370" />
        <g
           id="g17374"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 422.634,377.801 c -0.664,3.179 -1.165,6.472 -0.727,10.387 -3.288,0.812 -6.67,1.035 -10.24,0.07 0.473,-3.738 -0.036,-7.281 -0.532,-10.149 2.279,0.981 7.437,1.52 11.499,-0.308 z"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17372" />
        </g>
        <path
           d="m 170.55313,124.04476 c 0.62301,0.60114 1.49543,1.07774 2.18299,1.22238 -0.12664,1.29963 0.19579,3.1309 0.39406,3.7786 -1.05552,-0.25082 -1.9043,-0.99624 -1.9043,-0.99624"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17376" />
        <g
           id="g17380"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 399.241,372.898 c 1.767,1.704 4.242,3.055 6.193,3.465 -0.36,3.684 0.555,8.875 1.118,10.711 -2.995,-0.711 -5.403,-2.824 -5.403,-2.824"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17378" />
        </g>
        <path
           d="m 173.94474,114.86725 c 1.78435,2.56434 3.31117,2.85115 5.43348,0 l -0.77435,1.88242 -1.02799,1.18498 -0.94827,0.27976 -1.09008,-0.41064 -0.97402,-1.28023 z"
           style="fill:#5b5b5b;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17382" />
        <g
           id="g17386"
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m -416.801,407.16 c 3.664,0.047 8.595,-0.984 10.311,-3.75 0,0 6.917,-21.937 7.113,-30.043 0.199,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.569,9.449 -7.805,9.488"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17384" />
        </g>
        <path
           d="m 178.15867,135.92491 c 0.30057,-0.90241 0.60784,-2.16076 0.16263,-3.27272 -0.32949,-0.82268 -1.08585,-1.33526 -1.41676,-1.92229 -0.31115,0.55104 -1.06503,1.08585 -1.41499,1.92229 -0.4452,1.11196 -0.13793,2.37031 0.16122,3.27272"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17388" />
        <g
           id="g17392"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 420.82,406.574 c 0.852,-2.558 1.724,-6.125 0.461,-9.277 -0.934,-2.332 -3.081,-3.785 -4.019,-5.449 -0.884,1.562 -3.023,3.078 -4.016,5.449 -1.263,3.152 -0.391,6.719 0.458,9.277"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17390" />
        </g>
        <path
           d="m 182.72961,123.93893 c -0.623,0.60078 -1.49507,1.07597 -2.18264,1.22238 0.12665,1.29787 -0.19579,3.1309 -0.3944,3.77825 1.05586,-0.25048 1.90465,-0.99625 1.90465,-0.99625"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17394" />
        <g
           id="g17398"
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m -433.79,372.598 c 1.768,1.703 4.243,3.05 6.194,3.465 -0.36,3.679 0.555,8.875 1.118,10.71 -2.995,-0.71 -5.403,-2.824 -5.403,-2.824"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17396" />
        </g>
        <g
           id="g17402"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 408.863,346.883 c 5.064,7.269 9.396,8.082 15.417,0"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17400" />
        </g>
        <g
           id="g17406"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 416.343,407.16 c 3.664,0.047 8.594,-0.984 10.307,-3.75 0,0 6.921,-21.937 7.116,-30.043 0.2,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.568,9.449 -7.804,9.488"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17404" />
        </g>
        <g
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
           id="g17412">
          <g
             id="g17410"
             transform="scale(0.999035,1)">
            <path
               d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z"
               style="fill:url(#linearGradient17448);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               id="path17408" />
          </g>
        </g>
        <path
           d="m 183.53042,138.69774 c 0.27269,-0.49636 0.73307,-1.52717 0.26987,-2.09761 -0.44379,-0.54963 -0.5207,-0.5387 -0.9465,-1.15747 -0.28399,0.30304 -0.87242,0.40111 -1.19204,0.86113 -0.40675,0.61348 -0.37218,1.45415 -0.0991,1.95016"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17414" />
        <g
           id="g17418"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 436.061,414.434 c 0.774,-1.407 2.08,-4.329 0.767,-5.946 -1.259,-1.558 -1.478,-1.527 -2.687,-3.281 -0.805,0.859 -2.475,1.137 -3.382,2.441 -1.153,1.739 -1.055,4.122 -0.281,5.528"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17416" />
        </g>
        <path
           d="m 181.87942,131.45733 c 1.07914,0.44521 1.33808,0.57468 2.52165,0.68086 0.0787,0.92181 0.12136,2.69276 0.12136,2.69276 -2.02283,-0.001 -2.97921,-0.54046 -3.75779,-1.04458 0.43674,-0.74295 0.97543,-1.37125 1.11478,-2.32904 z"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17420" />
        <g
           id="g17424"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 431.377,393.91 c 3.062,1.262 3.797,1.629 7.155,1.93 0.223,2.613 0.345,7.633 0.345,7.633 -5.74,-0.004 -8.454,-1.532 -10.663,-2.961 1.239,-2.106 2.768,-3.887 3.163,-6.602 z"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17422" />
        </g>
        <g
           id="g17428"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17426" />
        </g>
        <path
           d="m 186.28773,132.2719 c 1.07914,0.44485 2.42111,-0.28822 2.86632,-0.47978 0.0801,0.92216 1.08056,2.38266 1.08056,2.38266 -1.11231,0.54151 -2.95346,0.88053 -4.29825,0.76905 0.21484,-0.76623 0.21237,-1.71414 0.35137,-2.67193 z"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           id="path17430" />
        <g
           id="g17434"
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
          <path
             d="m 443.885,396.219 c 3.062,1.261 6.87,-0.817 8.133,-1.36 0.227,2.614 3.066,6.754 3.066,6.754 -3.156,1.535 -8.38,2.496 -12.196,2.18 0.61,-2.172 0.602,-4.859 0.997,-7.574 z"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17432" />
        </g>
      </g>
      <text
         class="settlement2 name"
         xml:space="preserve"
         style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;stroke-width:0.264583"
         x="299.35715"
         y="177.8756"
         id="text17440"><tspan
           sodipodi:role="line"
           id="tspan17438"
           x="299.35715"
           y="177.8756"
           style="stroke-width:0.264583">Westford</tspan></text>
    </g>
    <g
       id="g2149"
       class="settlement0 selection">
      <g
         class="settlement0 buildings"
         style="display:inline"
         transform="translate(4.7912933,30.526268)"
         id="g17608">
        <g
           id="g17454"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g17452">
            <path
               id="path17450"
               style="fill:url(#linearGradient17614);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z" />
          </g>
        </g>
        <path
           id="path17456"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 184.08428,131.56493 c 0.23706,-0.42863 0.47801,-1.028 0.12806,-1.55716 -0.25894,-0.39159 -0.85584,-0.63536 -1.11619,-0.91511 -0.24659,0.26176 -0.84067,0.51682 -1.1176,0.91511 -0.34996,0.52916 -0.10866,1.12853 0.12806,1.55716" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17460">
          <path
             id="path17458"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 437.633,394.215 c 0.673,-1.215 1.357,-2.914 0.364,-4.414 -0.735,-1.11 -2.428,-1.801 -3.167,-2.594 -0.7,0.742 -2.385,1.465 -3.171,2.594 -0.994,1.5 -0.309,3.199 0.363,4.414" />
        </g>
        <path
           id="path17462"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 186.78514,124.96975 c -0.48789,0.47801 -0.78281,0.80045 -1.57903,0.78387 0.39829,0.83785 0.69991,2.37702 0.69991,2.37702 0,0 1.24989,-0.20638 2.17029,-1.18216" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17466">
          <path
             id="path17464"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 445.297,375.52 c -1.384,1.355 -2.221,2.269 -4.481,2.222 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.585 6.158,-3.351" />
        </g>
        <path
           id="path17468"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 182.20997,125.9674 c 0.9331,0.38453 1.45521,0.21908 1.83974,0.055 0.0691,0.79657 0.70026,2.32198 0.70026,2.32198 -1.28164,0.25506 -2.48885,0.2286 -3.22615,-0.12418 0.18485,-0.66287 0.56656,-1.42487 0.68615,-2.25284 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17472">
          <path
             id="path17470"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 432.316,378.348 c 2.647,1.09 4.128,0.621 5.219,0.156 0.196,2.258 1.987,6.582 1.987,6.582 -3.637,0.723 -7.062,0.648 -9.154,-0.352 0.524,-1.879 1.607,-4.039 1.948,-6.386 z" />
        </g>
        <path
           id="path17474"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 179.47347,125.0082 c 0.48754,0.47943 0.78246,0.80045 1.57904,0.78423 -0.39829,0.83784 -0.69992,2.37701 -0.69992,2.37701 0,0 -1.24989,-0.20673 -2.17064,-1.18251" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17478">
          <path
             id="path17476"
             style="fill:none;stroke:#000000;stroke-width:1.10788;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -424.55,375.629 c -1.384,1.359 -2.221,2.269 -4.481,2.223 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.586 6.158,-3.352" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17482">
          <path
             id="path17480"
             style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z" />
        </g>
        <g
           id="g17488"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g17486">
            <path
               id="path17484"
               style="fill:url(#linearGradient17616);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z" />
          </g>
        </g>
        <path
           id="path17490"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 168.87497,134.15714 c 0.25612,-0.46461 0.51788,-1.11231 0.13899,-1.68416 -0.28116,-0.42439 -0.92463,-0.68757 -1.2072,-0.98954 -0.266,0.28398 -0.90805,0.55809 -1.20721,0.98954 -0.37888,0.57185 -0.11818,1.21955 0.13794,1.68416" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17494">
          <path
             id="path17492"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 394.478,401.563 c 0.727,-1.317 1.47,-3.153 0.395,-4.774 -0.798,-1.203 -2.623,-1.949 -3.425,-2.805 -0.755,0.805 -2.577,1.582 -3.425,2.805 -1.075,1.621 -0.336,3.457 0.391,4.774" />
        </g>
        <path
           id="path17496"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 171.79632,127.02574 c -0.52775,0.51682 -0.84631,0.86395 -1.70744,0.84596 0.43145,0.90664 0.75812,2.5714 0.75812,2.5714 0,0 1.35043,-0.22331 2.34526,-1.27882" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17500">
          <path
             id="path17498"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 402.767,381.348 c -1.497,1.465 -2.4,2.449 -4.844,2.398 1.224,2.57 2.15,7.289 2.15,7.289 0,0 3.832,-0.633 6.655,-3.625" />
        </g>
        <path
           id="path17502"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 166.84897,128.10312 c 1.00894,0.41628 1.57374,0.23848 1.98861,0.0607 0.0744,0.86148 0.75811,2.51072 0.75811,2.51072 -1.385,0.27446 -2.69134,0.24694 -3.48932,-0.13335 0.20108,-0.71685 0.61313,-1.54235 0.7426,-2.43805 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17506">
          <path
             id="path17504"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 388.73,384.402 c 2.863,1.18 4.466,0.676 5.643,0.172 0.211,2.442 2.15,7.117 2.15,7.117 -3.929,0.778 -7.636,0.7 -9.9,-0.378 0.571,-2.032 1.74,-4.372 2.107,-6.911 z" />
        </g>
        <path
           id="path17508"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 163.89057,127.06701 c 0.52635,0.51823 0.84596,0.86537 1.70604,0.84737 -0.43004,0.907 -0.75671,2.56999 -0.75671,2.56999 0,0 -1.35044,-0.2219 -2.34527,-1.27741" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17512">
          <path
             id="path17510"
             style="fill:none;stroke:#000000;stroke-width:1.19795;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -380.336,381.465 c -1.493,1.469 -2.4,2.453 -4.84,2.402 1.22,2.571 2.146,7.285 2.146,7.285 0,0 3.832,-0.629 6.655,-3.621" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17516">
          <path
             id="path17514"
             style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z" />
        </g>
        <g
           id="g17522"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g17520">
            <path
               id="path17518"
               style="fill:url(#linearGradient17618);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 406.49,403.41 c 0,0 -6.917,-21.937 -7.113,-30.043 -0.199,-8.105 9.486,-26.484 9.486,-26.484 0,0 2.569,9.449 7.707,9.488 5.142,-0.039 7.71,-9.488 7.71,-9.488 0,0 9.686,18.379 9.486,26.484 -0.195,8.106 -7.116,30.043 -7.116,30.043 -1.713,2.766 -6.643,3.797 -10.08,3.75 -3.433,0.047 -8.364,-0.984 -10.08,-3.75 z" />
          </g>
        </g>
        <path
           id="path17524"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 172.40134,117.91666 c 0,0 0.90522,1.18675 1.25377,1.39453 0.0346,1.01177 -0.55668,2.78942 -0.55668,2.78942 0,0 -0.97544,-0.55669 -1.60267,-1.60267" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17528">
          <path
             id="path17526"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -404.484,355.527 c 0,0 -2.569,3.364 -3.558,3.953 -0.098,2.868 1.58,7.907 1.58,7.907 0,0 2.768,-1.578 4.547,-4.543" />
        </g>
        <path
           id="path17530"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 180.82391,117.77767 c 0,0 -0.90559,1.18498 -1.25413,1.39453 -0.0346,1.01141 0.55668,2.78906 0.55668,2.78906 0,0 0.97579,-0.5581 1.60267,-1.60408" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17534">
          <path
             id="path17532"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 428.382,355.133 c 0,0 -2.569,3.359 -3.558,3.953 -0.098,2.867 1.58,7.906 1.58,7.906 0,0 2.768,-1.582 4.547,-4.547" />
        </g>
        <path
           id="path17536"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 175.37631,119.74828 c 1.18533,0.4879 2.05599,0.0688 2.54247,-0.13934 0.0882,1.01035 0.62724,3.13654 0.62724,3.13654 -1.6249,0.56762 -2.77424,0.43004 -3.7084,-0.0166 0.23424,-0.84067 0.38735,-1.93075 0.53869,-2.98062 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17540">
          <path
             id="path17538"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 412.926,360.719 c 3.362,1.383 5.833,0.195 7.214,-0.395 0.25,2.864 1.779,8.891 1.779,8.891 -4.61,1.609 -7.871,1.219 -10.522,-0.047 0.665,-2.383 1.099,-5.473 1.529,-8.449 z" />
        </g>
        <path
           id="path17542"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 178.79826,125.77443 c -0.23425,1.12148 -0.41064,2.28318 -0.25647,3.66431 -1.15888,0.28645 -2.35092,0.36512 -3.60892,0.0247 0.16651,-1.31868 -0.0127,-2.56857 -0.18768,-3.58034 0.80363,0.34607 2.62114,0.53622 4.05307,-0.10866 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17546">
          <path
             id="path17544"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 422.634,377.801 c -0.664,3.179 -1.165,6.472 -0.727,10.387 -3.288,0.812 -6.67,1.035 -10.24,0.07 0.473,-3.738 -0.036,-7.281 -0.532,-10.149 2.279,0.981 7.437,1.52 11.499,-0.308 z" />
        </g>
        <path
           id="path17548"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 170.55313,124.04476 c 0.62301,0.60114 1.49543,1.07774 2.18299,1.22238 -0.12664,1.29963 0.19579,3.1309 0.39406,3.7786 -1.05552,-0.25082 -1.9043,-0.99624 -1.9043,-0.99624" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17552">
          <path
             id="path17550"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 399.241,372.898 c 1.767,1.704 4.242,3.055 6.193,3.465 -0.36,3.684 0.555,8.875 1.118,10.711 -2.995,-0.711 -5.403,-2.824 -5.403,-2.824" />
        </g>
        <path
           id="path17554"
           style="fill:#5b5b5b;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 173.94474,114.86725 c 1.78435,2.56434 3.31117,2.85115 5.43348,0 l -0.77435,1.88242 -1.02799,1.18498 -0.94827,0.27976 -1.09008,-0.41064 -0.97402,-1.28023 z" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17558">
          <path
             id="path17556"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -416.801,407.16 c 3.664,0.047 8.595,-0.984 10.311,-3.75 0,0 6.917,-21.937 7.113,-30.043 0.199,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.569,9.449 -7.805,9.488" />
        </g>
        <path
           id="path17560"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 178.15867,135.92491 c 0.30057,-0.90241 0.60784,-2.16076 0.16263,-3.27272 -0.32949,-0.82268 -1.08585,-1.33526 -1.41676,-1.92229 -0.31115,0.55104 -1.06503,1.08585 -1.41499,1.92229 -0.4452,1.11196 -0.13793,2.37031 0.16122,3.27272" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17564">
          <path
             id="path17562"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 420.82,406.574 c 0.852,-2.558 1.724,-6.125 0.461,-9.277 -0.934,-2.332 -3.081,-3.785 -4.019,-5.449 -0.884,1.562 -3.023,3.078 -4.016,5.449 -1.263,3.152 -0.391,6.719 0.458,9.277" />
        </g>
        <path
           id="path17566"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 182.72961,123.93893 c -0.623,0.60078 -1.49507,1.07597 -2.18264,1.22238 0.12665,1.29787 -0.19579,3.1309 -0.3944,3.77825 1.05586,-0.25048 1.90465,-0.99625 1.90465,-0.99625" />
        <g
           transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17570">
          <path
             id="path17568"
             style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -433.79,372.598 c 1.768,1.703 4.243,3.05 6.194,3.465 -0.36,3.679 0.555,8.875 1.118,10.71 -2.995,-0.71 -5.403,-2.824 -5.403,-2.824" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17574">
          <path
             id="path17572"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 408.863,346.883 c 5.064,7.269 9.396,8.082 15.417,0" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17578">
          <path
             id="path17576"
             style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 416.343,407.16 c 3.664,0.047 8.594,-0.984 10.307,-3.75 0,0 6.921,-21.937 7.116,-30.043 0.2,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.568,9.449 -7.804,9.488" />
        </g>
        <g
           id="g17584"
           transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
          <g
             transform="scale(0.999035,1)"
             id="g17582">
            <path
               id="path17580"
               style="fill:url(#linearGradient17620);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z" />
          </g>
        </g>
        <path
           id="path17586"
           style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 183.53042,138.69774 c 0.27269,-0.49636 0.73307,-1.52717 0.26987,-2.09761 -0.44379,-0.54963 -0.5207,-0.5387 -0.9465,-1.15747 -0.28399,0.30304 -0.87242,0.40111 -1.19204,0.86113 -0.40675,0.61348 -0.37218,1.45415 -0.0991,1.95016" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17590">
          <path
             id="path17588"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 436.061,414.434 c 0.774,-1.407 2.08,-4.329 0.767,-5.946 -1.259,-1.558 -1.478,-1.527 -2.687,-3.281 -0.805,0.859 -2.475,1.137 -3.382,2.441 -1.153,1.739 -1.055,4.122 -0.281,5.528" />
        </g>
        <path
           id="path17592"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 181.87942,131.45733 c 1.07914,0.44521 1.33808,0.57468 2.52165,0.68086 0.0787,0.92181 0.12136,2.69276 0.12136,2.69276 -2.02283,-0.001 -2.97921,-0.54046 -3.75779,-1.04458 0.43674,-0.74295 0.97543,-1.37125 1.11478,-2.32904 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17596">
          <path
             id="path17594"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 431.377,393.91 c 3.062,1.262 3.797,1.629 7.155,1.93 0.223,2.613 0.345,7.633 0.345,7.633 -5.74,-0.004 -8.454,-1.532 -10.663,-2.961 1.239,-2.106 2.768,-3.887 3.163,-6.602 z" />
        </g>
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17600">
          <path
             id="path17598"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z" />
        </g>
        <path
           id="path17602"
           style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
           d="m 186.28773,132.2719 c 1.07914,0.44485 2.42111,-0.28822 2.86632,-0.47978 0.0801,0.92216 1.08056,2.38266 1.08056,2.38266 -1.11231,0.54151 -2.95346,0.88053 -4.29825,0.76905 0.21484,-0.76623 0.21237,-1.71414 0.35137,-2.67193 z" />
        <g
           transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
           id="g17606">
          <path
             id="path17604"
             style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 443.885,396.219 c 3.062,1.261 6.87,-0.817 8.133,-1.36 0.227,2.614 3.066,6.754 3.066,6.754 -3.156,1.535 -8.38,2.496 -12.196,2.18 0.61,-2.172 0.602,-4.859 0.997,-7.574 z" />
        </g>
      </g>
      <text
         class="settlement0 name"
         id="text17612"
         y="177.11964"
         x="170.46727"
         style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;stroke-width:0.264583"
         xml:space="preserve"><tspan
           style="stroke-width:0.264583"
           y="177.11964"
           x="170.46727"
           id="tspan17610"
           sodipodi:role="line">Highton</tspan></text>
    </g>
    <path
       style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 191.44494,148.54464 c 7.55952,-5.10268 10.70718,-8.07642 15.11904,-14.1741 11.65509,-16.1086 15.875,-36.096731 23.05655,-40.632445"
       id="path17624"
       sodipodi:nodetypes="csc"
       inkscape:label="path-hn"
       class="path settlement0 settlement1" />
    <path
       id="path17626"
       d="m 264.39435,90.336311 c 14.48166,-2.794527 33.6293,10.742629 40.44344,17.953869 12.03915,12.74074 15.84813,23.92877 13.60715,38.55357"
       style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       sodipodi:nodetypes="csc"
       inkscape:label="path-nw"
       class="path settlement1 settlement2" />
    <path
       sodipodi:nodetypes="csc"
       style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 198.62649,164.98661 c 10.20535,-6.80357 28.78039,-9.28737 47.436,-4.15774 14.26343,3.92194 32.31696,10.01637 46.1131,5.85863"
       id="path17628"
       inkscape:label="path-wh"
       class="path settlement2 settlement0" />
    <text
       id="text18001"
       y="193.08389"
       x="177.87968"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       xml:space="preserve"
       class="settlement0 player1 number"><tspan
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
         y="193.08389"
         x="177.87968"
         id="tspan17999"
         sodipodi:role="line">0</tspan></text>
    <text
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       x="167.29636"
       y="193.08389"
       id="text17997"
       class="settlement0 player0 number"><tspan
         sodipodi:role="line"
         id="tspan17995"
         x="167.29636"
         y="193.08389"
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
    <text
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       x="188.46303"
       y="193.08389"
       id="text18005"
       class="settlement0 player2 number"><tspan
         sodipodi:role="line"
         id="tspan18003"
         x="188.46303"
         y="193.08389"
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
    <g
       class="settlement2 player2 unit"
       transform="translate(148.61625,-0.85044448)"
       id="g2035">
      <path
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
         style="fill:#113185;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path2029" />
      <g
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
         id="g2033">
        <path
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path2031" />
      </g>
    </g>
    <g
       class="settlement2 player1 unit"
       id="g2043"
       transform="translate(138.03291,-0.85044448)">
      <path
         id="path2037"
         style="fill:#118512;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
      <g
         id="g2041"
         transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
        <path
           id="path2039"
           style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
      </g>
    </g>
    <text
       class="settlement2 player1 number"
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       x="309.10904"
       y="193.08389"
       id="text2055"><tspan
         sodipodi:role="line"
         id="tspan2053"
         x="309.10904"
         y="193.08389"
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
    <text
       class="settlement2 player0 number"
       id="text2059"
       y="193.08389"
       x="298.5257"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       xml:space="preserve"><tspan
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
         y="193.08389"
         x="298.5257"
         id="tspan2057"
         sodipodi:role="line">0</tspan></text>
    <text
       class="settlement2 player2 number"
       id="text2063"
       y="193.08389"
       x="319.69238"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       xml:space="preserve"><tspan
         style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
         y="193.08389"
         x="319.69238"
         id="tspan2061"
         sodipodi:role="line">0</tspan></text>
  </g>
</svg>
`;

