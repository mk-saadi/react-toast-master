/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={290:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,'.outer_container {\n\tposition: fixed;\n\tdisplay: flex;\n\twidth: 100vw;\n\tpointer-events: none;\n}\n\n.inner_container {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpointer-events: all;\n\twidth: 100%;\n}\n\n/* \n\t     \t\treveal animation css \n*/\n.outer_container.ani_down {\n\tanimation: slide_down 0.35s ease forwards;\n}\n.outer_container.ani_top {\n\tanimation: slide_up 0.35s ease forwards;\n}\n.outer_container.ani_left {\n\tanimation: slide_left 0.35s ease forwards;\n}\n.outer_container.ani_right {\n\tanimation: slide_right 0.35s ease forwards;\n}\n.outer_container.ani_fade {\n\tanimation: fade_in 0.4s ease forwards;\n}\n.outer_container.ani_zoom {\n\tanimation: zoom_in 0.4s ease forwards;\n}\n.outer_container.ani_jelly {\n\tanimation: jelly 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.475) forwards;\n}\n\n/* \n\t     \t\treveal animation \n*/\n@keyframes slide_down {\n\tfrom {\n\t\ttransform: translateY(-150%);\n\t}\n\tto {\n\t\ttransform: translateY(0);\n\t}\n}\n\n@keyframes slide_up {\n\tfrom {\n\t\ttransform: translateY(150%);\n\t}\n\tto {\n\t\ttransform: translateY(0);\n\t}\n}\n\n@keyframes slide_left {\n\tfrom {\n\t\ttransform: translateX(-100%);\n\t}\n\tto {\n\t\ttransform: translateX(0);\n\t}\n}\n\n@keyframes slide_right {\n\tfrom {\n\t\ttransform: translateX(100%);\n\t}\n\tto {\n\t\ttransform: translateX(0);\n\t}\n}\n\n@keyframes fade_in {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes zoom_in {\n\tfrom {\n\t\tscale: 0.9;\n\t\topacity: 0;\n\t}\n\tto {\n\t\tscale: 1;\n\t\tscale: 1;\n\t}\n}\n@keyframes jelly {\n\tfrom {\n\t\ttransform: rotateX(90deg);\n\t\tscale: 0.93;\n\t}\n\tto {\n\t\ttransform: rotateX(0deg);\n\t\tscale: 1;\n\t}\n}\n\n/* \n\t     \t\tclosing animation css\n*/\n.outer_container.ani_fade_out {\n\tanimation: fade_out 0.35s ease forwards;\n}\n.outer_container.ani_zoom_out {\n\tanimation: zoom_out 0.35s ease-out forwards;\n}\n.outer_container.ani_slide_out_down {\n\tanimation: slide_out_down 0.35s ease forwards;\n}\n.outer_container.ani_slide_out_up {\n\tanimation: slide_out_up 0.35s ease forwards;\n}\n.outer_container.ani_slide_out_left {\n\tanimation: slide_out_left 0.35s ease forwards;\n}\n.outer_container.ani_slide_out_right {\n\tanimation: slide_out_right 0.35s ease forwards;\n}\n.outer_container.ani_jelly_out {\n\tanimation: jelly_out 0.35s ease forwards;\n}\n\n/* \n\t     \t\tclosing animation \n*/\n\n@keyframes slide_out_down {\n\tfrom {\n\t\ttransform: translateY(0);\n\t}\n\tto {\n\t\ttransform: translateY(-200%);\n\t}\n}\n\n@keyframes slide_out_up {\n\tfrom {\n\t\ttransform: translateY(0);\n\t}\n\tto {\n\t\ttransform: translateY(200%);\n\t}\n}\n\n@keyframes slide_out_left {\n\tfrom {\n\t\ttransform: translateX(0);\n\t}\n\tto {\n\t\ttransform: translateX(-100%);\n\t}\n}\n\n@keyframes slide_out_right {\n\tfrom {\n\t\ttransform: translateX(0);\n\t}\n\tto {\n\t\ttransform: translateX(100%);\n\t}\n}\n\n@keyframes fade_out {\n\tfrom {\n\t\topacity: 1;\n\t}\n\tto {\n\t\topacity: 0;\n\t}\n}\n\n@keyframes zoom_out {\n\tfrom {\n\t\tscale: 1;\n\t\topacity: 1;\n\t}\n\tto {\n\t\tscale: 0.9;\n\t\topacity: 0;\n\t}\n}\n\n@keyframes jelly_out {\n\tfrom {\n\t\ttransform: rotateX(0deg);\n\t\tscale: 1;\n\t\topacity: 1;\n\t}\n\tto {\n\t\ttransform: rotateX(40deg);\n\t\tscale: 0.95;\n\t\topacity: 0;\n\t}\n}\n\n/* \n\tthis css style is used when the toast is using full width "bottomFull" ||"topFull" \n*/\n.outer_container.ani_fade_out_full {\n\tanimation: fade_out_full 0.5s ease forwards;\n}\n\n@keyframes fade_out_full {\n\tfrom {\n\t\topacity: 1;\n\t}\n\tto {\n\t\topacity: 0;\n\t}\n}\n\n.reveal_ani {\n\tanimation: revealFooter 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n@keyframes revealFooter {\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: translateY(-150%);\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n\n.overlay {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: glass;\n\ttransition: background-color 0.35s ease-in-out;\n\tz-index: 9997;\n\tbackdrop-filter: blur(0.7px);\n}\n\n.overlay.show {\n\tbackground-color: rgba(12, 12, 12, 0.63);\n}\n',""]);const s=i},743:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"/* background */\n.bg_white {\n\tbackground-color: #ffffff;\n\tborder: 1px solid #dddddd;\n}\n.bg_error {\n\tbackground-color: #dc2626;\n\tborder: 1px solid #d14f4f;\n}\n.bg_dark {\n\tbackground-color: #141318;\n\tborder: 1px solid #35383d;\n}\n.bg_gray {\n\tbackground-color: #495668;\n\tborder: 1px solid #97a5b9;\n}\n.bg_glass {\n\tbackground: #ffffff38 !important;\n\tbackdrop-filter: blur(7px) !important;\n\t-webkit-backdrop-filter: blur(7px) !important;\n\tborder: 1px solid rgba(255, 255, 255, 0.18) !important;\n}\n.bg_success {\n\tbackground-color: #07bc0c;\n\tborder: 1px solid #007e33;\n}\n\n.bg_warning {\n\tbackground-color: #edc319;\n\tborder: 1px solid #ff8800;\n}\n\n.bg_info {\n\tbackground-color: #007fff;\n\tborder: 1px solid #146fb9;\n}\n\n.bg_transparent {\n\tbackground-color: transparent;\n\tborder: 1px solid #ffffff;\n}\n\n.bg_darker {\n\tcolor: rgb(231, 231, 231);\n}\n.bg_whiter {\n\tcolor: #536075;\n}\n.bg_glass_close {\n\tcolor: #ffffff;\n}\n",""]);const s=i},909:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"/* border radius */\n.rounded_none {\n\tborder-radius: 0rem;\n}\n.rounded_md {\n\tborder-radius: 0.375rem;\n}\n.rounded_sm {\n\tborder-radius: 0.125rem;\n}\n.rounded_lg {\n\tborder-radius: 0.5rem;\n}\n.rounded_xl {\n\tborder-radius: 0.75rem;\n}\n.rounded_2xl {\n\tborder-radius: 1rem;\n}\n.rounded_full {\n\tborder-radius: 9999px;\n}\n",""]);const s=i},175:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"/* xl */\n@media screen and (min-width: 1280px) and (max-width: 5120px) {\n\t.max_width {\n\t\twidth: 475px;\n\t\toverflow: hidden;\n\t}\n\t.toast_width {\n\t\tpadding: 0.725rem 2.3rem;\n\t}\n\t.toast_width_confirm {\n\t\tpadding: 1.1rem 1.5rem;\n\t}\n\t.toast_message {\n\t\talign-items: center;\n\t\tfont-size: 1.04rem;\n\t\tline-height: 1.3rem;\n\t\tfont-weight: 600;\n\t\twhite-space: normal;\n\t\tcolumn-gap: 1rem;\n\t}\n\n\t/* footer */\n\t._footer {\n\t\twhite-space: break-spaces;\n\t\tdisplay: flex;\n\t\tborder-top-width: 1px;\n\t\tborder-top-style: solid;\n\t\tfont-weight: 400;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t\tpadding: 0.325rem 2.3rem;\n\t}\n\n\t.confirm_div {\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin-top: 0.75rem;\n\t\tcolor: #374151;\n\t\tfont-weight: 500;\n\t\tcolumn-gap: 0.75rem;\n\t}\n\n\t/* \n\t     \t\tthis css is being used in the InnerFooter component \n\t*/\n\t.innerFooter {\n\t\twhite-space: break-spaces;\n\t\tdisplay: flex;\n\t\tfont-weight: 400;\n\t\tfont-size: 0.875rem;\n\t\tpadding: 0.625rem 0rem;\n\t\tline-height: 1.25rem;\n\t}\n}\n\n/* medium display */\n@media screen and (min-width: 768px) and (max-width: 1279px) {\n\t.max_width {\n\t\twidth: 450px;\n\t}\n\t.toast_message {\n\t\tflex-direction: row;\n\t\tcolumn-gap: 0.8rem;\n\t\tfont-size: 1rem;\n\t\tline-height: 1.3rem;\n\t\tfont-weight: 600;\n\t\talign-items: center;\n\t}\n\t.toast_width {\n\t\tpadding: 0.425rem 2rem;\n\t}\n\t.toast_width_confirm {\n\t\tpadding: 1rem 1.5rem;\n\t}\n\n\t/* footer */\n\t._footer {\n\t\twhite-space: break-spaces;\n\t\tdisplay: flex;\n\t\tborder-top-width: 1px;\n\t\tborder-top-style: solid;\n\n\t\tfont-weight: 400;\n\t\tfont-size: 0.8rem;\n\t\tline-height: 1.25rem;\n\t\tpadding: 0.325rem 2rem;\n\t}\n\n\t.confirm_div {\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin-top: 0.75rem;\n\t\tcolor: #374151;\n\t\tfont-weight: 500;\n\t\tcolumn-gap: 0.75rem;\n\t}\n\n\t/* \n\t     \t\tthis css is being used in the InnerFooter component \n\t*/\n\t.innerFooter {\n\t\twhite-space: break-spaces;\n\t\tdisplay: flex;\n\t\tfont-weight: 400;\n\t\tfont-size: 0.8rem;\n\t\tline-height: 1.25rem;\n\t\tpadding: 0.6rem 0rem;\n\t}\n}\n\n/* small display */\n@media screen and (min-width: 481px) and (max-width: 767px) {\n\t.max_width {\n\t\twidth: 390px;\n\t}\n\t.toast_message {\n\t\tflex-direction: row;\n\t\tfont-size: 17px;\n\t\tline-height: 1.4rem;\n\t\tfont-weight: 500;\n\t\tgap: 0rem 0.75rem;\n\t\talign-items: center;\n\t}\n\t.toast_width {\n\t\tpadding: 0.425rem 2.2rem;\n\t}\n\t.toast_width_confirm {\n\t\tpadding: 1rem 1.5rem;\n\t}\n\n\t/* footer */\n\t._footer {\n\t\twhite-space: break-spaces;\n\t\tdisplay: flex;\n\t\tborder-top-width: 1px;\n\t\tborder-top-style: solid;\n\n\t\tfont-weight: 400;\n\t\tfont-size: 13px;\n\t\tline-height: 1.2rem;\n\t\tpadding: 0.35rem 2.2rem;\n\t}\n\t.confirm_div {\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin-top: 0.75rem;\n\t\tcolor: #374151;\n\t\tfont-weight: 500;\n\t\tcolumn-gap: 0.75rem;\n\t}\n\n\t/* \n\t     \t\tthis css is being used in the InnerFooter component \n\t*/\n\t.innerFooter {\n\t\tfont-size: 14px;\n\t\tletter-spacing: -0.4px;\n\t\tpadding: 0.625rem 0rem;\n\t}\n}\n\n@media screen and (min-width: 120px) and (max-width: 480px) {\n\t.max_width {\n\t\twidth: 95vw;\n\t}\n\t.toast_width {\n\t\tpadding: 0.425rem 1.1rem;\n\t}\n\t.toast_message {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tgap: 0rem 0.6rem;\n\t\tfont-size: 16px;\n\t\tline-height: 1.25rem;\n\t\tfont-weight: 500;\n\t\tletter-spacing: -0.4px;\n\t}\n\t.toast_width_confirm {\n\t\tpadding: 0.925rem 0.875rem;\n\t}\n\n\t/* footer */\n\t._footer {\n\t\twhite-space: break-spaces;\n\t\tdisplay: flex;\n\t\tborder-top-width: 1px;\n\t\tborder-top-style: solid;\n\t\tfont-weight: 400;\n\t\tfont-size: 13px;\n\t\tline-height: 1.1rem;\n\t\tpadding: 0.325rem 0.575rem;\n\t\tletter-spacing: -0.5px;\n\t}\n\n\t/* confirm toast component styles */\n\t.confirm_div {\n\t\tdisplay: flex;\n\t\tflex-direction: column-reverse;\n\t\talign-items: center;\n\t\tmargin-top: 0.75rem;\n\t\tcolor: #374151;\n\t\tfont-weight: 500;\n\t\trow-gap: 0.37rem;\n\t\tfont-size: 13.5px;\n\t\tline-height: 1.25rem;\n\t\twidth: 100%;\n\t}\n\n\t/* \n\t     \t\tthis css is being used in the InnerFooter component \n\t*/\n\t.innerFooter {\n\t\tfont-size: 13.5px;\n\t\tletter-spacing: -0.6px;\n\t\tpadding: 0.725rem 0rem;\n\t}\n}\n\n.toast_message {\n\tdisplay: flex;\n\tposition: relative;\n}\n\n/* Reset styles for <p> tags inside the .toast component */\np {\n\tmargin-block-start: 0;\n\tmargin-block-end: 0;\n\tmargin-inline-start: 0;\n\tmargin-inline-end: 0;\n\tunicode-bidi: initial;\n}\n",""]);const s=i},647:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"/* Default styles for buttons */\n.cancel_button,\n.confirm_button {\n\tfont-family: inherit;\n\twhite-space: nowrap;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tborder-radius: 0.375rem;\n\ttransition-duration: 300ms;\n\tfont-weight: 600;\n\tcursor: pointer;\n}\n\n/* Large devices */\n@media screen and (min-width: 1280px) and (max-width: 5120px) {\n\t.cancel_button {\n\t\tbackground-color: transparent;\n\t\tpadding: 0.25rem 1rem;\n\t}\n\n\t.confirm_button {\n\t\tpadding: 0.25rem 1rem;\n\t\tbox-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n\t}\n\n\t.closeDiv {\n\t\tright: -2rem;\n\t}\n}\n\n/* Medium devices */\n@media screen and (min-width: 768px) and (max-width: 1279px) {\n\t.cancel_button {\n\t\tbackground-color: transparent;\n\t\tpadding: 0.25rem 1rem;\n\t}\n\n\t.confirm_button {\n\t\tpadding: 0.25rem 1rem;\n\t\tbox-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n\t}\n\n\t.closeDiv {\n\t\tright: -2rem;\n\t}\n}\n\n/* Small devices */\n@media screen and (min-width: 481px) and (max-width: 767px) {\n\t.cancel_button {\n\t\tpadding: 0.4rem 1.5rem;\n\t\tfont-size: 0.875rem;\n\t\tbackground-color: transparent;\n\t\tline-height: 1.25rem;\n\t}\n\n\t.confirm_button {\n\t\tpadding: 0.4rem 1.5rem;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t\tbox-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n\t}\n\t.closeDiv {\n\t\tright: -2rem;\n\t}\n}\n\n/* Extra small devices */\n@media screen and (min-width: 120px) and (max-width: 480px) {\n\t.cancel_button {\n\t\tpadding: 0.35rem 0.5rem;\n\t\tborder-width: 1px;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\n\t\twidth: 100%;\n\t\tbackground-color: transparent;\n\t\tcolor: white;\n\t}\n\n\t.confirm_button {\n\t\tpadding: 0.35rem 0.5rem;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t\tbox-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n\t\twidth: 100%;\n\t}\n\t.closeDiv {\n\t\tright: -1.1rem;\n\t}\n}\n\n.confirm_button_white {\n\tbackground-color: #141318;\n\tcolor: #fff;\n\tborder: 1px solid #353244;\n}\n.confirm_button_dark {\n\tbackground-color: #fff;\n\tcolor: #1f2937;\n\tborder: 1px solid #d1d5db;\n}\n.cancel_button_dark {\n\tcolor: #1f2937;\n\tborder: 1px solid #d1d5db;\n}\n.cancel_button_all {\n\tcolor: #fff;\n\tborder: 1px solid #67656e;\n}\n\n/* cancel button glass */\n.cancel_button_glass {\n\tcolor: #ffffff;\n\tborder: 1px solid #ffffff;\n}\n\n/* \n\t     \t\tbelow css styles are being used in the InnerFooter \n\t\t\t\tcomponent's toast close button \n*/\n.closeDiv {\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\ttransition-duration: 300ms;\n}\n\n.div_flex {\n\tdisplay: flex;\n\tcursor: pointer;\n}\n.div_hidden {\n\tdisplay: none;\n}\n\n.inner_container .closeButton {\n\topacity: 0 !important;\n\tpadding: 0.25rem;\n\ttransition: opacity 150ms ease-in-out, scale 150ms ease-in-out;\n\tbackground-color: initial;\n\tborder: none;\n\toutline: none;\n}\n.closeButton:hover {\n\tscale: 1.05 !important;\n}\n.inner_container:hover .closeButton {\n\topacity: 1 !important;\n}\n\n/* \n\t     \t\tfor screen readers \n*/\n.sr_only {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tpadding: 0;\n\tmargin: -1px;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\twhite-space: nowrap;\n\tborder-width: 0;\n}\n",""]);const s=i},388:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,".box_shadow {\n\tbox-shadow: #00000009 0px 1px 2px, #00000009 0px 2px 4px, #00000009 0px 4px 8px, #00000009 0px 8px 16px,\n\t\t#00000009 0px 16px 24px, #00000010 0px 24px 32px;\n}\n.box_shadow_block {\n\tbox-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px,\n\t\trgba(0, 0, 0, 0.25) 0px -3px 0px inset;\n}\n\n.shadow_dark {\n\tbox-shadow: 0px 1px 0px 0px #00000065, 1px 0px 0px 0px #00000065, 1px 2px 0px 0px #00000065,\n\t\t2px 1px 0px 0px #00000065, 2px 3px 0px 0px #00000065, 3px 2px 0px 0px #00000065,\n\t\t3px 4px 0px 0px #00000065, 4px 3px 0px 0px #00000065, 4px 5px 0px 0px #00000065,\n\t\t5px 4px 0px 0px #00000065, 5px 6px 0px 0px #00000065, 6px 5px 0px 0px #000000d5;\n}\n.shadow_white {\n\tbox-shadow: 0px 1px 0px 0px #dddddda2, 1px 0px 0px 0px #dddddda2, 1px 2px 0px 0px #dddddda2,\n\t\t2px 1px 0px 0px #dddddda2, 2px 3px 0px 0px #dddddda2, 3px 2px 0px 0px #dddddda2,\n\t\t3px 4px 0px 0px #dddddda2, 4px 3px 0px 0px #dddddda2, 4px 5px 0px 0px #dddddda2,\n\t\t5px 4px 0px 0px #dddddda2, 5px 6px 0px 0px #dddddda2, 6px 5px 0px 0px #dddddda2;\n}\n.shadow_error {\n\tbox-shadow: 0px 1px 0px 0px #dc2626, 1px 0px 0px 0px #dc2626, 1px 2px 0px 0px #dc2626,\n\t\t2px 1px 0px 0px #dc2626, 2px 3px 0px 0px #dc2626, 3px 2px 0px 0px #dc2626, 3px 4px 0px 0px #dc2626,\n\t\t4px 3px 0px 0px #dc2626, 4px 5px 0px 0px #dc2626, 5px 4px 0px 0px #dc2626, 5px 6px 0px 0px #dc2626,\n\t\t6px 5px 0px 0px #dc2626;\n}\n.shadow_success {\n\tbox-shadow: 0px 1px 0px 0px #07bc0d, 1px 0px 0px 0px #07bc0d, 1px 2px 0px 0px #07bc0d,\n\t\t2px 1px 0px 0px #07bc0d, 2px 3px 0px 0px #07bc0d, 3px 2px 0px 0px #07bc0d, 3px 4px 0px 0px #07bc0d,\n\t\t4px 3px 0px 0px #07bc0d, 4px 5px 0px 0px #07bc0d, 5px 4px 0px 0px #07bc0d, 5px 6px 0px 0px #07bc0d,\n\t\t6px 5px 0px 0px #07bc0d;\n}\n.shadow_warning {\n\tbox-shadow: 0px 1px 0px 0px #edc319, 1px 0px 0px 0px #edc319, 1px 2px 0px 0px #edc319,\n\t\t2px 1px 0px 0px #edc319, 2px 3px 0px 0px #edc319, 3px 2px 0px 0px #edc319, 3px 4px 0px 0px #edc319,\n\t\t4px 3px 0px 0px #edc319, 4px 5px 0px 0px #edc319, 5px 4px 0px 0px #edc319, 5px 6px 0px 0px #edc319,\n\t\t6px 5px 0px 0px #edc319;\n}\n.shadow_info {\n\tbox-shadow: 0px 1px 0px 0px #2196f3, 1px 0px 0px 0px #2196f3, 1px 2px 0px 0px #2196f3,\n\t\t2px 1px 0px 0px #2196f3, 2px 3px 0px 0px #2196f3, 3px 2px 0px 0px #2196f3, 3px 4px 0px 0px #2196f3,\n\t\t4px 3px 0px 0px #2196f3, 4px 5px 0px 0px #2196f3, 5px 4px 0px 0px #2196f3, 5px 6px 0px 0px #2196f3,\n\t\t6px 5px 0px 0px #2196f3;\n}\n\n.shadow_around {\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);\n}\n",""]);const s=i},801:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"/* \n\t     \t\tskew css styles only applies to screens of 640px and up \n*/\n@media (min-width: 640px) {\n\t.right3 {\n\t\ttransform: skewX(-3deg);\n\t}\n\t.right6 {\n\t\ttransform: skewX(-6deg);\n\t}\n\t.right12 {\n\t\ttransform: skewX(-12deg);\n\t}\n}\n",""]);const s=i},463:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"/* \n\t     \t\ttoast text alignment for mobile screens \n*/\n.justify_end,\n.justify_start,\n.justify_center,\n.text_start,\n.text_end,\n.text_center {\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n/* \n\t     \t\ttoast text alignment from 640px and up \n*/\n@media (min-width: 640px) {\n\t.justify_end {\n\t\tjustify-content: end;\n\t\ttext-align: start;\n\t}\n\t.justify_start {\n\t\tjustify-content: flex-start;\n\t\ttext-align: end;\n\t}\n\t.justify_center {\n\t\tjustify-content: center;\n\t\ttext-align: center;\n\t}\n\n\t.text_start {\n\t\tjustify-content: flex-start;\n\t\ttext-align: start;\n\t}\n\t.text_end {\n\t\tjustify-content: flex-end;\n\t\ttext-align: end;\n\t}\n\t.text_center {\n\t\tjustify-content: center;\n\t\ttext-align: center;\n\t}\n}\n",""]);const s=i},5:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,".text_warning {\n\tcolor: #edc319;\n}\n.text_dark {\n\tcolor: #1f2937;\n}\n.text_white {\n\tcolor: white;\n}\n.text_darker {\n\tcolor: #131318;\n}\n.textWhite {\n\tcolor: #fff;\n}\n.text_error {\n\tcolor: #dc2626;\n}\n.text_success {\n\tcolor: #07bc0c;\n}\n.text_info {\n\tcolor: #007fff;\n}\n.textWarning {\n\tcolor: #bda74e;\n}\n@keyframes spin {\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.animate_spin {\n\tanimation: spin 1.2s linear infinite;\n}\n\n.rotate_deg {\n\ttransform: rotate(40deg);\n}\n.icon_only {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n}\n\n.footer_dark {\n\tcolor: #5e6a7a;\n\tborder-top-color: #4b556380;\n}\n.footer_white {\n\tcolor: #6b7280;\n\tborder-top-color: #9ca3af99;\n}\n.footer_info {\n\tcolor: #d1d5db;\n\tborder-top-color: #e5e7eb99;\n}\n.footer_error {\n\tcolor: #d1d5db;\n\tborder-top-color: #9ca3af99;\n}\n.footer_success {\n\tcolor: #ebebeb;\n\tborder-top-color: #ffffff99;\n}\n",""]);const s=i},423:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,'body,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n}\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/* \n\t     \t\ttoast position for small screens \n*/\n.top {\n\tjustify-content: center;\n\tleft: 0;\n\ttop: 1rem;\n}\n.topLeft {\n\tleft: 0rem;\n\ttop: 1rem;\n\tjustify-content: center;\n}\n.topRight {\n\tright: 0rem;\n\tjustify-content: center;\n\ttop: 1rem;\n}\n\n.middle {\n\tposition: absolute;\n\tinset: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.bottom {\n\tjustify-content: center;\n\tleft: 0;\n\tbottom: 1rem;\n}\n.bottomLeft {\n\tleft: 0rem;\n\tjustify-content: center;\n\tbottom: 1rem;\n}\n.bottomRight {\n\tjustify-content: center;\n\tright: 0rem;\n\tbottom: 1rem;\n}\n\n.topFull,\n.bottomFull {\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tleft: 0;\n}\n\n.topFull {\n\ttop: 0;\n}\n\n.bottomFull {\n\tbottom: 0;\n}\n\n/* \n\t     \t\ttoast position from 640px and up \n*/\n@media (min-width: 640px) {\n\t.top {\n\t\tjustify-content: center;\n\t\tleft: auto;\n\t\tright: 0;\n\t\ttop: 1.25rem;\n\t}\n\t.topLeft {\n\t\tjustify-content: flex-start;\n\t\tleft: 1.25rem;\n\t\ttop: 1.25rem;\n\t}\n\t.topRight {\n\t\tjustify-content: flex-end;\n\t\tright: 1.25rem;\n\t\ttop: 1.25rem;\n\t}\n\n\t.bottom {\n\t\tjustify-content: center;\n\t\tleft: auto;\n\t\tright: 0;\n\t\tbottom: 1.25rem;\n\t}\n\t.bottomLeft {\n\t\tjustify-content: flex-start;\n\t\tleft: 1.25rem;\n\t\tbottom: 1.25rem;\n\t}\n\t.bottomRight {\n\t\tjustify-content: flex-end;\n\t\tright: 1.25rem;\n\t\tbottom: 1.25rem;\n\t}\n\n\t.topFull {\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\ttop: 0;\n\t\twidth: 100%;\n\t}\n\t.bottomFull {\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbottom: 0;\n\t\twidth: 100%;\n\t}\n}\n\n/* \n\t\t\t\tthis css style is used when the toast is using full width \n\t\t\t\t"bottomFull" ||"topFull" \n*/\n.toast_width_full {\n\twidth: 100vw;\n\tpadding: 0.125rem 1.5rem;\n}\n',""]);const s=i},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var f=e(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(m);else{var u=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=r(t,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},953:t=>{t.exports=require("react")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.nc=void 0;var r={};(()=>{e.r(r),e.d(r,{ToastProvider:()=>at,useToast:()=>ot});var t=e(953),n=e.n(t);const o=(...t)=>t.filter(((t,n,e)=>Boolean(t)&&e.indexOf(t)===n)).join(" ");var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(0,t.forwardRef)((({color:n="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:s="",children:c,iconNode:d,...l},p)=>(0,t.createElement)("svg",{ref:p,...a,width:e,height:e,stroke:n,strokeWidth:i?24*Number(r)/Number(e):r,className:o("lucide",s),...l},[...d.map((([n,e])=>(0,t.createElement)(n,e))),...Array.isArray(c)?c:[c]]))),s=(n,e)=>{const r=(0,t.forwardRef)((({className:r,...a},s)=>{return(0,t.createElement)(i,{ref:s,iconNode:e,className:o(`lucide-${c=n,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...a});var c}));return r.displayName=`${n}`,r},c=s("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]),d=s("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),l=s("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]),p=s("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),f=s("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]),m=s("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var u=e(72),x=e.n(u),h=e(825),g=e.n(h),_=e(659),b=e.n(_),w=e(56),y=e.n(w),v=e(540),k=e.n(v),A=e(113),E=e.n(A),S=e(743),j={};j.styleTagTransform=E(),j.setAttributes=y(),j.insert=b().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=k(),x()(S.A,j),S.A&&S.A.locals&&S.A.locals;var D=e(909),T={};T.styleTagTransform=E(),T.setAttributes=y(),T.insert=b().bind(null,"head"),T.domAPI=g(),T.insertStyleElement=k(),x()(D.A,T),D.A&&D.A.locals&&D.A.locals;var F=e(647),z={};z.styleTagTransform=E(),z.setAttributes=y(),z.insert=b().bind(null,"head"),z.domAPI=g(),z.insertStyleElement=k(),x()(F.A,z),F.A&&F.A.locals&&F.A.locals;var N=e(388),W={};W.styleTagTransform=E(),W.setAttributes=y(),W.insert=b().bind(null,"head"),W.domAPI=g(),W.insertStyleElement=k(),x()(N.A,W),N.A&&N.A.locals&&N.A.locals;var M=e(463),I={};I.styleTagTransform=E(),I.setAttributes=y(),I.insert=b().bind(null,"head"),I.domAPI=g(),I.insertStyleElement=k(),x()(M.A,I),M.A&&M.A.locals&&M.A.locals;var C=e(5),P={};P.styleTagTransform=E(),P.setAttributes=y(),P.insert=b().bind(null,"head"),P.domAPI=g(),P.insertStyleElement=k(),x()(C.A,P),C.A&&C.A.locals&&C.A.locals;var L=e(423),X={};X.styleTagTransform=E(),X.setAttributes=y(),X.insert=b().bind(null,"head"),X.domAPI=g(),X.insertStyleElement=k(),x()(L.A,X),L.A&&L.A.locals&&L.A.locals;var R=e(290),B={};B.styleTagTransform=E(),B.setAttributes=y(),B.insert=b().bind(null,"head"),B.domAPI=g(),B.insertStyleElement=k(),x()(R.A,B),R.A&&R.A.locals&&R.A.locals;var O=e(175),Y={};Y.styleTagTransform=E(),Y.setAttributes=y(),Y.insert=b().bind(null,"head"),Y.domAPI=g(),Y.insertStyleElement=k(),x()(O.A,Y),O.A&&O.A.locals&&O.A.locals;var q=e(801),G={};G.styleTagTransform=E(),G.setAttributes=y(),G.insert=b().bind(null,"head"),G.domAPI=g(),G.insertStyleElement=k(),x()(q.A,G),q.A&&q.A.locals&&q.A.locals;var $=e(953),H={dark:"footer_dark",warning:"footer_dark",white:"footer_white",info:"footer_info",error:"footer_error",success:"footer_success",gray:"footer_success",glass:"footer_success",transparent:"footer_success"};const U=function(t){var n=t.footer,e=t.toastAlignment,r=t.toastBG;return $.createElement("div",{className:"_footer toast_width ".concat(e," ").concat(H[r])},n)};var Z=e(953),J={dark:"footer_dark",warning:"footer_dark",white:"footer_white",info:"footer_info",error:"footer_error",success:"footer_success",gray:"footer_success",glass:"footer_success",transparent:"footer_success"};const V=function(t){var n=t.footer,e=t.toastAlignment,r=t.toastBG;return Z.createElement("div",{className:"innerFooter ".concat(e," ").concat(J[r])},n)};var K=e(953),Q={dark:"footer_dark",warning:"footer_dark",white:"footer_white",info:"footer_info",error:"footer_error",success:"footer_success",gray:"footer_success",glass:"footer_success",transparent:"footer_success"};const tt=function(t){var n=t.toastAlignment,e=t.toastBG,r=t.loadFooter;return K.createElement("div",{className:"_footer toast_width reveal_ani ".concat(n," ").concat(Q[e])},r)};function nt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a,i,s=[],c=!0,d=!1;try{if(a=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=a.call(e)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(t){d=!0,o=t}finally{try{if(!c&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(d)throw o}}return s}}(t,n)||function(t,n){if(t){if("string"==typeof t)return et(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?et(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var rt=(0,t.createContext)(),ot=function(){return(0,t.useContext)(rt)},at=function(e){var r=e.children,o=nt((0,t.useState)(""),2),a=o[0],i=o[1],s=nt((0,t.useState)(""),2),u=s[0],x=s[1],h=nt((0,t.useState)(null),2),g=h[0],_=h[1],b=nt((0,t.useState)(null),2),w=b[0],y=b[1],v=nt((0,t.useState)(!0),2),k=v[0],A=v[1],E=nt((0,t.useState)(null),2),S=E[0],j=E[1],D=nt((0,t.useState)(""),2),T=D[0],F=D[1],z=nt((0,t.useState)(""),2),N=z[0],W=z[1],M=nt((0,t.useState)(""),2),I=M[0],C=M[1],P=nt((0,t.useState)(""),2),L=P[0],X=P[1],R=nt((0,t.useState)(""),2),B=R[0],O=R[1],Y=nt((0,t.useState)(""),2),q=Y[0],G=Y[1],$=nt((0,t.useState)(""),2),H=$[0],Z=$[1],J=nt((0,t.useState)(!1),2),K=J[0],Q=J[1],et=nt((0,t.useState)(null),2),ot=et[0],at=et[1],it=nt((0,t.useState)(!1),2),st=it[0],ct=it[1],dt=nt((0,t.useState)(null),2),lt=dt[0],pt=dt[1],ft=(0,t.useRef)(null),mt={success:"bg_success",error:"bg_error",warning:"bg_warning",info:"bg_info",glass:"bg_glass",white:"bg_white",dark:"bg_dark",gray:"bg_gray",transparent:"bg_transparent"},ut={top:"top",topFull:"topFull",topLeft:"topLeft",topRight:"topRight",bottom:"bottom",bottomFull:"bottomFull",bottomLeft:"bottomLeft",bottomRight:"bottomRight",center:"middle"},xt={down:"ani_down",top:"ani_top",left:"ani_left",right:"ani_right",fade:"ani_fade",zoom:"ani_zoom",jelly:"ani_jelly"},ht={left:"text_start",right:"text_end",center:"text_center"},gt={three:"right3",six:"right6",twelve:"right12"},_t={none:"",gray:"box_shadow",block:"box_shadow_block",error:"shadow_error",white:"shadow_white",dark:"shadow_dark",success:"shadow_success",info:"shadow_info",warning:"shadow_warning",around:"shadow_around"},bt={none:"rounded_none",sm:"rounded_sm",md:"rounded_md",lg:"rounded_lg",xl:"rounded_xl",twoXl:"rounded_2xl",full:"rounded_full"},wt=Object.keys(ut).find((function(t){return ut[t]===N})),yt=Object.keys(mt).find((function(t){return mt[t]===T})),vt=function(t,n){var e;switch(t){case"ani_top":e="ani_slide_out_up";break;case"ani_down":e="ani_slide_out_down";break;case"ani_left":e="ani_slide_out_left";break;case"ani_right":e="ani_slide_out_right";break;case"ani_jelly":e="ani_jelly_out";break;case"ani_zoom":e="ani_zoom_out";break;default:e="ani_fade_out"}return"bottomFull"!==n&&"topFull"!==n||(e="ani_fade_out_full"),e}(L,wt),kt=function(){X(vt);var t=setTimeout((function(){i(""),x(""),clearTimeout(w),X("")}),300);return function(){return clearTimeout(t)}};(0,t.useEffect)((function(){"loading"===a||"loadingWhite"===a||"loadingDark"===a?(A(!1),setTimeout((function(){return A(!0)}),5e3)):A(!0)}),[a]),(0,t.useEffect)((function(){var t=function(t){"Escape"===t.key&&kt()};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),(0,t.useEffect)((function(){"confirm"!==a&&"confirmDark"!==a||ft.current.focus()}),[a]);var At=new Proxy({},{get:function(t,e){switch(e){case"success":case"successWhite":case"successDark":return n().createElement(c,null);case"error":case"errorWhite":case"errorDark":return n().createElement(d,null);case"loading":case"loadingWhite":case"loadingDark":return n().createElement(l,{className:"animate_spin"});case"warning":case"warningWhite":case"warningDark":case"warningStay":case"warningStayWhite":case"warningStayDark":return n().createElement(p,null);case"info":case"infoWhite":case"infoDark":case"infoStay":case"infoStayWhite":case"infoStayDark":return n().createElement(f,{className:"rotate_deg"});default:return}}}),Et=new Set(["confirm","confirmWhite","confirmDark","infoStay","infoStayWhite","infoStayDark","loading","loadingWhite","loadingDark","warningStay","warningStayWhite","warningStayDark"]);return(0,t.useEffect)((function(){Q("confirm"===a||"confirmDark"===a)}),[a]),n().createElement(rt.Provider,{value:{toastMaster:function(t){return w&&clearTimeout(w),new Promise((function(n){X(vt);var e=function(){!function(t,n){var e=t.type,r=void 0===e?"success":e,o=t.message,a=void 0===o?"":o,s=t.bg,c=void 0===s?"white":s,d=t.position,l=void 0===d?"top":d,p=t.transition,f=void 0===p?"zoom":p,m=t.loadFooter,u=void 0===m?null:m,h=t.footer,g=void 0===h?null:h,b=t.skew,w=void 0===b?"":b,v=t.cancelButton,k=void 0===v||v,A=t.shadow,E=void 0===A?"gray":A,S=t.radius,D=void 0===S?"lg":S,T=t.align,z=void 0===T?"center":T;i(r),x(a),pt(u),at(g),j(k);var N=ut[l]||"",M=xt[f]||"",I=gt[w]||"",P=_t[E]||"",L=bt[D]||"",R=ht[z]||"";if(F(mt[c]||""),W(N),X(M),C(I),O(P),G(L),Z(R),"success"!==r&&"successWhite"!==r&&"successDark"!==r&&"error"!==r&&"errorWhite"!==r&&"errorDark"!==r&&"warning"!==r&&"warningWhite"!==r&&"warningDark"!==r&&"info"!==r&&"infoWhite"!==r&&"infoDark"!==r&&"basic"!==r&&"basicDark"!==r||y(setTimeout((function(){return kt()}),4500)),"confirm"!==r&&"confirmDark"!==r||_((function(){return n})),"loading"!==r&&"loadingWhite"!==r&&"loadingDark"!==r||(ct(!1),setTimeout((function(){return ct(!0)}),5330)),"loading"===r||"loadingWhite"===r||"loadingDark"===r)i(""),x(""),pt(""),at(""),j(!1),setTimeout((function(){i(r),x(a),pt(u),at(g),j(k)}),330)}(t,n)};a?setTimeout(e,300):e()}))},hideToast:kt}},n().createElement(n().Fragment,null,r,a&&n().createElement(n().Fragment,null,("confirm"===a||"confirmDark"===a)&&n().createElement("div",{className:"overlay ".concat(K?"show":"")}),n().createElement("div",{className:"outer_container ".concat(N," ").concat(L),style:{zIndex:"9999"}},n().createElement("div",{className:"inner_container ".concat("bottomFull"===wt||"topFull"===wt?"toast_width_full":"max_width"," ").concat({success:"text_success",error:"text_error",loading:"text_warning",warning:"text_warning",warningStay:"text_warning",info:"text_info",infoStay:"text_info",confirm:"text_white",basic:"text_white",successWhite:"text_white",errorWhite:"text_white",loadingWhite:"text_white",warningWhite:"text_white",warningStayWhite:"text_white",infoWhite:"text_white",infoStayWhite:"text_white",successDark:"text_dark",errorDark:"text_dark",loadingDark:"text_dark",warningDark:"text_dark",warningStayDark:"text_dark",infoDark:"text_dark",infoStayDark:"text_dark ",confirmDark:"text_dark ",basicDark:"text_dark "}[a]," ").concat(T," ").concat(I," ").concat(B," ").concat(q),onMouseEnter:function(){Et.has(a)||clearTimeout(w)},onMouseLeave:function(){Et.has(a)||y(setTimeout(kt,1500))}},n().createElement("div",{className:"".concat("confirm"===a||"confirmDark"===a?"toast_width_confirm":"toast_width")},n().createElement("div",{className:"toast_message ".concat(H)},"confirm"!==a&&"confirmDark"!==a&&"basic"!==a&&"basicDark"!==a&&n().createElement("div",null,n().createElement("span",{className:"sr_only"},"toast icon"),n().createElement("span",{"aria-hidden":"true"},At[a])),n().createElement(n().Fragment,null,u),n().createElement("div",{className:"closeDiv ".concat(k&&S&&"confirm"!==a&&"confirmDark"!==a?"div_flex":"div_hidden")},n().createElement(n().Fragment,null,n().createElement("button",{onClick:kt,id:"close",className:"closeButton \n\t\t\t\t\t\t\t\t\t\t\t\t\t".concat("white"===yt?"bg_whiter":"glass"===yt||"transparent"===yt?"bg_glass_close":"bg_darker")},n().createElement("span",{className:"sr_only"},"close toast"),n().createElement(m,{"aria-hidden":"true",size:18}))))),["confirm","confirmDark"].includes(a)&&ot&&n().createElement(V,{footer:ot,toastBG:yt,toastAlignment:H,toastType:a}),n().createElement(n().Fragment,null,("confirm"===a||"confirmDark"===a)&&n().createElement("div",{className:"confirm_div  \n\t\t\t\t\t\t\t\t\t\t\t\t".concat("text_start"===H?"justify_end":"text_end"===H?"justify_start":"text_center"===H?"justify_center":null,"\n\t\t\t\t\t\t\t\t\t\t\t")},n().createElement("button",{className:"cancel_button ".concat("white"===yt?"cancel_button_dark":"success"===yt||"warning"===yt||"error"===yt||"info"===yt||"dark"===yt?"cancel_button_all":"cancel_button_glass"),onClick:function(){g&&g(!1),kt(),Q(!1)}},n().createElement("span",{className:"sr_only"},"close toast"),"Cancel"),n().createElement("button",{ref:ft,className:"confirm_button\n\t\t\t\t\t\t\t\t\t\t\t\t\t".concat("dark"===yt?"confirm_button_dark":"confirm_button_white"),onClick:function(){X(vt);var t=setTimeout((function(){g&&g(!0),X(""),kt(),Q(!1)}),330);return function(){return clearTimeout(t)}}},n().createElement("span",{className:"sr_only"},"confirm action"),"Confirm")))),n().createElement(n().Fragment,null,!("confirmDark"===a||"confirm"===a||"bottomFull"===wt||"topFull"===wt)&&n().createElement("div",null,ot&&n().createElement(U,{footer:ot,toastBG:yt,toastAlignment:H})),!("bottomFull"===wt||"topFull"===wt||"confirmDark"===a||"confirm"===a)&&st&&lt&&n().createElement(tt,{toastAlignment:H,toastBG:yt,loadFooter:lt})))))))}})(),module.exports=r})();