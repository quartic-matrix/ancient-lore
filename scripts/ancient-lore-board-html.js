
'use strict'

const boardHtml = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   id="svg8"
   version="1.1"
   viewBox="150 70 208 132">
   <defs
   id="defs2">
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.848818,0,0,-0.848818,39.829642,494.85489)"
     spreadMethod="pad"
     id="linearGradient2760">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2756" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2758" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.917825,0,0,-0.917825,1.272761,499.15031)"
     spreadMethod="pad"
     id="linearGradient2800">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2796" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2798" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.076717,0,0,-1.076717,-18.50331,516.82899)"
     spreadMethod="pad"
     id="linearGradient2840">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2836" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2838" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.981903,0,0,-0.981903,34.451512,498.45041)"
     spreadMethod="pad"
     id="linearGradient2908">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2904" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2906" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath2940">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path2938" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664845,0,0,0.664845,104.76256,57.810774)"
     spreadMethod="pad"
     id="linearGradient2946">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2942" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2944" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,74.562516,54.446341)"
     spreadMethod="pad"
     id="linearGradient2952">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2948" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2950" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,59.072719,40.599349)"
     spreadMethod="pad"
     id="linearGradient2958">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2954" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2956" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,100.55009,54.994547)"
     spreadMethod="pad"
     id="linearGradient2964">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop2960" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop2962" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath3136">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path3134" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.664845,0,0,0.664845,85.574165,52.454617)"
     spreadMethod="pad"
     id="linearGradient3142">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3138" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3140" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.718895,0,0,0.718895,115.77421,49.090184)"
     spreadMethod="pad"
     id="linearGradient3148">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3144" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3146" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.843349,0,0,0.843349,131.26401,35.243192)"
     spreadMethod="pad"
     id="linearGradient3154">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3150" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3152" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.769085,0,0,0.769085,89.786637,49.638391)"
     spreadMethod="pad"
     id="linearGradient3160">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3156" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3158" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.848818,0,0,-0.848818,202.20579,514.00342)"
     spreadMethod="pad"
     id="linearGradient3334">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3330" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3332" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.917825,0,0,-0.917825,163.64891,518.29885)"
     spreadMethod="pad"
     id="linearGradient3374">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3370" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3372" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.076718,0,0,-1.076718,143.87283,535.97752)"
     spreadMethod="pad"
     id="linearGradient3414">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3410" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3412" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.981903,0,0,-0.981903,196.82766,517.59894)"
     spreadMethod="pad"
     id="linearGradient3482">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3478" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3480" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath3514">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path3512" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664844,0,0,0.664844,267.13871,53.662258)"
     spreadMethod="pad"
     id="linearGradient3520">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3516" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3518" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,236.93867,50.297825)"
     spreadMethod="pad"
     id="linearGradient3526">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3522" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3524" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,221.44887,36.450833)"
     spreadMethod="pad"
     id="linearGradient3532">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3528" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3530" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,262.92624,50.846031)"
     spreadMethod="pad"
     id="linearGradient3538">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3534" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3536" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath3710">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path3708" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.664844,0,0,0.664844,247.95032,48.30611)"
     spreadMethod="pad"
     id="linearGradient3716">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3712" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3714" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.718895,0,0,0.718895,278.15036,44.941677)"
     spreadMethod="pad"
     id="linearGradient3722">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3718" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3720" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.843349,0,0,0.843349,293.64016,31.094685)"
     spreadMethod="pad"
     id="linearGradient3728">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3724" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3726" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.769085,0,0,0.769085,252.16279,45.489883)"
     spreadMethod="pad"
     id="linearGradient3734">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3730" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3732" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath3906">
    <path
       d="m 266.984,238.555 c 1.719,1.015 3.68,2.215 5.649,3.554 -0.563,-2.57 -1.766,-5.332 -3.133,-7.05 1.789,0.398 3.773,1.664 3.773,1.664 0,0 1.207,7.066 2.45,8.367 -1.766,-0.543 -9.118,1.285 -9.118,1.285 0,0 -2.351,-1.637 -3.367,-2.656 2.653,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.719,-3.199 -4.347,-2.918 -5.441,-3.59 -7.609,-7.235 -2.121,-3.562 -2.187,-5.277 -3.039,-6.035 0.5,-0.238 0.754,-0.566 1.016,-1.246 0.418,0.344 0.871,0.449 1.519,0.293 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.895 2.613,3.82 6.554,6.145 z"
       id="path3904" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath3914">
    <path
       d="m 63.559118,160.17281 h 19.262774 v 18.35783 H 63.559118 Z"
       id="path3912" />
  </clipPath>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="86.434967"
     y2="158.55438"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient3920">
    <stop
       style="stop-opacity:1;stop-color:#ffffff"
       offset="0"
       id="stop3916" />
    <stop
       style="stop-opacity:0;stop-color:#ffffff"
       offset="1"
       id="stop3918" />
  </linearGradient>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask3922">
    <g
       id="g3928">
      <g
         clip-path="url(#clipPath3914)"
         id="g3926">
        <path
           d="m 63.559118,160.17281 h 19.262774 v 18.35783 H 63.559118 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path3924" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="86.434967"
     y2="158.55438"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient3936">
    <stop
       style="stop-opacity:1;stop-color:#ffffff"
       offset="0"
       id="stop3932" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop3934" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.106812,0,0,-1.107881,349.08108,595.37983)"
     spreadMethod="pad"
     id="linearGradient3966">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop3962" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop3964" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.196794,0,0,-1.19795,298.80498,600.98624)"
     spreadMethod="pad"
     id="linearGradient4006">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4002" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4004" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.403982,0,0,-1.405337,273.01805,624.06054)"
     spreadMethod="pad"
     id="linearGradient4046">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4042" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4044" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.280349,0,0,-1.281585,342.06829,600.07272)"
     spreadMethod="pad"
     id="linearGradient4114">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4110" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4112" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4154">
    <path
       d="m 483.957,210.672 c 2.602,0.086 5.594,0.23 8.684,0.535 -2.246,-2.594 -5.352,-5 -7.989,-6.113 2.293,-0.664 5.356,-0.461 5.356,-0.461 0,0 5.797,7.34 8.035,8.051 -2.363,0.484 -9.629,7.179 -9.629,7.179 0,0 -3.715,-0.402 -5.516,-0.933 3.411,-0.981 6.063,-2.34 9.493,-5.313 -3.102,0.012 -5.95,-0.019 -8.543,-0.086 -6.801,-0.617 -8.469,-0.703 -13.231,-3.519 -4.656,-2.754 -5.801,-4.676 -7.25,-5.016 0.422,-0.586 0.504,-1.117 0.383,-2.062 0.691,0.132 1.273,-0.032 1.922,-0.614 0.66,1.235 1.859,2.993 6.941,5.418 2.848,1.262 5.383,2.739 11.344,2.934 z"
       id="path4152" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4162">
    <path
       d="m 60.617518,155.32392 h 22.189114 v 26.96 H 60.617518 Z"
       id="path4160" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4170">
    <g
       id="g4176">
      <g
         clip-path="url(#clipPath4162)"
         id="g4174">
        <path
           d="m 60.617518,155.32392 h 22.189114 v 26.96 H 60.617518 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path4172" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="86.434967"
     y2="158.55438"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient4184">
    <stop
       style="stop-opacity:1;stop-color:#ffffff"
       offset="0"
       id="stop4180" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop4182" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4216">
    <path
       d="m 428.777,199.469 c -2.976,2.836 -6.828,5.41 -9.886,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.832,-8.063 10.371,-8.746 -2.402,-0.692 -8.617,-8.77 -8.617,-8.77 0,0 -4.047,0.243 -6.082,0.746 3.406,1.321 5.918,3.032 8.895,6.629 -3.293,-0.191 -6.414,-0.187 -9.192,-0.265 -4.375,-0.137 -5.383,-0.364 -9.035,-0.965 -4.457,-0.735 -6.164,-0.707 -8.027,-1.844 0.316,0.695 -0.332,1.395 -1.133,1.938 0.801,0.523 1.34,1.332 1.203,1.945 0.988,-0.453 2.156,-0.227 6.906,0.824 3.711,0.82 4.758,0.895 9.946,1.293 2.566,0.07 6.777,-0.039 9.054,-0.152 z"
       id="path4214" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4224">
    <path
       d="M 61.099431,156.77131 H 80.312219 V 181.8022 H 61.099431 Z"
       id="path4222" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4232">
    <g
       id="g4238">
      <g
         clip-path="url(#clipPath4224)"
         id="g4236">
        <path
           d="M 61.099431,156.77131 H 80.312219 V 181.8022 H 61.099431 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path4234" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="86.434967"
     y2="158.55438"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient4246">
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="0"
       id="stop4242" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop4244" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4268">
    <path
       d="m 281.574,236.16 c 1.715,1.012 3.68,2.211 5.645,3.551 -0.559,-2.566 -1.766,-5.328 -3.129,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.203,7.071 2.45,8.367 -1.77,-0.543 -9.118,1.286 -9.118,1.286 0,0 -2.355,-1.633 -3.371,-2.657 2.656,0.598 4.942,0.657 8.34,-0.078 -2.09,-1.133 -3.992,-2.203 -5.715,-3.203 -4.351,-2.914 -5.441,-3.586 -7.613,-7.23 -2.121,-3.563 -2.184,-5.278 -3.035,-6.039 0.5,-0.239 0.754,-0.567 1.015,-1.243 0.418,0.34 0.872,0.446 1.52,0.293 -0.012,1.071 0.152,2.696 2.68,6.196 1.453,1.894 2.617,3.82 6.558,6.144 z"
       id="path4266" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4276">
    <path
       d="m 64.087809,159.65837 h 18.387193 v 19.23201 H 64.087809 Z"
       id="path4274" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4284">
    <g
       id="g4290">
      <g
         clip-path="url(#clipPath4276)"
         id="g4288">
        <path
           d="m 64.087809,159.65837 h 18.387193 v 19.23201 H 64.087809 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path4286" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4348">
    <path
       d="m 284.902,145.516 c -0.07,0.972 -0.339,2.07 -0.808,3.308 -0.578,1.547 -1.364,3.223 -2.117,4.785 -2.516,5.204 -2.426,4.989 -5.704,10.032 -0.003,0 -0.003,0.004 -0.007,0.004 -1.203,1.753 -2.493,3.699 -3.86,5.824 -0.168,0.258 -0.562,0.195 -0.64,-0.106 -0.766,-2.988 -0.793,-5.191 -0.344,-7.476 -1.035,1.043 -2.074,2.238 -2.219,2.41 0.051,0.172 0.524,1.793 0.973,3.805 0.238,1.058 0.453,2.175 0.57,3.152 0.074,0.617 0.094,1.137 0.063,1.609 0.464,-0.222 1.011,-0.429 1.695,-0.625 1.035,-0.297 2.254,-0.57 3.426,-0.804 2.254,-0.45 4.172,-0.731 4.316,-0.75 0.106,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.215 -4.996,2.234 -7.762,2.742 -0.32,0.059 -0.543,-0.312 -0.343,-0.57 1.617,-2.004 3.066,-3.867 4.363,-5.574 2.121,-2.735 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.109,-3.461 1.605,-4.778 0.25,-0.66 0.5,-1.218 0.793,-1.66 0.199,-0.301 0.441,-0.519 0.707,-0.68 -0.07,-0.144 -0.133,-0.281 -0.227,-0.445 -0.089,-0.164 -0.148,-0.387 -0.164,-0.629 -0.328,0.004 -0.656,0.02 -0.953,-0.074 -0.152,-0.047 -0.285,-0.121 -0.422,-0.191 z"
       id="path4346" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4356">
    <path
       d="m 64.24642,153.8554 h 13.058904 v 24.00114 H 64.24642 Z"
       id="path4354" />
  </clipPath>
  <linearGradient
     x1="66.101974"
     y1="177.48279"
     x2="84.9888"
     y2="157.27287"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient4362">
    <stop
       style="stop-opacity:1;stop-color:#ffffff"
       offset="0"
       id="stop4358" />
    <stop
       style="stop-opacity:0;stop-color:#ffffff"
       offset="1"
       id="stop4360" />
  </linearGradient>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4364">
    <g
       id="g4370">
      <g
         clip-path="url(#clipPath4356)"
         id="g4368">
        <path
           d="m 64.24642,153.8554 h 13.058904 v 24.00114 H 64.24642 Z"
           style="fill:url(#linearGradient4362);stroke:none"
           id="path4366" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="66.101974"
     y1="177.48279"
     x2="84.9888"
     y2="157.27287"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient4378">
    <stop
       style="stop-opacity:1;stop-color:#ffffff"
       offset="0"
       id="stop4374" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop4376" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4392">
    <path
       d="m 271.746,157.297 c -1.301,1.711 -2.754,3.574 -4.375,5.578 3.102,-0.57 6.434,-1.801 8.508,-3.191 -0.481,1.824 -2.004,3.847 -2.004,3.847 0,0 -8.531,1.231 -10.098,2.496 0.657,-1.8 -1.55,-9.297 -1.55,-9.297 0,0 1.972,-2.398 3.203,-3.437 -0.719,2.711 -0.789,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.864,-5.832 3.277,-5.043 3.168,-4.785 5.683,-9.992 1.508,-3.118 3.129,-6.672 2.965,-8.645 0.289,0.508 1.195,0.773 2.016,0.648 -0.172,0.68 0.312,0.887 0.5,1.551 -1.293,0.278 -1.981,3.543 -3.235,7.082 -1.336,3.782 -3.422,7.903 -5.574,10.684 z"
       id="path4390" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4400">
    <path
       d="m 63.943929,153.40545 h 13.784398 v 25.7155 H 63.943929 Z"
       id="path4398" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4408">
    <g
       id="g4414">
      <g
         clip-path="url(#clipPath4400)"
         id="g4412">
        <path
           d="m 63.943929,153.40545 h 13.784398 v 25.7155 H 63.943929 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path4410" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="86.434967"
     y2="158.55438"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient4422">
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="0"
       id="stop4418" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop4420" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4438">
    <path
       d="m 233.195,169.586 c 1.758,0.945 3.582,2.012 5.551,3.352 -0.562,-2.567 -1.766,-5.329 -3.133,-7.047 1.789,0.398 3.774,1.66 3.774,1.66 0,0 1.207,7.07 2.449,8.367 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.356,-1.633 -3.367,-2.656 2.652,0.598 4.937,0.656 8.336,-0.078 -2.086,-1.133 -3.993,-2.203 -5.715,-3.203 -1.66,-0.969 -3.836,-2.778 -4.61,-4.231 -1.953,-3.656 -2.187,-5.277 -3.039,-6.039 0.5,-0.238 0.754,-0.566 1.016,-1.242 0.418,0.34 0.871,0.445 1.519,0.293 -0.007,1.07 0.106,2.945 2.184,5.945 1.055,1.399 2.059,2.465 4.152,3.594 z"
       id="path4436" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4446">
    <path
       d="M 63.410763,162.69662 H 80.046795 V 178.4319 H 63.410763 Z"
       id="path4444" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4454">
    <g
       id="g4460">
      <g
         clip-path="url(#clipPath4446)"
         id="g4458">
        <path
           d="M 63.410763,162.69662 H 80.046795 V 178.4319 H 63.410763 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path4456" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="86.434967"
     y2="158.55438"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient4468">
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="0"
       id="stop4464" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop4466" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4484">
    <path
       d="m 107.066,171.426 c -1.609,2.512 -3.414,5.242 -5.418,8.183 3.844,-0.836 7.973,-2.64 10.543,-4.679 -0.593,2.672 -2.484,5.64 -2.484,5.64 0,0 -10.57,1.805 -12.516,3.664 0.813,-2.644 -1.921,-13.636 -1.921,-13.636 0,0 2.445,-3.52 3.972,-5.039 -0.89,3.972 -0.98,7.386 0.121,12.472 1.696,-3.125 3.293,-5.972 4.785,-8.551 4.063,-7.398 3.93,-7.019 7.043,-14.652 1.868,-4.574 3.879,-9.789 3.676,-12.683 0.36,0.75 1.485,1.136 2.496,0.957 -0.211,0.996 0.391,1.3 0.621,2.269 -1.605,0.41 -2.457,5.195 -4.007,10.391 -1.657,5.543 -4.239,11.586 -6.911,15.664 z"
       id="path4482" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4492">
    <path
       d="m 63.949695,153.60355 h 13.46464 v 25.13282 h -13.46464 z"
       id="path4490" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4500">
    <g
       id="g4506">
      <g
         clip-path="url(#clipPath4492)"
         id="g4504">
        <path
           d="m 63.949695,153.60355 h 13.46464 v 25.13282 h -13.46464 z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path4502" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4524">
    <path
       d="m 80.57,173.023 c 1.614,2.508 3.414,5.239 5.422,8.184 -3.844,-0.84 -7.972,-2.644 -10.543,-4.684 0.594,2.672 2.485,5.641 2.485,5.641 0,0 10.57,1.805 12.515,3.664 -0.812,-2.64 1.922,-13.633 1.922,-13.633 0,0 -2.449,-3.523 -3.973,-5.043 0.891,3.973 0.981,7.387 -0.121,12.473 -1.695,-3.125 -3.293,-5.973 -4.789,-8.551 -4.062,-7.398 -5.468,-10.898 -13.347,-13.316 -6.09,-1.172 -5.36,-1.332 -6.496,-2.606 -0.36,0.746 -0.848,1.125 -1.864,1.52 0.512,0.621 0.668,1.301 0.438,2.269 1.605,-0.015 1.492,-0.98 7.179,2.075 5.387,2.109 8.504,7.925 11.172,12.007 z"
       id="path4522" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4532">
    <path
       d="m 63.738509,160.26977 h 18.733413 v 18.11902 H 63.738509 Z"
       id="path4530" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask4540">
    <g
       id="g4546">
      <g
         clip-path="url(#clipPath4532)"
         id="g4544">
        <path
           d="m 63.738509,160.26977 h 18.733413 v 18.11902 H 63.738509 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path4542" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.848818,0,0,-0.848818,727.40226,485.73968)"
     spreadMethod="pad"
     id="linearGradient4590">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4586" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4588" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.917825,0,0,-0.917825,688.84538,490.03511)"
     spreadMethod="pad"
     id="linearGradient4630">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4626" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4628" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.076718,0,0,-1.076718,669.06931,507.71378)"
     spreadMethod="pad"
     id="linearGradient4670">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4666" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4668" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.981903,0,0,-0.981903,722.02413,489.3352)"
     spreadMethod="pad"
     id="linearGradient4738">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4734" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4736" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4770">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path4768" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664844,0,0,0.664844,738.36793,57.933105)"
     spreadMethod="pad"
     id="linearGradient4776">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4772" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4774" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,708.16788,54.568672)"
     spreadMethod="pad"
     id="linearGradient4782">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4778" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4780" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,692.67809,40.72168)"
     spreadMethod="pad"
     id="linearGradient4788">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4784" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4786" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,734.15545,55.116879)"
     spreadMethod="pad"
     id="linearGradient4794">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4790" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4792" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath4966">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path4964" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664844,0,0,0.664844,662.62041,30.539361)"
     spreadMethod="pad"
     id="linearGradient4972">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4968" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4970" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,632.42037,27.174929)"
     spreadMethod="pad"
     id="linearGradient4978">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4974" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4976" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,616.93057,13.327937)"
     spreadMethod="pad"
     id="linearGradient4984">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4980" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4982" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,658.40794,27.723135)"
     spreadMethod="pad"
     id="linearGradient4990">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop4986" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop4988" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5162">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5160" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.664844,0,0,0.664844,750.2759,101.2148)"
     spreadMethod="pad"
     id="linearGradient5168">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop5164" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop5166" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.718895,0,0,0.718895,780.47594,97.85037)"
     spreadMethod="pad"
     id="linearGradient5174">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop5170" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop5172" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.843349,0,0,0.843349,795.96574,84.003378)"
     spreadMethod="pad"
     id="linearGradient5180">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop5176" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop5178" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.769085,0,0,0.769085,754.48837,98.398576)"
     spreadMethod="pad"
     id="linearGradient5186">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop5182" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop5184" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5382">
    <path
       d="m 753.883,178.957 c 1.152,1.645 11.535,14.063 12.859,16.078 0.344,-2.949 0.172,-6.285 -0.484,-8.539 1.472,0.942 2.84,2.879 2.84,2.879 0,0 -1.254,8.008 -0.567,9.773 -1.406,-1.093 -8.605,-1.203 -8.605,-1.203 0,0 -1.574,-2.445 -2.149,-3.84 2.184,1.403 4.215,2.118 7.512,2.286 -1.5,-1.825 -12.004,-14.114 -13.219,-15.692 -3.547,-4.355 -12.492,-14.773 -16.386,-18.488 -2.332,-2.223 -14.161,-15.266 -15.942,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.863,-0.031 1.496,-0.015 -0.105,1.238 10.848,11.394 14.496,15.472 4.227,4.727 15.164,15.875 17.024,18.586 z"
       id="path5380" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5390">
    <path
       d="M 53.037781,119.40036 H 106.16916 V 179.8218 H 53.037781 Z"
       id="path5388" />
  </clipPath>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="97.196396"
     y2="117.66685"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient5396">
    <stop
       style="stop-opacity:1;stop-color:#ffffff"
       offset="0"
       id="stop5392" />
    <stop
       style="stop-opacity:0;stop-color:#ffffff"
       offset="1"
       id="stop5394" />
  </linearGradient>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask5398">
    <g
       id="g5404">
      <g
         clip-path="url(#clipPath5390)"
         id="g5402">
        <path
           d="M 53.037781,119.40036 H 106.16916 V 179.8218 H 53.037781 Z"
           style="fill:url(#linearGradient5396);stroke:none"
           id="path5400" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="97.196396"
     y2="117.66685"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient5412">
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="0"
       id="stop5408" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop5410" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5422">
    <path
       d="m 748.047,212.91 c 1.824,-0.144 9.766,-0.508 11.945,-0.75 -1.883,2.125 -4.336,4.098 -6.301,5.008 1.508,0.551 3.657,0.391 3.657,0.391 0,0 4.933,-6.024 6.574,-6.602 -1.578,-0.402 -5.785,-5.922 -5.785,-5.922 0,0 -2.629,0.32 -3.942,0.754 2.243,0.813 3.91,1.938 5.922,4.387 -2.148,-0.012 -10.066,0.179 -11.875,0.226 -5.105,-0.004 -9.488,0.571 -14.34,-0.113 -2.91,-0.406 -12.117,-0.769 -13.425,-1.898 0.218,0.484 -0.028,1.324 -0.504,1.898 0.558,0.211 0.472,0.695 0.847,1.176 0.813,-0.867 7.481,0.64 12.453,0.898 5.758,0.301 11.793,0.817 14.774,0.547 z"
       id="path5420" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5430">
    <path
       d="M 61.351658,137.17035 H 90.724996 V 182.0087 H 61.351658 Z"
       id="path5428" />
  </clipPath>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="90.583817"
     y2="128.98515"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient5436">
    <stop
       style="stop-opacity:1;stop-color:#ffffff"
       offset="0"
       id="stop5432" />
    <stop
       style="stop-opacity:0;stop-color:#ffffff"
       offset="1"
       id="stop5434" />
  </linearGradient>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask5438">
    <g
       id="g5444">
      <g
         clip-path="url(#clipPath5430)"
         id="g5442">
        <path
           d="M 61.351658,137.17035 H 90.724996 V 182.0087 H 61.351658 Z"
           style="fill:url(#linearGradient5436);stroke:none"
           id="path5440" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="90.583817"
     y2="128.98515"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient5452">
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="0"
       id="stop5448" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop5450" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5462">
    <path
       d="m 781.781,180.547 c 0.012,1.992 0.106,4.105 0.371,6.469 -2.007,-1.696 -3.886,-4.051 -4.769,-6.059 -0.485,1.766 -0.293,4.113 -0.293,4.113 0,0 5.687,4.364 6.254,6.075 0.347,-1.817 5.394,-7.461 5.394,-7.461 0,0 -0.347,-2.848 -0.773,-4.223 -0.715,2.625 -1.727,4.676 -3.969,7.336 -0.023,-2.375 -0.078,-4.559 -0.156,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.051 -2.324,-3.433 -3.648,-4.398 -3.922,-5.504 -0.445,0.329 -0.851,0.399 -1.574,0.317 0.109,0.527 -0.012,0.976 -0.449,1.476 0.949,0.496 2.554,1.469 4.238,4.711 0.742,1.582 1.219,2.969 1.238,5.352 z"
       id="path5460" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5470">
    <path
       d="m 60.503354,158.09075 h 19.879533 v 23.85923 H 60.503354 Z"
       id="path5468" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask5478">
    <g
       id="g5484">
      <g
         clip-path="url(#clipPath5470)"
         id="g5482">
        <path
           d="m 60.503354,158.09075 h 19.879533 v 23.85923 H 60.503354 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path5480" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="65.668121"
     y1="177.82452"
     x2="86.434967"
     y2="158.55438"
     gradientUnits="userSpaceOnUse"
     spreadMethod="pad"
     id="linearGradient5492">
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="0"
       id="stop5488" />
    <stop
       style="stop-opacity:1;stop-color:#000000"
       offset="1"
       id="stop5490" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5508">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5506" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5542">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5540" />
  </clipPath>
  <linearGradient
     x1="181.92303"
     y1="48.812057"
     x2="207.95593"
     y2="47.416336"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(2.834646,0,0,-2.834646,33.828364,600.97278)"
     spreadMethod="pad"
     id="linearGradient5586">
    <stop
       style="stop-opacity:1;stop-color:#a7a7a7"
       offset="0"
       id="stop5580" />
    <stop
       style="stop-opacity:1;stop-color:#e4e4e4"
       offset="0.432314"
       id="stop5582" />
    <stop
       style="stop-opacity:1;stop-color:#717171"
       offset="1"
       id="stop5584" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5684">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5682" />
  </clipPath>
  <linearGradient
     x1="181.92303"
     y1="48.812057"
     x2="207.95593"
     y2="47.416336"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(2.834646,0,0,2.834646,33.828364,-5.697203)"
     spreadMethod="pad"
     id="linearGradient5692">
    <stop
       style="stop-opacity:1;stop-color:#a7a7a7"
       offset="0"
       id="stop5686" />
    <stop
       style="stop-opacity:1;stop-color:#e4e4e4"
       offset="0.432314"
       id="stop5688" />
    <stop
       style="stop-opacity:1;stop-color:#717171"
       offset="1"
       id="stop5690" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5722">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5720" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5738">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5736" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5818">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5816" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath5862">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path5860" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.848818,0,0,-0.848818,39.823412,259.86319)"
     spreadMethod="pad"
     id="linearGradient5928">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop5924" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop5926" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.917825,0,0,-0.917825,1.266531,264.15862)"
     spreadMethod="pad"
     id="linearGradient5968">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop5964" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop5966" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.076717,0,0,-1.076717,-18.509539,281.83729)"
     spreadMethod="pad"
     id="linearGradient6008">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6004" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6006" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.981903,0,0,-0.981903,34.445283,263.45871)"
     spreadMethod="pad"
     id="linearGradient6076">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6072" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6074" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath6108">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path6106" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664845,0,0,0.664845,104.75633,292.80247)"
     spreadMethod="pad"
     id="linearGradient6114">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6110" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6112" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,74.556287,289.43804)"
     spreadMethod="pad"
     id="linearGradient6120">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6116" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6118" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,59.06649,275.59104)"
     spreadMethod="pad"
     id="linearGradient6126">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6122" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6124" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,100.54386,289.98624)"
     spreadMethod="pad"
     id="linearGradient6132">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6128" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6130" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath6304">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path6302" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.664845,0,0,0.664845,85.567936,287.44631)"
     spreadMethod="pad"
     id="linearGradient6310">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6306" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6308" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.718895,0,0,0.718895,115.76798,284.08188)"
     spreadMethod="pad"
     id="linearGradient6316">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6312" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6314" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.843349,0,0,0.843349,131.25778,270.23489)"
     spreadMethod="pad"
     id="linearGradient6322">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6318" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6320" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.769085,0,0,0.769085,89.780407,284.63009)"
     spreadMethod="pad"
     id="linearGradient6328">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6324" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6326" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.848818,0,0,-0.848818,202.19956,279.01173)"
     spreadMethod="pad"
     id="linearGradient6502">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6498" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6500" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.917825,0,0,-0.917825,163.64268,283.30715)"
     spreadMethod="pad"
     id="linearGradient6542">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6538" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6540" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.076718,0,0,-1.076718,143.86661,300.98583)"
     spreadMethod="pad"
     id="linearGradient6582">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6578" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6580" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.981903,0,0,-0.981903,196.82143,282.60725)"
     spreadMethod="pad"
     id="linearGradient6650">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6646" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6648" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath6682">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path6680" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664844,0,0,0.664844,267.13248,288.65395)"
     spreadMethod="pad"
     id="linearGradient6688">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6684" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6686" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,236.93244,285.28952)"
     spreadMethod="pad"
     id="linearGradient6694">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6690" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6692" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,221.44264,271.44253)"
     spreadMethod="pad"
     id="linearGradient6700">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6696" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6698" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,262.92001,285.83773)"
     spreadMethod="pad"
     id="linearGradient6706">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6702" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6704" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath6878">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path6876" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.664844,0,0,0.664844,247.94409,283.2978)"
     spreadMethod="pad"
     id="linearGradient6884">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6880" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6882" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.718895,0,0,0.718895,278.14413,279.93337)"
     spreadMethod="pad"
     id="linearGradient6890">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6886" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6888" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.843349,0,0,0.843349,293.63393,266.08638)"
     spreadMethod="pad"
     id="linearGradient6896">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6892" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6894" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.769085,0,0,0.769085,252.15656,280.48158)"
     spreadMethod="pad"
     id="linearGradient6902">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop6898" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop6900" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7074">
    <path
       d="m 266.977,473.547 c 1.718,1.016 3.679,2.211 5.648,3.555 -0.559,-2.571 -1.766,-5.332 -3.129,-7.051 1.785,0.398 3.774,1.66 3.774,1.66 0,0 1.203,7.07 2.445,8.371 -1.766,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.637 -3.372,-2.656 2.657,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.718,-3.199 -4.348,-2.918 -5.438,-3.59 -7.61,-7.235 -2.121,-3.562 -2.183,-5.277 -3.035,-6.035 0.5,-0.242 0.75,-0.566 1.016,-1.246 0.414,0.344 0.867,0.445 1.515,0.293 -0.008,1.07 0.157,2.695 2.684,6.195 1.453,1.895 2.617,3.821 6.555,6.145 z"
       id="path7072" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7082">
    <path
       d="m 63.551847,160.17826 h 19.262774 v 18.35783 H 63.551847 Z"
       id="path7080" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7090">
    <g
       id="g7096">
      <g
         clip-path="url(#clipPath7082)"
         id="g7094">
        <path
           d="m 63.551847,160.17826 h 19.262774 v 18.35783 H 63.551847 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7092" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.106812,0,0,-1.107881,349.07485,360.38813)"
     spreadMethod="pad"
     id="linearGradient7134">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7130" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7132" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.196794,0,0,-1.19795,298.79875,365.99455)"
     spreadMethod="pad"
     id="linearGradient7174">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7170" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7172" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.403982,0,0,-1.405337,273.01182,389.06885)"
     spreadMethod="pad"
     id="linearGradient7214">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7210" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7212" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.280349,0,0,-1.281585,342.06206,365.08103)"
     spreadMethod="pad"
     id="linearGradient7282">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7278" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7280" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7322">
    <path
       d="m 483.953,445.664 c 2.598,0.086 5.594,0.231 8.684,0.535 -2.25,-2.594 -5.356,-5 -7.992,-6.117 2.296,-0.66 5.355,-0.457 5.355,-0.457 0,0 5.801,7.34 8.035,8.051 -2.359,0.484 -9.625,7.179 -9.625,7.179 0,0 -3.719,-0.402 -5.519,-0.933 3.41,-0.981 6.062,-2.34 9.492,-5.313 -3.098,0.012 -5.945,-0.023 -8.543,-0.086 -6.801,-0.617 -8.469,-0.703 -13.231,-3.519 -4.652,-2.754 -5.8,-4.676 -7.25,-5.016 0.422,-0.586 0.508,-1.117 0.383,-2.062 0.692,0.133 1.278,-0.031 1.922,-0.613 0.66,1.234 1.863,2.992 6.941,5.417 2.848,1.262 5.383,2.739 11.348,2.934 z"
       id="path7320" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7330">
    <path
       d="m 60.610623,155.32491 h 22.189115 v 26.96001 H 60.610623 Z"
       id="path7328" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7338">
    <g
       id="g7344">
      <g
         clip-path="url(#clipPath7330)"
         id="g7342">
        <path
           d="m 60.610623,155.32491 h 22.189115 v 26.96001 H 60.610623 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7340" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7384">
    <path
       d="m 428.773,434.461 c -2.98,2.836 -6.832,5.41 -9.89,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.833,-8.062 10.375,-8.75 -2.406,-0.687 -8.621,-8.765 -8.621,-8.765 0,0 -4.046,0.242 -6.082,0.746 3.407,1.32 5.922,3.031 8.899,6.629 -3.297,-0.192 -6.414,-0.188 -9.192,-0.266 -4.375,-0.137 -5.386,-0.363 -9.035,-0.965 -4.461,-0.734 -6.164,-0.711 -8.031,-1.844 0.316,0.696 -0.328,1.395 -1.133,1.938 0.805,0.523 1.34,1.332 1.207,1.945 0.985,-0.457 2.156,-0.226 6.906,0.824 3.711,0.821 4.754,0.895 9.946,1.293 2.562,0.071 6.773,-0.039 9.054,-0.152 z"
       id="path7382" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7392">
    <path
       d="m 61.101129,156.77782 h 19.212788 v 25.0309 H 61.101129 Z"
       id="path7390" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7400">
    <g
       id="g7406">
      <g
         clip-path="url(#clipPath7392)"
         id="g7404">
        <path
           d="m 61.101129,156.77782 h 19.212788 v 25.0309 H 61.101129 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7402" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7436">
    <path
       d="m 281.566,471.152 c 1.719,1.012 3.68,2.211 5.649,3.551 -0.563,-2.57 -1.766,-5.328 -3.133,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.208,7.067 2.45,8.368 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.352,-1.637 -3.368,-2.656 2.653,0.597 4.938,0.656 8.34,-0.083 -2.09,-1.128 -3.996,-2.199 -5.719,-3.199 -4.347,-2.914 -5.441,-3.586 -7.609,-7.23 -2.121,-3.563 -2.187,-5.278 -3.039,-6.039 0.5,-0.239 0.754,-0.567 1.016,-1.246 0.418,0.343 0.871,0.449 1.519,0.297 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.894 2.613,3.82 6.554,6.144 z"
       id="path7434" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7444">
    <path
       d="m 64.080537,159.66382 h 18.387194 v 19.23201 H 64.080537 Z"
       id="path7442" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7452">
    <g
       id="g7458">
      <g
         clip-path="url(#clipPath7444)"
         id="g7456">
        <path
           d="m 64.080537,159.66382 h 18.387194 v 19.23201 H 64.080537 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7454" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7516">
    <path
       d="m 284.898,380.504 c -0.07,0.976 -0.343,2.074 -0.808,3.312 -0.582,1.543 -1.367,3.219 -2.121,4.786 -2.516,5.203 -2.426,4.988 -5.703,10.031 0,0 -0.004,0.004 -0.004,0.004 -1.203,1.754 -2.496,3.695 -3.86,5.824 -0.168,0.258 -0.566,0.195 -0.644,-0.106 -0.766,-2.988 -0.793,-5.191 -0.34,-7.48 -1.035,1.047 -2.078,2.242 -2.223,2.414 0.051,0.172 0.528,1.793 0.977,3.805 0.234,1.058 0.453,2.176 0.57,3.152 0.074,0.617 0.09,1.137 0.059,1.609 0.469,-0.222 1.015,-0.429 1.695,-0.625 1.035,-0.3 2.258,-0.57 3.426,-0.804 2.258,-0.449 4.176,-0.731 4.32,-0.75 0.102,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.211 -4.996,2.231 -7.761,2.742 -0.325,0.059 -0.547,-0.312 -0.344,-0.57 1.613,-2.004 3.066,-3.867 4.363,-5.574 2.117,-2.738 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.105,-3.461 1.605,-4.777 0.25,-0.661 0.5,-1.223 0.789,-1.661 0.199,-0.3 0.442,-0.519 0.711,-0.683 -0.07,-0.141 -0.137,-0.278 -0.226,-0.442 -0.094,-0.164 -0.153,-0.386 -0.168,-0.632 -0.325,0.003 -0.657,0.023 -0.954,-0.071 -0.148,-0.047 -0.285,-0.121 -0.418,-0.195 z"
       id="path7514" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7524">
    <path
       d="m 64.250939,153.86252 h 13.058904 v 24.00114 H 64.250939 Z"
       id="path7522" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7532">
    <g
       id="g7538">
      <g
         clip-path="url(#clipPath7524)"
         id="g7536">
        <path
           d="m 64.250939,153.86252 h 13.058904 v 24.00114 H 64.250939 Z"
           style="fill:url(#linearGradient4362);stroke:none"
           id="path7534" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7560">
    <path
       d="m 271.738,392.289 c -1.297,1.711 -2.754,3.574 -4.371,5.578 3.102,-0.57 6.43,-1.801 8.508,-3.191 -0.48,1.824 -2.008,3.847 -2.008,3.847 0,0 -8.527,1.227 -10.097,2.497 0.656,-1.801 -1.551,-9.297 -1.551,-9.297 0,0 1.972,-2.399 3.207,-3.438 -0.719,2.707 -0.793,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.86,-5.832 3.281,-5.047 3.172,-4.785 5.683,-9.992 1.508,-3.117 3.133,-6.672 2.969,-8.649 0.289,0.512 1.195,0.778 2.012,0.653 -0.172,0.679 0.316,0.886 0.5,1.55 -1.293,0.278 -1.981,3.54 -3.234,7.082 -1.336,3.782 -3.418,7.903 -5.575,10.684 z"
       id="path7558" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7568">
    <path
       d="m 63.948448,153.41257 h 13.784398 v 25.7155 H 63.948448 Z"
       id="path7566" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7576">
    <g
       id="g7582">
      <g
         clip-path="url(#clipPath7568)"
         id="g7580">
        <path
           d="m 63.948448,153.41257 h 13.784398 v 25.7155 H 63.948448 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7578" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7606">
    <path
       d="m 233.191,404.578 c 1.754,0.945 3.579,2.012 5.547,3.352 -0.558,-2.571 -1.765,-5.328 -3.129,-7.047 1.786,0.398 3.77,1.66 3.77,1.66 0,0 1.207,7.066 2.449,8.367 -1.765,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.636 -3.371,-2.656 2.656,0.598 4.937,0.656 8.34,-0.078 -2.09,-1.133 -3.996,-2.203 -5.719,-3.203 -1.656,-0.973 -3.836,-2.778 -4.61,-4.231 -1.953,-3.66 -2.183,-5.277 -3.035,-6.039 0.5,-0.238 0.75,-0.566 1.016,-1.242 0.414,0.34 0.867,0.445 1.516,0.293 -0.008,1.07 0.105,2.945 2.183,5.945 1.055,1.395 2.059,2.465 4.156,3.594 z"
       id="path7604" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7614">
    <path
       d="m 63.403492,162.70206 h 16.636032 v 15.73528 H 63.403492 Z"
       id="path7612" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7622">
    <g
       id="g7628">
      <g
         clip-path="url(#clipPath7614)"
         id="g7626">
        <path
           d="m 63.403492,162.70206 h 16.636032 v 15.73528 H 63.403492 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7624" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7652">
    <path
       d="m 107.063,406.418 c -1.614,2.512 -3.415,5.242 -5.422,8.184 3.843,-0.836 7.972,-2.641 10.543,-4.68 -0.594,2.672 -2.485,5.641 -2.485,5.641 0,0 -10.57,1.8 -12.515,3.664 0.812,-2.645 -1.922,-13.637 -1.922,-13.637 0,0 2.449,-3.52 3.972,-5.039 -0.89,3.969 -0.98,7.387 0.121,12.472 1.696,-3.125 3.293,-5.972 4.79,-8.55 4.062,-7.399 3.925,-7.02 7.039,-14.653 1.867,-4.578 3.882,-9.789 3.679,-12.683 0.356,0.75 1.481,1.136 2.496,0.957 -0.214,0.996 0.387,1.301 0.618,2.269 -1.602,0.41 -2.454,5.196 -4.008,10.391 -1.656,5.543 -4.239,11.586 -6.906,15.664 z"
       id="path7650" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7660">
    <path
       d="m 63.953341,153.6084 h 13.464641 v 25.13282 H 63.953341 Z"
       id="path7658" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7668">
    <g
       id="g7674">
      <g
         clip-path="url(#clipPath7660)"
         id="g7672">
        <path
           d="m 63.953341,153.6084 h 13.464641 v 25.13282 H 63.953341 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7670" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7692">
    <path
       d="m 80.566,408.016 c 1.61,2.507 3.414,5.238 5.418,8.179 -3.843,-0.836 -7.972,-2.64 -10.543,-4.679 0.594,2.672 2.485,5.64 2.485,5.64 0,0 10.57,1.805 12.515,3.664 -0.812,-2.644 1.922,-13.632 1.922,-13.632 0,0 -2.445,-3.524 -3.972,-5.043 0.89,3.972 0.98,7.386 -0.121,12.472 -1.696,-3.125 -3.293,-5.972 -4.786,-8.551 -4.062,-7.398 -5.468,-10.898 -13.351,-13.32 -6.09,-1.168 -5.36,-1.328 -6.496,-2.601 -0.356,0.746 -0.848,1.125 -1.864,1.519 0.512,0.621 0.672,1.301 0.442,2.27 1.601,-0.016 1.488,-0.981 7.176,2.074 5.386,2.109 8.504,7.926 11.175,12.008 z"
       id="path7690" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7700">
    <path
       d="m 63.734862,160.27463 h 18.733413 v 18.11901 H 63.734862 Z"
       id="path7698" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask7708">
    <g
       id="g7714">
      <g
         clip-path="url(#clipPath7700)"
         id="g7712">
        <path
           d="m 63.734862,160.27463 h 18.733413 v 18.11901 H 63.734862 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path7710" />
      </g>
    </g>
  </mask>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.848818,0,0,-0.848818,727.39604,250.74798)"
     spreadMethod="pad"
     id="linearGradient7758">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7754" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7756" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.917825,0,0,-0.917825,688.83915,255.04341)"
     spreadMethod="pad"
     id="linearGradient7798">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7794" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7796" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(1.076718,0,0,-1.076718,669.06308,272.72209)"
     spreadMethod="pad"
     id="linearGradient7838">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7834" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7836" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.981903,0,0,-0.981903,722.01791,254.34351)"
     spreadMethod="pad"
     id="linearGradient7906">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7902" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7904" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath7938">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path7936" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664844,0,0,0.664844,738.3617,292.9248)"
     spreadMethod="pad"
     id="linearGradient7944">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7940" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7942" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,708.16165,289.56037)"
     spreadMethod="pad"
     id="linearGradient7950">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7946" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7948" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,692.67186,275.71338)"
     spreadMethod="pad"
     id="linearGradient7956">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7952" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7954" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,734.14923,290.10857)"
     spreadMethod="pad"
     id="linearGradient7962">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop7958" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop7960" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8134">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8132" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.664844,0,0,0.664844,662.61418,265.53106)"
     spreadMethod="pad"
     id="linearGradient8140">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8136" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8138" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.718895,0,0,0.718895,632.41414,262.16662)"
     spreadMethod="pad"
     id="linearGradient8146">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8142" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8144" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.843349,0,0,0.843349,616.92434,248.31963)"
     spreadMethod="pad"
     id="linearGradient8152">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8148" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8150" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(0.769085,0,0,0.769085,658.40171,262.71483)"
     spreadMethod="pad"
     id="linearGradient8158">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8154" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8156" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8330">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8328" />
  </clipPath>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.664844,0,0,0.664844,750.26967,336.2065)"
     spreadMethod="pad"
     id="linearGradient8336">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8332" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8334" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.718895,0,0,0.718895,780.46971,332.84207)"
     spreadMethod="pad"
     id="linearGradient8342">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8338" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8340" />
  </linearGradient>
  <linearGradient
     x1="89.227539"
     y1="121.11913"
     x2="114.70379"
     y2="121.11913"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.843349,0,0,0.843349,795.95951,318.99507)"
     spreadMethod="pad"
     id="linearGradient8348">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8344" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8346" />
  </linearGradient>
  <linearGradient
     x1="63.744125"
     y1="133.62428"
     x2="90.700348"
     y2="133.62428"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(-0.769085,0,0,0.769085,754.48214,333.39027)"
     spreadMethod="pad"
     id="linearGradient8354">
    <stop
       style="stop-opacity:1;stop-color:#e5e5e5"
       offset="0"
       id="stop8350" />
    <stop
       style="stop-opacity:1;stop-color:#7a7a7a"
       offset="1"
       id="stop8352" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8550">
    <path
       d="m 753.875,413.945 c 1.152,1.649 11.535,14.067 12.859,16.082 0.348,-2.949 0.176,-6.285 -0.484,-8.539 1.477,0.942 2.84,2.875 2.84,2.875 0,0 -1.25,8.012 -0.563,9.778 -1.406,-1.094 -8.609,-1.203 -8.609,-1.203 0,0 -1.574,-2.446 -2.148,-3.84 2.187,1.402 4.218,2.117 7.511,2.285 -1.5,-1.824 -12,-14.117 -13.218,-15.692 -3.543,-4.355 -12.489,-14.773 -16.383,-18.488 -2.336,-2.226 -14.164,-15.265 -15.946,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.868,-0.035 1.5,-0.015 -0.109,1.238 10.844,11.394 14.496,15.472 4.223,4.727 15.161,15.875 17.02,18.586 z"
       id="path8548" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8558">
    <path
       d="M 53.033123,119.40814 H 106.1645 v 60.42143 H 53.033123 Z"
       id="path8556" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask8566">
    <g
       id="g8572">
      <g
         clip-path="url(#clipPath8558)"
         id="g8570">
        <path
           d="M 53.033123,119.40814 H 106.1645 v 60.42143 H 53.033123 Z"
           style="fill:url(#linearGradient5396);stroke:none"
           id="path8568" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8590">
    <path
       d="m 748.043,447.902 c 1.82,-0.144 9.762,-0.507 11.941,-0.75 -1.879,2.125 -4.332,4.098 -6.3,5.008 1.507,0.551 3.656,0.391 3.656,0.391 0,0 4.937,-6.024 6.574,-6.606 -1.578,-0.402 -5.785,-5.918 -5.785,-5.918 0,0 -2.625,0.321 -3.941,0.754 2.242,0.813 3.914,1.938 5.921,4.387 -2.148,-0.012 -10.066,0.18 -11.875,0.227 -5.105,-0.004 -9.484,0.566 -14.339,-0.114 -2.911,-0.406 -12.118,-0.769 -13.426,-1.898 0.222,0.48 -0.024,1.324 -0.504,1.898 0.558,0.211 0.473,0.696 0.848,1.176 0.812,-0.867 7.484,0.641 12.457,0.898 5.757,0.301 11.793,0.817 14.773,0.547 z"
       id="path8588" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8598">
    <path
       d="m 61.354114,137.17993 h 29.373338 v 44.83835 H 61.354114 Z"
       id="path8596" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask8606">
    <g
       id="g8612">
      <g
         clip-path="url(#clipPath8598)"
         id="g8610">
        <path
           d="m 61.354114,137.17993 h 29.373338 v 44.83835 H 61.354114 Z"
           style="fill:url(#linearGradient5436);stroke:none"
           id="path8608" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8630">
    <path
       d="m 781.773,415.539 c 0.016,1.992 0.106,4.106 0.375,6.469 -2.011,-1.695 -3.89,-4.051 -4.773,-6.059 -0.48,1.766 -0.293,4.114 -0.293,4.114 0,0 5.688,4.363 6.258,6.07 0.344,-1.817 5.39,-7.461 5.39,-7.461 0,0 -0.343,-2.844 -0.773,-4.219 -0.711,2.625 -1.727,4.672 -3.965,7.336 -0.027,-2.375 -0.082,-4.559 -0.16,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.05 -2.32,-3.434 -3.644,-4.399 -3.918,-5.508 -0.445,0.332 -0.855,0.402 -1.578,0.32 0.109,0.527 -0.012,0.977 -0.449,1.477 0.953,0.492 2.555,1.468 4.238,4.707 0.742,1.586 1.219,2.972 1.238,5.355 z"
       id="path8628" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8638">
    <path
       d="m 60.495135,158.09463 h 19.879533 v 23.85923 H 60.495135 Z"
       id="path8636" />
  </clipPath>
  <mask
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="1"
     height="1"
     id="mask8646">
    <g
       id="g8652">
      <g
         clip-path="url(#clipPath8638)"
         id="g8650">
        <path
           d="m 60.495135,158.09463 h 19.879533 v 23.85923 H 60.495135 Z"
           style="fill:url(#linearGradient3920);stroke:none"
           id="path8648" />
      </g>
    </g>
  </mask>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8676">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8674" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8710">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8708" />
  </clipPath>
  <linearGradient
     x1="181.92303"
     y1="48.812057"
     x2="207.95593"
     y2="47.416336"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(2.834646,0,0,-2.834646,33.822135,365.98108)"
     spreadMethod="pad"
     id="linearGradient8754">
    <stop
       style="stop-opacity:1;stop-color:#a7a7a7"
       offset="0"
       id="stop8748" />
    <stop
       style="stop-opacity:1;stop-color:#e4e4e4"
       offset="0.432314"
       id="stop8750" />
    <stop
       style="stop-opacity:1;stop-color:#717171"
       offset="1"
       id="stop8752" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8852">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8850" />
  </clipPath>
  <linearGradient
     x1="181.92303"
     y1="48.812057"
     x2="207.95593"
     y2="47.416336"
     gradientUnits="userSpaceOnUse"
     gradientTransform="matrix(2.834646,0,0,2.834646,33.822135,229.29449)"
     spreadMethod="pad"
     id="linearGradient8860">
    <stop
       style="stop-opacity:1;stop-color:#a7a7a7"
       offset="0"
       id="stop8854" />
    <stop
       style="stop-opacity:1;stop-color:#e4e4e4"
       offset="0.432314"
       id="stop8856" />
    <stop
       style="stop-opacity:1;stop-color:#717171"
       offset="1"
       id="stop8858" />
  </linearGradient>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8890">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8888" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8906">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8904" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath8986">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path8984" />
  </clipPath>
  <clipPath
     clipPathUnits="userSpaceOnUse"
     id="clipPath9030">
    <path
       d="M 0,0 H 842 V 596 H 0 Z"
       id="path9028" />
  </clipPath>
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14649"
     xlink:href="#linearGradient3936" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14651"
     xlink:href="#linearGradient4184" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14653"
     xlink:href="#linearGradient4246" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14655"
     xlink:href="#linearGradient3936" />
  <linearGradient
     spreadMethod="pad"
     y2="157.27287"
     x2="84.9888"
     y1="177.48279"
     x1="66.101974"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14657"
     xlink:href="#linearGradient4378" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14659"
     xlink:href="#linearGradient4422" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14661"
     xlink:href="#linearGradient4468" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14663"
     xlink:href="#linearGradient4468" />
  <linearGradient
     spreadMethod="pad"
     y2="117.66685"
     x2="97.196396"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14667"
     xlink:href="#linearGradient5412" />
  <linearGradient
     spreadMethod="pad"
     y2="128.98515"
     x2="90.583817"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14669"
     xlink:href="#linearGradient5452" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14671"
     xlink:href="#linearGradient5492" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14673"
     xlink:href="#linearGradient3936" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14677"
     xlink:href="#linearGradient4246" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14679"
     xlink:href="#linearGradient3936" />
  <linearGradient
     spreadMethod="pad"
     y2="157.27287"
     x2="84.9888"
     y1="177.48279"
     x1="66.101974"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14681"
     xlink:href="#linearGradient4378" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14683"
     xlink:href="#linearGradient4422" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14685"
     xlink:href="#linearGradient4468" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14687"
     xlink:href="#linearGradient4468" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14689"
     xlink:href="#linearGradient4468" />
  <linearGradient
     spreadMethod="pad"
     y2="117.66685"
     x2="97.196396"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14691"
     xlink:href="#linearGradient5412" />
  <linearGradient
     spreadMethod="pad"
     y2="128.98515"
     x2="90.583817"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14693"
     xlink:href="#linearGradient5452" />
  <linearGradient
     spreadMethod="pad"
     y2="158.55438"
     x2="86.434967"
     y1="177.82452"
     x1="65.668121"
     gradientUnits="userSpaceOnUse"
     id="linearGradient14695"
     xlink:href="#linearGradient5492" />
  <linearGradient
     spreadMethod="pad"
     y2="133.62428"
     x2="90.700348"
     y1="133.62428"
     x1="63.744125"
     gradientTransform="matrix(1.106812,0,0,-1.107881,349.07485,360.38813)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17442"
     xlink:href="#linearGradient7134" />
  <linearGradient
     spreadMethod="pad"
     y2="133.62428"
     x2="90.700348"
     y1="133.62428"
     x1="63.744125"
     gradientTransform="matrix(1.196794,0,0,-1.19795,298.79875,365.99455)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17444"
     xlink:href="#linearGradient7174" />
  <linearGradient
     spreadMethod="pad"
     y2="121.11913"
     x2="114.70379"
     y1="121.11913"
     x1="89.227539"
     gradientTransform="matrix(1.403982,0,0,-1.405337,273.01182,389.06885)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17446"
     xlink:href="#linearGradient7214" />
  <linearGradient
     spreadMethod="pad"
     y2="133.62428"
     x2="90.700348"
     y1="133.62428"
     x1="63.744125"
     gradientTransform="matrix(1.280349,0,0,-1.281585,342.06206,365.08103)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17448"
     xlink:href="#linearGradient7282" />
  <linearGradient
     spreadMethod="pad"
     y2="133.62428"
     x2="90.700348"
     y1="133.62428"
     x1="63.744125"
     gradientTransform="matrix(1.106812,0,0,-1.107881,349.07485,360.38813)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17614"
     xlink:href="#linearGradient7134" />
  <linearGradient
     spreadMethod="pad"
     y2="133.62428"
     x2="90.700348"
     y1="133.62428"
     x1="63.744125"
     gradientTransform="matrix(1.196794,0,0,-1.19795,298.79875,365.99455)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17616"
     xlink:href="#linearGradient7174" />
  <linearGradient
     spreadMethod="pad"
     y2="121.11913"
     x2="114.70379"
     y1="121.11913"
     x1="89.227539"
     gradientTransform="matrix(1.403982,0,0,-1.405337,273.01182,389.06885)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17618"
     xlink:href="#linearGradient7214" />
  <linearGradient
     spreadMethod="pad"
     y2="133.62428"
     x2="90.700348"
     y1="133.62428"
     x1="63.744125"
     gradientTransform="matrix(1.280349,0,0,-1.281585,342.06206,365.08103)"
     gradientUnits="userSpaceOnUse"
     id="linearGradient17620"
     xlink:href="#linearGradient7282" />
</defs>
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
   id="layer1">
  <path
     class="settlement0 highlight"
     d="m 184.1695,145.39353 c 0,0 2.94818,5.60149 3.30687,8.68727 0.15166,-0.0117 0.30419,-0.0207 0.4594,-0.0207 2.79871,0 5.0674,2.00913 5.0674,4.4881 0,0.66076 -0.16803,1.28367 -0.45631,1.84949 2.06235,0.80472 3.50418,2.62862 3.50418,4.75269 0,1.04457 -0.36095,2.00933 -0.94774,2.83342 -0.45924,0.64205 -1.93492,1.34558 -4.91443,1.34358 -3.57865,-0.004 -4.83408,-1.04078 -5.15938,-1.70894 -0.26305,-0.5437 -0.50093,-1.10093 -0.62063,-1.69343 -0.79945,0.53493 -2.03124,0.74547 -2.95693,0.73277 -1.20992,0.0166 -2.94746,-0.34714 -3.55224,-1.32292 0,0 -0.25145,-0.80741 -0.58342,-1.94303 -0.0245,0.0361 -0.047,0.0734 -0.0724,0.10904 -0.42857,0.59937 -1.80945,1.25773 -4.593,1.25573 -3.34604,-0.004 -4.52004,-0.97148 -4.82348,-1.59732 -0.34997,-0.72355 -0.65629,-1.4718 -0.65629,-2.30683 0,-2.6804 2.45339,-4.855 5.47977,-4.855 1.10921,0 2.13978,0.29416 3.0024,0.79633 -0.14956,-0.80282 -0.24745,-1.51734 -0.26045,-2.05724 -0.0701,-2.85927 3.34302,-9.34302 3.34302,-9.34302 1.78478,2.56441 3.31154,2.85122 5.43366,1e-5 z"
     style="fill:none;stroke:#ffcc00;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="path17754" />
  <g
     transform="translate(127.44958,-0.85044448)"
     id="g2051"
     class="settlement2 red unit">
    <path
       id="path2045"
       style="fill:#851111;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
    <g
       id="g2049"
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
      <path
         id="path2047"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
    </g>
  </g>
  <g
     transform="translate(63.304889,-70.607792)"
     id="g1939"
     class="settlement1 red unit">
    <path
       id="path1933"
       style="fill:#851111;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
    <g
       id="g1937"
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
      <path
         id="path1935"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
    </g>
  </g>
  <g
     transform="translate(73.888222,-70.607792)"
     id="g1947"
     class="settlement1 green unit">
    <path
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
       style="fill:#118512;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       id="path1941" />
    <g
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
       id="g1945">
      <path
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path1943" />
    </g>
  </g>
  <g
     id="g1955"
     transform="translate(84.471556,-70.607792)"
     class="settlement1 blue unit">
    <path
       id="path1949"
       style="fill:#113185;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
    <g
       id="g1953"
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
      <path
         id="path1951"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
    </g>
  </g>
  <g
     class="settlement0 blue unit"
     transform="translate(17.386905,-0.85044643)"
     id="g17969">
    <path
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
       style="fill:#113185;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       id="path17963" />
    <g
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
       id="g17967">
      <path
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path17965" />
    </g>
  </g>
  <g
     class="settlement0 green unit"
     id="g17961"
     transform="translate(6.8035711,-0.85044643)">
    <path
       id="path17955"
       style="fill:#118512;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
    <g
       id="g17959"
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
      <path
         id="path17957"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
    </g>
  </g>
  <g
     class="settlement0 red unit"
     id="g17953"
     transform="translate(-3.7797619,-0.85044643)">
    <path
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
       style="fill:#851111;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       id="path17947" />
    <g
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
       id="g17951">
      <path
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path17949" />
    </g>
  </g>
  <text
     xml:space="preserve"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     x="234.38101"
     y="123.32655"
     id="text1959"
     class="settlement1 red number"><tspan
       id="tspan1957"
       x="234.38101"
       y="123.32655"
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
  <text
     id="text1963"
     y="123.32655"
     x="244.96434"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     xml:space="preserve"
     class="settlement1 green number"><tspan
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       y="123.32655"
       x="244.96434"
       id="tspan1961">0</tspan></text>
  <text
     xml:space="preserve"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     x="255.54768"
     y="123.32655"
     id="text1967"
     class="settlement1 blue number"><tspan
       id="tspan1965"
       x="255.54768"
       y="123.32655"
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
  <path
     class="settlement2 highlight"
     d="m 313.05939,146.14947 c 0,0 2.94818,5.60149 3.30687,8.68727 0.15166,-0.0117 0.30419,-0.0207 0.4594,-0.0207 2.79871,0 5.0674,2.00913 5.0674,4.4881 0,0.66076 -0.16803,1.28367 -0.45631,1.84949 2.06235,0.80472 3.50418,2.62862 3.50418,4.75269 0,1.04457 -0.36095,2.00933 -0.94774,2.83342 -0.45924,0.64205 -1.93492,1.34558 -4.91443,1.34358 -3.57865,-0.004 -4.83408,-1.04078 -5.15938,-1.70894 -0.26305,-0.5437 -0.50093,-1.10093 -0.62063,-1.69343 -0.79945,0.53493 -2.03124,0.74547 -2.95693,0.73277 -1.20992,0.0166 -2.94746,-0.34714 -3.55224,-1.32292 0,0 -0.25145,-0.80741 -0.58342,-1.94303 -0.0245,0.0361 -0.047,0.0734 -0.0724,0.10904 -0.42857,0.59937 -1.80945,1.25773 -4.593,1.25573 -3.34604,-0.004 -4.52004,-0.97148 -4.82348,-1.59732 -0.34997,-0.72355 -0.65629,-1.4718 -0.65629,-2.30683 0,-2.6804 2.45339,-4.855 5.47977,-4.855 1.10921,0 2.13978,0.29416 3.0024,0.79633 -0.14956,-0.80282 -0.24745,-1.51734 -0.26045,-2.05724 -0.0701,-2.85927 3.34302,-9.34302 3.34302,-9.34302 1.78478,2.56441 3.31154,2.85122 5.43366,1e-5 z"
     style="fill:none;stroke:#ffcc00;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     id="path17920" />
  <path
     class="settlement1 highlight"
     id="path17918"
     style="fill:none;stroke:#ffcc00;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     d="m 249.93737,75.845899 c 0,0 2.94818,5.60149 3.30687,8.68727 0.15166,-0.0117 0.30419,-0.0207 0.4594,-0.0207 2.79871,0 5.0674,2.00913 5.0674,4.4881 0,0.66076 -0.16803,1.28367 -0.45631,1.84949 2.06235,0.80472 3.50418,2.62862 3.50418,4.75269 0,1.04457 -0.36095,2.00933 -0.94774,2.83342 -0.45924,0.64205 -1.93492,1.34558 -4.91443,1.34358 -3.57865,-0.004 -4.83408,-1.04078 -5.15938,-1.70894 -0.26305,-0.5437 -0.50093,-1.10093 -0.62063,-1.69343 -0.79945,0.53493 -2.03124,0.74547 -2.95693,0.73277 -1.20992,0.0166 -2.94746,-0.34714 -3.55224,-1.32292 0,0 -0.25145,-0.80741 -0.58342,-1.94303 -0.0245,0.0361 -0.047,0.0734 -0.0724,0.10904 -0.42857,0.59937 -1.80945,1.25773 -4.593,1.25573 -3.34604,-0.004 -4.52004,-0.97148 -4.82348,-1.59732 -0.34997,-0.72355 -0.65629,-1.4718 -0.65629,-2.30683 0,-2.6804 2.45339,-4.855 5.47977,-4.855 1.10921,0 2.13978,0.29416 3.0024,0.79633 -0.14956,-0.80282 -0.24745,-1.51734 -0.26045,-2.05724 -0.0701,-2.85927 3.34302,-9.34302 3.34302,-9.34302 1.78478,2.56441 3.31154,2.85122 5.43366,1e-5 z" />
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g3900">
    <g
       id="g3902"
       clip-path="url(#clipPath3906)">
      <g
         id="g3908"
         transform="matrix(0,-1.142099,1.143926,0,71.774133,319.59082)">
        <g
           id="g3910" />
        <g
           id="g3930"
           mask="url(#mask3922)">
          <path
             d="m 266.984,238.555 c 1.719,1.015 3.68,2.215 5.649,3.554 -0.563,-2.57 -1.766,-5.332 -3.133,-7.05 1.789,0.398 3.773,1.664 3.773,1.664 0,0 1.207,7.066 2.45,8.367 -1.766,-0.543 -9.118,1.285 -9.118,1.285 0,0 -2.351,-1.637 -3.367,-2.656 2.653,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.719,-3.199 -4.347,-2.918 -5.441,-3.59 -7.609,-7.235 -2.121,-3.562 -2.187,-5.277 -3.039,-6.035 0.5,-0.238 0.754,-0.566 1.016,-1.246 0.418,0.344 0.871,0.449 1.519,0.293 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.895 2.613,3.82 6.554,6.145 z"
             style="fill:url(#linearGradient14649);stroke:none"
             id="path3938" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g4148">
    <g
       id="g4150"
       clip-path="url(#clipPath4154)">
      <g
         id="g4156"
         transform="matrix(-0.71422,-1.308057,1.308885,-0.716053,311.27323,425.6761)">
        <g
           id="g4158" />
        <g
           id="g4178"
           mask="url(#mask4170)">
          <path
             d="m 483.957,210.672 c 2.602,0.086 5.594,0.23 8.684,0.535 -2.246,-2.594 -5.352,-5 -7.989,-6.113 2.293,-0.664 5.356,-0.461 5.356,-0.461 0,0 5.797,7.34 8.035,8.051 -2.363,0.484 -9.629,7.179 -9.629,7.179 0,0 -3.715,-0.402 -5.516,-0.933 3.411,-0.981 6.063,-2.34 9.493,-5.313 -3.102,0.012 -5.95,-0.019 -8.543,-0.086 -6.801,-0.617 -8.469,-0.703 -13.231,-3.519 -4.656,-2.754 -5.801,-4.676 -7.25,-5.016 0.422,-0.586 0.504,-1.117 0.383,-2.062 0.691,0.132 1.273,-0.032 1.922,-0.614 0.66,1.235 1.859,2.993 6.941,5.418 2.848,1.262 5.383,2.739 11.344,2.934 z"
             style="fill:url(#linearGradient14651);stroke:none"
             id="path4186" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g4210">
    <g
       id="g4212"
       clip-path="url(#clipPath4216)">
      <g
         id="g4218"
         transform="matrix(-1.056316,1.455556,1.230751,0.894898,284.33792,-56.410605)">
        <g
           id="g4220" />
        <g
           id="g4240"
           mask="url(#mask4232)">
          <path
             d="m 428.777,199.469 c -2.976,2.836 -6.828,5.41 -9.886,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.832,-8.063 10.371,-8.746 -2.402,-0.692 -8.617,-8.77 -8.617,-8.77 0,0 -4.047,0.243 -6.082,0.746 3.406,1.321 5.918,3.032 8.895,6.629 -3.293,-0.191 -6.414,-0.187 -9.192,-0.265 -4.375,-0.137 -5.383,-0.364 -9.035,-0.965 -4.457,-0.735 -6.164,-0.707 -8.027,-1.844 0.316,0.695 -0.332,1.395 -1.133,1.938 0.801,0.523 1.34,1.332 1.203,1.945 0.988,-0.453 2.156,-0.227 6.906,0.824 3.711,0.82 4.758,0.895 9.946,1.293 2.566,0.07 6.777,-0.039 9.054,-0.152 z"
             style="fill:url(#linearGradient14653);stroke:none"
             id="path4248" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g4262">
    <g
       id="g4264"
       clip-path="url(#clipPath4268)">
      <g
         id="g4270"
         transform="matrix(0,-1.142099,1.143926,0,86.362614,317.19464)">
        <g
           id="g4272" />
        <g
           id="g4292"
           mask="url(#mask4284)">
          <path
             d="m 281.574,236.16 c 1.715,1.012 3.68,2.211 5.645,3.551 -0.559,-2.566 -1.766,-5.328 -3.129,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.203,7.071 2.45,8.367 -1.77,-0.543 -9.118,1.286 -9.118,1.286 0,0 -2.355,-1.633 -3.371,-2.657 2.656,0.598 4.942,0.657 8.34,-0.078 -2.09,-1.133 -3.992,-2.203 -5.715,-3.203 -4.351,-2.914 -5.441,-3.586 -7.613,-7.23 -2.121,-3.563 -2.184,-5.278 -3.035,-6.039 0.5,-0.239 0.754,-0.567 1.015,-1.243 0.418,0.34 0.872,0.446 1.52,0.293 -0.012,1.071 0.152,2.696 2.68,6.196 1.453,1.894 2.617,3.82 6.558,6.144 z"
             style="fill:url(#linearGradient14655);stroke:none"
             id="path4300" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g4342">
    <g
       id="g4344"
       clip-path="url(#clipPath4348)">
      <g
         id="g4350"
         transform="matrix(1.37837,0,0,1.166611,180.44467,-34.489457)">
        <g
           id="g4352" />
        <g
           id="g4372"
           mask="url(#mask4364)">
          <path
             d="m 284.902,145.516 c -0.07,0.972 -0.339,2.07 -0.808,3.308 -0.578,1.547 -1.364,3.223 -2.117,4.785 -2.516,5.204 -2.426,4.989 -5.704,10.032 -0.003,0 -0.003,0.004 -0.007,0.004 -1.203,1.753 -2.493,3.699 -3.86,5.824 -0.168,0.258 -0.562,0.195 -0.64,-0.106 -0.766,-2.988 -0.793,-5.191 -0.344,-7.476 -1.035,1.043 -2.074,2.238 -2.219,2.41 0.051,0.172 0.524,1.793 0.973,3.805 0.238,1.058 0.453,2.175 0.57,3.152 0.074,0.617 0.094,1.137 0.063,1.609 0.464,-0.222 1.011,-0.429 1.695,-0.625 1.035,-0.297 2.254,-0.57 3.426,-0.804 2.254,-0.45 4.172,-0.731 4.316,-0.75 0.106,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.215 -4.996,2.234 -7.762,2.742 -0.32,0.059 -0.543,-0.312 -0.343,-0.57 1.617,-2.004 3.066,-3.867 4.363,-5.574 2.121,-2.735 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.109,-3.461 1.605,-4.778 0.25,-0.66 0.5,-1.218 0.793,-1.66 0.199,-0.301 0.441,-0.519 0.707,-0.68 -0.07,-0.144 -0.133,-0.281 -0.227,-0.445 -0.089,-0.164 -0.148,-0.387 -0.164,-0.629 -0.328,0.004 -0.656,0.02 -0.953,-0.074 -0.152,-0.047 -0.285,-0.121 -0.422,-0.191 z"
             style="fill:url(#linearGradient14657);stroke:none"
             id="path4380" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g4386">
    <g
       id="g4388"
       clip-path="url(#clipPath4392)">
      <g
         id="g4394"
         transform="matrix(1.37837,0,0,1.166611,173.86161,-41.964537)">
        <g
           id="g4396" />
        <g
           id="g4416"
           mask="url(#mask4408)">
          <path
             d="m 271.746,157.297 c -1.301,1.711 -2.754,3.574 -4.375,5.578 3.102,-0.57 6.434,-1.801 8.508,-3.191 -0.481,1.824 -2.004,3.847 -2.004,3.847 0,0 -8.531,1.231 -10.098,2.496 0.657,-1.8 -1.55,-9.297 -1.55,-9.297 0,0 1.972,-2.398 3.203,-3.437 -0.719,2.711 -0.789,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.864,-5.832 3.277,-5.043 3.168,-4.785 5.683,-9.992 1.508,-3.118 3.129,-6.672 2.965,-8.645 0.289,0.508 1.195,0.773 2.016,0.648 -0.172,0.68 0.312,0.887 0.5,1.551 -1.293,0.278 -1.981,3.543 -3.235,7.082 -1.336,3.782 -3.422,7.903 -5.574,10.684 z"
             style="fill:url(#linearGradient14659);stroke:none"
             id="path4424" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g4432">
    <g
       id="g4434"
       clip-path="url(#clipPath4438)">
      <g
         id="g4440"
         transform="matrix(0,-1.142099,1.143926,0,37.887089,250.42139)">
        <g
           id="g4442" />
        <g
           id="g4462"
           mask="url(#mask4454)">
          <path
             d="m 233.195,169.586 c 1.758,0.945 3.582,2.012 5.551,3.352 -0.562,-2.567 -1.766,-5.329 -3.133,-7.047 1.789,0.398 3.774,1.66 3.774,1.66 0,0 1.207,7.07 2.449,8.367 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.356,-1.633 -3.367,-2.656 2.652,0.598 4.937,0.656 8.336,-0.078 -2.086,-1.133 -3.993,-2.203 -5.715,-3.203 -1.66,-0.969 -3.836,-2.778 -4.61,-4.231 -1.953,-3.656 -2.187,-5.277 -3.039,-6.039 0.5,-0.238 0.754,-0.566 1.016,-1.242 0.418,0.34 0.871,0.445 1.519,0.293 -0.007,1.07 0.106,2.945 2.184,5.945 1.055,1.399 2.059,2.465 4.152,3.594 z"
             style="fill:url(#linearGradient14661);stroke:none"
             id="path4470" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g4478">
    <g
       id="g4480"
       clip-path="url(#clipPath4484)">
      <g
         id="g4486"
         transform="matrix(1.708178,0,0,1.71091,-14.237447,-120.80186)">
        <g
           id="g4488" />
        <g
           id="g4508"
           mask="url(#mask4500)">
          <path
             d="m 107.066,171.426 c -1.609,2.512 -3.414,5.242 -5.418,8.183 3.844,-0.836 7.973,-2.64 10.543,-4.679 -0.593,2.672 -2.484,5.64 -2.484,5.64 0,0 -10.57,1.805 -12.516,3.664 0.813,-2.644 -1.921,-13.636 -1.921,-13.636 0,0 2.445,-3.52 3.972,-5.039 -0.89,3.972 -0.98,7.386 0.121,12.472 1.696,-3.125 3.293,-5.972 4.785,-8.551 4.063,-7.398 3.93,-7.019 7.043,-14.652 1.868,-4.574 3.879,-9.789 3.676,-12.683 0.36,0.75 1.485,1.136 2.496,0.957 -0.211,0.996 0.391,1.3 0.621,2.269 -1.605,0.41 -2.457,5.195 -4.007,10.391 -1.657,5.543 -4.239,11.586 -6.911,15.664 z"
             style="fill:url(#linearGradient14663);stroke:none"
             id="path4516" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g5376">
    <g
       id="g5378"
       clip-path="url(#clipPath5382)">
      <g
         id="g5384"
         transform="matrix(0.377023,-1.238909,1.026969,0.325814,560.8417,221.87602)">
        <g
           id="g5386" />
        <g
           id="g5406"
           mask="url(#mask5398)">
          <path
             d="m 753.883,178.957 c 1.152,1.645 11.535,14.063 12.859,16.078 0.344,-2.949 0.172,-6.285 -0.484,-8.539 1.472,0.942 2.84,2.879 2.84,2.879 0,0 -1.254,8.008 -0.567,9.773 -1.406,-1.093 -8.605,-1.203 -8.605,-1.203 0,0 -1.574,-2.445 -2.149,-3.84 2.184,1.403 4.215,2.118 7.512,2.286 -1.5,-1.825 -12.004,-14.114 -13.219,-15.692 -3.547,-4.355 -12.492,-14.773 -16.386,-18.488 -2.332,-2.223 -14.161,-15.266 -15.942,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.863,-0.031 1.496,-0.015 -0.105,1.238 10.848,11.394 14.496,15.472 4.227,4.727 15.164,15.875 17.024,18.586 z"
             style="fill:url(#linearGradient14667);stroke:none"
             id="path5414" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g5416">
    <g
       id="g5418"
       clip-path="url(#clipPath5422)">
      <g
         id="g5424"
         transform="matrix(-0.658029,1.073926,0.81882,0.591506,660.86033,35.442258)">
        <g
           id="g5426" />
        <g
           id="g5446"
           mask="url(#mask5438)">
          <path
             d="m 748.047,212.91 c 1.824,-0.144 9.766,-0.508 11.945,-0.75 -1.883,2.125 -4.336,4.098 -6.301,5.008 1.508,0.551 3.657,0.391 3.657,0.391 0,0 4.933,-6.024 6.574,-6.602 -1.578,-0.402 -5.785,-5.922 -5.785,-5.922 0,0 -2.629,0.32 -3.942,0.754 2.243,0.813 3.91,1.938 5.922,4.387 -2.148,-0.012 -10.066,0.179 -11.875,0.226 -5.105,-0.004 -9.488,0.571 -14.34,-0.113 -2.91,-0.406 -12.117,-0.769 -13.425,-1.898 0.218,0.484 -0.028,1.324 -0.504,1.898 0.558,0.211 0.472,0.695 0.847,1.176 0.813,-0.867 7.481,0.64 12.453,0.898 5.758,0.301 11.793,0.817 14.774,0.547 z"
             style="fill:url(#linearGradient14669);stroke:none"
             id="path5454" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g5456">
    <g
       id="g5458"
       clip-path="url(#clipPath5462)">
      <g
         id="g5464"
         transform="matrix(-1.009873,-0.533431,-0.534284,1.011488,944.47772,45.602983)">
        <g
           id="g5466" />
        <g
           id="g5486"
           mask="url(#mask5478)">
          <path
             d="m 781.781,180.547 c 0.012,1.992 0.106,4.105 0.371,6.469 -2.007,-1.696 -3.886,-4.051 -4.769,-6.059 -0.485,1.766 -0.293,4.113 -0.293,4.113 0,0 5.687,4.364 6.254,6.075 0.347,-1.817 5.394,-7.461 5.394,-7.461 0,0 -0.347,-2.848 -0.773,-4.223 -0.715,2.625 -1.727,4.676 -3.969,7.336 -0.023,-2.375 -0.078,-4.559 -0.156,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.051 -2.324,-3.433 -3.648,-4.398 -3.922,-5.504 -0.445,0.329 -0.851,0.399 -1.574,0.317 0.109,0.527 -0.012,0.976 -0.449,1.476 0.949,0.496 2.554,1.469 4.238,4.711 0.742,1.582 1.219,2.969 1.238,5.352 z"
             style="fill:url(#linearGradient14671);stroke:none"
             id="path5494" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7068">
    <g
       id="g7070"
       clip-path="url(#clipPath7074)">
      <g
         id="g7076"
         transform="matrix(0,-1.142099,1.143926,0,71.767903,554.58252)">
        <g
           id="g7078" />
        <g
           id="g7098"
           mask="url(#mask7090)">
          <path
             d="m 266.977,473.547 c 1.718,1.016 3.679,2.211 5.648,3.555 -0.559,-2.571 -1.766,-5.332 -3.129,-7.051 1.785,0.398 3.774,1.66 3.774,1.66 0,0 1.203,7.07 2.445,8.371 -1.766,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.637 -3.372,-2.656 2.657,0.594 4.938,0.656 8.34,-0.082 -2.09,-1.133 -3.996,-2.203 -5.718,-3.199 -4.348,-2.918 -5.438,-3.59 -7.61,-7.235 -2.121,-3.562 -2.183,-5.277 -3.035,-6.035 0.5,-0.242 0.75,-0.566 1.016,-1.246 0.414,0.344 0.867,0.445 1.515,0.293 -0.008,1.07 0.157,2.695 2.684,6.195 1.453,1.895 2.617,3.821 6.555,6.145 z"
             style="fill:url(#linearGradient14673);stroke:none"
             id="path7106" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7316">
    <g
       id="g7318"
       clip-path="url(#clipPath7322)">
      <g
         id="g7324"
         transform="matrix(-0.71422,-1.308057,1.308885,-0.716053,311.267,660.6678)">
        <g
           id="g7326" />
        <g
           id="g7346"
           mask="url(#mask7338)" />
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7378">
    <g
       id="g7380"
       clip-path="url(#clipPath7384)">
      <g
         id="g7386"
         transform="matrix(-1.056316,1.455556,1.230751,0.894898,284.33169,178.58109)">
        <g
           id="g7388" />
        <g
           id="g7408"
           mask="url(#mask7400)">
          <path
             d="m 428.773,434.461 c -2.98,2.836 -6.832,5.41 -9.89,6.535 2.293,0.891 5.597,0.832 5.597,0.832 0,0 7.833,-8.062 10.375,-8.75 -2.406,-0.687 -8.621,-8.765 -8.621,-8.765 0,0 -4.046,0.242 -6.082,0.746 3.407,1.32 5.922,3.031 8.899,6.629 -3.297,-0.192 -6.414,-0.188 -9.192,-0.266 -4.375,-0.137 -5.386,-0.363 -9.035,-0.965 -4.461,-0.734 -6.164,-0.711 -8.031,-1.844 0.316,0.696 -0.328,1.395 -1.133,1.938 0.805,0.523 1.34,1.332 1.207,1.945 0.985,-0.457 2.156,-0.226 6.906,0.824 3.711,0.821 4.754,0.895 9.946,1.293 2.562,0.071 6.773,-0.039 9.054,-0.152 z"
             style="fill:url(#linearGradient14677);stroke:none"
             id="path7416" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7430">
    <g
       id="g7432"
       clip-path="url(#clipPath7436)">
      <g
         id="g7438"
         transform="matrix(0,-1.142099,1.143926,0,86.356385,552.18633)">
        <g
           id="g7440" />
        <g
           id="g7460"
           mask="url(#mask7452)">
          <path
             d="m 281.566,471.152 c 1.719,1.012 3.68,2.211 5.649,3.551 -0.563,-2.57 -1.766,-5.328 -3.133,-7.047 1.789,0.399 3.773,1.66 3.773,1.66 0,0 1.208,7.067 2.45,8.368 -1.766,-0.543 -9.117,1.285 -9.117,1.285 0,0 -2.352,-1.637 -3.368,-2.656 2.653,0.597 4.938,0.656 8.34,-0.083 -2.09,-1.128 -3.996,-2.199 -5.719,-3.199 -4.347,-2.914 -5.441,-3.586 -7.609,-7.23 -2.121,-3.563 -2.187,-5.278 -3.039,-6.039 0.5,-0.239 0.754,-0.567 1.016,-1.246 0.418,0.343 0.871,0.449 1.519,0.297 -0.008,1.07 0.156,2.695 2.684,6.195 1.453,1.894 2.613,3.82 6.554,6.144 z"
             style="fill:url(#linearGradient14679);stroke:none"
             id="path7468" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7510">
    <g
       id="g7512"
       clip-path="url(#clipPath7516)">
      <g
         id="g7518"
         transform="matrix(1.37837,0,0,1.166611,180.43844,200.50224)">
        <g
           id="g7520" />
        <g
           id="g7540"
           mask="url(#mask7532)">
          <path
             d="m 284.898,380.504 c -0.07,0.976 -0.343,2.074 -0.808,3.312 -0.582,1.543 -1.367,3.219 -2.121,4.786 -2.516,5.203 -2.426,4.988 -5.703,10.031 0,0 -0.004,0.004 -0.004,0.004 -1.203,1.754 -2.496,3.695 -3.86,5.824 -0.168,0.258 -0.566,0.195 -0.644,-0.106 -0.766,-2.988 -0.793,-5.191 -0.34,-7.48 -1.035,1.047 -2.078,2.242 -2.223,2.414 0.051,0.172 0.528,1.793 0.977,3.805 0.234,1.058 0.453,2.176 0.57,3.152 0.074,0.617 0.09,1.137 0.059,1.609 0.469,-0.222 1.015,-0.429 1.695,-0.625 1.035,-0.3 2.258,-0.57 3.426,-0.804 2.258,-0.449 4.176,-0.731 4.32,-0.75 0.102,-0.141 0.965,-1.356 1.539,-2.727 -2.121,1.211 -4.996,2.231 -7.761,2.742 -0.325,0.059 -0.547,-0.312 -0.344,-0.57 1.613,-2.004 3.066,-3.867 4.363,-5.574 2.117,-2.738 4.195,-6.836 5.52,-10.582 0.621,-1.758 1.105,-3.461 1.605,-4.777 0.25,-0.661 0.5,-1.223 0.789,-1.661 0.199,-0.3 0.442,-0.519 0.711,-0.683 -0.07,-0.141 -0.137,-0.278 -0.226,-0.442 -0.094,-0.164 -0.153,-0.386 -0.168,-0.632 -0.325,0.003 -0.657,0.023 -0.954,-0.071 -0.148,-0.047 -0.285,-0.121 -0.418,-0.195 z"
             style="fill:url(#linearGradient14681);stroke:none"
             id="path7548" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7554">
    <g
       id="g7556"
       clip-path="url(#clipPath7560)">
      <g
         id="g7562"
         transform="matrix(1.37837,0,0,1.166611,173.85538,193.02716)">
        <g
           id="g7564" />
        <g
           id="g7584"
           mask="url(#mask7576)">
          <path
             d="m 271.738,392.289 c -1.297,1.711 -2.754,3.574 -4.371,5.578 3.102,-0.57 6.43,-1.801 8.508,-3.191 -0.48,1.824 -2.008,3.847 -2.008,3.847 0,0 -8.527,1.227 -10.097,2.497 0.656,-1.801 -1.551,-9.297 -1.551,-9.297 0,0 1.972,-2.399 3.207,-3.438 -0.719,2.707 -0.793,5.039 0.097,8.508 1.368,-2.133 2.657,-4.074 3.86,-5.832 3.281,-5.047 3.172,-4.785 5.683,-9.992 1.508,-3.117 3.133,-6.672 2.969,-8.649 0.289,0.512 1.195,0.778 2.012,0.653 -0.172,0.679 0.316,0.886 0.5,1.55 -1.293,0.278 -1.981,3.54 -3.234,7.082 -1.336,3.782 -3.418,7.903 -5.575,10.684 z"
             style="fill:url(#linearGradient14683);stroke:none"
             id="path7592" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7600">
    <g
       id="g7602"
       clip-path="url(#clipPath7606)">
      <g
         id="g7608"
         transform="matrix(0,-1.142099,1.143926,0,37.88086,485.41308)">
        <g
           id="g7610" />
        <g
           id="g7630"
           mask="url(#mask7622)">
          <path
             d="m 233.191,404.578 c 1.754,0.945 3.579,2.012 5.547,3.352 -0.558,-2.571 -1.765,-5.328 -3.129,-7.047 1.786,0.398 3.77,1.66 3.77,1.66 0,0 1.207,7.066 2.449,8.367 -1.765,-0.543 -9.113,1.285 -9.113,1.285 0,0 -2.356,-1.636 -3.371,-2.656 2.656,0.598 4.937,0.656 8.34,-0.078 -2.09,-1.133 -3.996,-2.203 -5.719,-3.203 -1.656,-0.973 -3.836,-2.778 -4.61,-4.231 -1.953,-3.66 -2.183,-5.277 -3.035,-6.039 0.5,-0.238 0.75,-0.566 1.016,-1.242 0.414,0.34 0.867,0.445 1.516,0.293 -0.008,1.07 0.105,2.945 2.183,5.945 1.055,1.395 2.059,2.465 4.156,3.594 z"
             style="fill:url(#linearGradient14685);stroke:none"
             id="path7638" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7646">
    <g
       id="g7648"
       clip-path="url(#clipPath7652)">
      <g
         id="g7654"
         transform="matrix(1.708178,0,0,1.71091,-14.243676,114.18983)">
        <g
           id="g7656" />
        <g
           id="g7676"
           mask="url(#mask7668)">
          <path
             d="m 107.063,406.418 c -1.614,2.512 -3.415,5.242 -5.422,8.184 3.843,-0.836 7.972,-2.641 10.543,-4.68 -0.594,2.672 -2.485,5.641 -2.485,5.641 0,0 -10.57,1.8 -12.515,3.664 0.812,-2.645 -1.922,-13.637 -1.922,-13.637 0,0 2.449,-3.52 3.972,-5.039 -0.89,3.969 -0.98,7.387 0.121,12.472 1.696,-3.125 3.293,-5.972 4.79,-8.55 4.062,-7.399 3.925,-7.02 7.039,-14.653 1.867,-4.578 3.882,-9.789 3.679,-12.683 0.356,0.75 1.481,1.136 2.496,0.957 -0.214,0.996 0.387,1.301 0.618,2.269 -1.602,0.41 -2.454,5.196 -4.008,10.391 -1.656,5.543 -4.239,11.586 -6.906,15.664 z"
             style="fill:url(#linearGradient14687);stroke:none"
             id="path7684" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g7686">
    <g
       id="g7688"
       clip-path="url(#clipPath7692)">
      <g
         id="g7694"
         transform="matrix(-1.708178,0,0,1.71091,201.87047,115.78452)">
        <g
           id="g7696" />
        <g
           id="g7716"
           mask="url(#mask7708)">
          <path
             d="m 80.566,408.016 c 1.61,2.507 3.414,5.238 5.418,8.179 -3.843,-0.836 -7.972,-2.64 -10.543,-4.679 0.594,2.672 2.485,5.64 2.485,5.64 0,0 10.57,1.805 12.515,3.664 -0.812,-2.644 1.922,-13.632 1.922,-13.632 0,0 -2.445,-3.524 -3.972,-5.043 0.89,3.972 0.98,7.386 -0.121,12.472 -1.696,-3.125 -3.293,-5.972 -4.786,-8.551 -4.062,-7.398 -5.468,-10.898 -13.351,-13.32 -6.09,-1.168 -5.36,-1.328 -6.496,-2.601 -0.356,0.746 -0.848,1.125 -1.864,1.519 0.512,0.621 0.672,1.301 0.442,2.27 1.601,-0.016 1.488,-0.981 7.176,2.074 5.386,2.109 8.504,7.926 11.175,12.008 z"
             style="fill:url(#linearGradient14689);stroke:none"
             id="path7724" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g8544">
    <g
       id="g8546"
       clip-path="url(#clipPath8550)">
      <g
         id="g8552"
         transform="matrix(0.377023,-1.238909,1.026969,0.325814,560.83547,456.86771)">
        <g
           id="g8554" />
        <g
           id="g8574"
           mask="url(#mask8566)">
          <path
             d="m 753.875,413.945 c 1.152,1.649 11.535,14.067 12.859,16.082 0.348,-2.949 0.176,-6.285 -0.484,-8.539 1.477,0.942 2.84,2.875 2.84,2.875 0,0 -1.25,8.012 -0.563,9.778 -1.406,-1.094 -8.609,-1.203 -8.609,-1.203 0,0 -1.574,-2.446 -2.148,-3.84 2.187,1.402 4.218,2.117 7.511,2.285 -1.5,-1.824 -12,-14.117 -13.218,-15.692 -3.543,-4.355 -12.489,-14.773 -16.383,-18.488 -2.336,-2.226 -14.164,-15.265 -15.946,-15.672 0.528,-0.117 1.008,-0.859 1.125,-1.629 0.551,0.344 0.868,-0.035 1.5,-0.015 -0.109,1.238 10.844,11.394 14.496,15.472 4.223,4.727 15.161,15.875 17.02,18.586 z"
             style="fill:url(#linearGradient14691);stroke:none"
             id="path8582" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g8584">
    <g
       id="g8586"
       clip-path="url(#clipPath8590)">
      <g
         id="g8592"
         transform="matrix(-0.658029,1.073926,0.81882,0.591506,660.8541,270.43395)">
        <g
           id="g8594" />
        <g
           id="g8614"
           mask="url(#mask8606)">
          <path
             d="m 748.043,447.902 c 1.82,-0.144 9.762,-0.507 11.941,-0.75 -1.879,2.125 -4.332,4.098 -6.3,5.008 1.507,0.551 3.656,0.391 3.656,0.391 0,0 4.937,-6.024 6.574,-6.606 -1.578,-0.402 -5.785,-5.918 -5.785,-5.918 0,0 -2.625,0.321 -3.941,0.754 2.242,0.813 3.914,1.938 5.921,4.387 -2.148,-0.012 -10.066,0.18 -11.875,0.227 -5.105,-0.004 -9.484,0.566 -14.339,-0.114 -2.911,-0.406 -12.118,-0.769 -13.426,-1.898 0.222,0.48 -0.024,1.324 -0.504,1.898 0.558,0.211 0.473,0.696 0.848,1.176 0.812,-0.867 7.484,0.641 12.457,0.898 5.757,0.301 11.793,0.817 14.773,0.547 z"
             style="fill:url(#linearGradient14693);stroke:none"
             id="path8622" />
        </g>
      </g>
    </g>
  </g>
  <g
     transform="matrix(0.35277777,0,0,0.35277777,37.329506,297.71644)"
     id="g8624">
    <g
       id="g8626"
       clip-path="url(#clipPath8630)">
      <g
         id="g8632"
         transform="matrix(-1.009873,-0.533431,-0.534284,1.011488,944.47149,280.59468)">
        <g
           id="g8634" />
        <g
           id="g8654"
           mask="url(#mask8646)">
          <path
             d="m 781.773,415.539 c 0.016,1.992 0.106,4.106 0.375,6.469 -2.011,-1.695 -3.89,-4.051 -4.773,-6.059 -0.48,1.766 -0.293,4.114 -0.293,4.114 0,0 5.688,4.363 6.258,6.07 0.344,-1.817 5.39,-7.461 5.39,-7.461 0,0 -0.343,-2.844 -0.773,-4.219 -0.711,2.625 -1.727,4.672 -3.965,7.336 -0.027,-2.375 -0.082,-4.559 -0.16,-6.551 -0.086,-1.918 -0.668,-4.687 -1.59,-6.05 -2.32,-3.434 -3.644,-4.399 -3.918,-5.508 -0.445,0.332 -0.855,0.402 -1.578,0.32 0.109,0.527 -0.012,0.977 -0.449,1.477 0.953,0.492 2.555,1.468 4.238,4.707 0.742,1.586 1.219,2.972 1.238,5.355 z"
             style="fill:url(#linearGradient14695);stroke:none"
             id="path8662" />
        </g>
      </g>
    </g>
  </g>
  <g
     class="settlement1 selection"
     id="g2233">
    <g
       id="g17272"
       transform="translate(70.559155,-39.021351)"
       class="settlement1 buildings">
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g7126">
        <g
           id="g7128"
           transform="scale(0.999035,1)">
          <path
             d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z"
             style="fill:url(#linearGradient7134);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path7136" />
        </g>
      </g>
      <path
         d="m 184.08428,131.56493 c 0.23706,-0.42863 0.47801,-1.028 0.12806,-1.55716 -0.25894,-0.39159 -0.85584,-0.63536 -1.11619,-0.91511 -0.24659,0.26176 -0.84067,0.51682 -1.1176,0.91511 -0.34996,0.52916 -0.10866,1.12853 0.12806,1.55716"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7138" />
      <g
         id="g7140"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 437.633,394.215 c 0.673,-1.215 1.357,-2.914 0.364,-4.414 -0.735,-1.11 -2.428,-1.801 -3.167,-2.594 -0.7,0.742 -2.385,1.465 -3.171,2.594 -0.994,1.5 -0.309,3.199 0.363,4.414"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7142" />
      </g>
      <path
         d="m 186.78514,124.96975 c -0.48789,0.47801 -0.78281,0.80045 -1.57903,0.78387 0.39829,0.83785 0.69991,2.37702 0.69991,2.37702 0,0 1.24989,-0.20638 2.17029,-1.18216"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7144" />
      <g
         id="g7146"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 445.297,375.52 c -1.384,1.355 -2.221,2.269 -4.481,2.222 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.585 6.158,-3.351"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7148" />
      </g>
      <path
         d="m 182.20997,125.9674 c 0.9331,0.38453 1.45521,0.21908 1.83974,0.055 0.0691,0.79657 0.70026,2.32198 0.70026,2.32198 -1.28164,0.25506 -2.48885,0.2286 -3.22615,-0.12418 0.18485,-0.66287 0.56656,-1.42487 0.68615,-2.25284 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7150" />
      <g
         id="g7152"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 432.316,378.348 c 2.647,1.09 4.128,0.621 5.219,0.156 0.196,2.258 1.987,6.582 1.987,6.582 -3.637,0.723 -7.062,0.648 -9.154,-0.352 0.524,-1.879 1.607,-4.039 1.948,-6.386 z"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7154" />
      </g>
      <path
         d="m 179.47347,125.0082 c 0.48754,0.47943 0.78246,0.80045 1.57904,0.78423 -0.39829,0.83784 -0.69992,2.37701 -0.69992,2.37701 0,0 -1.24989,-0.20673 -2.17064,-1.18251"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7156" />
      <g
         id="g7158"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -424.55,375.629 c -1.384,1.359 -2.221,2.269 -4.481,2.223 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.586 6.158,-3.352"
           style="fill:none;stroke:#000000;stroke-width:1.10788;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7160" />
      </g>
      <g
         id="g7162"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7164" />
      </g>
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g7166">
        <g
           id="g7168"
           transform="scale(0.999035,1)">
          <path
             d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z"
             style="fill:url(#linearGradient7174);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path7176" />
        </g>
      </g>
      <path
         d="m 168.87497,134.15714 c 0.25612,-0.46461 0.51788,-1.11231 0.13899,-1.68416 -0.28116,-0.42439 -0.92463,-0.68757 -1.2072,-0.98954 -0.266,0.28398 -0.90805,0.55809 -1.20721,0.98954 -0.37888,0.57185 -0.11818,1.21955 0.13794,1.68416"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7178" />
      <g
         id="g7180"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 394.478,401.563 c 0.727,-1.317 1.47,-3.153 0.395,-4.774 -0.798,-1.203 -2.623,-1.949 -3.425,-2.805 -0.755,0.805 -2.577,1.582 -3.425,2.805 -1.075,1.621 -0.336,3.457 0.391,4.774"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7182" />
      </g>
      <path
         d="m 171.79632,127.02574 c -0.52775,0.51682 -0.84631,0.86395 -1.70744,0.84596 0.43145,0.90664 0.75812,2.5714 0.75812,2.5714 0,0 1.35043,-0.22331 2.34526,-1.27882"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7184" />
      <g
         id="g7186"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 402.767,381.348 c -1.497,1.465 -2.4,2.449 -4.844,2.398 1.224,2.57 2.15,7.289 2.15,7.289 0,0 3.832,-0.633 6.655,-3.625"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7188" />
      </g>
      <path
         d="m 166.84897,128.10312 c 1.00894,0.41628 1.57374,0.23848 1.98861,0.0607 0.0744,0.86148 0.75811,2.51072 0.75811,2.51072 -1.385,0.27446 -2.69134,0.24694 -3.48932,-0.13335 0.20108,-0.71685 0.61313,-1.54235 0.7426,-2.43805 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7190" />
      <g
         id="g7192"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 388.73,384.402 c 2.863,1.18 4.466,0.676 5.643,0.172 0.211,2.442 2.15,7.117 2.15,7.117 -3.929,0.778 -7.636,0.7 -9.9,-0.378 0.571,-2.032 1.74,-4.372 2.107,-6.911 z"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7194" />
      </g>
      <path
         d="m 163.89057,127.06701 c 0.52635,0.51823 0.84596,0.86537 1.70604,0.84737 -0.43004,0.907 -0.75671,2.56999 -0.75671,2.56999 0,0 -1.35044,-0.2219 -2.34527,-1.27741"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7196" />
      <g
         id="g7198"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -380.336,381.465 c -1.493,1.469 -2.4,2.453 -4.84,2.402 1.22,2.571 2.146,7.285 2.146,7.285 0,0 3.832,-0.629 6.655,-3.621"
           style="fill:none;stroke:#000000;stroke-width:1.19795;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7200" />
      </g>
      <g
         id="g7202"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7204" />
      </g>
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g7206">
        <g
           id="g7208"
           transform="scale(0.999035,1)">
          <path
             d="m 406.49,403.41 c 0,0 -6.917,-21.937 -7.113,-30.043 -0.199,-8.105 9.486,-26.484 9.486,-26.484 0,0 2.569,9.449 7.707,9.488 5.142,-0.039 7.71,-9.488 7.71,-9.488 0,0 9.686,18.379 9.486,26.484 -0.195,8.106 -7.116,30.043 -7.116,30.043 -1.713,2.766 -6.643,3.797 -10.08,3.75 -3.433,0.047 -8.364,-0.984 -10.08,-3.75 z"
             style="fill:url(#linearGradient7214);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path7216" />
        </g>
      </g>
      <path
         d="m 172.40134,117.91666 c 0,0 0.90522,1.18675 1.25377,1.39453 0.0346,1.01177 -0.55668,2.78942 -0.55668,2.78942 0,0 -0.97544,-0.55669 -1.60267,-1.60267"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7218" />
      <g
         id="g7220"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -404.484,355.527 c 0,0 -2.569,3.364 -3.558,3.953 -0.098,2.868 1.58,7.907 1.58,7.907 0,0 2.768,-1.578 4.547,-4.543"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7222" />
      </g>
      <path
         d="m 180.82391,117.77767 c 0,0 -0.90559,1.18498 -1.25413,1.39453 -0.0346,1.01141 0.55668,2.78906 0.55668,2.78906 0,0 0.97579,-0.5581 1.60267,-1.60408"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7224" />
      <g
         id="g7226"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 428.382,355.133 c 0,0 -2.569,3.359 -3.558,3.953 -0.098,2.867 1.58,7.906 1.58,7.906 0,0 2.768,-1.582 4.547,-4.547"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7228" />
      </g>
      <path
         d="m 175.37631,119.74828 c 1.18533,0.4879 2.05599,0.0688 2.54247,-0.13934 0.0882,1.01035 0.62724,3.13654 0.62724,3.13654 -1.6249,0.56762 -2.77424,0.43004 -3.7084,-0.0166 0.23424,-0.84067 0.38735,-1.93075 0.53869,-2.98062 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7230" />
      <g
         id="g7232"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 412.926,360.719 c 3.362,1.383 5.833,0.195 7.214,-0.395 0.25,2.864 1.779,8.891 1.779,8.891 -4.61,1.609 -7.871,1.219 -10.522,-0.047 0.665,-2.383 1.099,-5.473 1.529,-8.449 z"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7234" />
      </g>
      <path
         d="m 178.79826,125.77443 c -0.23425,1.12148 -0.41064,2.28318 -0.25647,3.66431 -1.15888,0.28645 -2.35092,0.36512 -3.60892,0.0247 0.16651,-1.31868 -0.0127,-2.56857 -0.18768,-3.58034 0.80363,0.34607 2.62114,0.53622 4.05307,-0.10866 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7236" />
      <g
         id="g7238"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 422.634,377.801 c -0.664,3.179 -1.165,6.472 -0.727,10.387 -3.288,0.812 -6.67,1.035 -10.24,0.07 0.473,-3.738 -0.036,-7.281 -0.532,-10.149 2.279,0.981 7.437,1.52 11.499,-0.308 z"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7240" />
      </g>
      <path
         d="m 170.55313,124.04476 c 0.62301,0.60114 1.49543,1.07774 2.18299,1.22238 -0.12664,1.29963 0.19579,3.1309 0.39406,3.7786 -1.05552,-0.25082 -1.9043,-0.99624 -1.9043,-0.99624"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7242" />
      <g
         id="g7244"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 399.241,372.898 c 1.767,1.704 4.242,3.055 6.193,3.465 -0.36,3.684 0.555,8.875 1.118,10.711 -2.995,-0.711 -5.403,-2.824 -5.403,-2.824"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7246" />
      </g>
      <path
         d="m 173.94474,114.86725 c 1.78435,2.56434 3.31117,2.85115 5.43348,0 l -0.77435,1.88242 -1.02799,1.18498 -0.94827,0.27976 -1.09008,-0.41064 -0.97402,-1.28023 z"
         style="fill:#5b5b5b;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7248" />
      <g
         id="g7250"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -416.801,407.16 c 3.664,0.047 8.595,-0.984 10.311,-3.75 0,0 6.917,-21.937 7.113,-30.043 0.199,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.569,9.449 -7.805,9.488"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7252" />
      </g>
      <path
         d="m 178.15867,135.92491 c 0.30057,-0.90241 0.60784,-2.16076 0.16263,-3.27272 -0.32949,-0.82268 -1.08585,-1.33526 -1.41676,-1.92229 -0.31115,0.55104 -1.06503,1.08585 -1.41499,1.92229 -0.4452,1.11196 -0.13793,2.37031 0.16122,3.27272"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7254" />
      <g
         id="g7256"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 420.82,406.574 c 0.852,-2.558 1.724,-6.125 0.461,-9.277 -0.934,-2.332 -3.081,-3.785 -4.019,-5.449 -0.884,1.562 -3.023,3.078 -4.016,5.449 -1.263,3.152 -0.391,6.719 0.458,9.277"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7258" />
      </g>
      <path
         d="m 182.72961,123.93893 c -0.623,0.60078 -1.49507,1.07597 -2.18264,1.22238 0.12665,1.29787 -0.19579,3.1309 -0.3944,3.77825 1.05586,-0.25048 1.90465,-0.99625 1.90465,-0.99625"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7260" />
      <g
         id="g7262"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -433.79,372.598 c 1.768,1.703 4.243,3.05 6.194,3.465 -0.36,3.679 0.555,8.875 1.118,10.71 -2.995,-0.71 -5.403,-2.824 -5.403,-2.824"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7264" />
      </g>
      <g
         id="g7266"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 408.863,346.883 c 5.064,7.269 9.396,8.082 15.417,0"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7268" />
      </g>
      <g
         id="g7270"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 416.343,407.16 c 3.664,0.047 8.594,-0.984 10.307,-3.75 0,0 6.921,-21.937 7.116,-30.043 0.2,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.568,9.449 -7.804,9.488"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7272" />
      </g>
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g7274">
        <g
           id="g7276"
           transform="scale(0.999035,1)">
          <path
             d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z"
             style="fill:url(#linearGradient7282);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path7284" />
        </g>
      </g>
      <path
         d="m 183.53042,138.69774 c 0.27269,-0.49636 0.73307,-1.52717 0.26987,-2.09761 -0.44379,-0.54963 -0.5207,-0.5387 -0.9465,-1.15747 -0.28399,0.30304 -0.87242,0.40111 -1.19204,0.86113 -0.40675,0.61348 -0.37218,1.45415 -0.0991,1.95016"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7286" />
      <g
         id="g7288"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 436.061,414.434 c 0.774,-1.407 2.08,-4.329 0.767,-5.946 -1.259,-1.558 -1.478,-1.527 -2.687,-3.281 -0.805,0.859 -2.475,1.137 -3.382,2.441 -1.153,1.739 -1.055,4.122 -0.281,5.528"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7290" />
      </g>
      <path
         d="m 181.87942,131.45733 c 1.07914,0.44521 1.33808,0.57468 2.52165,0.68086 0.0787,0.92181 0.12136,2.69276 0.12136,2.69276 -2.02283,-0.001 -2.97921,-0.54046 -3.75779,-1.04458 0.43674,-0.74295 0.97543,-1.37125 1.11478,-2.32904 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7292" />
      <g
         id="g7294"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 431.377,393.91 c 3.062,1.262 3.797,1.629 7.155,1.93 0.223,2.613 0.345,7.633 0.345,7.633 -5.74,-0.004 -8.454,-1.532 -10.663,-2.961 1.239,-2.106 2.768,-3.887 3.163,-6.602 z"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7296" />
      </g>
      <g
         id="g7298"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7300" />
      </g>
      <path
         d="m 186.28773,132.2719 c 1.07914,0.44485 2.42111,-0.28822 2.86632,-0.47978 0.0801,0.92216 1.08056,2.38266 1.08056,2.38266 -1.11231,0.54151 -2.95346,0.88053 -4.29825,0.76905 0.21484,-0.76623 0.21237,-1.71414 0.35137,-2.67193 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path7302" />
      <g
         id="g7304"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 443.885,396.219 c 3.062,1.261 6.87,-0.817 8.133,-1.36 0.227,2.614 3.066,6.754 3.066,6.754 -3.156,1.535 -8.38,2.496 -12.196,2.18 0.61,-2.172 0.602,-4.859 0.997,-7.574 z"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path7306" />
      </g>
    </g>
    <text
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;stroke-width:0.264583"
       x="232.83333"
       y="107.57201"
       id="text17276"
       class="settlement1 name"><tspan
         id="tspan17274"
         x="232.83333"
         y="107.57201"
         style="stroke-width:0.264583">Newbridge</tspan></text>
  </g>
  <g
     class="settlement2 selection"
     id="g2317">
    <g
       transform="translate(133.68117,31.28222)"
       id="g17436"
       class="settlement2 buildings">
      <g
         id="g17282"
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
        <g
           transform="scale(0.999035,1)"
           id="g17280">
          <path
             id="path17278"
             style="fill:url(#linearGradient17442);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z" />
        </g>
      </g>
      <path
         id="path17284"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 184.08428,131.56493 c 0.23706,-0.42863 0.47801,-1.028 0.12806,-1.55716 -0.25894,-0.39159 -0.85584,-0.63536 -1.11619,-0.91511 -0.24659,0.26176 -0.84067,0.51682 -1.1176,0.91511 -0.34996,0.52916 -0.10866,1.12853 0.12806,1.55716" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17288">
        <path
           id="path17286"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 437.633,394.215 c 0.673,-1.215 1.357,-2.914 0.364,-4.414 -0.735,-1.11 -2.428,-1.801 -3.167,-2.594 -0.7,0.742 -2.385,1.465 -3.171,2.594 -0.994,1.5 -0.309,3.199 0.363,4.414" />
      </g>
      <path
         id="path17290"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 186.78514,124.96975 c -0.48789,0.47801 -0.78281,0.80045 -1.57903,0.78387 0.39829,0.83785 0.69991,2.37702 0.69991,2.37702 0,0 1.24989,-0.20638 2.17029,-1.18216" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17294">
        <path
           id="path17292"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 445.297,375.52 c -1.384,1.355 -2.221,2.269 -4.481,2.222 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.585 6.158,-3.351" />
      </g>
      <path
         id="path17296"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 182.20997,125.9674 c 0.9331,0.38453 1.45521,0.21908 1.83974,0.055 0.0691,0.79657 0.70026,2.32198 0.70026,2.32198 -1.28164,0.25506 -2.48885,0.2286 -3.22615,-0.12418 0.18485,-0.66287 0.56656,-1.42487 0.68615,-2.25284 z" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17300">
        <path
           id="path17298"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 432.316,378.348 c 2.647,1.09 4.128,0.621 5.219,0.156 0.196,2.258 1.987,6.582 1.987,6.582 -3.637,0.723 -7.062,0.648 -9.154,-0.352 0.524,-1.879 1.607,-4.039 1.948,-6.386 z" />
      </g>
      <path
         id="path17302"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 179.47347,125.0082 c 0.48754,0.47943 0.78246,0.80045 1.57904,0.78423 -0.39829,0.83784 -0.69992,2.37701 -0.69992,2.37701 0,0 -1.24989,-0.20673 -2.17064,-1.18251" />
      <g
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17306">
        <path
           id="path17304"
           style="fill:none;stroke:#000000;stroke-width:1.10788;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m -424.55,375.629 c -1.384,1.359 -2.221,2.269 -4.481,2.223 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.586 6.158,-3.352" />
      </g>
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17310">
        <path
           id="path17308"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z" />
      </g>
      <g
         id="g17316"
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
        <g
           transform="scale(0.999035,1)"
           id="g17314">
          <path
             id="path17312"
             style="fill:url(#linearGradient17444);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z" />
        </g>
      </g>
      <path
         id="path17318"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 168.87497,134.15714 c 0.25612,-0.46461 0.51788,-1.11231 0.13899,-1.68416 -0.28116,-0.42439 -0.92463,-0.68757 -1.2072,-0.98954 -0.266,0.28398 -0.90805,0.55809 -1.20721,0.98954 -0.37888,0.57185 -0.11818,1.21955 0.13794,1.68416" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17322">
        <path
           id="path17320"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 394.478,401.563 c 0.727,-1.317 1.47,-3.153 0.395,-4.774 -0.798,-1.203 -2.623,-1.949 -3.425,-2.805 -0.755,0.805 -2.577,1.582 -3.425,2.805 -1.075,1.621 -0.336,3.457 0.391,4.774" />
      </g>
      <path
         id="path17324"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 171.79632,127.02574 c -0.52775,0.51682 -0.84631,0.86395 -1.70744,0.84596 0.43145,0.90664 0.75812,2.5714 0.75812,2.5714 0,0 1.35043,-0.22331 2.34526,-1.27882" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17328">
        <path
           id="path17326"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 402.767,381.348 c -1.497,1.465 -2.4,2.449 -4.844,2.398 1.224,2.57 2.15,7.289 2.15,7.289 0,0 3.832,-0.633 6.655,-3.625" />
      </g>
      <path
         id="path17330"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 166.84897,128.10312 c 1.00894,0.41628 1.57374,0.23848 1.98861,0.0607 0.0744,0.86148 0.75811,2.51072 0.75811,2.51072 -1.385,0.27446 -2.69134,0.24694 -3.48932,-0.13335 0.20108,-0.71685 0.61313,-1.54235 0.7426,-2.43805 z" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17334">
        <path
           id="path17332"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 388.73,384.402 c 2.863,1.18 4.466,0.676 5.643,0.172 0.211,2.442 2.15,7.117 2.15,7.117 -3.929,0.778 -7.636,0.7 -9.9,-0.378 0.571,-2.032 1.74,-4.372 2.107,-6.911 z" />
      </g>
      <path
         id="path17336"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 163.89057,127.06701 c 0.52635,0.51823 0.84596,0.86537 1.70604,0.84737 -0.43004,0.907 -0.75671,2.56999 -0.75671,2.56999 0,0 -1.35044,-0.2219 -2.34527,-1.27741" />
      <g
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17340">
        <path
           id="path17338"
           style="fill:none;stroke:#000000;stroke-width:1.19795;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m -380.336,381.465 c -1.493,1.469 -2.4,2.453 -4.84,2.402 1.22,2.571 2.146,7.285 2.146,7.285 0,0 3.832,-0.629 6.655,-3.621" />
      </g>
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17344">
        <path
           id="path17342"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z" />
      </g>
      <g
         id="g17350"
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
        <g
           transform="scale(0.999035,1)"
           id="g17348">
          <path
             id="path17346"
             style="fill:url(#linearGradient17446);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 406.49,403.41 c 0,0 -6.917,-21.937 -7.113,-30.043 -0.199,-8.105 9.486,-26.484 9.486,-26.484 0,0 2.569,9.449 7.707,9.488 5.142,-0.039 7.71,-9.488 7.71,-9.488 0,0 9.686,18.379 9.486,26.484 -0.195,8.106 -7.116,30.043 -7.116,30.043 -1.713,2.766 -6.643,3.797 -10.08,3.75 -3.433,0.047 -8.364,-0.984 -10.08,-3.75 z" />
        </g>
      </g>
      <path
         id="path17352"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 172.40134,117.91666 c 0,0 0.90522,1.18675 1.25377,1.39453 0.0346,1.01177 -0.55668,2.78942 -0.55668,2.78942 0,0 -0.97544,-0.55669 -1.60267,-1.60267" />
      <g
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17356">
        <path
           id="path17354"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m -404.484,355.527 c 0,0 -2.569,3.364 -3.558,3.953 -0.098,2.868 1.58,7.907 1.58,7.907 0,0 2.768,-1.578 4.547,-4.543" />
      </g>
      <path
         id="path17358"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 180.82391,117.77767 c 0,0 -0.90559,1.18498 -1.25413,1.39453 -0.0346,1.01141 0.55668,2.78906 0.55668,2.78906 0,0 0.97579,-0.5581 1.60267,-1.60408" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17362">
        <path
           id="path17360"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 428.382,355.133 c 0,0 -2.569,3.359 -3.558,3.953 -0.098,2.867 1.58,7.906 1.58,7.906 0,0 2.768,-1.582 4.547,-4.547" />
      </g>
      <path
         id="path17364"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 175.37631,119.74828 c 1.18533,0.4879 2.05599,0.0688 2.54247,-0.13934 0.0882,1.01035 0.62724,3.13654 0.62724,3.13654 -1.6249,0.56762 -2.77424,0.43004 -3.7084,-0.0166 0.23424,-0.84067 0.38735,-1.93075 0.53869,-2.98062 z" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17368">
        <path
           id="path17366"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 412.926,360.719 c 3.362,1.383 5.833,0.195 7.214,-0.395 0.25,2.864 1.779,8.891 1.779,8.891 -4.61,1.609 -7.871,1.219 -10.522,-0.047 0.665,-2.383 1.099,-5.473 1.529,-8.449 z" />
      </g>
      <path
         id="path17370"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 178.79826,125.77443 c -0.23425,1.12148 -0.41064,2.28318 -0.25647,3.66431 -1.15888,0.28645 -2.35092,0.36512 -3.60892,0.0247 0.16651,-1.31868 -0.0127,-2.56857 -0.18768,-3.58034 0.80363,0.34607 2.62114,0.53622 4.05307,-0.10866 z" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17374">
        <path
           id="path17372"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 422.634,377.801 c -0.664,3.179 -1.165,6.472 -0.727,10.387 -3.288,0.812 -6.67,1.035 -10.24,0.07 0.473,-3.738 -0.036,-7.281 -0.532,-10.149 2.279,0.981 7.437,1.52 11.499,-0.308 z" />
      </g>
      <path
         id="path17376"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 170.55313,124.04476 c 0.62301,0.60114 1.49543,1.07774 2.18299,1.22238 -0.12664,1.29963 0.19579,3.1309 0.39406,3.7786 -1.05552,-0.25082 -1.9043,-0.99624 -1.9043,-0.99624" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17380">
        <path
           id="path17378"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 399.241,372.898 c 1.767,1.704 4.242,3.055 6.193,3.465 -0.36,3.684 0.555,8.875 1.118,10.711 -2.995,-0.711 -5.403,-2.824 -5.403,-2.824" />
      </g>
      <path
         id="path17382"
         style="fill:#5b5b5b;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 173.94474,114.86725 c 1.78435,2.56434 3.31117,2.85115 5.43348,0 l -0.77435,1.88242 -1.02799,1.18498 -0.94827,0.27976 -1.09008,-0.41064 -0.97402,-1.28023 z" />
      <g
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17386">
        <path
           id="path17384"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m -416.801,407.16 c 3.664,0.047 8.595,-0.984 10.311,-3.75 0,0 6.917,-21.937 7.113,-30.043 0.199,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.569,9.449 -7.805,9.488" />
      </g>
      <path
         id="path17388"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 178.15867,135.92491 c 0.30057,-0.90241 0.60784,-2.16076 0.16263,-3.27272 -0.32949,-0.82268 -1.08585,-1.33526 -1.41676,-1.92229 -0.31115,0.55104 -1.06503,1.08585 -1.41499,1.92229 -0.4452,1.11196 -0.13793,2.37031 0.16122,3.27272" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17392">
        <path
           id="path17390"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 420.82,406.574 c 0.852,-2.558 1.724,-6.125 0.461,-9.277 -0.934,-2.332 -3.081,-3.785 -4.019,-5.449 -0.884,1.562 -3.023,3.078 -4.016,5.449 -1.263,3.152 -0.391,6.719 0.458,9.277" />
      </g>
      <path
         id="path17394"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 182.72961,123.93893 c -0.623,0.60078 -1.49507,1.07597 -2.18264,1.22238 0.12665,1.29787 -0.19579,3.1309 -0.3944,3.77825 1.05586,-0.25048 1.90465,-0.99625 1.90465,-0.99625" />
      <g
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17398">
        <path
           id="path17396"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m -433.79,372.598 c 1.768,1.703 4.243,3.05 6.194,3.465 -0.36,3.679 0.555,8.875 1.118,10.71 -2.995,-0.71 -5.403,-2.824 -5.403,-2.824" />
      </g>
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17402">
        <path
           id="path17400"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 408.863,346.883 c 5.064,7.269 9.396,8.082 15.417,0" />
      </g>
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17406">
        <path
           id="path17404"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 416.343,407.16 c 3.664,0.047 8.594,-0.984 10.307,-3.75 0,0 6.921,-21.937 7.116,-30.043 0.2,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.568,9.449 -7.804,9.488" />
      </g>
      <g
         id="g17412"
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)">
        <g
           transform="scale(0.999035,1)"
           id="g17410">
          <path
             id="path17408"
             style="fill:url(#linearGradient17448);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z" />
        </g>
      </g>
      <path
         id="path17414"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 183.53042,138.69774 c 0.27269,-0.49636 0.73307,-1.52717 0.26987,-2.09761 -0.44379,-0.54963 -0.5207,-0.5387 -0.9465,-1.15747 -0.28399,0.30304 -0.87242,0.40111 -1.19204,0.86113 -0.40675,0.61348 -0.37218,1.45415 -0.0991,1.95016" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17418">
        <path
           id="path17416"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 436.061,414.434 c 0.774,-1.407 2.08,-4.329 0.767,-5.946 -1.259,-1.558 -1.478,-1.527 -2.687,-3.281 -0.805,0.859 -2.475,1.137 -3.382,2.441 -1.153,1.739 -1.055,4.122 -0.281,5.528" />
      </g>
      <path
         id="path17420"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 181.87942,131.45733 c 1.07914,0.44521 1.33808,0.57468 2.52165,0.68086 0.0787,0.92181 0.12136,2.69276 0.12136,2.69276 -2.02283,-0.001 -2.97921,-0.54046 -3.75779,-1.04458 0.43674,-0.74295 0.97543,-1.37125 1.11478,-2.32904 z" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17424">
        <path
           id="path17422"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 431.377,393.91 c 3.062,1.262 3.797,1.629 7.155,1.93 0.223,2.613 0.345,7.633 0.345,7.633 -5.74,-0.004 -8.454,-1.532 -10.663,-2.961 1.239,-2.106 2.768,-3.887 3.163,-6.602 z" />
      </g>
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17428">
        <path
           id="path17426"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z" />
      </g>
      <path
         id="path17430"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         d="m 186.28773,132.2719 c 1.07914,0.44485 2.42111,-0.28822 2.86632,-0.47978 0.0801,0.92216 1.08056,2.38266 1.08056,2.38266 -1.11231,0.54151 -2.95346,0.88053 -4.29825,0.76905 0.21484,-0.76623 0.21237,-1.71414 0.35137,-2.67193 z" />
      <g
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)"
         id="g17434">
        <path
           id="path17432"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 443.885,396.219 c 3.062,1.261 6.87,-0.817 8.133,-1.36 0.227,2.614 3.066,6.754 3.066,6.754 -3.156,1.535 -8.38,2.496 -12.196,2.18 0.61,-2.172 0.602,-4.859 0.997,-7.574 z" />
      </g>
    </g>
    <text
       id="text17440"
       y="177.8756"
       x="299.35715"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;stroke-width:0.264583"
       xml:space="preserve"
       class="settlement2 name"><tspan
         style="stroke-width:0.264583"
         y="177.8756"
         x="299.35715"
         id="tspan17438">Westford</tspan></text>
  </g>
  <g
     class="settlement0 selection"
     id="g2149">
    <g
       id="g17608"
       transform="translate(4.7912933,30.526268)"
       style="display:inline"
       class="settlement0 buildings">
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g17454">
        <g
           id="g17452"
           transform="scale(0.999035,1)">
          <path
             d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z"
             style="fill:url(#linearGradient17614);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17450" />
        </g>
      </g>
      <path
         d="m 184.08428,131.56493 c 0.23706,-0.42863 0.47801,-1.028 0.12806,-1.55716 -0.25894,-0.39159 -0.85584,-0.63536 -1.11619,-0.91511 -0.24659,0.26176 -0.84067,0.51682 -1.1176,0.91511 -0.34996,0.52916 -0.10866,1.12853 0.12806,1.55716"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17456" />
      <g
         id="g17460"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 437.633,394.215 c 0.673,-1.215 1.357,-2.914 0.364,-4.414 -0.735,-1.11 -2.428,-1.801 -3.167,-2.594 -0.7,0.742 -2.385,1.465 -3.171,2.594 -0.994,1.5 -0.309,3.199 0.363,4.414"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17458" />
      </g>
      <path
         d="m 186.78514,124.96975 c -0.48789,0.47801 -0.78281,0.80045 -1.57903,0.78387 0.39829,0.83785 0.69991,2.37702 0.69991,2.37702 0,0 1.24989,-0.20638 2.17029,-1.18216"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17462" />
      <g
         id="g17466"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 445.297,375.52 c -1.384,1.355 -2.221,2.269 -4.481,2.222 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.585 6.158,-3.351"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17464" />
      </g>
      <path
         d="m 182.20997,125.9674 c 0.9331,0.38453 1.45521,0.21908 1.83974,0.055 0.0691,0.79657 0.70026,2.32198 0.70026,2.32198 -1.28164,0.25506 -2.48885,0.2286 -3.22615,-0.12418 0.18485,-0.66287 0.56656,-1.42487 0.68615,-2.25284 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17468" />
      <g
         id="g17472"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 432.316,378.348 c 2.647,1.09 4.128,0.621 5.219,0.156 0.196,2.258 1.987,6.582 1.987,6.582 -3.637,0.723 -7.062,0.648 -9.154,-0.352 0.524,-1.879 1.607,-4.039 1.948,-6.386 z"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17470" />
      </g>
      <path
         d="m 179.47347,125.0082 c 0.48754,0.47943 0.78246,0.80045 1.57904,0.78423 -0.39829,0.83784 -0.69992,2.37701 -0.69992,2.37701 0,0 -1.24989,-0.20673 -2.17064,-1.18251"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17474" />
      <g
         id="g17478"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -424.55,375.629 c -1.384,1.359 -2.221,2.269 -4.481,2.223 1.13,2.375 1.986,6.738 1.986,6.738 0,0 3.547,-0.586 6.158,-3.352"
           style="fill:none;stroke:#000000;stroke-width:1.10788;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17476" />
      </g>
      <g
         id="g17482"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 449.344,384.172 c 0,2.562 -0.884,4.926 -2.327,6.945 -1.126,1.571 -4.747,3.297 -12.05,3.289 -8.782,-0.008 -11.86,-2.547 -12.657,-4.183 -0.919,-1.899 -1.725,-3.86 -1.725,-6.051 0,-7.027 6.44,-12.723 14.382,-12.723 7.941,0 14.377,5.696 14.377,12.723 z"
           style="fill:none;stroke:#000000;stroke-width:0.849227;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17480" />
      </g>
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g17488">
        <g
           id="g17486"
           transform="scale(0.999035,1)">
          <path
             d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z"
             style="fill:url(#linearGradient17616);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17484" />
        </g>
      </g>
      <path
         d="m 168.87497,134.15714 c 0.25612,-0.46461 0.51788,-1.11231 0.13899,-1.68416 -0.28116,-0.42439 -0.92463,-0.68757 -1.2072,-0.98954 -0.266,0.28398 -0.90805,0.55809 -1.20721,0.98954 -0.37888,0.57185 -0.11818,1.21955 0.13794,1.68416"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17490" />
      <g
         id="g17494"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 394.478,401.563 c 0.727,-1.317 1.47,-3.153 0.395,-4.774 -0.798,-1.203 -2.623,-1.949 -3.425,-2.805 -0.755,0.805 -2.577,1.582 -3.425,2.805 -1.075,1.621 -0.336,3.457 0.391,4.774"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17492" />
      </g>
      <path
         d="m 171.79632,127.02574 c -0.52775,0.51682 -0.84631,0.86395 -1.70744,0.84596 0.43145,0.90664 0.75812,2.5714 0.75812,2.5714 0,0 1.35043,-0.22331 2.34526,-1.27882"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17496" />
      <g
         id="g17500"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 402.767,381.348 c -1.497,1.465 -2.4,2.449 -4.844,2.398 1.224,2.57 2.15,7.289 2.15,7.289 0,0 3.832,-0.633 6.655,-3.625"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17498" />
      </g>
      <path
         d="m 166.84897,128.10312 c 1.00894,0.41628 1.57374,0.23848 1.98861,0.0607 0.0744,0.86148 0.75811,2.51072 0.75811,2.51072 -1.385,0.27446 -2.69134,0.24694 -3.48932,-0.13335 0.20108,-0.71685 0.61313,-1.54235 0.7426,-2.43805 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17502" />
      <g
         id="g17506"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 388.73,384.402 c 2.863,1.18 4.466,0.676 5.643,0.172 0.211,2.442 2.15,7.117 2.15,7.117 -3.929,0.778 -7.636,0.7 -9.9,-0.378 0.571,-2.032 1.74,-4.372 2.107,-6.911 z"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17504" />
      </g>
      <path
         d="m 163.89057,127.06701 c 0.52635,0.51823 0.84596,0.86537 1.70604,0.84737 -0.43004,0.907 -0.75671,2.56999 -0.75671,2.56999 0,0 -1.35044,-0.2219 -2.34527,-1.27741"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17508" />
      <g
         id="g17512"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -380.336,381.465 c -1.493,1.469 -2.4,2.453 -4.84,2.402 1.22,2.571 2.146,7.285 2.146,7.285 0,0 3.832,-0.629 6.655,-3.621"
           style="fill:none;stroke:#000000;stroke-width:1.19795;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17510" />
      </g>
      <g
         id="g17516"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 407.143,390.703 c 0,2.77 -0.954,5.324 -2.514,7.508 -1.216,1.699 -5.134,3.566 -13.032,3.559 -9.494,-0.012 -12.825,-2.754 -13.686,-4.528 -0.993,-2.051 -1.861,-4.172 -1.861,-6.539 0,-7.598 6.96,-13.762 15.547,-13.762 8.586,0 15.546,6.164 15.546,13.762 z"
           style="fill:none;stroke:#000000;stroke-width:0.918268;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17514" />
      </g>
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g17522">
        <g
           id="g17520"
           transform="scale(0.999035,1)">
          <path
             d="m 406.49,403.41 c 0,0 -6.917,-21.937 -7.113,-30.043 -0.199,-8.105 9.486,-26.484 9.486,-26.484 0,0 2.569,9.449 7.707,9.488 5.142,-0.039 7.71,-9.488 7.71,-9.488 0,0 9.686,18.379 9.486,26.484 -0.195,8.106 -7.116,30.043 -7.116,30.043 -1.713,2.766 -6.643,3.797 -10.08,3.75 -3.433,0.047 -8.364,-0.984 -10.08,-3.75 z"
             style="fill:url(#linearGradient17618);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17518" />
        </g>
      </g>
      <path
         d="m 172.40134,117.91666 c 0,0 0.90522,1.18675 1.25377,1.39453 0.0346,1.01177 -0.55668,2.78942 -0.55668,2.78942 0,0 -0.97544,-0.55669 -1.60267,-1.60267"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17524" />
      <g
         id="g17528"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -404.484,355.527 c 0,0 -2.569,3.364 -3.558,3.953 -0.098,2.868 1.58,7.907 1.58,7.907 0,0 2.768,-1.578 4.547,-4.543"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17526" />
      </g>
      <path
         d="m 180.82391,117.77767 c 0,0 -0.90559,1.18498 -1.25413,1.39453 -0.0346,1.01141 0.55668,2.78906 0.55668,2.78906 0,0 0.97579,-0.5581 1.60267,-1.60408"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17530" />
      <g
         id="g17534"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 428.382,355.133 c 0,0 -2.569,3.359 -3.558,3.953 -0.098,2.867 1.58,7.906 1.58,7.906 0,0 2.768,-1.582 4.547,-4.547"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17532" />
      </g>
      <path
         d="m 175.37631,119.74828 c 1.18533,0.4879 2.05599,0.0688 2.54247,-0.13934 0.0882,1.01035 0.62724,3.13654 0.62724,3.13654 -1.6249,0.56762 -2.77424,0.43004 -3.7084,-0.0166 0.23424,-0.84067 0.38735,-1.93075 0.53869,-2.98062 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17536" />
      <g
         id="g17540"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 412.926,360.719 c 3.362,1.383 5.833,0.195 7.214,-0.395 0.25,2.864 1.779,8.891 1.779,8.891 -4.61,1.609 -7.871,1.219 -10.522,-0.047 0.665,-2.383 1.099,-5.473 1.529,-8.449 z"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17538" />
      </g>
      <path
         d="m 178.79826,125.77443 c -0.23425,1.12148 -0.41064,2.28318 -0.25647,3.66431 -1.15888,0.28645 -2.35092,0.36512 -3.60892,0.0247 0.16651,-1.31868 -0.0127,-2.56857 -0.18768,-3.58034 0.80363,0.34607 2.62114,0.53622 4.05307,-0.10866 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17542" />
      <g
         id="g17546"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 422.634,377.801 c -0.664,3.179 -1.165,6.472 -0.727,10.387 -3.288,0.812 -6.67,1.035 -10.24,0.07 0.473,-3.738 -0.036,-7.281 -0.532,-10.149 2.279,0.981 7.437,1.52 11.499,-0.308 z"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17544" />
      </g>
      <path
         d="m 170.55313,124.04476 c 0.62301,0.60114 1.49543,1.07774 2.18299,1.22238 -0.12664,1.29963 0.19579,3.1309 0.39406,3.7786 -1.05552,-0.25082 -1.9043,-0.99624 -1.9043,-0.99624"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17548" />
      <g
         id="g17552"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 399.241,372.898 c 1.767,1.704 4.242,3.055 6.193,3.465 -0.36,3.684 0.555,8.875 1.118,10.711 -2.995,-0.711 -5.403,-2.824 -5.403,-2.824"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17550" />
      </g>
      <path
         d="m 173.94474,114.86725 c 1.78435,2.56434 3.31117,2.85115 5.43348,0 l -0.77435,1.88242 -1.02799,1.18498 -0.94827,0.27976 -1.09008,-0.41064 -0.97402,-1.28023 z"
         style="fill:#5b5b5b;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17554" />
      <g
         id="g17558"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -416.801,407.16 c 3.664,0.047 8.595,-0.984 10.311,-3.75 0,0 6.917,-21.937 7.113,-30.043 0.199,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.569,9.449 -7.805,9.488"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17556" />
      </g>
      <path
         d="m 178.15867,135.92491 c 0.30057,-0.90241 0.60784,-2.16076 0.16263,-3.27272 -0.32949,-0.82268 -1.08585,-1.33526 -1.41676,-1.92229 -0.31115,0.55104 -1.06503,1.08585 -1.41499,1.92229 -0.4452,1.11196 -0.13793,2.37031 0.16122,3.27272"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17560" />
      <g
         id="g17564"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 420.82,406.574 c 0.852,-2.558 1.724,-6.125 0.461,-9.277 -0.934,-2.332 -3.081,-3.785 -4.019,-5.449 -0.884,1.562 -3.023,3.078 -4.016,5.449 -1.263,3.152 -0.391,6.719 0.458,9.277"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17562" />
      </g>
      <path
         d="m 182.72961,123.93893 c -0.623,0.60078 -1.49507,1.07597 -2.18264,1.22238 0.12665,1.29787 -0.19579,3.1309 -0.3944,3.77825 1.05586,-0.25048 1.90465,-0.99625 1.90465,-0.99625"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17566" />
      <g
         id="g17570"
         transform="matrix(-0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m -433.79,372.598 c 1.768,1.703 4.243,3.05 6.194,3.465 -0.36,3.679 0.555,8.875 1.118,10.71 -2.995,-0.71 -5.403,-2.824 -5.403,-2.824"
           style="fill:none;stroke:#000000;stroke-width:1.40534;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17568" />
      </g>
      <g
         id="g17574"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 408.863,346.883 c 5.064,7.269 9.396,8.082 15.417,0"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17572" />
      </g>
      <g
         id="g17578"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 416.343,407.16 c 3.664,0.047 8.594,-0.984 10.307,-3.75 0,0 6.921,-21.937 7.116,-30.043 0.2,-8.105 -9.486,-26.484 -9.486,-26.484 0,0 -2.568,9.449 -7.804,9.488"
           style="fill:none;stroke:#000000;stroke-width:1.07724;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17576" />
      </g>
      <g
         transform="matrix(0.35277777,0,0,0.35277777,29.845959,-7.50536)"
         id="g17584">
        <g
           id="g17582"
           transform="scale(0.999035,1)">
          <path
             d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z"
             style="fill:url(#linearGradient17620);fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="path17580" />
        </g>
      </g>
      <path
         d="m 183.53042,138.69774 c 0.27269,-0.49636 0.73307,-1.52717 0.26987,-2.09761 -0.44379,-0.54963 -0.5207,-0.5387 -0.9465,-1.15747 -0.28399,0.30304 -0.87242,0.40111 -1.19204,0.86113 -0.40675,0.61348 -0.37218,1.45415 -0.0991,1.95016"
         style="fill:#333333;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17586" />
      <g
         id="g17590"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 436.061,414.434 c 0.774,-1.407 2.08,-4.329 0.767,-5.946 -1.259,-1.558 -1.478,-1.527 -2.687,-3.281 -0.805,0.859 -2.475,1.137 -3.382,2.441 -1.153,1.739 -1.055,4.122 -0.281,5.528"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17588" />
      </g>
      <path
         d="m 181.87942,131.45733 c 1.07914,0.44521 1.33808,0.57468 2.52165,0.68086 0.0787,0.92181 0.12136,2.69276 0.12136,2.69276 -2.02283,-0.001 -2.97921,-0.54046 -3.75779,-1.04458 0.43674,-0.74295 0.97543,-1.37125 1.11478,-2.32904 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17592" />
      <g
         id="g17596"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 431.377,393.91 c 3.062,1.262 3.797,1.629 7.155,1.93 0.223,2.613 0.345,7.633 0.345,7.633 -5.74,-0.004 -8.454,-1.532 -10.663,-2.961 1.239,-2.106 2.768,-3.887 3.163,-6.602 z"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17594" />
      </g>
      <g
         id="g17600"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 457.993,402.887 c 0,2.961 -1.025,5.695 -2.69,8.031 -1.303,1.82 -5.49,3.816 -13.944,3.809 -10.154,-0.012 -13.716,-2.95 -14.639,-4.844 -1.063,-2.195 -1.994,-4.465 -1.994,-6.996 0,-8.129 7.449,-14.723 16.633,-14.723 9.185,0 16.634,6.594 16.634,14.723 z"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17598" />
      </g>
      <path
         d="m 186.28773,132.2719 c 1.07914,0.44485 2.42111,-0.28822 2.86632,-0.47978 0.0801,0.92216 1.08056,2.38266 1.08056,2.38266 -1.11231,0.54151 -2.95346,0.88053 -4.29825,0.76905 0.21484,-0.76623 0.21237,-1.71414 0.35137,-2.67193 z"
         style="fill:#dedede;fill-opacity:0.911215;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
         id="path17602" />
      <g
         id="g17606"
         transform="matrix(0.35243734,0,0,0.35277777,29.845959,-7.50536)">
        <path
           d="m 443.885,396.219 c 3.062,1.261 6.87,-0.817 8.133,-1.36 0.227,2.614 3.066,6.754 3.066,6.754 -3.156,1.535 -8.38,2.496 -12.196,2.18 0.61,-2.172 0.602,-4.859 0.997,-7.574 z"
           style="fill:none;stroke:#000000;stroke-width:0.982377;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path17604" />
      </g>
    </g>
    <text
       xml:space="preserve"
       style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;stroke-width:0.264583"
       x="170.46727"
       y="177.11964"
       id="text17612"
       class="settlement0 name"><tspan
         id="tspan17610"
         x="170.46727"
         y="177.11964"
         style="stroke-width:0.264583">Highton</tspan></text>
  </g>
  <path
     class="path settlement0 settlement1"
     id="path17624"
     d="m 191.44494,148.54464 c 7.55952,-5.10268 10.70718,-8.07642 15.11904,-14.1741 11.65509,-16.1086 15.875,-36.096731 23.05655,-40.632445"
     style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  <path
     class="path settlement1 settlement2"
     style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     d="m 264.39435,90.336311 c 14.48166,-2.794527 33.6293,10.742629 40.44344,17.953869 12.03915,12.74074 15.84813,23.92877 13.60715,38.55357"
     id="path17626" />
  <path
     class="path settlement2 settlement0"
     id="path17628"
     d="m 198.62649,164.98661 c 10.20535,-6.80357 28.78039,-9.28737 47.436,-4.15774 14.26343,3.92194 32.31696,10.01637 46.1131,5.85863"
     style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  <text
     class="settlement0 green number"
     xml:space="preserve"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     x="177.87968"
     y="193.08389"
     id="text18001"><tspan
       id="tspan17999"
       x="177.87968"
       y="193.08389"
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
  <text
     class="settlement0 red number"
     id="text17997"
     y="193.08389"
     x="167.29636"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     xml:space="preserve"><tspan
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       y="193.08389"
       x="167.29636"
       id="tspan17995">0</tspan></text>
  <text
     class="settlement0 blue number"
     id="text18005"
     y="193.08389"
     x="188.46303"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     xml:space="preserve"><tspan
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       y="193.08389"
       x="188.46303"
       id="tspan18003">0</tspan></text>
  <g
     id="g2035"
     transform="translate(148.61625,-0.85044448)"
     class="settlement2 blue unit">
    <path
       id="path2029"
       style="fill:#113185;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z" />
    <g
       id="g2033"
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)">
      <path
         id="path2031"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z" />
    </g>
  </g>
  <g
     transform="translate(138.03291,-0.85044448)"
     id="g2043"
     class="settlement2 green unit">
    <path
       d="m 172.68021,181.29529 c -0.46708,1.25695 -3.0854,2.41018 -3.0854,4.72122 0,0.70027 0.23707,1.34373 0.63395,1.85773 h 4.84081 c 0.3997,-0.514 0.63394,-1.15746 0.61348,-1.85773 -0.0843,-2.81234 -2.53576,-3.46427 -3.00284,-4.72122 z m -4.27743,7.19772 c 0.45332,1.45662 1.72684,2.22144 1.67428,4.40267 l -1.00471,7.02134 h 7.13281 l -1.00435,-7.08061 c -0.0127,-2.21438 1.22625,-2.89807 1.67428,-4.3434 z"
       style="fill:#118512;fill-opacity:0.859813;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
       id="path2037" />
    <g
       transform="matrix(0.35277777,0,0,0.35277777,38.463434,124.22537)"
       id="g2041">
      <path
         d="m 380.457,161.773 c -1.324,3.563 -8.746,6.832 -8.746,13.383 0,1.985 0.672,3.809 1.797,5.266 h 13.722 c 1.133,-1.457 1.797,-3.281 1.739,-5.266 -0.239,-7.972 -7.188,-9.82 -8.512,-13.383 z m -12.125,20.403 c 1.285,4.129 4.895,6.297 4.746,12.48 l -2.848,19.903 h 20.219 l -2.847,-20.071 c -0.036,-6.277 3.476,-8.215 4.746,-12.312 z"
         style="fill:none;stroke:#d9d9d9;stroke-width:0.850394;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path2039" />
    </g>
  </g>
  <text
     id="text2055"
     y="193.08389"
     x="309.10904"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     xml:space="preserve"
     class="settlement2 green number"><tspan
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
       y="193.08389"
       x="309.10904"
       id="tspan2053">0</tspan></text>
  <text
     xml:space="preserve"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     x="298.5257"
     y="193.08389"
     id="text2059"
     class="settlement2 red number"><tspan
       id="tspan2057"
       x="298.5257"
       y="193.08389"
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
  <text
     xml:space="preserve"
     style="font-size:5.64444px;line-height:1.25;font-family:Cambria;-inkscape-font-specification:Cambria;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583"
     x="319.69238"
     y="193.08389"
     id="text2063"
     class="settlement2 blue number"><tspan
       id="tspan2061"
       x="319.69238"
       y="193.08389"
       style="fill:#ffffff;fill-opacity:0.834677;stroke-width:0.264583">0</tspan></text>
</g>
</svg>
`;

